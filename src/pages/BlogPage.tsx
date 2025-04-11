import BlogHero from '../components/blog/BlogHero';
import FeaturedPost from '../components/blog/FeaturedPost';
import BlogList from '../components/blog/BlogList';
import { blogPosts } from '../data/blogPosts';

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const sidePosts = blogPosts.slice(1, 5); // Changed back to show 4 side posts
  const remainingPosts = blogPosts.slice(5); // Updated slice start index

  return (
    <div className="min-h-screen bg-dark">
      <div className="pt-16">
        <BlogHero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-2xl font-bold text-white mb-8">Recent blog posts</h2>
          <FeaturedPost post={featuredPost} sidePosts={sidePosts} />
          
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-white mb-8">All blog posts</h2>
            <BlogList posts={remainingPosts} />
          </div>
        </div>
      </div>
    </div>
  );
}