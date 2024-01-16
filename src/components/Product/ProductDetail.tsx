type ProductDetailProps = {
  title: string;
  image: string;
  subtitle: string;
  tags: string[];
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  title,
  image,
  subtitle,
  tags
}) => {
  return (
    <div className='product_detail'>
      <img src={image} alt={[title, subtitle].join(' ')}/>
      <div className='title'>{title}</div>
      <div className='subtitle'>{subtitle}</div>
      <div className='tags'>{tags.map(tag => (<span key={tag}>{tag}</span>))}</div>
    </div>
  );
};

export default ProductDetail;