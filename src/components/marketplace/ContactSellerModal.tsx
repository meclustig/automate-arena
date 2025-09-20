import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { useAuth } from '@/contexts/AuthContext'
import { supabase, Idea } from '@/lib/supabase'
import { useToast } from '@/hooks/use-toast'
import { Loader2, MessageSquare } from 'lucide-react'

interface ContactSellerModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  idea: Idea | null
}

export const ContactSellerModal = ({ open, onOpenChange, idea }: ContactSellerModalProps) => {
  const { user } = useAuth()
  const { toast } = useToast()
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSendMessage = async () => {
    if (!user || !idea || !message.trim()) return

    setLoading(true)

    try {
      // First, create or find existing conversation
      let conversationId: string

      const { data: existingConv, error: convError } = await supabase
        .from('conversations')
        .select('id')
        .or(`and(participant_1.eq.${user.id},participant_2.eq.${idea.seller_id}),and(participant_1.eq.${idea.seller_id},participant_2.eq.${user.id})`)
        .eq('idea_id', idea.id)
        .single()

      if (existingConv) {
        conversationId = existingConv.id
      } else {
        // Create new conversation
        const { data: newConv, error: newConvError } = await supabase
          .from('conversations')
          .insert({
            participant_1: user.id,
            participant_2: idea.seller_id,
            idea_id: idea.id,
            last_message: message.trim(),
            last_message_at: new Date().toISOString()
          })
          .select('id')
          .single()

        if (newConvError) throw newConvError
        conversationId = newConv.id
      }

      // Send the message
      const { error: messageError } = await supabase
        .from('messages')
        .insert({
          content: message.trim(),
          sender_id: user.id,
          receiver_id: idea.seller_id,
          conversation_id: conversationId,
          idea_id: idea.id
        })

      if (messageError) throw messageError

      // Update conversation with latest message
      await supabase
        .from('conversations')
        .update({
          last_message: message.trim(),
          last_message_at: new Date().toISOString()
        })
        .eq('id', conversationId)

      toast({
        title: 'Message sent!',
        description: 'Your message has been sent to the seller.',
      })

      setMessage('')
      onOpenChange(false)
    } catch (error: any) {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again.',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  if (!idea) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Contact Seller
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Seller Info */}
          <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
            <Avatar className="h-12 w-12">
              <AvatarImage src={idea.profiles?.avatar_url || ''} />
              <AvatarFallback>
                {idea.profiles?.full_name?.charAt(0) || idea.profiles?.username?.charAt(0) || '?'}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="font-semibold">
                {idea.profiles?.full_name || idea.profiles?.username}
              </h3>
              {idea.profiles?.is_verified && (
                <Badge variant="outline" className="text-xs">Verified Seller</Badge>
              )}
            </div>
          </div>

          {/* Idea Reference */}
          <div className="p-3 border rounded-lg">
            <h4 className="font-medium text-sm text-muted-foreground">About this idea:</h4>
            <p className="font-semibold line-clamp-2">{idea.title}</p>
            <p className="text-sm text-muted-foreground mt-1">
              ${idea.price.toLocaleString()}{idea.is_negotiable ? ' (negotiable)' : ''}
            </p>
          </div>

          {/* Message Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Your message</label>
            <Textarea
              placeholder="Hi! I'm interested in your idea and would like to discuss..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
            />
          </div>

          {/* Actions */}
          <div className="flex gap-2 pt-2">
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSendMessage}
              disabled={!message.trim() || loading}
              className="flex-1"
            >
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Send Message
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}