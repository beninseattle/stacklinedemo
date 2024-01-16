import { useEffect, useState } from 'react';
import fetchData from './util/loadData';
import Header from './components/Header';
import Product from './components/Product';
import './App.css';

export type ProductDataDetails = {
  id: string;
  title: string;
  image: string;
  subtitle: string;
  brand: string;
  reviews: {
    customer: string;
    review: string;
    score: number;
  }[]
  retailer: string;
  details: string[];
  tags: string[];
};
export type ProductDataSales = {
  weekEnding: Date;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}
export type ProductDataType = ProductDataDetails & {
  sales: Array<ProductDataSales>;
};

const App: React.FC = () => {
  const [data, setData] = useState<ProductDataType[]>([]);
  useEffect(() => {
    fetchData().then(data => setData(data));
  }, []);
  
  return (
    <div>
      <Header />
      {data.map((item) => (<Product item={item} key={item.id} />))}
    </div>
  );
}

export default App;
