import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import { Button, Form, Container } from "semantic-ui-react";
import useDropdown from "../hooks/useDropdown";
import Results from "./Results";
import Loading from "./Loading";

const styles = {
  search: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    margin: "20px",
    padding: "20px",
    background: "#3f51b570",
    borderRadius: "5px",
    boxShadow: "10px 10px 10px 0px #dadada"
  }
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
  const [pets, setPets] = useState([]);
  const [loading, isLoading] = useState();

  async function requestPets() {
    isLoading(true);
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });

    setPets(animals || []);
    isLoading(false);
  }

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
    <div className="search" style={styles.search}>
      <Container>
        <Form
          style={styles.form}
          onSubmit={e => {
            e.preventDefault();
            requestPets();
          }}
        >
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
            Search
          </Button>
        </Form>
        {pets.length === 0 && !loading && (
          <h4 style={{ textAlign: "center" }}>Select options to find a pet</h4>
        )}
      </Container>

      {loading && (
        <Container>
          <Loading loaders={10} />
        </Container>
      )}
      {loading === false && <Results pets={pets} />}
    </div>
  );
};

export default SearchPets;
