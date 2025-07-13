import React from 'react';
import { Heart, Repeat2, MessageCircle } from 'lucide-react';
import { TwitterData } from '../types';

interface TwitterCardProps {
  tweet: TwitterData;
}

export const TwitterCard: React.FC<TwitterCardProps> = ({ tweet }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    
    if (diffHours < 1) {
      const diffMins = Math.floor(diffMs / (1000 * 60));
      return `${diffMins}m`;
    } else if (diffHours < 24) {
      return `${diffHours}h`;
    } else {
      const diffDays = Math.floor(diffHours / 24);
      return `${diffDays}d`;
    }
  };

  const getSentimentColor = (sentiment: TwitterData['sentiment']) => {
    switch (sentiment) {
      case 'positive':
        return 'text-green-400';
      case 'negative':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  const getSentimentBg = (sentiment: TwitterData['sentiment']) => {
    switch (sentiment) {
      case 'positive':
        return 'bg-green-500/20';
      case 'negative':
        return 'bg-red-500/20';
      default:
        return 'bg-gray-500/20';
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-gray-600 transition-all hover:shadow-lg">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-2">
          <span className="text-blue-400 font-medium">{tweet.author}</span>
          <span className="text-gray-500">·</span>
          <span className="text-gray-500 text-sm">{formatDate(tweet.createdAt)}</span>
        </div>
        <div className={`px-2 py-1 rounded-full text-xs font-medium ${getSentimentBg(tweet.sentiment)} ${getSentimentColor(tweet.sentiment)}`}>
          {tweet.sentiment}
        </div>
      </div>

      <p className="text-gray-300 mb-3 leading-relaxed">{tweet.text}</p>

      <div className="flex items-center space-x-6 text-gray-400">
        <div className="flex items-center space-x-1 hover:text-red-400 transition-colors cursor-pointer">
          <Heart size={16} />
          <span className="text-sm">{tweet.likes}</span>
        </div>
        
        <div className="flex items-center space-x-1 hover:text-green-400 transition-colors cursor-pointer">
          <Repeat2 size={16} />
          <span className="text-sm">{tweet.retweets}</span>
        </div>
        
        <div className="flex items-center space-x-1 hover:text-blue-400 transition-colors cursor-pointer">
          <MessageCircle size={16} />
        </div>
      </div>
    </div>
  );
};