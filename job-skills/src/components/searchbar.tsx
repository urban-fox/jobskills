import {AppBar, Button, Input, Toolbar, Typography} from '@material-ui/core/';
import SearchIcon from '@material-ui/icons/Search';
import * as React from 'react';

interface IState{
  results: any
}

export class SearchBar extends React.Component<{}, IState> {
  public props: any;
  constructor(props: any){
    super(props);
    this.props = props;
    this.receiveData = this.receiveData.bind(this)
    // this.changeState = this.changeState.bind(this)
    this.searchFunction = this.searchFunction.bind(this)
    /*
    this.state = {
      results: ''
    }*/
  }

  public receiveData(data: any){
    this.props.setJobs(data);
  }

  /*
  public changeState(data: any){
    this.setState({
      results: data
    })
  }
  */

  public searchFunction(e: any){
    // const dummyString = "developer";
    // const currentComponent = this;
    fetch('http://api.dataatwork.org/v1/jobs/autocomplete?contains=developer', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      }
    }).then((response : any) => {
      if (!response.ok) {
        this.setState({results: response.statusText});
      }
      else {
        // response.json().then((data:any) => this.setState({results: data[0].class}))
        // response.json().then((data:any) => alert("notOK! " + JSON.stringify(data)))
        response.json().then((data: any) => this.props.setJobs(data)) // Lift response up to app level
        // response.json().then((data: any) => currentComponent.changeState({results: data})) // set local state
        // response.json().then((data: any) => currentComponent.receiveData(data)) // Lift response up to app level
        // response.json().then((data: any) => currentComponent.setState({results: data})) // Lift response up to app level
      }
      return response
    })
  }



  public render() {
    return (
      <AppBar position="static">
        <Toolbar>
            <Typography variant="display2" color="inherit">
              Job Skills
            </Typography>

            <SearchIcon />
            <Input
              placeholder="Search…"
              disableUnderline={true}
            />
            <Button onClick={this.searchFunction}>
              Search
            </Button>
        </Toolbar>
      </AppBar>
    );
  };
}