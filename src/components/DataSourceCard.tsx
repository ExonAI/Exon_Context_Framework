import React from 'react';
import { RefreshCw } from 'lucide-react';
import { DataSource } from '../types';
import { StatusIndicator } from './StatusIndicator';

interface DataSourceCardProps {
  dataSource: DataSource;
  onRefresh?: () => void;
}

export const DataSourceCard: React.FC<DataSourceCardProps> = ({ dataSource, onRefresh }) => {
  const formatLastUpdate = (timestamp: string) => {
    if (!timestamp) return 'Never';
    const date = new Date(timestamp);
    return date.toLocaleTimeString();
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-gray-600 transition-colors">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <StatusIndicator status={dataSource.status} />
          <h3 className="text-white font-medium">{dataSource.name}</h3>
        </div>
        <button
          onClick={onRefresh}
          disabled={dataSource.status === 'loading'}
          className="p-1 text-gray-400 hover:text-white transition-colors disabled:opacity-50"
        >
          <RefreshCw 
            size={16} 
            className={dataSource.status === 'loading' ? 'animate-spin' : ''} 
          />
        </button>
      </div>
      
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-400">Status:</span>
          <span className={`capitalize ${
            dataSource.status === 'connected' ? 'text-green-400' :
            dataSource.status === 'loading' ? 'text-blue-400' :
            'text-red-400'
          }`}>
            {dataSource.status}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-400">Data Points:</span>
          <span className="text-white">{dataSource.dataCount}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-400">Last Update:</span>
          <span className="text-white">{formatLastUpdate(dataSource.lastUpdate)}</span>
        </div>
      </div>
    </div>
  );
};