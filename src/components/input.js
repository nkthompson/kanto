import React from 'react';
import {Row, Col} from 'react-grid-system';
import '../index.css';

// Components

function Input(props) {
   return (
		<div className="border-all border-tag">
			<form className={"ext-left-sm ext-right-sm " + props.color}>
				<input className={props.color} type="text" id="write" name="write" placeholder={props.placeholder} />
			</form>
		</div>
    );
}

export default Input;