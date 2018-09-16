import { Card, CardContent } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import * as React from "react";
import { themes } from "./../theme";

interface IState{
  theme: any
}
export class ItemCard extends React.Component<{}, IState> {
  public props: any;

  constructor(props: any){
    super(props);
    this.props = props;
    this.state = {
      theme: themes.light
    }
  }

  
  public test(text: any){
    alert(text);
    return text;
  }

  public clickHandler(jobID: any){
    this.props.clickHandler(jobID);
    this.setState (
      {theme: themes.dark}
    )
  }
  
  
  public render(){
    const title = this.props.title;
    const detail = this.props.detail;
    // const clickHandler = this.props.clickHandler;
    // const clickHandler = this.test;
    return(
      <Card onClick={this.clickHandler ? this.clickHandler.bind(this, this.props.jobID): null} 
        style={{backgroundColor: this.state.theme.background, color: this.state.theme.foreground}}>
        <CardContent>
          <Typography variant="headline" style={{color: this.state.theme.foreground}}>
            {title}
          </Typography>
          <Typography variant='body1'style={{color: this.state.theme.foreground}}>
            {detail}
          </Typography>
        </CardContent>
      </Card>
    )
  }

}