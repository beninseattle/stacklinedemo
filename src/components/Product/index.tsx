import ProductDetail from './ProductDetail';
import ProductChart from './ProductChart';
import ProductData from './ProductData';
import './Product.css';

import { ProductDataType } from '../../App';

type ProductProps = {
  item: ProductDataType;
};

const Product: React.FC<ProductProps> = ({item}) => {
  return (
    <div className='product'>
      <ProductDetail
        title={item.title}
        image={item.image}
        subtitle={item.subtitle}
        tags={item.tags}
        />
      <ProductChart data={item.sales}/>
      <ProductData />
    </div>
  );
}

export default Product;