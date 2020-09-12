import React, {useState, useEffect} from "react";
import {getProducts} from "./helper/coreapicall";
import Base from "./Base";

import "../styles.css";
import Card from "./Card";
export default function Home(){
    const [product, setProducts]=useState([]);
    const [error, setError]=useState(false);
    const loadAllProducts=()=>{
        getProducts().then((data)=>{
            if(data.error){
                setError(data.error);
                console.log(error);
            }else{
                setProducts(data);
            }
        });
    };
    useEffect(()=>{
        loadAllProducts();
    }, []);
    return(
       <h1>hi</h1>
    )
}