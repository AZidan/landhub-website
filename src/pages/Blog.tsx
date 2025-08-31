import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowRight, TrendingUp, Building, Users } from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    title: 'Egyptian Real Estate Market Outlook 2025: Opportunities and Challenges',
    excerpt: 'An in-depth analysis of the Egyptian real estate market trends, emerging opportunities, and key challenges facing developers in 2025.',
    image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Ahmed Hassan',
    date: 'January 15, 2025',
    readTime: '8 min read',
    category: 'Market Analysis'
  };

  const blogPosts = [
    {
      title: 'Navigating Egyptian Real Estate Regulations: A Developer\'s Guide',
      excerpt: 'Essential regulatory requirements and compliance strategies for successful real estate development in Egypt.',
      image: 'https://images.pexels.com/photos/2882552/pexels-photo-2882552.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Fatma El-Zahra',
      date: 'January 10, 2025',
      readTime: '6 min read',
      category: 'Regulations'
    },
    {
      title: 'Maximizing ROI in Egyptian Property Development',
      excerpt: 'Proven strategies and best practices for optimizing returns on real estate investments in the Egyptian market.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Omar Mahmoud',
      date: 'January 5, 2025',
      readTime: '7 min read',
      category: 'Investment'
    },
    {
      title: 'Emerging Trends in Cairo\'s Real Estate Market',
      excerpt: 'Latest trends shaping Cairo\'s property landscape and what they mean for developers and investors.',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Nadia Abdel Rahman',
      date: 'December 28, 2024',
      readTime: '5 min read',
      category: 'Market Trends'
    },
    {
      title: 'Sustainable Development Practices in Egyptian Real Estate',
      excerpt: 'How to implement sustainable and environmentally conscious practices in Egyptian property development.',
      image: 'https://images.pexels.com/photos/3184160/pexels-photo-3184160.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Khaled Mansour',
      date: 'December 20, 2024',
      readTime: '6 min read',
      category: 'Sustainability'
    },
    {
      title: 'Financing Options for Small and Medium Developers in Egypt',
      excerpt: 'Comprehensive guide to financing alternatives and funding strategies for emerging real estate developers.',
      image: 'https://images.pexels.com/photos/2182977/pexels-photo-2182977.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Yasmin Ahmed',
      date: 'December 15, 2024',
      readTime: '9 min read',
      category: 'Finance'
    },
    {
      title: 'Technology Integration in Modern Egyptian Real Estate',
      excerpt: 'How PropTech and digital solutions are revolutionizing property development and management in Egypt.',
      image: 'https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Ahmed Hassan',
      date: 'December 10, 2024',
      readTime: '7 min read',
      category: 'Technology'
    }
  ];

  const categories = [
    { name: 'Market Analysis', count: 12, icon: TrendingUp },
    { name: 'Investment', count: 8, icon: Building },
    { name: 'Regulations', count: 6, icon: Users },
    { name: 'Market Trends', count: 10, icon: TrendingUp },
    { name: 'Sustainability', count: 4, icon: Building },
    { name: 'Finance', count: 7, icon: Users }
  ];

  return (
    <>
      <Helmet>
        <title>Real Estate Development Blog - Landhub Egypt Insights</title>
        <meta name="description" content="Expert insights on Egyptian real estate development, market trends, investment strategies, and regulatory updates. Stay informed with Landhub's industry expertise and analysis." />
        <meta name="keywords" content="Egyptian real estate blog, property development insights, real estate market trends Egypt, investment strategies, development tips, Cairo property market" />
        <meta property="og:title" content="Real Estate Development Blog - Landhub Egypt Insights" />
        <meta property="og:description" content="Expert insights and analysis on Egyptian real estate development, market trends, and investment strategies." />
        <link rel="canonical" href="https://landhub.eg/blog" />
      </Helmet>

      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Industry Insights & Analysis
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-4xl mx-auto">
              Stay ahead with expert insights on Egyptian real estate development, 
              market trends, and strategic guidance from our industry professionals.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Article
              </h2>
            </div>

            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8 md:p-12">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {featuredPost.category}
                    </span>
                    <span className="text-gray-500 text-sm">{featuredPost.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <User className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-600">{featuredPost.author}</span>
                      <Calendar className="h-5 w-5 text-gray-400 ml-4" />
                      <span className="text-gray-600">{featuredPost.date}</span>
                    </div>
                    
                    <button className="flex items-center space-x-2 text-blue-800 hover:text-blue-900 font-semibold transition-colors duration-300">
                      <span>Read More</span>
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Posts */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {blogPosts.map((post, index) => (
                    <article 
                      key={index}
                      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                      <img 
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                      
                      <div className="p-6">
                        <div className="flex items-center space-x-4 mb-3">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">
                            {post.category}
                          </span>
                          <span className="text-gray-500 text-sm">{post.readTime}</span>
                        </div>
                        
                        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                            <Calendar className="h-4 w-4 ml-2" />
                            <span>{post.date}</span>
                          </div>
                          
                          <button className="text-blue-800 hover:text-blue-900 font-semibold text-sm transition-colors duration-300">
                            Read More
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Categories */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Categories</h3>
                  <div className="space-y-3">
                    {categories.map((category, index) => (
                      <button 
                        key={index}
                        className="flex items-center justify-between w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                      >
                        <div className="flex items-center space-x-3">
                          <category.icon className="h-5 w-5 text-blue-800" />
                          <span className="text-gray-700">{category.name}</span>
                        </div>
                        <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-blue-800 rounded-xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
                  <p className="text-blue-200 mb-6">
                    Get the latest insights on Egyptian real estate development delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                    />
                    <button className="w-full bg-amber-500 hover:bg-amber-600 text-white px-4 py-3 rounded-lg font-semibold transition-colors duration-300">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;