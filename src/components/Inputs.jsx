import React from "react";

import { InputDefault, SelectInput } from "./InputsStyles";

export function CustomInput({ label, type, id, value, onChange, readOnly }) {
  return (
    <label htmlFor={id}>
      {label}
      <InputDefault
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
      />
    </label>
  );
}

export function SelectCustomInput({ id, label, value, onChange, options }) {
  return (
    <label htmlFor={id}>
      {label}
      <SelectInput value={value} id={id} onChange={onChange}>
        {options}
      </SelectInput>
    </label>
  );
}
