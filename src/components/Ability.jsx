import React from "react";
import { CustomInput } from "./Inputs";

function Ability({
  abilityName,
  abilityBaseValue = 10,
  abilityOnChange,
  abilityScores,
}) {
  return (
    <div>
      <span>{`${abilityName.toUpperCase()}:`}</span>

      <CustomInput
        type="number"
        name={`${abilityName}Base`}
        value={abilityBaseValue}
        onChange={({ target }) =>
          abilityOnChange({ ...abilityScores, [abilityName]: target.value })
        }
      />

      <CustomInput
        type="number"
        name={`${abilityName}Mod`}
        value={Math.floor((+abilityBaseValue - 10) / 2)}
        readOnly
      />
    </div>
  );
}

export default Ability;
