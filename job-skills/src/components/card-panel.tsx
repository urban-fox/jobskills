
import * as React from "react";
import { ItemCard } from "./item-card";


export class CardPanel extends React.Component<{},{}> {
  public props: any;

  constructor(props: any){
    super(props);
    this.props = props;
  }

  // getSkills=this.props.getSkills(jobID)
  


  public render(){
    const jobs = this.props.jobs? this.props.jobs.map((job: any) =>
      <ItemCard 
        selected={this.props.selectedItems.find((x: any) => x === job.uuid)}
        title={job.suggestion} 
        detail={""} key={job.uuid} 
        jobID={job.uuid} 
        clickHandler={this.props.getSkills}/>
    ) : ""
    ;

    return(
      
      <div>
        <ul>
          {jobs}
        </ul>
      </div>

    )
  }

}