import React from 'react';
import { Star, GitFork, ExternalLink } from 'lucide-react';
import { GitHubRepo } from '../types';

interface GitHubCardProps {
  repo: GitHubRepo;
}

export const GitHubCard: React.FC<GitHubCardProps> = ({ repo }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const languageColors: { [key: string]: string } = {
    'JavaScript': '#f1e05a',
    'TypeScript': '#2b7489',
    'Go': '#00ADD8',
    'Python': '#3572A5',
    'Solidity': '#AA6746',
    'Rust': '#dea584'
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-gray-600 transition-all hover:shadow-lg">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-white font-semibold text-lg mb-1">{repo.name}</h3>
          <p className="text-gray-400 text-sm mb-2">{repo.fullName}</p>
          <p className="text-gray-300 text-sm">{repo.description}</p>
        </div>
        <a
          href={repo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <ExternalLink size={16} />
        </a>
      </div>

      <div className="flex items-center space-x-4 mb-3">
        <div className="flex items-center space-x-1 text-gray-400">
          <Star size={14} />
          <span className="text-sm">{repo.stars.toLocaleString()}</span>
        </div>
        
        <div className="flex items-center space-x-1 text-gray-400">
          <GitFork size={14} />
          <span className="text-sm">{repo.forks.toLocaleString()}</span>
        </div>
        
        {repo.language && (
          <div className="flex items-center space-x-2">
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: languageColors[repo.language] || '#888' }}
            />
            <span className="text-gray-400 text-sm">{repo.language}</span>
          </div>
        )}
      </div>

      <div className="text-gray-400 text-xs">
        Updated {formatDate(repo.updatedAt)}
      </div>
    </div>
  );
};