import { AgGridReact } from "ag-grid-react";
import { ProductDataSales } from "../../App";
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { ColDef } from "ag-grid-community";

type ProductChartProps = {
  data: ProductDataSales[];
};

const ProductData: React.FC<ProductChartProps> = ({ data }) => {
  const columnDefs: ColDef<ProductDataSales>[] = [
    {
      field: 'weekEnding',
      cellDataType: 'date'
    }, {
      field: 'retailSales',
      cellDataType: 'number',
      valueFormatter: v => (v.data?.retailSales!).toLocaleString("en-US", {style:"currency", currency:"USD", maximumFractionDigits: 0})
    }, {
      field: 'wholesaleSales',
      cellDataType: 'number',
      valueFormatter: v => (v.data?.retailSales!).toLocaleString("en-US", {style:"currency", currency:"USD", maximumFractionDigits: 0})
    }, {
      field: 'unitsSold',
      cellDataType: 'number',
      valueFormatter: v => (v.data?.retailSales!).toLocaleString("en-US", {style:"currency", currency:"USD", maximumFractionDigits: 0})
    }, {
      field: 'retailerMargin',
      cellDataType: 'number',
      valueFormatter: v => (v.data?.retailSales!).toLocaleString("en-US", {style:"currency", currency:"USD", maximumFractionDigits: 0})
    }
  ];
  return (
    <div className="ag-theme-quartz" style={{ height: 500 }}>
      <AgGridReact rowData={data} columnDefs={columnDefs} />
    </div>
  );
};

export default ProductData;