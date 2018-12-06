import * as React from 'react';
import { Switch, Route }  from 'react-router-dom';
import { MainPage } from './components/main-page/main-page';
import { DecisionsTree } from './components/decisions-tree/decisions-tree';

export class App extends React.Component<{}> {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={MainPage}/>
        <Route path='/decisions' component={DecisionsTree}/>
      </Switch>
    );
  }
}