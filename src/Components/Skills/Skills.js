import React, { Fragment } from "react";
import "./Skills.css";
import Skill from "./Skill/Skill";

class Skills extends React.Component {
  

  skills = [
      {
        "skillName" : "Unity3D",
        "value" : "90"
      },
      {
        "skillName" : "C#",
        "value" : "90"
      },
      {
        "skillName" : "Python",
        "value" : "80"
      },
      {
        "skillName" : "ASP.NET",
        "value" : "70"
      },
      {
        "skillName" : "AR/VR",
        "value" : "80"
      },
      {
        "skillName" : "HTML/CSS",
        "value" : "70"
      }
  ]
  
  renderSkills = () => {
    let rows = [];
    for (let i = 0; i < this.skills.length; i++)
    {
      let skill = this.skills[i]
      rows.push(<Skill skillName={skill.skillName} value={skill.value} />) 
    }

    return (rows)
  }
  
  render() {
    return (
      <div className="skills">
        <h1 className="skills-heading">Skills</h1>
        <div className="skills-content">
          {this.renderSkills()}
        </div>
      </div>
    );
  }
}

export default Skills;