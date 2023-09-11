import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { CSVLink } from "react-csv";

export function Description(){
    const[input,setInput]=useState([])

    var {id}=useParams()
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/'+id)
        .then(res=>res.json())
        .then(store=>setInput(store))
    })
    const headers =[
        {label:"ID",key:"id"},
        {label:"TITLE",key:"title"},
        {label:"PRICE",key:"price"},
        {label:"CATEGORY",key:"category"},
    ]
    return(
        <>
        
        <div className="container-fluid row">
            <div className="col-lg-6">
                <img src={input.image} className="img mt-4"/>
                
            <h1 className="text-center">{input.title}</h1>
            
                <p className="text-center mt-4">{input.category}</p>

                
                <p className="text-center mt-2">{input.description}</p>
                <CSVLink data={[input]} headers={headers} filename={'products.csv'}><button className='btn btn-success buttonOne'>DOWNLOAD</button></CSVLink>
                
            </div>
        </div>
        </>
    );
}