import React from "react";
import Pet from "./Pet";
import { Container, Item } from "semantic-ui-react";

const styles = {
  results: {
    margin: "20px",
    padding: "20px",
    background: "#3f51b570",
    borderRadius: "5px",
    boxShadow: "10px 10px 10px 0px #dadada"
  }
};

const Results = ({ pets }) => {
  return (
    <Container>
      <Item.Group style={styles.results} divided>
        {pets.map(pet => {
          if (pet.description === null) {
            pet.description = "";
          }
          return (
            <Pet
              animal={pet.type}
              key={pet.id}
              name={pet.name}
              breed={pet.breeds.primary}
              media={pet.photos}
              location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
              id={pet.id}
              description={pet.description.split("&")[0]}
              gender={pet.gender}
            />
          );
        })}
      </Item.Group>
    </Container>
  );
};

export default Results;
