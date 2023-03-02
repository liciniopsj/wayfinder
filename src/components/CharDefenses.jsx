import React from "react";
import { CustomInput } from "./Inputs";

function CharDefenses({defenses, abilityScores , abilityMod = "dexMod"}) {
  defenses.abilityMod = +abilityScores[abilityMod];
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
          value={+defenses.ac}
        />

        <CustomInput
          type="number"
          id="charDefenseAbilityMod"
          name="abilityMod"
          label="Ability Mod"
          readOnly
          value={+defenses.abilityMod}
        />

        <CustomInput
          type="number"
          id="charArmorBonus"
          name="armorBonus"
          label="Armor Bonus"
          readOnly
          value={+defenses.armorBonus}
        />

        <CustomInput
          type="number"
          id="charShieldBonus"
          name="shieldBonus"
          label="Shield Bonus"
          readOnly
          value={+defenses.shieldBonus}
        />

        <CustomInput
          type="number"
          id="charSizeMod"
          name="sizeMod"
          label="Size Mod"
          readOnly
          value={+defenses.sizeMod}
        />

        <CustomInput
          type="number"
          id="charSizeMod"
          name="sizeMod"
          label="Size Mod"
          readOnly
          value={+defenses.sizeMod}
        />

        <CustomInput
          type="number"
          id="charNaturalArmor"
          name="natArmor"
          label="Natural Armor"
          readOnly
          value={+defenses.natArmor}
        />

        <CustomInput
          type="number"
          id="charDeflectionBonus"
          name="deflectMod"
          label="Deflection Mod"
          readOnly
          value={+defenses.deflectMod}
        />

        <CustomInput
          type="number"
          id="charMiscBonus"
          name="miscMod"
          label="Misc Mod"
          readOnly
          value={+defenses.miscMod}
        />
      </div>
    </div>
  );
}

export default CharDefenses;
