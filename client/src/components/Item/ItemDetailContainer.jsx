import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import LoadingSpinner from '../ui/LoadingSpinner';
import ItemDetail from './ItemDetail';
import { useNavigate } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();

  const [user, setUser] = useState(window.localStorage.getItem("auth_user"));
  const navigate = useNavigate();

  useEffect(() => {
    if(user){
      async function fetchData() {
        await fetch(`https://fakestoreapi.com/products/${itemId}`)
        .then(response => response.json())
        .then(product=>{
          setItem(product);
        })
        .catch(err => console.error(err));
      }
      fetchData();
    }else{
      navigate(`/signin`);
    }
    
  }, [itemId]);

  return item ? <ItemDetail {...item} /> : <LoadingSpinner />;
};

export default ItemDetailContainer;
