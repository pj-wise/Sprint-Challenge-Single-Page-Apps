import React from "react";

import { Card, Icon } from "semantic-ui-react";

export default function LocationCard({ place }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{place.name}</Card.Header>
        <Card.Meta>{place.type}</Card.Meta>
        <Card.Description>{place.dimension}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          {place.residents.length}
        </a>
      </Card.Content>
    </Card>
  );
}
