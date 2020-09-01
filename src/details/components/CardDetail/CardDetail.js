import React, { Component } from 'react';
import PropTypes from 'prop-types';
import config from '../../../config.template.js';
import md5 from 'md5';
import Detail from '../../containers/Detail/Detail';

class CardDetail extends Component {
  state = {
    detail: {}
  };

  fetchCharacterDetails({ id }) {
    const hash = md5(config.ts + config.privateKey + config.publicKey);
    const endPointCall = `${config.url}/${id}?ts=${config.ts}&apikey=${
      config.publicKey
    }&hash=${hash}`;

    fetch(endPointCall)
      .then((res) => res.json())
      .then((detail) => {
        this.setState({ detail: detail.data.results[0] });
      });
  }

  componentDidMount() {
    const { id } = this.props;
    this.fetchCharacterDetails({ id });
  }

  render() {
    const { name, thumbnail, description } = this.state.detail;
    return <Detail name={name} thumbnail={thumbnail} description={description} />;
  }
}

CardDetail.propTypes = {
  id: PropTypes.string
};

export default CardDetail;
