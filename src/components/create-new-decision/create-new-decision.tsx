import React, { MouseEventHandler } from 'react';

export interface CreateNewDecisionProps {
  createFunction: MouseEventHandler;
}

export default class CreateNewDecision extends React.Component<CreateNewDecisionProps, {}> {

  render() {
    return (
      <div className="create-new-decision" onClick={this.props.createFunction}>
        +
      </div>
    )
  }
}
