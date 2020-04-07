import React from "react";
import { Card, Icon } from "semantic-ui-react";

const EpisodeCard = ({ ep }) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{ep.name}</Card.Header>
        <Card.Meta>{ep.air_date}</Card.Meta>
        <Card.Description>{ep.episode}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <p>Number of characters: </p>
          <Icon name="user" />
          {ep.characters.length}
        </a>
      </Card.Content>
    </Card>
  );
};

export default EpisodeCard;
