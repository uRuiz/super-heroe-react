import React, { Component } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import CardsList from '../components/CardsList/CardsList';

export class Home extends Component {
  state = {
    results: [],
    usedSearch: false
  };

  onHandleResults = (results) => {
    this.setState({ results, usedSearch: true });
  };

  onRenderResults = () => {
    return this.state.results.length === 0 ? (
      <p>
        Sorry!{' '}
        <span role="img" aria-label="Sad Face">
          😢
        </span>{' '}
        Results not found!
      </p>
    ) : (
      <CardsList characters={this.state.results} />
    );
  };

  render() {
    return (
      <main role="main">
        <div className="album py-5 bg-light">
          <div className="container">
            <SearchBar onSubmit={this.onHandleResults} />
            <div className="row">{this.state.usedSearch ? this.onRenderResults() : <small />}</div>
          </div>
        </div>
      </main>
    );
  }
}
