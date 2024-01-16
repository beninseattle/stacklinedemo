const loadData = async () => {
  const response = await fetch('/stacklinedemo/stackline_frontend_assessment_data_2021.json');
  const data = await response.json();
  return data;
};

export default loadData;