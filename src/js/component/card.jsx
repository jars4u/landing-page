import React from 'react';
import PropTypes from "prop-types";

function Card(props) {
    return (
        <div className="card">
            <img src={props.Img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-primary">{props.button}</a>
            </div>
        </div>
    )
}

Card.propTypes = {
    Img: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    button: PropTypes.string,
}


export default Card;
