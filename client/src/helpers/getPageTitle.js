import { useParams } from 'react-router-dom';

const getPageTitle = () => {
  const { categoryId } = useParams();
  return categoryId ? categoryId : 'All Products';
};

export default getPageTitle;
