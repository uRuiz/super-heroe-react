import React, { Component } from 'react';
import PropTypes from 'prop-types';
import config from '../../../config.template.js';
import md5 from 'md5';

class CardDetail extends Component {
  fetchCharacterDetails({ id }) {
    const hash = md5(config.ts + config.privateKey + config.publicKey);
    const endPointCall = `${config.url}/${id}?ts=${config.ts}&apikey=${
      config.publicKey
    }&hash=${hash}`;

    fetch(endPointCall)
      .then((res) => res.json())
      .then((detail) => {
        console.log(detail.data);
      });
  }

  componentDidMount() {
    const { id } = this.props;
    this.fetchCharacterDetails({ id });
  }

  render() {
    return <p>Test</p>;
  }
}

CardDetail.propTypes = {
  id: PropTypes.string
};

export default CardDetail;
