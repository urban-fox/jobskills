import { Grid } from "@material-ui/core";
import * as React from 'react';
import './App.css';

import { CardPanel } from "./components/card-panel";
import { SearchBar } from './components/searchbar';

/*
// interfaces
interface IJob {
  uuid: string,
  title: string,
  normalised_title: string,
  parent_uuid: any,
}
*/
/*
interface IProps {
  setJobs: (jobArray: any[]) => void
}
*/
interface IState {
  displayedJobs: any[]
}
/*
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



class App extends React.Component<{}, IState> {
  // public displayedJobs: IJob[];
  constructor(props: any) {
    super(props);
    this.setJobs = this.setJobs.bind(this);
    this.state = {displayedJobs: [{initial: "one"}, {initial: "two"}]};
  }

  public setJobs(jobs: any){
    // alert(JSON.stringify(jobs));
    
    this.setState(
      {displayedJobs: jobs}
    );
  }

  public render() {
    const jobs = JSON.stringify(this.state.displayedJobs);
    return (
      <div className="App">
        <SearchBar setJobs={this.setJobs} />
        <Grid container={true} spacing={16}>
          <Grid item={true} xs={6}>
            <CardPanel setJobs={this.setJobs} />
            {jobs}
          </Grid>
          <Grid item={true} xs={6}>
            <CardPanel setJobs={this.setJobs}/>
          </Grid>
      </Grid>
      </div>


    );
  }
}

export default App;
