import React from "react";
import { CustomInput } from "./Inputs";
import { healthInitialState } from "../utils/charData";


function Charhealth({ vitalStats = { healthInitialState }, setVitalStats }) {
  vitalStats.hpCurrent = +vitalStats.hpMax - (+vitalStats.wounds + +vitalStats.woundsNonLethal);
  
  return (
    <div className="charHealth">
      <CustomInput
        type="number"
        id="charHealthMax"
        name="hpMax"
        label="HP"
        min={1}
        value={vitalStats.hpMax}
        onChange={({ target: { value } }) =>
          setVitalStats({ ...vitalStats, hpMax: value })
        }
      />
      <CustomInput
        type="number"
        id="charHealthCurrent"
        name="hpCurrent"
        label="Current HP"
        value={vitalStats.hpCurrent}
        readOnly
      />
      <CustomInput
        type="number"
        id="charWounds"
        name="hpWounds"
        label="Wounds"
        min={0}
        value={vitalStats.wounds}
        onChange={({ target: { value } }) => {
           setVitalStats({ ...vitalStats, wounds: value});
        }
        }
      />
      <CustomInput
        type="number"
        id="charWoundsNonLethal"
        name="hpWoundsNonLethal"
        label="NonLethal Wounds"
        min={0}
        value={vitalStats.woundsNonLethal}
        onChange={({ target: { value } }) =>
          setVitalStats({ ...vitalStats, woundsNonLethal: value})
        }
      />
    </div>
  );
}

export default Charhealth;
