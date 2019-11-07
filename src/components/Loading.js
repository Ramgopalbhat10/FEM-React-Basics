import React from "react";
import { Placeholder } from "semantic-ui-react";

const styles = {
  margin: "30px"
};

const Loading = ({ loaders }) => {
  return [...Array(loaders).keys()].map(loader => (
    <Placeholder style={styles} key={loader}>
      <Placeholder.Header image>
        <Placeholder.Line />
        <Placeholder.Line />
        <Placeholder.Line />
        <Placeholder.Line />
      </Placeholder.Header>
      <Placeholder.Paragraph>
        <Placeholder.Line />
        <Placeholder.Line />
      </Placeholder.Paragraph>
    </Placeholder>
  ));
};

export default Loading;
