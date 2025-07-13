import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { TokenData } from '../types';

interface TokenCardProps {
  token: TokenData;
}

export const TokenCard: React.FC<TokenCardProps> = ({ token }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 8
    }).format(price);
  };

  const formatVolume = (volume: number) => {
    if (volume >= 1e9) {
      return `$${(volume / 1e9).toFixed(2)}B`;
    } else if (volume >= 1e6) {
      return `$${(volume / 1e6).toFixed(2)}M`;
    } else if (volume >= 1e3) {
      return `$${(volume / 1e3).toFixed(2)}K`;
    }
    return `$${volume.toFixed(2)}`;
  };

  const isPositive = token.change24h >= 0;

  return (
    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-gray-600 transition-all hover:shadow-lg">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="text-white font-semibold text-lg">{token.symbol}</h3>
          <p className="text-gray-400 text-sm">{token.name}</p>
        </div>
        <div className={`flex items-center space-x-1 ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
          {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
          <span className="font-medium">{isPositive ? '+' : ''}{token.change24h.toFixed(2)}%</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-400">Price:</span>
          <span className="text-white font-medium">{formatPrice(token.price)}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-400">24h Volume:</span>
          <span className="text-white">{formatVolume(token.volume24h)}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-400">Market Cap:</span>
          <span className="text-white">{formatVolume(token.marketCap)}</span>
        </div>
      </div>
    </div>
  );
};