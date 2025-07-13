export interface ChainConfig {
  id: number;
  name: string;
  symbol: string;
  rpcUrl: string;
  explorerUrl: string;
  icon: string;
  color: string;
}

export interface TokenData {
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  price: number;
  change24h: number;
  volume24h: number;
  marketCap: number;
}

export interface GitHubRepo {
  id: number;
  name: string;
  fullName: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  updatedAt: string;
  url: string;
}

export interface TwitterData {
  id: string;
  text: string;
  author: string;
  createdAt: string;
  likes: number;
  retweets: number;
  sentiment: 'positive' | 'negative' | 'neutral';
}

export interface ArkhamData {
  address: string;
  label: string;
  balance: number;
  transactions: number;
  firstSeen: string;
  lastSeen: string;
  tags: string[];
}

export interface DataSource {
  name: string;
  status: 'connected' | 'disconnected' | 'loading';
  lastUpdate: string;
  dataCount: number;
}