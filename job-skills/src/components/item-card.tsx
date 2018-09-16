import { Card, CardContent } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import * as React from "react";

export class ItemCard extends React.Component {
  public classes: any;

  constructor(props: any){
    super(props);
    this.classes = props;
  }


  public render(){
    return(
      <Card className={this.classes.card}>
        <CardContent>
          <Typography variant="headline">
            Card Title
          </Typography>
          <Typography variant='body1'>
            Description text
          </Typography>
        </CardContent>
      </Card>
    )
  }

}