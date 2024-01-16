import { ProductDataType } from "../App";

const fetchData = async () => {
  const response = await fetch('/stacklinedemo/stackline_frontend_assessment_data_2021.json');
  const data = await response.json() as Promise<ProductDataType[]>;
  return data;
};

export default fetchData;