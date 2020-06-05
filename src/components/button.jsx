import React from 'react';
import '../index.css';

// Components

function Button(props) {
	   return (
	      <button onClick={props.onclick} className={"button-height border-round text-color-inverse " + props.color + " " + props.spacing} href={props.href}>
	      	<p className="ext-right-md ext-left-md">{props.title}</p>
	      </button>
	    );
}

export default Button;