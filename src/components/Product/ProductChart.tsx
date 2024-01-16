import { useEffect, useRef } from "react";
import LineChart from "../../charts/LineChart";
import { ProductDataSales } from "../../App";

type ProductChartProps = {
  data: ProductDataSales[];
};
let ChartInitialized = false;
const ProductChart: React.FC<ProductChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(chartRef && chartRef.current && !ChartInitialized) {
      LineChart(chartRef.current, data);
      ChartInitialized = true;
    }
  }, [data]);

  return (
    <div className='product_chart' ref={chartRef} />
  );
};

export default ProductChart;