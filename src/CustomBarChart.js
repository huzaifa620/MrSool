import { Card, Title, BarChart, Subtitle } from "@tremor/react";

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

const CustomBarChart = () => (
  <Card className="rounded-tremor-xl bg-gray-50 hover:bg-gray-100 shadow-2xl">
    <Title>Number of species threatened with extinction (2021)</Title>
    <Subtitle>
      The IUCN Red List has assessed only a small share of the total known species in the world.
    </Subtitle>
    <BarChart
      className="mt-6"
      data={chartdata}
      index="name"
      categories={["Average Earnings"]}
      colors={["green"]}
      valueFormatter={dataFormatter}
      yAxisWidth={48}
    />
  </Card>
);

export default CustomBarChart;
