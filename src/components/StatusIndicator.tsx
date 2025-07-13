import React from 'react';
import { CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { DataSource } from '../types';

interface StatusIndicatorProps {
  status: DataSource['status'];
  size?: number;
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({ status, size = 16 }) => {
  const iconProps = { size };

  switch (status) {
    case 'connected':
      return <CheckCircle className="text-green-500" {...iconProps} />;
    case 'disconnected':
      return <XCircle className="text-red-500" {...iconProps} />;
    case 'loading':
      return <Loader2 className="text-blue-500 animate-spin" {...iconProps} />;
    default:
      return <XCircle className="text-gray-500" {...iconProps} />;
  }
};