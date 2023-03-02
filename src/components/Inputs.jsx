import React from "react";

import { InputDefault, SelectInput } from "./InputsStyles";

export function CustomInput({ label, type, id, value, onChange }) {
  return (
    <label htmlFor={id}>
      {label}
      <InputDefault type={type} id={id} value={value} onChange={onChange} />
    </label>
  );
}

export function SelectCustomInput({ id, label, value, onChange, options }) {
  return (
    <label htmlFor={id}>
      {label}
      <SelectInput value={value} onChange={onChange}>
        {options}
      </SelectInput>
    </label>
  );
}
