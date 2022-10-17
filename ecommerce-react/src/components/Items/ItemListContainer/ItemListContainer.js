import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {db} from '../../../utils/firebase' 
import { collection, getDocs,where,query } from 'firebase/firestore';
const ItemListContainer = () => {

  const {categoryId}= useParams();
  const [data, setData] = useState([]);

  useEffect(()=>{
    const queryRef = !categoryId ? collection(db,"items") : query(collection(db,"items"),where("category","==",categoryId));
     
      getDocs(queryRef).then(res=>{
        const resultados = res.docs.map(doc=>{
          const newItem ={
            id:doc.id,
            ...doc.data(),
            
          }
          return newItem
          
        })
        setData(resultados)
      })
    }
    
  ,[categoryId])
  

    

  return (
    <div className="itemListContainer">
      <div >
       
         {!data ? (<h3>Cargando...</h3>) : (<ItemList data={data}/>)}
      </div>
      
    </div>
  )
}

export default ItemListContainer

