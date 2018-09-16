import { Card, CardContent } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import * as React from "react";

export class ItemCard extends React.Component {
  public props: any;

  constructor(props: any){
    super(props);
    this.props = props;
  }


  public render(){
    const title = this.props.title;
    const detail = this.props.detail;
    const clickHandler = this.props.clickHandler;
    return(
      <Card onClick={clickHandler(this.props.jobID)}>
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