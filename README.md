# Exon AI MCP Dashboard

A comprehensive Multi-Chain Protocol (MCP) dashboard for cryptocurrency intelligence, providing real-time data aggregation from multiple blockchain networks, market data sources, social platforms, and on-chain analytics.

## 🚀 Features

### Multi-Chain EVM Integration
- **Ethereum Mainnet** - Real-time transaction monitoring and smart contract analytics
- **Polygon** - Layer 2 scaling solution data aggregation
- **Binance Smart Chain (BSC)** - DeFi protocol tracking and token analytics
- **Arbitrum** - Optimistic rollup data and transaction analysis
- **Optimism** - Layer 2 network monitoring and performance metrics

### Market Data Sources
- **CoinGecko API** - Comprehensive cryptocurrency market data
- **CoinMarketCap API** - Real-time price feeds and market analytics
- **Real-time Price Tracking** - Live updates with 24h change indicators
- **Volume & Market Cap Analysis** - Detailed trading metrics
- **Historical Data** - Price trends and performance analytics

### Social Intelligence
- **X (Twitter) Integration** - Real-time crypto sentiment analysis
- **Sentiment Analysis** - AI-powered positive/negative/neutral classification
- **Trending Topics** - Cryptocurrency discussion monitoring
- **Influencer Tracking** - Key opinion leader activity monitoring

### Developer Analytics
- **GitHub Integration** - Repository tracking and development activity
- **Commit Analysis** - Development velocity and contributor metrics
- **Star & Fork Tracking** - Project popularity and community engagement
- **Language Statistics** - Technology stack analysis

### On-Chain Intelligence
- **Arkham Intelligence** - Advanced wallet and transaction analysis
- **Whale Tracking** - Large holder movement monitoring
- **Transaction Analysis** - Flow analysis and pattern recognition
- **Address Labeling** - Entity identification and categorization

## 🛠️ Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **State Management**: React Hooks
- **API Integration**: Fetch API with custom hooks
- **Real-time Updates**: Polling with configurable intervals

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager
- Git

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/ExonAI/Exon_Context_Framework.git
   cd Exon_Context_Framework
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# CoinGecko API
VITE_COINGECKO_API_KEY=your_coingecko_api_key
VITE_COINGECKO_BASE_URL=https://api.coingecko.com/api/v3

# CoinMarketCap API
VITE_CMC_API_KEY=your_coinmarketcap_api_key
VITE_CMC_BASE_URL=https://pro-api.coinmarketcap.com/v1

# Twitter/X API
VITE_TWITTER_BEARER_TOKEN=your_twitter_bearer_token
VITE_TWITTER_API_URL=https://api.twitter.com/2

# GitHub API
VITE_GITHUB_TOKEN=your_github_personal_access_token
VITE_GITHUB_API_URL=https://api.github.com

# Arkham Intelligence API
VITE_ARKHAM_API_KEY=your_arkham_api_key
VITE_ARKHAM_BASE_URL=https://api.arkhamintelligence.com

# EVM Chain RPC URLs
VITE_ETHEREUM_RPC=https://eth-mainnet.g.alchemy.com/v2/your_key
VITE_POLYGON_RPC=https://polygon-mainnet.g.alchemy.com/v2/your_key
VITE_BSC_RPC=https://bsc-dataseed.binance.org
VITE_ARBITRUM_RPC=https://arb-mainnet.g.alchemy.com/v2/your_key
VITE_OPTIMISM_RPC=https://opt-mainnet.g.alchemy.com/v2/your_key
```

### API Keys Setup

#### CoinGecko
1. Visit [CoinGecko API](https://www.coingecko.com/en/api)
2. Sign up for a free or pro account
3. Generate API key from dashboard
4. Add to `.env` file

#### CoinMarketCap
1. Go to [CoinMarketCap API](https://coinmarketcap.com/api/)
2. Create developer account
3. Get API key from dashboard
4. Add to `.env` file

#### Twitter/X API
1. Apply for [Twitter Developer Account](https://developer.twitter.com/)
2. Create new app in developer portal
3. Generate Bearer Token
4. Add to `.env` file

#### GitHub API
1. Go to GitHub Settings > Developer settings
2. Generate new Personal Access Token
3. Grant necessary permissions (repo, user)
4. Add to `.env` file

#### Arkham Intelligence
1. Contact [Arkham Intelligence](https://www.arkhamintelligence.com/) for API access
2. Obtain API credentials
3. Add to `.env` file

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ArkhamCard.tsx   # On-chain data display
│   ├── ChainSelector.tsx # EVM chain selection
│   ├── DataSourceCard.tsx # API status monitoring
│   ├── GitHubCard.tsx   # Repository analytics
│   ├── StatusIndicator.tsx # Connection status
│   ├── TokenCard.tsx    # Cryptocurrency data
│   └── TwitterCard.tsx  # Social media posts
├── config/              # Configuration files
│   └── chains.ts        # EVM chain configurations
├── hooks/               # Custom React hooks
│   └── useDataSources.ts # Data fetching logic
├── services/            # API integration
│   └── api.ts          # External API calls
├── types/               # TypeScript definitions
│   └── index.ts        # Type definitions
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## 🔧 Development

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Type checking
npm run type-check
```

### Adding New Data Sources

1. **Define types** in `src/types/index.ts`
2. **Create API service** in `src/services/api.ts`
3. **Add to data hook** in `src/hooks/useDataSources.ts`
4. **Create UI component** in `src/components/`
5. **Integrate in main app** in `src/App.tsx`

### Customizing Chains

Edit `src/config/chains.ts` to add or modify EVM chains:

```typescript
export const supportedChains: ChainConfig[] = [
  {
    id: 1,
    name: 'Ethereum',
    symbol: 'ETH',
    rpcUrl: 'your_rpc_url',
    explorerUrl: 'https://etherscan.io',
    icon: '⟠',
    color: '#627EEA'
  },
  // Add more chains...
];
```

## 📊 Data Sources

### Real-time Updates
- **Polling Interval**: 5 minutes (configurable)
- **Error Handling**: Automatic retry with exponential backoff
- **Rate Limiting**: Respects API limits with queuing
- **Caching**: In-memory caching for performance

### Data Aggregation
- **Multi-source Correlation**: Cross-reference data between APIs
- **Deduplication**: Remove duplicate entries across sources
- **Normalization**: Standardize data formats
- **Validation**: Ensure data integrity and accuracy

## 🎨 UI/UX Features

### Design System
- **Dark Theme**: Optimized for extended use
- **Responsive Design**: Mobile-first approach
- **Accessibility**: WCAG 2.1 AA compliant
- **Performance**: Optimized for fast loading

### Interactive Elements
- **Real-time Status Indicators**: Live connection monitoring
- **Hover Effects**: Enhanced user feedback
- **Loading States**: Smooth loading animations
- **Error Boundaries**: Graceful error handling

### Navigation
- **Tabbed Interface**: Organized data categories
- **Quick Stats**: At-a-glance metrics
- **Search & Filter**: Advanced data filtering
- **Export Options**: Data export functionality

## 🚀 Deployment

### Production Build

```bash
npm run build
```

### Environment Setup

1. **Staging Environment**
   ```bash
   cp .env.example .env.staging
   # Configure staging API endpoints
   ```

2. **Production Environment**
   ```bash
   cp .env.example .env.production
   # Configure production API endpoints
   ```

### Docker Deployment

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 📈 Performance Optimization

### Bundle Optimization
- **Code Splitting**: Lazy loading for components
- **Tree Shaking**: Remove unused code
- **Asset Optimization**: Compressed images and fonts
- **Caching Strategy**: Efficient browser caching

### API Optimization
- **Request Batching**: Combine multiple API calls
- **Response Caching**: Cache frequently accessed data
- **Compression**: Gzip/Brotli compression
- **CDN Integration**: Global content delivery

## 🔒 Security

### API Security
- **Environment Variables**: Secure credential storage
- **CORS Configuration**: Proper cross-origin setup
- **Rate Limiting**: Prevent API abuse
- **Input Validation**: Sanitize user inputs

### Data Protection
- **No Sensitive Storage**: No private keys or sensitive data
- **Secure Transmission**: HTTPS only
- **Error Handling**: No sensitive data in error messages
- **Audit Logging**: Track data access patterns

## 🧪 Testing

### Test Coverage
- **Unit Tests**: Component and utility testing
- **Integration Tests**: API integration testing
- **E2E Tests**: Full user workflow testing
- **Performance Tests**: Load and stress testing

### Running Tests

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Coverage report
npm run test:coverage
```

## 📚 API Documentation

### CoinGecko Integration
- **Endpoints**: `/coins/markets`, `/coins/{id}`
- **Rate Limits**: 50 calls/minute (free tier)
- **Data Points**: Price, volume, market cap, 24h change

### CoinMarketCap Integration
- **Endpoints**: `/cryptocurrency/listings/latest`
- **Rate Limits**: 333 calls/month (basic plan)
- **Data Points**: Price, volume, market cap, rankings

### Twitter/X Integration
- **Endpoints**: `/tweets/search/recent`
- **Rate Limits**: 300 requests/15 minutes
- **Data Points**: Tweet content, engagement, sentiment

### GitHub Integration
- **Endpoints**: `/repos/{owner}/{repo}`
- **Rate Limits**: 5000 requests/hour (authenticated)
- **Data Points**: Stars, forks, commits, contributors

### Arkham Intelligence
- **Endpoints**: Custom enterprise endpoints
- **Rate Limits**: Based on subscription tier
- **Data Points**: Wallet labels, transactions, balances

## 🤝 Contributing

### Development Workflow

1. **Fork the repository**
2. **Create feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open Pull Request**

### Code Standards
- **TypeScript**: Strict type checking
- **ESLint**: Code quality enforcement
- **Prettier**: Code formatting
- **Conventional Commits**: Standardized commit messages

### Pull Request Guidelines
- Clear description of changes
- Include tests for new features
- Update documentation as needed
- Ensure CI/CD passes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

### Documentation
- **API Docs**: Detailed API integration guides
- **Component Docs**: UI component documentation
- **Troubleshooting**: Common issues and solutions

### Community
- **Telegram**: Join our developer community
- **GitHub Issues**: Bug reports and feature requests
- **Stack Overflow**: Technical questions and answers

### Enterprise Support
- **Custom Integration**: Tailored API integrations
- **Priority Support**: Dedicated support channels
- **Training**: Team training and onboarding

## 📞 Contact

- **Website**: [https://exonprotocol.xyz](https://exonprotocol.xyz)
- **Email**: support@exonprotocol.xyz
- **Twitter**: [@Exon_AI](https://t.me/Exon_AI)
- **Twitter**: [@ExonAIHub](https://twitter.com/ExonAIHub)

---

**Built with ❤️ by the Exon AI Team**

*Empowering the future of cryptocurrency intelligence through advanced data aggregation and analysis.*
