import React, { Component, MutableRefObject, MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import DecisionCreationPopup from '../decision-creation-popup/decision-creation-popup';
import DecisionsLevel from '../decisions-level/decisions-level';
import DecisionTreeState from './models/decisions-tree.state.model';
import DecisionTreeProps from './models/decisions-tree.state.model';
import DecisionItem from './../decision/models/decision-item.props.model'

export class DecisionsTree extends Component<DecisionTreeProps, DecisionTreeState> {
  constructor(props: DecisionTreeProps){
    super(props);
    this.state = {
      decisions:
        {
          value: "level 0",
          children: [{
            value: "level 1",
            children: [
              {
                value: "level 2",
                children: []
              }
            ]
          },
          {
            value: "level 1",
            children: [
              {
                value: "level 2",
                children: []
              },
              {
                value: "level 2",
                children: [
                  {
                    value: "level 3",
                    children: []
                  },
                  {
                    value: "level 3",
                    children: []
                  },
                  {
                    value: "level 3",
                    children: []
                  }
                ]
              }
            ]
          }
        ]
        },
      showPopup: false,
      editableItem: {
        value: "",
        children: []
      },
      scale: 1
    }

    this.pushNewDecision = this.pushNewDecision.bind(this);
    this.openPopup = this.openPopup.bind(this);
    this.closePopup = this.closePopup.bind(this);
  }

  private tree: MutableRefObject<HTMLDivElement> = React.createRef();

  public _levels: [DecisionItem][] = [];
  private MAX_SCALE = 1.2;
  private MIN_SCALE = 0.2;
  
  componentWillMount(): void {
    this.generateDecisionsTreeLevels(this.state.decisions);
    console.dir(this._levels);
  }

  generateDecisionsTreeLevels(item: DecisionItem, level: number = 0): void {
    const currentLevel: DecisionItem[] = this._levels[level];
    currentLevel ? currentLevel.push(item) : this._levels.push([item]);

    item.children && item.children.forEach((childItem) => {
      this.generateDecisionsTreeLevels(childItem, level + 1);
    })
  }

  private zoom(value: number): any {
    this.calculateNewScale(value);
  }

  private calculateNewScale(value: number): void {
    let scale = this.state.scale;
    if (scale + value >= this.MIN_SCALE && scale + value <= this.MAX_SCALE) {
      const newScale = scale + value;
      this.setNewScale(newScale);
      this.setState({
        scale: newScale
      })
    } else {
      return
    }
  }

  private setNewScale(newScale: number): void {
    this.tree.current.style.transform = `scale(${newScale})`;
  }

  private pushNewDecision(data: DecisionItem): void {
    let decision: DecisionItem = this.state.editableItem;
    decision.children.push(data);
    this.setState({
      editableItem: decision
    });
    this.closePopup();
  }

  private openPopup(item: DecisionItem): void {
    this.setState({
      showPopup: !this.state.showPopup,
      editableItem: item
    });
  }

  closePopup(): void {
    this.setState({
      showPopup: !this.state.showPopup,
      editableItem: {
        value: "",
        children: []
      }
    });
  }

  render() {
    let popup;
    if (this.state.showPopup) {
      popup = <DecisionCreationPopup closePopup={this.closePopup} createDecision={this.pushNewDecision}>
                <div className="decision-creation-popup__closer" onClick={this.closePopup}>
                  +
                </div>
              </DecisionCreationPopup>;
    } else {
      popup = "";
    }

    return (
      <div className="root">
        <div className="decisions-tree" ref={this.tree}>
          {
            this._levels.map((level, i) => {
              return (
                <DecisionsLevel key={i} attr={`_level${i}`} levelItems={level} openPopup={this.openPopup}/>
              )
            })
          }
        </div>
        <div className="decision-tree__zoomer">
          <div className="zoomer-item zoomer_in" onClick={(e: any) => {this.zoom(0.1)}}>+</div>
          <div className="zoomer-item zoomer_out" onClick={(e: any) => {this.zoom(-0.1)}}>-</div>
        </div>
        <Link to='/' className="decisions-tree__link">
          Back to start screen
        </Link>
        {popup}
      </div>
    );
  }
}