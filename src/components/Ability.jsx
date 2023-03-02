import React from "react";
import { charAbilityScoreInitialState as charScores } from "../utils/charData";
import { CustomInput } from "./Inputs";

function Ability({ abilityScores = { charScores }, setAbilityScores }) {
  abilityScores.strMod = Math.floor((+abilityScores.str - 10) / 2);
  abilityScores.dexMod = Math.floor((+abilityScores.dex - 10) / 2);
  abilityScores.conMod = Math.floor((+abilityScores.con - 10) / 2);
  abilityScores.intMod = Math.floor((+abilityScores.int - 10) / 2);
  abilityScores.wisMod = Math.floor((+abilityScores.wis - 10) / 2);
  abilityScores.chaMod = Math.floor((+abilityScores.cha - 10) / 2);

  const handleChange = ({ name, value }) => {
    setAbilityScores({ ...abilityScores, [name]: value})
  };

  return (
    <div>
      <CustomInput
        type="number"
        id="charStrBase"
        name="str"
        label="STR"
        min={0}
        value={abilityScores.str}
        onChange={({ target }) =>
          handleChange(target)
        }
      />

      <CustomInput type="number" value={abilityScores.strMod} readOnly />

      <CustomInput
        type="number"
        id="charDexBase"
        name="dex"
        label="DEX"
        min={0}
        value={abilityScores.dex}
        onChange={({ target }) =>
          handleChange(target)
        }
      />

      <CustomInput type="number" value={abilityScores.dexMod} readOnly />

      <CustomInput
        type="number"
        id="charConBase"
        name="con"
        label="CON"
        min={0}
        value={abilityScores.con}
        onChange={({ target }) =>
          handleChange(target)
        }
      />

      <CustomInput type="number" value={abilityScores.conMod} readOnly />

      <CustomInput
        type="number"
        id="charIntBase"
        name="int"
        label="INT"
        min={0}
        value={abilityScores.int}
        onChange={({ target }) =>
          handleChange(target)
        }
      />

      <CustomInput type="number" value={abilityScores.intMod} readOnly />

      <CustomInput
        type="number"
        id="charWisBase"
        name="wis"
        label="WIS"
        min={0}
        value={abilityScores.wis}
        onChange={({ target }) =>
          handleChange(target)
        }
      />

      <CustomInput type="number" value={abilityScores.wisMod} readOnly />

      <CustomInput
        type="number"
        id="charChaBase"
        name="cha"
        label="CHA"
        min={0}
        value={abilityScores.cha}
        onChange={({ target }) =>
          handleChange(target)
        }
      />

      <CustomInput type="number" value={abilityScores.chaMod} readOnly />
    </div>
  );
}

export default Ability;
