import React from 'react';
import { Shield, Activity, Clock, Tag } from 'lucide-react';
import { ArkhamData } from '../types';

interface ArkhamCardProps {
  data: ArkhamData;
}

export const ArkhamCard: React.FC<ArkhamCardProps> = ({ data }) => {
  const formatBalance = (balance: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 2
    }).format(balance);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-gray-600 transition-all hover:shadow-lg">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-white font-semibold text-lg mb-1">{data.label}</h3>
          <p className="text-gray-400 text-sm font-mono">{truncateAddress(data.address)}</p>
        </div>
        <Shield className="text-blue-400" size={20} />
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex justify-between">
          <span className="text-gray-400">Balance:</span>
          <span className="text-white font-medium">{formatBalance(data.balance)}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-400">Transactions:</span>
          <span className="text-white">{data.transactions.toLocaleString()}</span>
        </div>
        
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">First Seen:</span>
          <span className="text-white">{formatDate(data.firstSeen)}</span>
        </div>
        
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Last Seen:</span>
          <span className="text-white">{formatDate(data.lastSeen)}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {data.tags.map((tag, index) => (
          <span
            key={index}
            className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-500/20 text-blue-400"
          >
            <Tag size={10} className="mr-1" />
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};