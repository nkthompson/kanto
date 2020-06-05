import React from 'react';
import '../index.css';

// Components

function Tag(props) {
   return (
      <button className={"container-button border-tag border-all text-color-primary " + props.color + " " + props.group + " " + props.spacing} href={props.href}>
      	<p className="int-sm">{props.title}</p>
      </button>
    );
}

export default Tag;