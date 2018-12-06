import React, { Component } from 'react';
import DecisionItem from './models/decision-item.props.model';
import CreateNewDecision from '../create-new-decision/create-new-decision';

export interface DecisionProps {
  data: DecisionItem;
  openPopup(data: DecisionItem): void;
}

export default class Decision extends Component<DecisionProps, {}> {
  constructor(props: DecisionProps){
    super(props);

    this.createNewDecision = this.createNewDecision.bind(this);
  }

  createNewDecision() {
    this.props.openPopup(this.props.data);
  }

  render() {
    return (
        <div className="decision">
          <div className="decision__content">
            {this.props.data.value}
            <CreateNewDecision createFunction={this.createNewDecision}></CreateNewDecision>
          </div>
          <div className="decision__container">
            {this.props.children}
          </div>
        </div>
    )
  }
}
