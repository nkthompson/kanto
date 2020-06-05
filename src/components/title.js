import React from 'react';
import '../index.css';

// Components

function Title(props) {
   return (
	   	<div className="container-title">
	      <h3 className="interior-title ext-right-sm">
	      	{props.title}
	      </h3>
	      <h3 className="interior-title weight-normal">
	      	{props.subtitle}
	      </h3>
	    </div>
    )
}

export default Title;