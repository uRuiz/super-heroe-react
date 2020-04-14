import React, { Component } from 'react';
import md5 from 'md5';
import config from '../../config.template.js';
import SearchBar from '../components/SearchBar/SearchBar';
import Card from '../containers/Card/Card';

export class Home extends Component {
  state = {
    data: {}
  };

  onSearchSubmit() {}

  render() {
    return (
      <main role="main">
        <div className="album py-5 bg-light">
          <div className="container">
            <SearchBar onSubmit={this.onSearchSubmit} />
            <div className="row">
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </main>
    );
  }
}
