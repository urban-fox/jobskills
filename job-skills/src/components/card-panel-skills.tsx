
import * as React from "react";
import { ItemCard } from "./item-card";


export class CardPanelSkills extends React.Component<{},{}> {
  public props: any;

  constructor(props: any){
    super(props);
    this.props = props;
  }

  // getSkills=this.props.getSkills(jobID)



  public render(){
    const skills = this.props.skills? this.props.skills.map((skill: any) =>
      <ItemCard title={skill.name} detail={skill.description} key={skill.skill_uuid} />
    ) : ""
    ;

    return(
      
      <div>
        <ul>
          {skills}
        </ul>
      </div>

    )
  }

}