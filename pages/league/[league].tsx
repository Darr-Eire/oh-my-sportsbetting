import Sidebar from '../../components/Sidebar'; // adjust path if needed
import React from 'react';

export default function LeaguePage({ league }) {
  return (
    <div className="flex">
      <Sidebar />
      {/* Rest of your league page JSX */}
      <main>{/* League content here */}</main>
    </div>
  );
}
