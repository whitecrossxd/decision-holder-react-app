import * as React from 'react';
import { Link } from 'react-router-dom';

export class MainPage extends React.Component {
  render() {
    return (
      <div className="main-page">
        <header className="main-page__header">
          <img src='./logo.svg' className="main-page__logo" alt="logo" />
          <p>
            Welcome to Decision Holder application!
          </p>
          <Link to='/decisions' className="main-page__link">
            Start to make a decisions!
          </Link>
        </header>
      </div>
    );
  }
}