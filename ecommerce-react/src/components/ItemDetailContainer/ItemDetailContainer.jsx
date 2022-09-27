import React, {useEffect, useState}from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail'
import {doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../../utils/firebase';

const ItemDetailContainer = () => {

  const [dataDetail, setDataDetail]= useState({});
  const  {detalleId} = useParams();

  useEffect(()=>{
      const getDataDetail = async()=>{
        //creamos la referencia
        const queryRef = doc(db,"items",detalleId)
        //se hace la solicitud a firebase
      const response = await getDoc(queryRef);
      const newItem ={
        id:response.id,
        ...response.data(),
        
      }
      console.log(newItem);
      setDataDetail(newItem)
      }
      getDataDetail();
    },[detalleId]);



  // useEffect(()=>{
  //   const getDataDetail = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(dataList)
  //     }, 2000);
  //   });
  //   getDataDetail.then(res => setDataDetail(res.find(producto => producto.title === detalleId)))
  // },[detalleId]);



  return (
    <ItemDetail dataDetail={dataDetail}/>
  )
}

export default ItemDetailContainer
{/* getDataDetail.then(res => {
  const newProductsDetail = res.filter(item=>item.id === ItemID); // filtra todos los elementos del array que cumpla con cierta condicion//
  setData(newProducts) // seteo estos valores que filtre//
 })
}, [categoryId]); //lo coloco porque es mi parametro que va a estar cambiando, al estar cambiando mi funcion se va iniciar nuevamente*/}

