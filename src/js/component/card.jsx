import React from 'react';
import PropTypes from "prop-types";

function Card(props) {
    return (
        <div className = "card ms-2 me-2">
            <div className = "card-body">
                <img src = {props.LinkImg} className='card-img-top' alt='' />
                <h5 className = "card-title">
                    {props.title}
                </h5>

            </div>
        </div>
    )
}



export default Card;
