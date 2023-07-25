import React from "react";
import { Card, Title, Subtitle, DonutChart } from "@tremor/react";

const valueFormatter = (number) => `SAR ${Intl.NumberFormat("us").format(number).toString()}`;

const PieChart = ({avgData, ordersData}) => {

  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false)

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
    setLoading(false)
  }, [data])

  return (
    <Card className="max-w-lg rounded-tremor-xl bg-gray-50 hover:bg-gray-100 shadow-2xl">
      <Title> Predicted Profit </Title>
      <Subtitle className="tracking-wider">
        At the profit margin of 15%.
      </Subtitle>
      <DonutChart
        className="mt-6"
        data={data}
        category="profit"
        index="name"
        valueFormatter={valueFormatter}
        colors={["green", "teal", "lime", "emerald", "stone", "sky", "green", "teal", "lime", "emerald", "stone", "sky"]}
      />
    </Card>
  );
}

export default PieChart