import React from 'react';
import './filterui.css';
import Data from "./Data";

const Filterui = () => {

    return (
        <>
            <div className="filtercontainer">


                <div className="location">
                    <h4 className="locationcontainer">Location</h4>
                    <select value="Location">
                        <option>Rajouri Garden</option> <option>Shahadra</option>
                        <option>Rohini</option></select></div>

                <div className="when"><h4 className="whencontainer">
                    When</h4>
                    <select value="When">
                        <option>Rajouri Garden</option> <option>Shahadra</option>
                        <option>Rohini</option></select>
                </div>

                <div className="price"><h4 className="pricecontainer">Price</h4>
                    <select value="price">
                        <option>Rs.5000</option> <option>Rs.9000</option>
                        <option>Rs.50000</option></select>
                </div>
                <div className="housetype"><h4>Housetype</h4> <select value="house">
                    <option>2bhk</option> <option>3bhk</option>
                    <option>4bhk</option></select>

                </div>
                <div className="Search"><button> Search</button></div>







            </div>
        </>
    )
}

export default Filterui