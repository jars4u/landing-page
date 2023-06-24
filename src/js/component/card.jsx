import React from 'react';
import PropTypes from "prop-types";

function Card(props) {
    return (
        <div class="card" style="width: 18rem;">
            <img src={props.LinkImg} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.description}</p>
                <a href="#" class="btn btn-primary">{props.button}</a>
            </div>
        </div>
    )
}

Card.PropTypes = {
    LinkImg: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    button: PropTypes.string,
}


export default Card;
