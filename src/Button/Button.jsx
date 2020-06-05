import React from 'react';
import '../index.css';
import './Button.css';

// Components

function Button(props) {
	   return (
	      <button onClick={props.onclick} className={"button " + props.color + " " + props.spacing} href={props.href}>
	      	<p className="int-md">{props.title}</p>
	      </button>
	    );
}

export default Button;