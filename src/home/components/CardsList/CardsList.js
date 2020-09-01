import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from '../../containers/Card/Card';

class CardsList extends Component {
  render() {
    const { characters } = this.props;
    return characters.map((character) => {
      return (
        <Card
          key={character.id}
          id={character.id}
          name={character.name}
          thumbnail={character.thumbnail.path}
        />
      );
    });
  }
}

CardsList.propTypes = {
  characters: PropTypes.array
};

export default CardsList;
