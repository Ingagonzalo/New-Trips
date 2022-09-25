import React, { useEffect } from 'react'
import { db } from '../utils/firebase'
import {doc, getDoc, collection, getDocs} from "firebase/firestore"

const ContactoPage = () => {
  return (
    useEffect(()=>{
        const getData = async () =>{
             //creo una referencia ESTO ES PARA AGREGAR UNA COLECCION
             const query = collection(db,"items")
             //solicitud
             const response = await getDocs(query)
             console.log(response)
             const productos= response.docs.map(doc =>{
                const newProduct = {
                    ...doc.data(),
                    id: doc.id
                   }
                   return newProduct
             })
             console.log (productos)
   /*
                //creo una referencia ESTO ES PARA AGREGAR UN DOCUMENTO
               //const query = doc(db, "items", "FG67ZDPMhhtBp0qBuMyE"); // referencia creada
                //solicitud de datos
                const response = await getDoc (query);
                //console.log("id", response.id)//importante que obtenga el id
               // console.log("data", response.data())
               const newProduct = {
                ...response.data(),
                id: response.id
               }
               console.log(newProduct)
   */

        }
        getData();
    },[])
  )
}

export default ContactoPage