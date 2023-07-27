import React, { useState, useEffect } from 'react';
import { Card, Title, Subtitle, Flex, BadgeDelta, } from "@tremor/react";
import ReactApexChart from 'react-apexcharts';

function PieChart({ avgData, ordersData }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [profitArr, setProfitArr] = useState([]);
  const [restaurantNames, setRestaurantNames] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (avgData) {
      const updatedList = avgData?.map((item, index) => ({
        name: ordersData[index]?.name,
        profit: item * ordersData[index]?.riders * 0.15,
      }));
      setData(updatedList);
    }
  }, [avgData]);

  useEffect(() => {
    setProfitArr(data.map((item) => item.profit));
    setRestaurantNames(data.map((item) => item.name));
    setLoading(false);
  }, [data]);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 520); // Adjust the breakpoint as needed
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const pieChartData = {
    series: profitArr,
    options: {
      chart: {
        width: '100%',
        type: 'pie',
      },
      labels: restaurantNames,
      dataLabels: {
        enabled: true,
        formatter: function (val, opts) {
          const name = opts.w.globals.labels[opts.seriesIndex];
          const realProfit = profitArr[opts.seriesIndex];
          const percentage = val.toFixed(1);
          return isMobile
            ? [realProfit.toFixed(1)]
            : [`${name}`, `SAR ${realProfit.toFixed(1)}`, `${percentage} %`];
        },
      },
      plotOptions: {
        pie: {
          dataLabels: {
            offset: isMobile ? -1 : -15,
          },
        },
      },
      legend: {
        show: !isMobile,
      },
    },
  };
  

  return (
    <Card className="rounded-tremor-xl bg-gray-50 hover:bg-gray-100 shadow-2xl space-y-4">
      <div className='flex items-center space-x-4'>
        <Title> Predicted Profit </Title>
        <BadgeDelta deltaType="moderateIncrease" isIncreasePositive={true} size="xs">
          +12.3%
        </BadgeDelta>
      </div>
      <Title>
        SAR <span className='font-bold text-6xl'> {profitArr.reduce((total, value) => total + value, 0).toFixed(1)} </span>
      </Title>
      <Subtitle className="tracking-wider">
        At the profit margin of 15% per order
      </Subtitle>

      <ReactApexChart options={pieChartData.options} series={pieChartData.series} type="pie" />

    </Card>
  );
}

export default PieChart;
