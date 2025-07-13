import React, { useState } from 'react';
import { BarChart3, Zap, RefreshCw, Download, Settings, Database } from 'lucide-react';
import { useDataSources } from './hooks/useDataSources';
import { DataSourceCard } from './components/DataSourceCard';
import { TokenCard } from './components/TokenCard';
import { GitHubCard } from './components/GitHubCard';
import { TwitterCard } from './components/TwitterCard';
import { ArkhamCard } from './components/ArkhamCard';
import { ChainSelector } from './components/ChainSelector';

function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedChains, setSelectedChains] = useState<number[]>([1, 137, 56, 42161, 10]);

  const {
    dataSources,
    coinGeckoData,
    cmcData,
    githubData,
    twitterData,
    arkhamData,
    refreshAllData,
    loadCoinGeckoData,
    loadCMCData,
    loadGitHubData,
    loadTwitterData,
    loadArkhamData
  } = useDataSources();

  const handleChainToggle = (chainId: number) => {
    setSelectedChains(prev => 
      prev.includes(chainId)
        ? prev.filter(id => id !== chainId)
        : [...prev, chainId]
    );
  };

  const tabs = [
    { id: 'overview', name: 'Overview', icon: BarChart3 },
    { id: 'crypto', name: 'Crypto Data', icon: Database },
    { id: 'social', name: 'Social & Dev', icon: Zap },
    { id: 'onchain', name: 'On-Chain', icon: Settings }
  ];

  const totalDataPoints = dataSources.reduce((sum, source) => sum + source.dataCount, 0);
  const connectedSources = dataSources.filter(source => source.status === 'connected').length;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Database className="w-8 h-8 text-blue-400" />
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Exon AI MCP
                </h1>
              </div>
              <div className="hidden md:flex items-center space-x-4 text-sm">
                <span className="text-gray-400">
                  {connectedSources}/{dataSources.length} Sources
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-400">
                  {totalDataPoints.toLocaleString()} Data Points
                </span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={refreshAllData}
                className="flex items-center space-x-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                <RefreshCw size={16} />
                <span className="hidden sm:inline">Refresh All</span>
              </button>
              <button className="flex items-center space-x-2 px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                <Download size={16} />
                <span className="hidden sm:inline">Export</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-400 text-blue-400'
                    : 'border-transparent text-gray-400 hover:text-gray-300'
                }`}
              >
                <tab.icon size={18} />
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Chain Selector */}
            <ChainSelector 
              selectedChains={selectedChains}
              onChainToggle={handleChainToggle}
            />

            {/* Data Sources Overview */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Data Sources Status</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                <DataSourceCard dataSource={dataSources[0]} onRefresh={loadCoinGeckoData} />
                <DataSourceCard dataSource={dataSources[1]} onRefresh={loadCMCData} />
                <DataSourceCard dataSource={dataSources[2]} onRefresh={loadGitHubData} />
                <DataSourceCard dataSource={dataSources[3]} onRefresh={loadTwitterData} />
                <DataSourceCard dataSource={dataSources[4]} onRefresh={loadArkhamData} />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-gray-400 text-sm font-medium">Active Chains</h3>
                <p className="text-3xl font-bold text-white mt-2">{selectedChains.length}</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-gray-400 text-sm font-medium">Crypto Assets</h3>
                <p className="text-3xl font-bold text-white mt-2">{coinGeckoData.length + cmcData.length}</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-gray-400 text-sm font-medium">Repositories</h3>
                <p className="text-3xl font-bold text-white mt-2">{githubData.length}</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-gray-400 text-sm font-medium">Social Posts</h3>
                <p className="text-3xl font-bold text-white mt-2">{twitterData.length}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'crypto' && (
          <div className="space-y-8">
            {/* CoinGecko Data */}
            <div>
              <h2 className="text-2xl font-bold mb-6">CoinGecko Data</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {coinGeckoData.map((token, index) => (
                  <TokenCard key={index} token={token} />
                ))}
              </div>
            </div>

            {/* CoinMarketCap Data */}
            <div>
              <h2 className="text-2xl font-bold mb-6">CoinMarketCap Data</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cmcData.map((token, index) => (
                  <TokenCard key={index} token={token} />
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'social' && (
          <div className="space-y-8">
            {/* GitHub Data */}
            <div>
              <h2 className="text-2xl font-bold mb-6">GitHub Repositories</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {githubData.map((repo) => (
                  <GitHubCard key={repo.id} repo={repo} />
                ))}
              </div>
            </div>

            {/* Twitter Data */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Twitter/X Feed</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {twitterData.map((tweet) => (
                  <TwitterCard key={tweet.id} tweet={tweet} />
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'onchain' && (
          <div className="space-y-8">
            {/* Arkham Data */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Arkham Intelligence Data</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {arkhamData.map((data, index) => (
                  <ArkhamCard key={index} data={data} />
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;