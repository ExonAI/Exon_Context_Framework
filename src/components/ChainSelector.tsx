import React from 'react';
import { supportedChains } from '../config/chains';

interface ChainSelectorProps {
  selectedChains: number[];
  onChainToggle: (chainId: number) => void;
}

export const ChainSelector: React.FC<ChainSelectorProps> = ({ selectedChains, onChainToggle }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
      <h3 className="text-white font-semibold mb-3">EVM Chains</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {supportedChains.map((chain) => (
          <button
            key={chain.id}
            onClick={() => onChainToggle(chain.id)}
            className={`p-3 rounded-lg border transition-all ${
              selectedChains.includes(chain.id)
                ? 'border-blue-500 bg-blue-500/20'
                : 'border-gray-600 hover:border-gray-500'
            }`}
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-2xl">{chain.icon}</span>
              <span className="text-white text-sm font-medium">{chain.name}</span>
              <span className="text-gray-400 text-xs">{chain.symbol}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};