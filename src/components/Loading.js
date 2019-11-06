import React from "react";
import { Container, Item, Placeholder } from "semantic-ui-react";

const styles = {
  margin: "30px"
};

const Loading = ({ number }) => {
  return [...Array(number).keys()].map(loader => (
    <Placeholder style={styles} key={loader}>
      <Placeholder.Header image>
        <Placeholder.Line />
        <Placeholder.Line />
        <Placeholder.Line />
        <Placeholder.Line />
      </Placeholder.Header>
    </Placeholder>
  ));
};

export default Loading;
