import React, { Component } from 'react';
import './SearchBar.css';
import PropTypes from 'prop-types';

import md5 from 'md5';
import config from '../../../config.template.js';

class SearchBar extends Component {
  state = {
    inputCharacter: ''
  };

  // función creada para ejecutar la consulta cuando se haga click en el botón del formulario o se pulse Intro
  onFormSubmit = (event) => {
    event.preventDefault();
    const { inputCharacter } = this.state;

    const hash = md5(config.ts + config.privateKey + config.publicKey);
    const endPointCall = `${config.url}?ts=${config.ts}&apikey=${
      config.publicKey
    }&hash=${hash}&nameStartsWith=${inputCharacter}`;

    fetch(endPointCall)
      .then((res) => res.json())
      .then((data) => {
        const { results = [] } = data.data; // Por defecto results es un array vacio. En caso de no recibir datos de la API
        this.props.onSubmit(results);
      });
  };
  // función creada para transformar el formulario en un componente controlado
  onInputChange = (event) => {
    this.setState({ inputCharacter: event.target.value });
  };

  render() {
    return (
      <div className="">
        <form
          onSubmit={this.onFormSubmit.bind(this)}
          className="container form-group has-search search-form"
        >
          <i className="material-icons form-control-feedback">search</i>
          <input
            className="form-control"
            type="text"
            value={this.state.query}
            onChange={this.onInputChange.bind(this)}
            placeholder="Start typing the superhero's name you want to search..."
          />
          <button type="submit" className="btn btn-danger buttom-form">
            Send
          </button>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func
};

export default SearchBar;
