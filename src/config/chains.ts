import { ChainConfig } from '../types';

export const supportedChains: ChainConfig[] = [
  {
    id: 1,
    name: 'Ethereum',
    symbol: 'ETH',
    rpcUrl: 'https://eth-mainnet.g.alchemy.com/v2/demo',
    explorerUrl: 'https://etherscan.io',
    icon: '⟠',
    color: '#627EEA'
  },
  {
    id: 137,
    name: 'Polygon',
    symbol: 'MATIC',
    rpcUrl: 'https://polygon-mainnet.g.alchemy.com/v2/demo',
    explorerUrl: 'https://polygonscan.com',
    icon: '⬟',
    color: '#8247E5'
  },
  {
    id: 56,
    name: 'BSC',
    symbol: 'BNB',
    rpcUrl: 'https://bsc-dataseed.binance.org',
    explorerUrl: 'https://bscscan.com',
    icon: '🔶',
    color: '#F3BA2F'
  },
  {
    id: 42161,
    name: 'Arbitrum',
    symbol: 'ARB',
    rpcUrl: 'https://arb-mainnet.g.alchemy.com/v2/demo',
    explorerUrl: 'https://arbiscan.io',
    icon: '🔵',
    color: '#2D374B'
  },
  {
    id: 10,
    name: 'Optimism',
    symbol: 'OP',
    rpcUrl: 'https://opt-mainnet.g.alchemy.com/v2/demo',
    explorerUrl: 'https://optimistic.etherscan.io',
    icon: '🔴',
    color: '#FF0420'
  }
];

export const getChainById = (id: number): ChainConfig | undefined => {
  return supportedChains.find(chain => chain.id === id);
};