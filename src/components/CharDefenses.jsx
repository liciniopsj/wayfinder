import React from "react";
import { CustomInput } from "./Inputs";

function CharDefenses({defenses, abilityScores , abilityMod = "dexMod"}) {
  defenses.abilityMod = abilityScores[abilityMod];
  defenses.ac = 10 + +defenses.abilityMod + +defenses.armorBonus + +defenses.shieldBonus + +defenses.sizeMod + +defenses.natArmor + +defenses.deflectMod + +defenses.miscMod;
  return (
    <div>
      <h4>
      Defense Stats:
      </h4>
      <p>AC = 10 + abilityMod + armorBonus + shieldbonus + sizeMod + natArmor + deflectMod + miscMod</p>
      <p>TouchAc: AC - armorBonus - shieldBonus - natArmor</p>
      <p>Flat-footed AC: AC - DexMod - Dodge</p>

      <div>
        <CustomInput
          type="number"
          id="charACTotal"
          name="acTotal"
          label="AC Total"
          readOnly
          value={defenses.ac}
        />

        <CustomInput
          type="number"
          id="charAbilityMod"
          name="abilityMod"
          label="Ability Mod"
          readOnly
          value={abilityScores.dexMod}
        />
      </div>
    </div>
  );
}

export default CharDefenses;
