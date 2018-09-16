import * as React from 'react';
import './App.css';

import logo from './logo.svg';

/*
// interfaces
interface IJob {
  uuid: string,
  title: string,
  normalised_title: string,
  parent_uuid: any,
}

interface ISkill {
  uuid: string,
  name: string,
  onet_element_id: any,
  normalised_name: string,
}


// dummy data

const jobs: IJob[] = [
  {
    uuid: "0001",
    title: "Developer",
    normalised_title: "Developer",
    parent_uuid: null
  },
  {
    uuid: "0002",
    title: "Bus Driver",
    normalised_title: "Bus Driver",
    parent_uuid: null
  },
]

const skills: ISkill[] = [
  {
    uuid: "0010",
    name: "Programming",
    onet_element_id: null,
    normalised_name: "Programming",
  }
]
*/

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
