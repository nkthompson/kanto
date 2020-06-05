import React, { Component } from 'react';
import '../index.css';
import PropTypes from 'prop-types';
import Button from '../components/button';
import Tag from '../components/tag';

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
			<div className="write bg-color-secondary border-thick">
				<Tag title="finance" color="color-accent text-color-inverse" spacing="ext-md" />
				<hr className="write-line" />
				<div className="ext-md">
					<input className="inline"
					placeholder="Write a new note..."
					value={this.state.newNoteContent}
					onChange={this.handleUserInput} />
					<Button color="color-primary text-color-inverse" spacing="inline"
					onclick={this.writeNote} title="Add Note" />
				</div>
			</div>
		)
	}
}

export default NoteForm;