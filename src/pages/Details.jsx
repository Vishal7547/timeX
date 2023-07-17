import React from 'react'
import '../style/details.css'
import { useState } from 'react'
import {useParams} from 'react-router'
const Details = ({data}) => {
  const {id}=useParams();


const product=data.find((x)=>x.id===Number(id));



  return (
    <div>
  <section>
    <div className='DetailsContainer'>
      <div className='ImageDetails'><img src={product?.image} alt="" /></div>
      <div className='parts'>
        <p style={{fontSize:"2rem"}}><b>{product?.category}</b></p>
        <p>{product?.title}</p>
        <p style={{fontSize:"1.5rem"}}>price:${product?.price}</p>
        <span>{product?.rating.rate}</span>
        <span>total item:{product?.rating.count}</span>
        <p>{product?.description}</p>

      </div>
    </div>
  </section>
    </div>
  )
}

export default Details
