import React from 'react';

const Footer = (props) => {
    return (
        <div className="row bg-dark pt-2" style={{ color: "white", height: "100px", margin: "auto"}}>
            <div className="col-md-12 text-center mt-4">
                <span>{props.copyright}</span>
            </div>
        </div>
    )
};

export default Footer;

// Copyright © React Website