
import * as React from "react";
import { ItemCard } from "./item-card";

export class CardPanel extends React.Component {
  public classes: any;

  constructor(props: any){
    super(props);
    this.classes = props;
  }


  public render(){
    return(
      <div>
        <ItemCard />
        <ItemCard />
      </div>

    )
  }

}