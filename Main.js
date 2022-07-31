import React from 'react';
import Card from './Card';
import Data from './Components/Data';
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Main = () => {
  console.warn(Data.housedata)
  return (

    <>
    <h1 className='text- center mt-3'></h1>
    <section className='py-4 container'>
    <div className='row justify-content-center'>
    {Data.housedata.map((item)=>{
      return( <Card img={item.img} price={item.price} title={item.housetype} location={item.location} stateLoc={item.stateLoc}  />)
     
    })}
    </div></section>
    </>
  );
}
export default Main