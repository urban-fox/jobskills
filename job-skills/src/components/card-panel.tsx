
import Button from '@material-ui/core/Button';
import * as React from "react";
import { ItemCard } from "./item-card";

interface IProps {
  setJobs: (e: any) => void
}
export class CardPanel extends React.Component<IProps> {

  constructor(props: any){
    super(props);
  }


  public render(){
    return(
      
      <div>
        <Button onClick={this.props.setJobs}>Greet</Button>
        <ItemCard />
        <ItemCard />
      </div>

    )
  }

}