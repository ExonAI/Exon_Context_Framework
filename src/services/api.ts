import { TokenData, GitHubRepo, TwitterData, ArkhamData } from '../types';

// Mock data for demonstration - replace with actual API calls
export const fetchCoinGeckoData = async (): Promise<TokenData[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return [
    {
      address: '0x0000000000000000000000000000000000000000',
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
      price: 2487.32,
      change24h: 2.34,
      volume24h: 15420000000,
      marketCap: 298500000000
    },
    {
      address: '0xA0b86a33E6441e080a5a00bf9Fa28e50FfF45fcA',
      name: 'Polygon',
      symbol: 'MATIC',
      decimals: 18,
      price: 0.8234,
      change24h: -1.23,
      volume24h: 423000000,
      marketCap: 8200000000
    },
    {
      address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      name: 'BNB',
      symbol: 'BNB',
      decimals: 18,
      price: 634.12,
      change24h: 0.87,
      volume24h: 1240000000,
      marketCap: 94500000000
    }
  ];
};

export const fetchCMCData = async (): Promise<TokenData[]> => {
  await new Promise(resolve => setTimeout(resolve, 800));
  
  return [
    {
      address: '0x0000000000000000000000000000000000000000',
      name: 'Bitcoin',
      symbol: 'BTC',
      decimals: 8,
      price: 97845.23,
      change24h: 1.45,
      volume24h: 28500000000,
      marketCap: 1934000000000
    },
    {
      address: '0x0000000000000000000000000000000000000001',
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
      price: 2487.32,
      change24h: 2.34,
      volume24h: 15420000000,
      marketCap: 298500000000
    }
  ];
};

export const fetchGitHubData = async (): Promise<GitHubRepo[]> => {
  await new Promise(resolve => setTimeout(resolve, 1200));
  
  return [
    {
      id: 1,
      name: 'ethereum',
      fullName: 'ethereum/go-ethereum',
      description: 'Official Go implementation of the Ethereum protocol',
      stars: 47234,
      forks: 19876,
      language: 'Go',
      updatedAt: '2024-01-15T10:30:00Z',
      url: 'https://github.com/ethereum/go-ethereum'
    },
    {
      id: 2,
      name: 'web3.js',
      fullName: 'web3/web3.js',
      description: 'Ethereum JavaScript API',
      stars: 18245,
      forks: 4987,
      language: 'JavaScript',
      updatedAt: '2024-01-14T15:45:00Z',
      url: 'https://github.com/web3/web3.js'
    },
    {
      id: 3,
      name: 'hardhat',
      fullName: 'NomicFoundation/hardhat',
      description: 'Ethereum development environment for professionals',
      stars: 7123,
      forks: 1324,
      language: 'TypeScript',
      updatedAt: '2024-01-15T09:20:00Z',
      url: 'https://github.com/NomicFoundation/hardhat'
    }
  ];
};

export const fetchTwitterData = async (): Promise<TwitterData[]> => {
  await new Promise(resolve => setTimeout(resolve, 900));
  
  return [
    {
      id: '1',
      text: 'Ethereum gas fees are finally coming down! Layer 2 solutions are really making a difference. #Ethereum #DeFi',
      author: '@cryptodev123',
      createdAt: '2024-01-15T12:30:00Z',
      likes: 234,
      retweets: 67,
      sentiment: 'positive'
    },
    {
      id: '2',
      text: 'Just deployed my first smart contract on Polygon. The speed is incredible compared to mainnet!',
      author: '@blockchainbuilder',
      createdAt: '2024-01-15T11:45:00Z',
      likes: 156,
      retweets: 34,
      sentiment: 'positive'
    },
    {
      id: '3',
      text: 'Market volatility is concerning today. Need to diversify the portfolio more. #crypto #trading',
      author: '@tradingpro',
      createdAt: '2024-01-15T10:15:00Z',
      likes: 89,
      retweets: 23,
      sentiment: 'negative'
    }
  ];
};

export const fetchArkhamData = async (): Promise<ArkhamData[]> => {
  await new Promise(resolve => setTimeout(resolve, 1100));
  
  return [
    {
      address: '0x8Ba1f109551bD432803012645Hac136c',
      label: 'Binance Hot Wallet',
      balance: 234567.89,
      transactions: 1234567,
      firstSeen: '2020-03-15T08:30:00Z',
      lastSeen: '2024-01-15T14:22:00Z',
      tags: ['Exchange', 'Hot Wallet', 'High Volume']
    },
    {
      address: '0x3f5CE5FBFe3E9af3971dD833D26BA9b5C936f0bE',
      label: 'Vitalik Buterin',
      balance: 8934.12,
      transactions: 2345,
      firstSeen: '2015-07-30T12:00:00Z',
      lastSeen: '2024-01-14T16:45:00Z',
      tags: ['Ethereum Foundation', 'Founder', 'Public Figure']
    },
    {
      address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
      label: 'Tether Treasury',
      balance: 156789234.45,
      transactions: 567890,
      firstSeen: '2017-11-28T10:15:00Z',
      lastSeen: '2024-01-15T13:30:00Z',
      tags: ['Stablecoin', 'Treasury', 'USDT']
    }
  ];
};