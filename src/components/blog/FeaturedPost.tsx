import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { BlogPost } from '../../data/blogPosts';

interface FeaturedPostProps {
  post: BlogPost;
  sidePosts: BlogPost[];
}

export default function FeaturedPost({ post, sidePosts }: FeaturedPostProps) {
  return (
    <article className="grid grid-cols-1 lg:grid-cols-[1.5fr,1fr] gap-8">
      <div className="relative group">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg"
        />
        <div className="p-4 md:p-6">
          <div className="mb-2">
            <span className="text-sm text-gray-400">{post.date}</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
            {post.title}
          </h2>
          <p className="text-gray-400 mb-4 line-clamp-2 text-sm md:text-base">
            {post.excerpt}
          </p>
          <div className="flex flex-wrap gap-2 items-center">
            {post.category.split(' & ').map((cat, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs md:text-sm"
              >
                {cat}
              </span>
            ))}
            <span className="ml-auto">
              <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-4 md:space-y-6">
        {sidePosts.map((sidePost, index) => (
          <article key={index} className="flex gap-4 group">
            <img
              src={sidePost.image}
              alt={sidePost.title}
              className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg flex-shrink-0"
            />
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="text-xs md:text-sm text-gray-400">{sidePost.author}</span>
                <span className="text-xs md:text-sm text-gray-400">• {sidePost.date}</span>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {sidePost.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-400 line-clamp-2">
                {sidePost.excerpt}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {sidePost.category.split(' & ').map((cat, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-800 text-gray-300 rounded-full text-xs"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </article>
  );
}