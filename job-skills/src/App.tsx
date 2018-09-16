import { Grid } from "@material-ui/core";
import * as React from 'react';
import './App.css';

import { CardPanel } from "./components/card-panel";
import { CardPanelSkills } from "./components/card-panel-skills";
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
  displayedJobs: any[],
  selectedJobs: any[],
  displayedSkills: any[]
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
    this.getSkills = this.getSkills.bind(this);
    this.state = {
      displayedJobs: [],
      selectedJobs: [],
      displayedSkills: []
    };
  }

  public setJobs(jobs: any){
    this.setState(
      {displayedJobs: jobs}
    );
  }

  
  public getSkills(jobID: any){
    // clear skills
    this.setState({
      displayedSkills: [],
      selectedJobs: [jobID]
    })
    if (jobID === undefined){return;}
    else {
      fetch('http://api.dataatwork.org/v1/jobs/' + jobID + '/related_skills', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      }
    }).then((response : any) => {
      if (!response.ok) {
        let temp = 5;
        temp = temp + 1;
      }
      else {
        response.json().then((data: any) => {this.setState({
          displayedSkills: data.skills
        });
        // test
        // alert("skills updated");
        }
        )
      }
      });
    }
  }


  public render() {
    const jobs = this.state.displayedJobs;
    const selectedJobs = this.state.selectedJobs;
    const skills = this.state.displayedSkills;
    return (
      <div className="App">
        <SearchBar setJobs={this.setJobs} />
        <Grid container={true} spacing={16}>
          <Grid item={true} xs={6}>
            <h1>Jobs</h1>
            <CardPanel jobs={jobs} selectedItems={selectedJobs} getSkills={this.getSkills} />
          </Grid>
          <Grid item={true} xs={6}>
            <h1>Associated Skills</h1>
            <CardPanelSkills skills={skills} />
          </Grid>
      </Grid>
      </div>


    );
  }
}

export default App;
