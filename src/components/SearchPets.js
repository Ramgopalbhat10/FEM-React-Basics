import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import { Button, Form } from "semantic-ui-react";
import useDropdown from "../hooks/useDropdown";

const styles = {
  maxWidth: "500px",
  margin: "auto",
  padding: "20px",
  background: "#3f51b570",
  borderRadius: "5px",
  boxShadow: "10px 10px 10px 0px #dadada"
};

const SearchPets = () => {
  const animalOptions = getOptions(ANIMALS);

  const [location, setLocation] = useState("Seattle, WA");
  const [animal, AnimalDropdown] = useDropdown("Animal", "", animalOptions);
  const [breeds, setBreeds] = useState([]);

  const breedOptions = getOptions(breeds);
  const [breed, BreedDropdown] = useDropdown("Breed", "", breedOptions);

  function getOptions(items) {
    return items.map(item => {
      return { key: item, text: item, value: item };
    });
  }

  return (
    <div className="search" style={styles}>
      <Form>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Location"
            placeholder="Location"
            value={location}
            onChange={e => setLocation(e.target.value)}
            onBlur={e => setLocation(e.target.value)}
          />
          <AnimalDropdown />
          <BreedDropdown />
        </Form.Group>
        <Button className="ui primary button" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SearchPets;
