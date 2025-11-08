
import React, { useState } from 'react';
import { ArticleContent } from '../constants';

const SeoArticle: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full max-w-4xl mt-12">
      {!isExpanded && (
        <div className="text-center">
          <button
            onClick={() => setIsExpanded(true)}
            className="bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold py-3 px-8 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
          >
            Read More: The Ultimate Guide to UUIDs
          </button>
        </div>
      )}

      {isExpanded && (
        <article className="bg-black/30 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-2xl border border-white/10 prose prose-invert max-w-none prose-p:text-gray-300 prose-headings:text-gray-100 prose-a:text-cyan-400 prose-strong:text-white prose-table:border-gray-600 prose-th:text-white prose-td:border-gray-700">
           <ArticleContent />
        </article>
      )}
    </div>
  );
};

export default SeoArticle;
