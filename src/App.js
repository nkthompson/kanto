import React, { Component } from 'react';
import './App.css';
import { DB_CONFIG } from './Config/config';
import firebase from 'firebase/app';
import 'firebase/database';

import Note from './Note/Note';
import NoteForm from './NoteForm/NoteForm';


class App extends Component {

  constructor(props) {
    super(props);
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    if(!firebase.apps.length){
      firebase.initializeApp(DB_CONFIG);
    }
    this.database = firebase.database().ref().child('notes');

    //set up the React state of our component
    this.state = {
      notes: [],
    }
  }

  componentWillMount(){
    const previousNotes = this.state.notes;

    // data snapshot
    this.database.on('child_added', snap => {
      previousNotes.push({
        id: snap.key,
        noteContent: snap.val().noteContent,
      })

      this.setState({
        notes: previousNotes
      })
    })

    this.database.on('child_removed', snap => {
      for(var i=0; i < previousNotes.length; i++){
        if(previousNotes[i].id === snap.key) {
          previousNotes.splice(i, 1);
        }
      }
    })
  }

  addNote(note){
    //add note into the notes array
    this.database.push().set({ noteContent: note});
  }

  removeNote(noteId) {
    this.database.child(noteId).remove();
  }

  render() {
    return (
      <div className="notesWrapper">
        <div className="notesBody">
          {
            this.state.notes.map((note) => {
              return (
                <Note noteContent={note.noteContent} noteId={note.id} key={note.id} removeNote = {this.removeNote} />
              )
            })  
          }
        </div>
        <div className="notesFooter">
          <NoteForm addNote={this.addNote} />
        </div>
      </div>
    );
  }
}

export default App;
