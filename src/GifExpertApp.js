import React, {useState} from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
  
  //const category = ['One Punch', 'Samurai X', 'Dragon Ball']; no podria cambiarse y re renderizarse
  const [category, setCategory] = useState([]);

  /*
    const handleAdd = () => {
        setCategory([...category, 'Hunter x Hunter']);
        // setCategory( cate => [...cate, 'Hunter x Hunter']); otra forma de hacerlo
    }
  */  

  return (
    <>
      <h2> <span className='white'>GIFT FINDER  </span>Yopal JS</h2><hr/>
      <AddCategory setCategory = {setCategory}/>
      
      {/*<button onClick={handleAdd}>Agregar</button>*/}

      <ol>
        {
            //map recibe dos argumentos el primer es el elemento y el segundo es el indice
            category.map((itemCategory) => 
              <GifGrid 
                key={itemCategory} 
                category={itemCategory}/>
            )
        }
      </ol>
    </>
  );
}

export default GifExpertApp;