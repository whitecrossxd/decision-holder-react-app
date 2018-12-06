import React, { Component } from 'react';
import Decision from '../decision/decision';
import DecisionLevelProps from './models/decision-level.props.model'

export default class DecisionsLevel extends Component<DecisionLevelProps, {}> {

  private ITEM_WIDTH = 500;

  calculateParentLines() {
    const itemsCount = this.props.levelItems.length;
  }

  render() {
    let xPos = '50%';
    return (
      <div className="decisions-level">
        {
          this.props.levelItems.map((item, i) => {
            return (
              <Decision key={`${i}`} data={item} openPopup={this.props.openPopup}>
                <div className="decision__line-container">
                  <svg className="decision__line">
                    <rect x="0" y="0" width="100%" height="100%"></rect>
                  </svg>
                </div>
              </Decision>
            )
          })
        }
        <div className="decision-level__lines">
          <svg>
            <g>
              <rect x={xPos} y="0" width="1px" height="31px"></rect>
            </g>
          </svg>
        </div>
      </div>
    )
  }
}
