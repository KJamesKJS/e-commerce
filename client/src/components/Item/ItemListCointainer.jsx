import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import LoadingSpinner from '../ui/LoadingSpinner';
import ItemList from './ItemList';

import { useNavigate } from 'react-router-dom';

const ItemListCointainer = () => {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(false);
  const { categoryId, term } = useParams();
  let url = 'https://fakestoreapi.com/products';
  const [user, setUser] = useState(window.localStorage.getItem("auth_user"));
  const navigate = useNavigate();
  
  useEffect(() => {
    if(user){
      setLoading(true);
      url = (categoryId) ? `https://fakestoreapi.com/products/category/${categoryId}`:'https://fakestoreapi.com/products';
      async function fetchData() {
        await fetch(url)
        .then(response => response.json())
        .then(product=>{
          setItems(product);
          if(term){
            const filteredItems = product.filter((item) =>
                item.title.toLowerCase().includes(term.trim().toLowerCase())
            );
            setItems(filteredItems);
          }
        })
        .catch(err => console.error(err));
        setLoading(false);
      }
      fetchData();
    }else{
      navigate(`/signin`);
    }
  }, [categoryId, term]);


  return loading ? (
    <LoadingSpinner text='Loading products...' />
  ) : (
    <ItemList items={items}/>
  );
};
export default ItemListCointainer;
