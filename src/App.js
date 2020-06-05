import React, { Component } from 'react';
import './App.css';
import './index.css';
import {Row, Col} from 'react-grid-system';
import { setConfiguration } from 'react-grid-system';
import { DB_CONFIG } from './Config/config';
import firebase from 'firebase/app';
import 'firebase/database';

import Note from './components/note';
import NoteForm from './components/noteform';
import TopBar from './components/topbar';
import SideBar from './components/sidebar';


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
      <div className="bg-color-primary">
        <Row>
          <Col sm={2} md={2} lg={2} xl={2} className="container-sidebar border-right color-tag">
            <SideBar />
          </Col>
          <Col sm={10} md={10} lg={10} xl={10}>
            <div className="container-page bg-color-primary">
              <TopBar />
              <div className="interior-page">
                <Row>
                  <Col xl={12}>
                    <div>
                      {
                        this.state.notes.map((note) => {
                          return (
                            <Note noteContent={note.noteContent} noteId={note.id} key={note.id} removeNote = {this.removeNote} />
                          )
                        })  
                      }
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="footer bg-color-primary">
                <Row>
                  <Col xl={10}>
                    <NoteForm addNote={this.addNote} />
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
