import { BarList, Card, Title, Bold, Flex, Text } from "@tremor/react";
import React from "react";

const Chart = ({ ordersData }) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    setLoading(true)
    const updatedList = ordersData.map((item, index) => ({
      name: item?.name,
      value: item?.riders,
      icon: () => <img src={item.imgUrl} className="w-5 h-5 rounded-full mr-2.5" />,
    }));
    setData(updatedList);
  }, [ordersData]);

  React.useEffect(() => {
    setLoading(false)
  }, [data])

  return (
    <Card className="max-w-lg rounded-tremor-xl bg-gray-50 hover:bg-gray-100 shadow-2xl">
      <Title>Riders Analytics</Title>
      <Flex className="mt-4">
        <Text>
          <Bold>Restaurant</Bold>
        </Text>
        <Text>
          <Bold>Orders</Bold>
        </Text>
      </Flex>
      {!loading && <BarList data={data} className="mt-2 text-tremor-content-inverted" /> }
    </Card>
  );
};

export default Chart;