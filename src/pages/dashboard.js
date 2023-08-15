import React, { useState } from 'react';
import HighChartDetails from '../components/HighChartDetails';
import dummyData from './dummydata';

const Dashboard = () => {
  const [selectedFilter, setSelectedFilter] = useState('all'); // Initial filter value

  // Filter data based on the selected filter
  const filteredData = dummyData.filter(item => {
    if (selectedFilter === 'pharmaceuticals') {
      return item.sector === 'Pharmaceuticals' || item.topic === 'pharmaceutical';
    }
    // Add more conditions for other filters if needed
    return true; // Show all data when no specific filter is selected
  });

  // Prepare data for pie chart
  const pieChartData = filteredData.map(item => ({
    name: item.title,
    y: item.intensity,
  }));

  // Prepare data for area chart
  const areaChartData = filteredData.map(item => ({
    x: item.start_year,
    y: item.intensity,
  }));

  const handleFilterChange = event => {
    setSelectedFilter(event.target.value);
  };

  return (
    <div className="d-flex bg-primary">
      <div className="col-6 fw-semibold fs-4">
        <div className="bg-white1">
          <HighChartDetails data={pieChartData} chartType="pie" />
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="all"
              checked={selectedFilter === 'all'}
              onChange={handleFilterChange}
            />
            All Data
          </label>
          <label>
            <input
              type="radio"
              value="pharmaceuticals"
              checked={selectedFilter === 'pharmaceuticals'}
              onChange={handleFilterChange}
            />
            Pharmaceuticals
          </label>
          {/* Add more radio buttons for other filters if needed */}
        </div>
      </div>
      <div className="col-6 fw-semibold fs-4">
        <div className="bg-white1">
          <HighChartDetails data={areaChartData} chartType="area" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
