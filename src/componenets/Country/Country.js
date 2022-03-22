import React from 'react';
import './Country.css'


const Country = (props) => {
    const {area, region,name,flags} = props.country
    return (
        <div>
            <div className ='country'>
                <h2>Name: {name.common}</h2>
                <img src={flags.png} alt="" />
                <p>Area: {area}</p>
                <p><small>Region: {region}</small></p>
                
            </div>
        </div>
    );
};

export default Country;
