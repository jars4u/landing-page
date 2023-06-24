import React from 'react';
import PropTypes from "prop-types";

function Jumbo(props) {
    return (
        <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">{props.title}</h1>
                <p className="col-md-8 fs-4">{props.description}</p>
                <button className="btn btn-primary btn-lg" type="button">{props.button}</button>
            </div>
        </div>
    )
}

Jumbo.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    button: PropTypes.string,
}

export default Jumbo;
