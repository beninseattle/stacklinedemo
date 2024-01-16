import { AgGridReact } from "ag-grid-react";
import { ProductDataSales } from "../../App";

type ProductChartProps = {
  data: ProductDataSales[];
};

const ProductData: React.FC = () => {
  return (
    <div className='product_data'>
      <AgGridReact />
    </div>
  );
};

export default ProductData;