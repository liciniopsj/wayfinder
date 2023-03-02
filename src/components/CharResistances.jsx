import React from "react";
import { CustomInput, SelectCustomInput } from "./Inputs";
import { drBypassTypes } from "../utils/drBypassTypes";

function CharResistances({vitalStats, setVitalStats}) {
  return (
    <div className="charResistances">
    <CustomInput
      type="number"
      id="charDR"
      name="damageReduction"
      label="DR"
      min={0}
      value={vitalStats.DR}
      onChange={({ target: { value } }) =>
        setVitalStats({ ...vitalStats, DR: value })
      }
    />
    <SelectCustomInput
      id="charDRBypassType"
      label="Bypass: "
      value={vitalStats.drBypass}
      onChange={({ target: { value } }) =>
        setVitalStats({ ...vitalStats, drBypass: value })
      }
      options={ drBypassTypes.map((type) => (
        <option key={type} value={type}>{type}</option>
      )) }
    />
    <CustomInput
      type="number"
      id="charSR"
      name="spellResistance"
      label="SR"
      min={0}
      value={vitalStats.SR}
      onChange={({ target: { value } }) =>
        setVitalStats({ ...vitalStats, SR: value })
      }
    />
  </div>
  );
}

export default CharResistances;
