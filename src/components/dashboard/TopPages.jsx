import React from 'react';

const topPages = [
  { page: '/home', views: 12500, conversion: '3.2%' },
  { page: '/products', views: 8300, conversion: '2.8%' },
  { page: '/services', views: 6200, conversion: '4.1%' },
  { page: '/blog', views: 5100, conversion: '2.5%' },
  { page: '/about', views: 3700, conversion: '1.9%' },
];

const TopPages = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-primary mb-4">Top Pages</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">Page</th>
              <th className="text-right py-2">Views</th>
              <th className="text-right py-2">Conversion</th>
            </tr>
          </thead>
          <tbody>
            {topPages.map((page, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 text-secondary">{page.page}</td>
                <td className="text-right py-2 text-secondary">{page.views.toLocaleString()}</td>
                <td className="text-right py-2 text-secondary">{page.conversion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopPages;