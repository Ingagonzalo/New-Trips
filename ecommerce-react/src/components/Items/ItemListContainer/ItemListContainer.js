import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {db} from '../../../utils/firebase' // importo mi base de datos de firebase
import { collection, getDocs,where,query } from 'firebase/firestore';
const ItemListContainer = () => { /*realizo la promesa */

  const {categoryId}= useParams();
  console.log('categoryId', categoryId)
  const [data, setData] = useState([]);

  useEffect(()=>{
    const queryRef = !categoryId ? collection(db,"items") : query(collection(db,"items"),where("category","==",categoryId));//anado mi filtro
     
      getDocs(queryRef).then(res=>{
        const resultados = res.docs.map(doc=>{
          const newItem ={
            id:doc.id,
            ...doc.data(),
            
          }
          return newItem
          
        })
        console.log(resultados)
        setData(resultados)
      })
    }
    //creamos la referencia de la coleccion
    
  ,[categoryId])
  
  return (
    <div className="itemListContainer">
      <div >
         <ItemList data={data} />
      </div>
      
    </div>
  )
}

export default ItemListContainer

