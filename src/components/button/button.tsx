import React from 'react';
import ButtonProps from './models/button.props.model';

export default class Button extends React.Component<ButtonProps, {}> {

  render() {

    let modifier: string,
        className: string = "button";

    if (this.props.modifier) {
      modifier = "_" + this.props.modifier;
      className = className + " " + className + modifier;
    }

    return (
      <div className={className} onClick={this.props.buttonAction}>
        {this.props.text}
      </div>
    )
  }
}
