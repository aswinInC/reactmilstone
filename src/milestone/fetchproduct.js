import 'bootstrap/dist/css/bootstrap.css'
import React, { useEffect, useState } from 'react';
import { CSVLink } from 'react-csv';

import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

export function Products() {
    const [count,setCount]=useState(0)
    const [insidedata, setInsidedata] = useState([]);
    
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/")
            .then((extract) => extract.json())
            .then((data) => setInsidedata(data))
    })

    const headers =[
        {label:"ID",key:"id"},
        {label:"TITLE",key:"title"},
        {label:"PRICE",key:"price"},
        {label:"CATEGORY",key:"category"},
    ]

    return (
        <>
            <div className="d-flex justify-content-between">
                <h3>FLIPKART</h3>
                <CSVLink data={insidedata} headers={headers} filename={'products.csv'}><button className='btn btn-success buttonOne'>DOWNLOAD</button></CSVLink>
                
            </div>
            <hr/>
            <div className='d-flex flex-column justify-content-evenly'>
               
                    <table>
                        <tr>
                            <th>Image</th>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Rating</th>
                            <th>Pricing</th>
                            <th>Count</th>
                        </tr>
                        {
                        insidedata.map((value, index) =>(
                        <>
                            <tr>
                                <td><img src={value.image} className='cut' /> </td>
                                <td>{value.id}</td>
                                <td>{value.title}</td>
                                <td>{value.category}</td>
                                <td>{value.rating.rate} <br/>
                                <StarRatings
                                    rating={value.rating.rate}
                                    starDimension='20px'
                                    starSpacing='2px'
                                    starRatedColor='gold'/>
                                </td>
                                <td>{value.price}</td>
                                <td><button className='btn btn-primary' onClick={()=>{setCount(count+1);}}>+</button>
                                      <p>{count}</p>
                                     <button className='btn btn-primary' onClick={()=>{setCount(count-1)}}>-</button>
                                </td>
                                <td>
                                    <Link to={`/productdetails/${value.id}`}>
                                    <button className='btn btn-warning'>View</button></Link>
                                </td>
                                

                            </tr>
                        </>
                        
                        ))
}
                    </table>
                
            </div>
        </>
    );
}