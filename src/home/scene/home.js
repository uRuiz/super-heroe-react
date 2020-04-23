import React, { Component } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import Card from '../containers/Card/Card';

export class Home extends Component {
  state = {
    results: []
  };

  onSearchSubmit = (results) => {
    this.setState({ results });
  };

  renderResults() {
    const { results } = this.state;
    return results.map((result) => {
      return <Card key={result.id} name={result.name} thumbnail={result.thumbnail.path} />;
    });
  }

  render() {
    return (
      <main role="main">
        <div className="album py-5 bg-light">
          <div className="container">
            <SearchBar onSubmit={this.onSearchSubmit} />
            <div className="row">
              {this.state.results.length === 0 ? <p>Sin resultados</p> : this.renderResults()}
            </div>
          </div>
        </div>
      </main>
    );
  }
}
