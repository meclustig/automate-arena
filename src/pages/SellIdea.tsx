import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Upload, X, Plus, DollarSign, Eye, Shield } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SellIdea = () => {
  const navigate = useNavigate();
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");
  const [files, setFiles] = useState<File[]>([]);

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);
    setFiles([...files, ...selectedFiles]);
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sell Your <span className="gradient-primary bg-clip-text text-transparent">Brilliant Idea</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Turn your intellectual property into cash. List your idea and connect with buyers worldwide.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Basic Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="h-5 w-5" />
                    Basic Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="title">Idea Title *</Label>
                    <Input 
                      id="title" 
                      placeholder="Enter a compelling title for your idea"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="category">Category *</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="saas">SaaS Automation</SelectItem>
                        <SelectItem value="film">Film Plot</SelectItem>
                        <SelectItem value="business">Business Concept</SelectItem>
                        <SelectItem value="software">Software Idea</SelectItem>
                        <SelectItem value="marketing">Marketing Strategy</SelectItem>
                        <SelectItem value="patent">Company Rights</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="description">Description *</Label>
                    <Textarea 
                      id="description"
                      placeholder="Provide a detailed description of your idea. What problem does it solve? How does it work?"
                      className="mt-1 min-h-32"
                    />
                  </div>

                  <div>
                    <Label htmlFor="level">Experience Level Required</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="expert">Expert</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Tags */}
              <Card>
                <CardHeader>
                  <CardTitle>Tags</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Add relevant tags"
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && addTag()}
                      />
                      <Button onClick={addTag} variant="outline">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                          {tag}
                          <X 
                            className="h-3 w-3 cursor-pointer" 
                            onClick={() => removeTag(tag)}
                          />
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Files & Documentation */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Upload className="h-5 w-5" />
                    Supporting Materials
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground mb-2">
                        Upload documents, images, or other supporting materials
                      </p>
                      <input
                        type="file"
                        multiple
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-upload"
                      />
                      <Button variant="outline" asChild>
                        <label htmlFor="file-upload" className="cursor-pointer">
                          Choose Files
                        </label>
                      </Button>
                    </div>

                    {files.length > 0 && (
                      <div className="space-y-2">
                        {files.map((file, index) => (
                          <div key={index} className="flex items-center justify-between p-2 bg-muted rounded">
                            <span className="text-sm">{file.name}</span>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => removeFile(index)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Pricing & Terms */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    Pricing & Terms
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="price">Price (USD) *</Label>
                    <Input 
                      id="price" 
                      type="number"
                      placeholder="10000"
                      className="mt-1"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Set a competitive price. You can always negotiate with buyers.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Label>Licensing Options</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="exclusive" />
                        <label htmlFor="exclusive" className="text-sm">
                          Exclusive Rights (buyer gets full ownership)
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="non-exclusive" />
                        <label htmlFor="non-exclusive" className="text-sm">
                          Non-exclusive License (you can sell to multiple buyers)
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="negotiable" />
                        <label htmlFor="negotiable" className="text-sm">
                          Open to negotiation
                        </label>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Submit */}
              <div className="flex gap-4">
                <Button size="lg" className="flex-1">
                  Publish Idea
                </Button>
                <Button size="lg" variant="outline">
                  Save Draft
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Tips */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">💡 Tips for Success</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-medium">Write a compelling title</h4>
                    <p className="text-muted-foreground">Make it clear and specific to attract the right buyers.</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Provide detailed descriptions</h4>
                    <p className="text-muted-foreground">Explain the problem, solution, and potential market.</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Price competitively</h4>
                    <p className="text-muted-foreground">Research similar ideas to set the right price.</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Add supporting materials</h4>
                    <p className="text-muted-foreground">Mockups, research, and documentation increase value.</p>
                  </div>
                </CardContent>
              </Card>

              {/* Security */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Your IP is Protected
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">All previews are watermarked</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">NDAs required before full disclosure</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Secure escrow payment system</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Legal contract templates</p>
                  </div>
                </CardContent>
              </Card>

              {/* Pricing Guide */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">💰 Pricing Guide</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>
                    <div className="flex justify-between">
                      <span>Basic Concepts</span>
                      <span className="text-muted-foreground">$1k - $10k</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <span>Detailed Plans</span>
                      <span className="text-muted-foreground">$10k - $25k</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <span>Complete Solutions</span>
                      <span className="text-muted-foreground">$25k - $100k+</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SellIdea;