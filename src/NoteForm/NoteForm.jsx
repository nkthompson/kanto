import React, { Component } from 'react';
import './NoteForm.css';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

class NoteForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			newNoteContent: '',
		};
		this.handleUserInput = this.handleUserInput.bind(this);
		this.writeNote = this.writeNote.bind(this);
	}

	//Sets note content to value inside of input box
	handleUserInput(e){
		this.setState({
			newNoteContent: e.target.value, //text input value
		})
	}

	writeNote() {
		//sets the noteContent for the note to the value of the input
		this.props.addNote(this.state.newNoteContent);
		//set newNoteContent back to empty string
		this.setState({
			newNoteContent: '',
		})
	}

	render() {
		return(
			<div className="formWrapper">
				<input className="noteform-input"
				placeholder="Write a new note..."
				value={this.state.newNoteContent}
				onChange={this.handleUserInput} />
				<Button color="color-primary text-color-inverse"
				onclick={this.writeNote} title="Add Note" />
			</div>
		)
	}
}

export default NoteForm;