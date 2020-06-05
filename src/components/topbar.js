import React, { Component } from 'react';
import {Row, Col} from 'react-grid-system';
import '../index.css';

// Components
import Button from '../components/button';
import Title from '../components/title';

class TopBar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
   return (
        <Row className="container-topbar border-bottom bg-color-primary">
            <Col xl={6} className="interior-topbar">
              <Title title="Client" subtitle="Project Red" />
            </Col>
            <Col xl={6} className="interior-topbar" align="end">
              <Button title="Project Details" color="color-primary" href="/" spacing="buttons" />
              <Button title="Export" color="color-primary" href="/" />
            </Col>
        </Row>
    )
  }
}

export default TopBar;