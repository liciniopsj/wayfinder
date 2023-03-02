import React from "react";

import { InputDefault, SelectInput } from "./InputsStyles";

export function CustomInput({ label, type, id, value, onChange, readOnly, min, name }) {
  return (
    <label htmlFor={id}>
      {label}
      <InputDefault
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        min={min}
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
