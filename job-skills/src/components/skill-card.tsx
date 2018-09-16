import { Card, CardContent } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import * as React from "react";
import { themes } from "./../theme";

interface IState{
  theme: any
}
export class SkillCard extends React.Component<{}, IState> {
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

  
  public render(){
    const title = this.props.title;
    const detail = this.props.detail;
    const currentTheme = this.props.selected ? themes.dark: themes.light;

    return(
      <Card 
        style={{backgroundColor: currentTheme.background, color: currentTheme.foreground}}>
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