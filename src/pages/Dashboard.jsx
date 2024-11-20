import React from 'react';
import VisitorChart from '../components/dashboard/VisitorChart';
import ConversionRate from '../components/dashboard/ConversionRate';
import RevenueMetrics from '../components/dashboard/RevenueMetrics';
import TopPages from '../components/dashboard/TopPages';

const Dashboard = () => {
  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-8">Analytics Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <VisitorChart />
          <ConversionRate />
          <RevenueMetrics />
          <TopPages />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;