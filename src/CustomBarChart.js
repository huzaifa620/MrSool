import { Card, Title, BarChart, Subtitle } from "@tremor/react";
import React from "react";

const chartdata = [
  {
    name: "Amphibians",
    "Average Earnings": 30,
  },
  {
    name: "Birds",
    "Average Earnings": 35,
  },
  {
    name: "Crustaceans",
    "Average Earnings": 40,
  },
];

const dataFormatter = (number) => {
  return "SAR " + Intl.NumberFormat("us").format(number).toString();
};

const CustomBarChart = ({avgData, ordersData}) => {

  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    setLoading(true)
    if (avgData) {
      const updatedList = avgData?.map((item, index) => ({
        name: ordersData[index]?.name,
        "Average Earnings": item,
      }));
      setData(updatedList);
    }
  }, [avgData]);

  React.useEffect(() => {
    setLoading(false)
  }, [data])

  return (
    <Card className="rounded-tremor-xl bg-gray-50 hover:bg-gray-100 shadow-2xl">
      <Title>Average Earning of riders </Title>
      <Subtitle className="tracking-wider">
        MrSool has assessed the average earnings of riders in each restaurant.
      </Subtitle>
      <BarChart
        className="mt-6"
        data={data}
        index="name"
        categories={["Average Earnings"]}
        colors={["green"]}
        valueFormatter={dataFormatter}
        yAxisWidth={48}
      />
    </Card>
  )

}

export default CustomBarChart;
