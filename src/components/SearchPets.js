import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
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
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", animalOptions);
  const [breeds, setBreeds] = useState([]);

  const breedOptions = getOptions(breeds);
  const [breed, BreedDropdown, setBreed] = useDropdown(
    "Breed",
    "",
    breedOptions
  );

  function getOptions(items) {
    if (items.length === 0) {
      return [];
    } else {
      return items.map(item => {
        return { key: item, text: item, value: item };
      });
    }
  }

  useEffect(() => {
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      const breedStrings = apiBreeds.map(({ name }) => name);
      setBreeds(breedStrings);
    }, console.error);
  }, [animal, setBreed, setBreeds]);

  return (
    <div className="search" style={styles}>
      <Form>
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
        <Button className="ui primary button" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SearchPets;
