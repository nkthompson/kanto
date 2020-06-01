import React, { Component } from 'react';
import './Note.css';
import PropTypes from 'prop-types';

class Note extends Component {

	constructor(props) {
		super(props);
		this.noteContent = props.noteContent;
		this.noteId = props.noteId;
		this.handleRomoveNote = this.handleRomoveNote.bind(this);
	}

	handleRomoveNote(id) {
		this.props.removeNote(id);
	}

	render(props) {
		return(
			<div className="note fade-in">
				<span className="closebtn" 
					onClick={() => this.handleRomoveNote(this.noteId)}>
					&times;
				</span>
				<p className="noteContent">{this.noteContent}</p>
			</div>
		)
	}
}

Note.propTypes = {
	noteContent: PropTypes.string
}

export default Note;