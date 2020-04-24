import React, { Component } from 'react';

import Card from '../../containers/Card/Card';

class CardsList extends Component {
  render() {
    const { characters } = this.props;
    return characters.map((character) => {
      return <Card key={character.id} name={character.name} thumbnail={character.thumbnail.path} />;
    });
  }
}

export default CardsList;
