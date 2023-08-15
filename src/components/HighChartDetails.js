
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const HighChartDetails = ({ data, chartType }) => {
  const options = {
    chart: {
      type: chartType,
    },
    title: {
      text: chartType === 'pie' ? 'Filtered Data Pie Chart' : 'Filtered Data Area Chart',
    },
    series: [
      {
        name: 'Intensity',
        data: data,
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default HighChartDetails;
