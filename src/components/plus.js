import React from 'react';
import '../index.css';
import { Plus } from 'react-feather';

// Components


function PlusButton(props) {
   return (
      <button className={"border-round" + " " + props.group + " " + props.color}  href={props.href}>
      		<div className="inline icon">
				<Plus color='#000000' size={16} />
			</div>
      </button>
    );
}

export default PlusButton;