import React, { Fragment } from "react";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import "./Skill.css";

class Skill extends React.Component {
  render() {
    return (
        <div className="skill">
            <div className="skill-content">
                <label className="skill-name">{this.props.skillName}</label>
                <Progress percent={this.props.value} />
            </div>
        </div>
    );
  }
}

export default Skill;