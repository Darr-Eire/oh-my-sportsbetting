import React from 'react';

const LiveBadge: React.FC = () => {
  return (
    <div className="flex items-center gap-1 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full font-semibold animate-pulse">
      <span className="h-2 w-2 bg-white rounded-full"></span>
      LIVE
    </div>
  );
};

export default LiveBadge;
