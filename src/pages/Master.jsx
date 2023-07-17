import React from 'react';

import '../style/master.css'
import Loader from '../pages/Loader'
import { Link } from 'react-router-dom';
const Master = ({data,status}) => {

console.log('obj',data,status)
  const arr=[1,2,3,4,5,6,6]
  if(status) return <Loader/>;

  return (
    <div>
     <section className='productContainer'>
    {
      data.map((product,index)=>(
          <div key={product.id} className='productTeaser'>
  <div className='images'>
<img src={product.image} alt={product.title} />
  </div>
  <div className='title'>
<span>{product.title}</span>
  </div>
  <div className='price'>
    <span>Price:${product.price}</span>
  </div>
  <div>
   <Link to={`/details/${product.id}`} style={{textDecoration:"none"}}>
    <button>Details</button>
   </Link>
  </div>

      </div>
      ))
    }
      </section> 
    </div>
  )
}

export default Master
