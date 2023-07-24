import { Card, Title, DonutChart } from "@tremor/react";

const cities = [
  {
    name: "New York",
    sales: 9800,
  },
  {
    name: "London",
    sales: 4567,
  },
  {
    name: "Hong Kong",
    sales: 3908,
  },
  {
    name: "San Francisco",
    sales: 2400,
  },
  {
    name: "Singapore",
    sales: 1908,
  },
  {
    name: "Zurich",
    sales: 1398,
  },
];

const valueFormatter = (number) => `$ ${Intl.NumberFormat("us").format(number).toString()}`;

const PieChart = () => (
  <Card className="max-w-lg rounded-tremor-xl bg-gray-50 hover:bg-gray-100 shadow-2xl">
    <Title> Predicted Profit</Title>
    <DonutChart
      className="mt-6"
      data={cities}
      category="sales"
      index="name"
      valueFormatter={valueFormatter}
      colors={["green", "violet", "indigo", "rose", "cyan", "amber"]}
    />
  </Card>
);

export default PieChart