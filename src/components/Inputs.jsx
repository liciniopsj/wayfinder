import React from "react";

import { InputDefault, SelectInput, LabelDefault } from "./InputsStyles";

export function CustomInput({ label, id, ...rest }) {
  return (
    <LabelDefault htmlFor={id}>
      {label}
      <InputDefault id={id} {...rest} />
    </LabelDefault>
  );
}

export function SelectCustomInput({ id, label, options, ...rest }) {
  return (
    <LabelDefault htmlFor={id}>
      {label}
      <SelectInput {...rest} id={id}>
        {options}
      </SelectInput>
    </LabelDefault>
  );
}
