import React from 'react';

function Blog() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
      <div className="bg-white/60 backdrop-blur-md border border-gray-200 shadow-xl rounded-2xl p-8 transition-all hover:shadow-2xl hover:scale-[1.02] duration-300">

        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-8">
          📝 Top Products 2025
        </h2>

        <ul className="space-y-5 text-gray-700 text-lg leading-relaxed">
          <li className="flex items-start">
            <span className="mr-2">🧺</span>
            <span><strong>Best-Selling Products of the Month</strong></span>
          </li>

          <li className="flex items-start">
            <span className="mr-2">👕</span>
            <span><strong>2025 Fashion Trends You Can’t Miss</strong></span>
          </li>

          <li className="flex items-start">
            <span className="mr-2">💻</span>
            <span><strong>Tech Essentials Every Student Should Own</strong></span>
          </li>

          <li className="flex items-start">
            <span className="mr-2">🎁</span>
            <span><strong>Gift Guide for Every Occasion</strong></span>
          </li>

          <li className="flex items-start">
            <span className="mr-2">♻️</span>
            <span><strong>How We Pack Sustainably</strong></span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Blog;
