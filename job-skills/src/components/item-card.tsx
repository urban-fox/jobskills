import { Card, CardContent } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import * as React from "react";

export class ItemCard extends React.Component {
  public props: any;

  constructor(props: any){
    super(props);
    this.props = props;
  }

  
  public test(text: any){
    alert(text);
    return text;
  }
  
  
  public render(){
    const title = this.props.title;
    const detail = this.props.detail;
    const clickHandler = this.props.clickHandler;
    // const clickHandler = this.test;
    return(
      <Card onClick={clickHandler ? clickHandler.bind(this, this.props.jobID): null}>
        <CardContent>
          <Typography variant="headline">
            {title}
          </Typography>
          <Typography variant='body1'>
            {detail}
          </Typography>
        </CardContent>
      </Card>
    )
  }

}