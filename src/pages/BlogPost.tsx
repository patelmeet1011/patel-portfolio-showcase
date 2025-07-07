import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, User, Share2, Tag } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();

  const blogPosts = {
    "data-analytics-trends-2024": {
      title: "Top 5 Data Analytics Trends Transforming Business Intelligence in 2024",
      content: "# Top 5 Data Analytics Trends Transforming Business Intelligence in 2024\n\nThe world of data analytics is evolving rapidly...",
      author: "Meet Patel",
      publishDate: "2024-07-05",
      readTime: "8 min read",
      category: "Data Analytics",
      tags: ["AI", "Business Intelligence", "Trends"],
      featuredImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
    }
  };

  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <Link to="/blog">
            <Button variant="ghost" className="hover-scale">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </header>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Badge className="bg-primary/10 text-primary mb-4">{post.category}</Badge>
          <h1 className="text-4xl font-bold text-foreground mb-6">{post.title}</h1>
          
          <div className="flex items-center gap-6 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{new Date(post.publishDate).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="flex gap-2 mb-8">
            {post.tags.map((tag, index) => (
              <Badge key={index} variant="outline">
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>

          <img 
            src={post.featuredImage} 
            alt={post.title}
            className="w-full h-64 object-cover rounded-2xl shadow-2xl mb-12"
          />

          <Card className="p-8">
            <article className="prose prose-lg max-w-none">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </article>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;