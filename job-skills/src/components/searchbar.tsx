import { Grid } from "@material-ui/core";
import {AppBar, Button, Input, Toolbar, Typography} from '@material-ui/core/';
import SearchIcon from '@material-ui/icons/Search';
import * as React from 'react';

interface IState{
  searchString: string,
  results: any
}

export class SearchBar extends React.Component<{}, IState> {
  public props: any;
  constructor(props: any){
    super(props);
    this.props = props;
    this.state = {
      searchString: "",
      results: ""
    }
    this.receiveData = this.receiveData.bind(this)
    // this.changeState = this.changeState.bind(this)
    this.searchFunction = this.searchFunction.bind(this)
    this.handleChange = this.handleChange.bind(this)
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
    if (this.state.searchString){
      fetch('http://api.dataatwork.org/v1/jobs/autocomplete?contains=' + this.state.searchString, {
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
  }

  public handleChange(event: any = "") {
    this.setState({searchString: event.target.value? event.target.value: ""})
    event.preventDefault();
  }

  public render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Grid container={true} spacing={8}>
            <Grid item={true} xs={4}>
              <Typography variant="display2" color="inherit">
                Job Skills
              </Typography>
            </Grid>
            <Grid item={true} xs={6}>
              <SearchIcon />
              <Input
                placeholder="Search…"
                disableUnderline={true}
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item={true} xs={2}>
              <Button 
                color="inherit"
                onClick={this.searchFunction}>
                Search
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  };
}