import { ProductDataType } from "../App";

const fetchData = async () => {
  const response = await fetch('/stacklinedemo/stackline_frontend_assessment_data_2021.json');
  const data = await response.json() as Promise<ProductDataType[]>;

  // Map sales date strings to date objects
  (await data).forEach(product => {
    product.sales.forEach(sale => {
      sale.weekEnding = new Date(sale.weekEnding as any as string);
    })
  })
  return data;
};

export default fetchData;