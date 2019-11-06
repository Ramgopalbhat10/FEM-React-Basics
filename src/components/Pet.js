import React from "react";
import { Item, Button, Icon, Label } from "semantic-ui-react";

const Pet = props => {
  const {
    name,
    animal,
    breed,
    media,
    location,
    id,
    description,
    gender
  } = props;

  let hero = "http://placecorgi.com/300/300";

  if (media.length) {
    hero = media[0].small;
  }

  return (
    <Item key={id}>
      <Item.Image size="tiny" src={hero} />
      <Item.Content>
        <Item.Header>{name}</Item.Header>
        <Item.Meta>{`${animal} - ${breed} - ${gender}`}</Item.Meta>
        <Item.Description>{description}</Item.Description>
        <Item.Extra>
          <Button primary floated="right">
            Check
            <Icon name="right chevron" />
          </Button>
          <Label icon="globe" content={location}></Label>
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};

export default Pet;
