import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Card = (props) => {
    return (
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div class="card p-0 overflow-hidden h-100 shadow">
                <img src={props.img} class="card-img-top img-fluid" alt='property for rent'/>
                <div class="card-body text-centre">
                    <h5 class="card-title">{props.title}</h5>
                    <h5 class="card-price">Rs.{props.price}/mon.</h5>
                    <p class="card-text">{props.location}</p>
                    <p class="card-text">{props.stateLoc}</p>
                <button class="btn btn-success" >Rent<i class="fas fa-sort-numeric-down"></i></button>
                </div>
            </div>

        </div>

    )
}

export default Card