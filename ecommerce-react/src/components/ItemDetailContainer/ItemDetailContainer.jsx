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
        const queryRef = doc(db,"items",detalleId)
      const response = await getDoc(queryRef);
      const newItem ={
        id:response.id,
        ...response.data(),
        
      }
      setDataDetail(newItem)
      }
      getDataDetail();
    },[detalleId]);




  return (
    <ItemDetail dataDetail={dataDetail}/>
  )
}

export default ItemDetailContainer
