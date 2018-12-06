import React, { Component, MutableRefObject } from 'react';
import Button from '../button/button';
import DecisionCreationPopupState from './models/decision-creation-popup.state.model';
import DecisionCreationPopupProps from './models/decision-creation-popup.props.model';
import DecisionItem from './../decision/models/decision-item.props.model'

export default class DecisionCreationPopup extends Component<DecisionCreationPopupProps, DecisionCreationPopupState> {

  constructor(props: DecisionCreationPopupProps) {
    super(props);

    this.state = {
      error: null
    };

    this.createNewDecision = this.createNewDecision.bind(this);
  }

  public input: MutableRefObject<HTMLInputElement> = React.createRef();

  createNewDecision(){
    if (this.input.current.value !== "") {
      let newValue: DecisionItem = {
        value: this.input.current.value,
        children: []
      }
      this.props.createDecision(newValue);
      this.setState({error: ""}); 
    } else {
      this.setState({error: "Pls enter name;)"});
    }
  }

  render() {

    return (
      <div className="decision-creation-popup">
        <div className="decision-creation-popup__content">
          <div className="decision-creation-popup__header">
            <p>Creating new decision</p>
            {this.props.children}
          </div>
          <div className="decision-creation-popup__form">
            <label className="decision-creation-popup__label">Enter decision name</label>
            <input className="decision-creation-popup__input" type="text" ref={this.input}></input>
          </div>
          {this.state.error ? <div className="decision-creation-popup__error">{this.state.error}</div> : null}
          <div className="decision-creation-popup__footer">
            <Button text={"Cancel"} buttonAction={this.props.closePopup} modifier={"cancel"}></Button>
            <Button text={"Create"} buttonAction={this.createNewDecision}></Button>
          </div>
        </div>
      </div>
    )
  }
}
