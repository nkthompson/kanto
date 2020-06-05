import React from 'react';
import '../index.css';

// Components
import PlusButton from '../components/plus';


function Client(props) {
   return (
	   	<div className="">
	      <button className={"border-round button-height" + " " + props.group + " " + props.color + " " + props.spacing}  href={props.href}>
				<span className="weight-bold">{props.title}</span>
	      </button>
	      <div className="vertical-bottom align-right">
				<PlusButton color="color-tag" />
		  </div>
		</div>
    );
}

export default Client;