import { useState, useEffect } from 'react';
import { DataSource, TokenData, GitHubRepo, TwitterData, ArkhamData } from '../types';
import { fetchCoinGeckoData, fetchCMCData, fetchGitHubData, fetchTwitterData, fetchArkhamData } from '../services/api';

export const useDataSources = () => {
  const [dataSources, setDataSources] = useState<DataSource[]>([
    { name: 'CoinGecko', status: 'disconnected', lastUpdate: '', dataCount: 0 },
    { name: 'CoinMarketCap', status: 'disconnected', lastUpdate: '', dataCount: 0 },
    { name: 'GitHub', status: 'disconnected', lastUpdate: '', dataCount: 0 },
    { name: 'Twitter/X', status: 'disconnected', lastUpdate: '', dataCount: 0 },
    { name: 'Arkham', status: 'disconnected', lastUpdate: '', dataCount: 0 }
  ]);

  const [coinGeckoData, setCoinGeckoData] = useState<TokenData[]>([]);
  const [cmcData, setCmcData] = useState<TokenData[]>([]);
  const [githubData, setGithubData] = useState<GitHubRepo[]>([]);
  const [twitterData, setTwitterData] = useState<TwitterData[]>([]);
  const [arkhamData, setArkhamData] = useState<ArkhamData[]>([]);

  const updateDataSource = (name: string, status: DataSource['status'], dataCount: number) => {
    setDataSources(prev => prev.map(source => 
      source.name === name 
        ? { ...source, status, lastUpdate: new Date().toISOString(), dataCount }
        : source
    ));
  };

  const loadCoinGeckoData = async () => {
    updateDataSource('CoinGecko', 'loading', 0);
    try {
      const data = await fetchCoinGeckoData();
      setCoinGeckoData(data);
      updateDataSource('CoinGecko', 'connected', data.length);
    } catch (error) {
      updateDataSource('CoinGecko', 'disconnected', 0);
    }
  };

  const loadCMCData = async () => {
    updateDataSource('CoinMarketCap', 'loading', 0);
    try {
      const data = await fetchCMCData();
      setCmcData(data);
      updateDataSource('CoinMarketCap', 'connected', data.length);
    } catch (error) {
      updateDataSource('CoinMarketCap', 'disconnected', 0);
    }
  };

  const loadGitHubData = async () => {
    updateDataSource('GitHub', 'loading', 0);
    try {
      const data = await fetchGitHubData();
      setGithubData(data);
      updateDataSource('GitHub', 'connected', data.length);
    } catch (error) {
      updateDataSource('GitHub', 'disconnected', 0);
    }
  };

  const loadTwitterData = async () => {
    updateDataSource('Twitter/X', 'loading', 0);
    try {
      const data = await fetchTwitterData();
      setTwitterData(data);
      updateDataSource('Twitter/X', 'connected', data.length);
    } catch (error) {
      updateDataSource('Twitter/X', 'disconnected', 0);
    }
  };

  const loadArkhamData = async () => {
    updateDataSource('Arkham', 'loading', 0);
    try {
      const data = await fetchArkhamData();
      setArkhamData(data);
      updateDataSource('Arkham', 'connected', data.length);
    } catch (error) {
      updateDataSource('Arkham', 'disconnected', 0);
    }
  };

  const refreshAllData = async () => {
    await Promise.all([
      loadCoinGeckoData(),
      loadCMCData(),
      loadGitHubData(),
      loadTwitterData(),
      loadArkhamData()
    ]);
  };

  useEffect(() => {
    refreshAllData();
    
    // Set up periodic refresh every 5 minutes
    const interval = setInterval(refreshAllData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return {
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
  };
};