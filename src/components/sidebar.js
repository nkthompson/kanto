import React, { Component } from 'react';
import '../index.css';

// Components
import Button from '../components/button';
import Title from '../components/title';
import PlusButton from '../components/plus';
import Input from '../components/input';
import Client from '../components/client';

class SideBar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
   return (
      <div>
        <div className="interior-sidebar">
          <div className="">
            <Title title="Clients" spacing="ext-bottom-lg" />
            <PlusButton color="color-tag" group="vertical-bottom align-right" />
          </div>
          <div className="">
            <Client title="Client" color="color-tag" />
            <p className="ext-bottom-md"><a>Project</a></p>
            <p className="ext-bottom-md"><a>Project</a></p>
            <Client title="Client" color="color-tag" />
            <p className="ext-bottom-md"><a>Project</a></p>
            <p className="ext-bottom-md"><a>Project</a></p>
            <Client title="Client" color="color-tag" />
            <p className="ext-bottom-md"><a>Project</a></p>
            <p className="ext-bottom-md"><a>Project</a></p>
          </div>
        </div>
        <div className="footer">
        </div>
      </div>
    )
  }
}

export default SideBar;