import React from 'react';
import { Card, Title, Subtitle } from "@tremor/react";
import ReactApexChart from 'react-apexcharts';

function PieChart({avgData, ordersData}) {
  
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false)
  const [profitArr, setProfitArr] = React.useState([])
  const [restaurantNames, setRestaurantNames] = React.useState([])
  
  React.useEffect(() => {
    setLoading(true)
    if (avgData) {
      const updatedList = avgData?.map((item, index) => ({
        name: ordersData[index]?.name,
        profit: item*ordersData[index]?.riders*0.15,
      }));
      setData(updatedList);
    }
  }, [avgData]);
  
  React.useEffect(() => {
    setProfitArr(data.map((item) => item.profit))
    setRestaurantNames(data.map((item) => item.name))
    setLoading(false)
  }, [data])
  
  const pieChartData = {
    series: profitArr,
    options: {
      chart: {
        width: '100%',
        type: 'pie',
      },
      labels: restaurantNames,
      
      plotOptions: {
        pie: {
          dataLabels: {
            offset: -15
          }
        }
      },
      dataLabels: {
        formatter(val, opts) {
          const name = opts.w.globals.labels[opts.seriesIndex];
          const realProfit = profitArr[opts.seriesIndex]; 
          return [ name, `SAR ${realProfit.toFixed(1)}`, `${val.toFixed(1)} %` ];
        }
      },
      legend: {
        show: true
      }
    },
  };

  return (
      <Card className="rounded-tremor-xl bg-gray-50 hover:bg-gray-100 shadow-2xl space-y-4">
        <Title> Predicted Profit </Title>
        <Title> SAR <span className='font-bold text-6xl'> {profitArr.reduce((total, value) => total + value, 0).toFixed(1)} </span> </Title>
        <Subtitle className="tracking-wider">
          At the profit margin of 15% per order
        </Subtitle>
        <ReactApexChart options={pieChartData.options} series={pieChartData.series} type="pie" />
    </Card>
  );
}

export default PieChart;