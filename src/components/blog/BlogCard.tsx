import React from 'react';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import type { BlogPost } from '../../data/blogPosts';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-black rounded-xl overflow-hidden shadow-lg transition-all hover:-translate-y-1 duration-300 h-full flex flex-col">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={post.image}
          alt={post.title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4 md:p-6 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.category.split(' & ').map((cat, index) => (
            <span key={index} className="px-2 md:px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs md:text-sm">
              {cat}
            </span>
          ))}
        </div>
        <h3 className="text-lg md:text-xl font-bold text-white mb-3 hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-2 text-sm md:text-base flex-grow">
          {post.excerpt}
        </p>
        <div className="flex items-center text-xs md:text-sm text-gray-400 mb-4 flex-wrap gap-y-2">
          <User className="w-4 h-4 mr-2" />
          <span className="mr-4">{post.author}</span>
          <Calendar className="w-4 h-4 mr-2" />
          <span>{post.date}</span>
        </div>
        <button className="inline-flex items-center text-primary hover:text-primary-light transition-colors text-sm md:text-base">
          Read More
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </article>
  );
}