import React from "react";
import { charAbilityScoreInitialState as charScores } from "../utils/charAbilityScoreInitialState";
import { CustomInput } from "./Inputs";

function Ability({ abilityScores = { charScores }, setAbilityScores }) {
  abilityScores.strMod = Math.floor((+abilityScores.str - 10) / 2);
  abilityScores.dexMod = Math.floor((+abilityScores.dex - 10) / 2);
  abilityScores.conMod = Math.floor((+abilityScores.con - 10) / 2);
  abilityScores.intMod = Math.floor((+abilityScores.int - 10) / 2);
  abilityScores.wisMod = Math.floor((+abilityScores.wis - 10) / 2);
  abilityScores.chaMod = Math.floor((+abilityScores.cha - 10) / 2);
  return (
    <div>
      <CustomInput
        type="number"
        id="charStrBase"
        name="strBase"
        label="STR"
        min={0}
        value={abilityScores.str}
        onChange={({ target: { value } }) =>
          setAbilityScores({ ...abilityScores, str: value })
        }
      />

      <CustomInput type="number" value={abilityScores.strMod} readOnly />

      <CustomInput
        type="number"
        id="charDexBase"
        name="dexBase"
        label="DEX"
        min={0}
        value={abilityScores.dex}
        onChange={({ target: { value } }) =>
          setAbilityScores({ ...abilityScores, dex: value })
        }
      />

      <CustomInput type="number" value={abilityScores.dexMod} readOnly />

      <CustomInput
        type="number"
        id="charConBase"
        name="conBase"
        label="CON"
        min={0}
        value={abilityScores.con}
        onChange={({ target: { value } }) =>
          setAbilityScores({ ...abilityScores, con: value })
        }
      />

      <CustomInput type="number" value={abilityScores.conMod} readOnly />

      <CustomInput
        type="number"
        id="charIntBase"
        name="intBase"
        label="INT"
        min={0}
        value={abilityScores.int}
        onChange={({ target: { value } }) =>
          setAbilityScores({ ...abilityScores, int: value })
        }
      />

      <CustomInput type="number" value={abilityScores.intMod} readOnly />

      <CustomInput
        type="number"
        id="charWisBase"
        name="wisBase"
        label="WIS"
        min={0}
        value={abilityScores.wis}
        onChange={({ target: { value } }) =>
          setAbilityScores({ ...abilityScores, wis: value })
        }
      />

      <CustomInput type="number" value={abilityScores.wisMod} readOnly />

      <CustomInput
        type="number"
        id="charChaBase"
        name="chaBase"
        label="CHA"
        min={0}
        value={abilityScores.cha}
        onChange={({ target: { value } }) =>
          setAbilityScores({ ...abilityScores, cha: value })
        }
      />

      <CustomInput type="number" value={abilityScores.chaMod} readOnly />
    </div>
  );
}

export default Ability;
