import React, { useState } from "react";
import { Form } from "semantic-ui-react";

const useDropdown = (label, defalutState, options) => {
  const [state, setState] = useState(defalutState);

  const Dropdown = () => (
    <Form.Select
      fluid
      label={label}
      options={options}
      placeholder={`Select ${label}`}
      value={state}
      onChange={e => setState(e.target.textContent)}
      onBlur={e => setState(e.target.textContent)}
      disabled={options.length === 0}
    />
  );

  return [state, Dropdown, setState];
};

export default useDropdown;
