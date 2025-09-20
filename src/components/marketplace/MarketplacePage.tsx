import { useState, useEffect } from 'react'
import { supabase, Idea } from '@/lib/supabase'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Search, Eye, Star, MessageSquare } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { useAuth } from '@/contexts/AuthContext'
import { ContactSellerModal } from './ContactSellerModal'

export const MarketplacePage = () => {
  const { user } = useAuth()
  const [ideas, setIdeas] = useState<Idea[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedLevel, setSelectedLevel] = useState<string>('all')
  const [sortBy, setSortBy] = useState<string>('newest')
  const [selectedIdea, setSelectedIdea] = useState<Idea | null>(null)
  const [showContactModal, setShowContactModal] = useState(false)
  const { toast } = useToast()

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'saas_automation', label: 'SaaS Automation' },
    { value: 'film_plot', label: 'Film Plots' },
    { value: 'business_concept', label: 'Business Concepts' },
    { value: 'company_rights', label: 'Company Rights' },
    { value: 'software_idea', label: 'Software Ideas' },
    { value: 'marketing_strategy', label: 'Marketing Strategy' },
  ]

  const levels = [
    { value: 'all', label: 'All Levels' },
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'expert', label: 'Expert' },
  ]

  const fetchIdeas = async () => {
    try {
      let query = supabase
        .from('ideas')
        .select(`
          *,
          profiles (
            id,
            full_name,
            username,
            avatar_url,
            is_verified
          )
        `)
        .eq('status', 'published')

      // Apply filters
      if (selectedCategory !== 'all') {
        query = query.eq('category', selectedCategory)
      }
      
      if (selectedLevel !== 'all') {
        query = query.eq('complexity_level', selectedLevel)
      }

      if (searchTerm) {
        query = query.or(`title.ilike.%${searchTerm}%,description.ilike.%${searchTerm}%`)
      }

      // Apply sorting
      switch (sortBy) {
        case 'newest':
          query = query.order('created_at', { ascending: false })
          break
        case 'oldest':
          query = query.order('created_at', { ascending: true })
          break
        case 'price_low':
          query = query.order('price', { ascending: true })
          break
        case 'price_high':
          query = query.order('price', { ascending: false })
          break
        case 'popular':
          query = query.order('views', { ascending: false })
          break
      }

      const { data, error } = await query

      if (error) throw error

      setIdeas(data || [])
    } catch (error: any) {
      toast({
        title: 'Error',
        description: 'Failed to fetch ideas',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchIdeas()
  }, [selectedCategory, selectedLevel, searchTerm, sortBy])

  const handleViewIdea = async (ideaId: string) => {
    // Increment view count
    await supabase
      .from('ideas')
      .update({ views: (ideas.find(idea => idea.id === ideaId)?.views || 0) + 1 })
      .eq('id', ideaId)
    
    // Refresh ideas to show updated view count
    fetchIdeas()
  }

  const handleContactSeller = (idea: Idea) => {
    if (!user) {
      toast({
        title: 'Please sign in',
        description: 'You need to be signed in to contact sellers.',
        variant: 'destructive',
      })
      return
    }

    if (user.id === idea.seller_id) {
      toast({
        title: 'Cannot contact yourself',
        description: 'You cannot contact yourself about your own idea.',
        variant: 'destructive',
      })
      return
    }

    setSelectedIdea(idea)
    setShowContactModal(true)
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">Loading marketplace...</div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Marketplace</h1>
        <p className="text-muted-foreground">
          Discover breakthrough ideas from verified innovators worldwide
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col lg:flex-row gap-4 mb-8">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search ideas, concepts, automations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Filters */}
        <div className="flex gap-2">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedLevel} onValueChange={setSelectedLevel}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Level" />
            </SelectTrigger>
            <SelectContent>
              {levels.map((level) => (
                <SelectItem key={level.value} value={level.value}>
                  {level.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
              <SelectItem value="price_low">Price: Low to High</SelectItem>
              <SelectItem value="price_high">Price: High to Low</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Results */}
      <div className="mb-4">
        <p className="text-muted-foreground">
          {ideas.length} idea{ideas.length !== 1 ? 's' : ''} found
        </p>
      </div>

      {/* Ideas Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ideas.map((idea) => (
          <Card key={idea.id} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="space-y-4">
              <div className="flex items-start justify-between">
                <Badge variant={idea.complexity_level === 'expert' ? 'default' : 'outline'}>
                  {idea.category.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </Badge>
                {idea.featured && (
                  <Badge className="gradient-primary text-white border-0">
                    Featured
                  </Badge>
                )}
              </div>
              <h3 className="text-xl font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                {idea.title}
              </h3>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                {idea.description}
              </p>
              
              <div className="flex flex-wrap gap-1">
                {idea.tags?.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs px-2 py-1">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  <span>{idea.views || 0}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>by {idea.profiles?.full_name || idea.profiles?.username}</span>
                  {idea.profiles?.is_verified && (
                    <Badge variant="outline" className="text-xs">Verified</Badge>
                  )}
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex items-center justify-between pt-4">
              <div className="text-2xl font-bold text-primary">
                ${idea.price.toLocaleString()}
                {idea.is_negotiable && (
                  <span className="text-sm font-normal text-muted-foreground ml-1">
                    negotiable
                  </span>
                )}
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleViewIdea(idea.id)}
                  className="group-hover:bg-muted transition-all"
                >
                  View Details
                </Button>
                <Button 
                  size="sm" 
                  onClick={() => handleContactSeller(idea)}
                  className="bg-primary hover:bg-primary/90"
                >
                  <MessageSquare className="h-4 w-4 mr-1" />
                  Contact
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {ideas.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No ideas found matching your criteria.</p>
          <Button variant="outline" onClick={() => {
            setSearchTerm('')
            setSelectedCategory('all')
            setSelectedLevel('all')
          }} className="mt-4">
            Clear Filters
          </Button>
        </div>
      )}

      <ContactSellerModal
        open={showContactModal}
        onOpenChange={setShowContactModal}
        idea={selectedIdea}
      />
    </div>
  )
}