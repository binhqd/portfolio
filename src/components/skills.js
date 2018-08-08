import React, { Component } from 'react';
import ListItem from './ListItem';

class Skills extends Component {
  constructor(props) {
    super(props);
  }

  updateSkillBars() {
    window.updateBars();
  }

  componentDidMount() {
    this.updateSkillBars();
  }

  componentDidUpdate() {
    this.updateSkillBars();
  }

  render() {
    console.log('Skills::render()');

    const skills = this.props.skills;

    if (!skills) {
      return <div />;
    }

    const template = function (skill, index) {
      return (
        <div className="item" key={index}>
          <h3 className="level-title">{ skill.title }</h3>
          <div className="level-bar">
            <div className="level-bar-inner" data-level={`${skill.level}%`} />
          </div>
        </div>
      );
    };

    return (
      <section className="skills-section section">
        <h2 className="section-title">
          <i className="fa fa-rocket" />
          Technical Specialist
        </h2>
        {
          Object.keys(skills).map((key, index) => {
            let details = null;
            if (skills[key].description) {
              details = skills[key].description.map((item, j) => {
                if (item.values) {
                  return (
                    <ListItem
                      item = {item}
                    />
                  )
                } else {
                  return (
                    <p key={j}>{ item }</p>
                  )
                }
              });
            }

            return (
              <div key={index}>
                <h3>{key}</h3>
                { details}
                <div className="skillset">
                  { skills[key].tools.map(template) }
                </div>
                {
                  skills[key].extra &&
                  <p><b>Extra</b>: { skills[key].extra.join(', ') }</p>
                }

                {
                  skills[key].projects &&
                  <p><b>Projects</b>: { skills[key].projects.map(item => item.name).join(', ') }</p>
                }
              </div>
            )
          })
        }
      </section>
    );
  }
}

export default Skills;
