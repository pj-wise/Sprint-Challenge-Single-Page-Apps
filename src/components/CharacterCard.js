import React from 'react';
import axios from 'axios';
import { Card, Icon, Popup } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const extra = (
  <Link to='/episodes'>
    <Icon name='tv' />
  </Link>
);

const CharacterCard = ({ char }) => {
  function episodeNum() {
    let length = char.episode[0].length;
    if (length === 42) {
      return char.episode[0].slice(length - 2, length - 0);
    } else {
      return char.episode[0].slice(length - 1);
    }
  }
  return (
    <div>
      <Popup
        trigger={
          <Card
            style={{ margin: '1em auto' }}
            image={char.image}
            header={char.name}
            meta={char.species}
            extra={extra}
          />
        }>
        <Popup.Header>Details on {char.name}:</Popup.Header>
        <Popup.Content>
          <p>Gender: {char.gender}</p>
          <p>Deceased: {char.status === 'Alive' ? 'No' : 'Yes'}</p>
          <p>First Appearance: Episode {episodeNum()}</p>
          <p>Origin: {char.origin.name}</p>
        </Popup.Content>
      </Popup>
    </div>
  );
};

export default CharacterCard;
