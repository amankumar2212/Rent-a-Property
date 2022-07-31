import React from 'react';
import Data  from './Data';


const CustomSearch=()=> {
   
    return (
        <>
            <div className='Search'>

                <div className='search-price'>
                    <input type='text' placeholder='Enter Your Price'  />
                </div>

                <div className='search-location'>
                    <input type='text' placeholder='Enter Your Location'  />
                </div>

                <div className='search-housedata'>
                    <input type='text' placeholder='Enter Your House (eg. 2bhk,3bhk etc)'  />
                </div>

                <div className='search-button'>
                    <button >Search </button>
                </div>

            </div>
    
        </>
    )
}

export default CustomSearch