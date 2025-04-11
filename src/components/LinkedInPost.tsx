
import React from 'react';
import { Calendar, Heart, MessageSquare, Share2 } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface PostType {
  id: number;
  title: string;
  date: string;
  content: string;
  likes: number;
  comments: number;
  shares: number;
  category: string;
  image?: string;
}

interface LinkedInPostProps {
  post: PostType;
}

export const LinkedInPost: React.FC<LinkedInPostProps> = ({ post }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-bold">{post.title}</CardTitle>
            <CardDescription className="flex items-center mt-1 text-sm text-gray-500 dark:text-gray-400">
              <Calendar className="w-4 h-4 mr-1" />
              {post.date}
            </CardDescription>
          </div>
          <Badge variant="outline" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
            {post.category}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{post.content}</p>
        {post.image && (
          <div className="relative w-full h-64 mb-4 overflow-hidden rounded-md">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
            />
          </div>
        )}
      </CardContent>
      
      <CardFooter className="flex justify-between border-t pt-4">
        <div className="flex space-x-4">
          <Button variant="ghost" size="sm" className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
            <Heart className="w-4 h-4" />
            <span>{post.likes}</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
            <MessageSquare className="w-4 h-4" />
            <span>{post.comments}</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
            <Share2 className="w-4 h-4" />
            <span>{post.shares}</span>
          </Button>
        </div>
        <Button variant="outline" className="text-indigo-600 dark:text-indigo-400 border-indigo-600 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20">
          Voir sur LinkedIn
        </Button>
      </CardFooter>
    </Card>
  );
};
