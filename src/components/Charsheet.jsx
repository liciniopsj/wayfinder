import React, { useState } from "react";
import { charHeaderInitialState as charInfo } from "../utils/charHeaderInitialState";
import { charAbilityScoreInitialState as scores } from "../utils/charAbilityScoreInitialState";
import { healthInitialState as vitals } from "../utils/healthInitialState";
import { alignments } from "../utils/alignment";
import { drBypassTypes } from "../utils/drBypassTypes";
import Ability from "./Ability";

import { CustomInput, SelectCustomInput } from "./Inputs";

function Charsheet() {
  const [charHeader, setCharHeader] = useState(charInfo);
  const [abilityScores, setAbilityScores] = useState(scores);
  const [vitalStats, setVitalStats] = useState(vitals);

  return (
    <div>
      <button
        type="button"
        onClick={() =>
          console.log(charHeader, abilityScores, alignments, vitalStats)
        }
      >
        Debug
      </button>
      <header className="charHeader">
        <CustomInput
          id="charHeaderCharName"
          name="charName"
          label="Character Name:"
          value={charHeader.name}
          onChange={({ target: { value } }) =>
            setCharHeader({ ...charHeader, name: value })
          }
        />
        <br />
        <SelectCustomInput
          id="charHeaderAlignment"
          label="Alignment: "
          value={charHeader.alignment}
          onChange={({ target: { value } }) =>
            setCharHeader({ ...charHeader, alignment: value })
          }
          options={Object.values(alignments).map((value, index) => (
            <option key={value} value={Object.keys(alignments)[index]}>
              {value}
            </option>
          ))}
        />
        <CustomInput
          id="charHeaderPlayerName"
          name="playerName"
          label="Player:"
          value={charHeader.player}
          onChange={({ target: { value } }) =>
            setCharHeader({ ...charHeader, player: value })
          }
        />
        <CustomInput
          id="charHeaderCampaign"
          name="campaign"
          label="Campaign:"
          value={charHeader.campaign}
          onChange={({ target: { value } }) =>
            setCharHeader({ ...charHeader, campaign: value })
          }
        />
        <CustomInput
          id="charHeaderCharClass"
          name="charClass"
          label="Character Class:"
          value={charHeader.class}
          onChange={({ target: { value } }) =>
            setCharHeader({ ...charHeader, class: value })
          }
        />
        <CustomInput
          type="number"
          id="charHeaderCharLevel"
          name="charLevel"
          label="Level:"
          value={charHeader.level}
          onChange={({ target: { value } }) =>
            setCharHeader({ ...charHeader, level: value })
          }
        />
        <CustomInput
          id="charHeaderCharRace"
          name="charRace"
          label="Race:"
          value={charHeader.race}
          onChange={({ target: { value } }) =>
            setCharHeader({ ...charHeader, race: value })
          }
        />
        <CustomInput
          id="charHeaderDeity"
          name="deity"
          label="Deity:"
          value={charHeader.deity}
          onChange={({ target: { value } }) =>
            setCharHeader({ ...charHeader, deity: value })
          }
        />
        <CustomInput
          id="charHeaderHomeland"
          name="homeland"
          label="Homeland:"
          value={charHeader.homeland}
          onChange={({ target: { value } }) =>
            setCharHeader({ ...charHeader, homeland: value })
          }
        />
        <CustomInput
          id="charHeaderSize"
          name="size"
          label="Size:"
          value={charHeader.size}
          onChange={({ target: { value } }) =>
            setCharHeader({ ...charHeader, size: value })
          }
        />
        <CustomInput
          id="charHeaderGender"
          name="gender"
          label="Gender:"
          value={charHeader.gender}
          onChange={({ target: { value } }) =>
            setCharHeader({ ...charHeader, gender: value })
          }
        />
        <CustomInput
          id="charHeaderAge"
          name="age"
          label="Age:"
          value={charHeader.age}
          onChange={({ target: { value } }) =>
            setCharHeader({ ...charHeader, age: value })
          }
        />
        <CustomInput
          id="charHeaderHeight"
          name="height"
          label="Height:"
          value={charHeader.height}
          onChange={({ target: { value } }) =>
            setCharHeader({
              ...charHeader,
              height: value,
              metricHeight: `${(+value * 0.3048).toFixed(2)}m`,
            })
          }
        />
        <CustomInput
          id="charHeaderWeight"
          name="weight"
          label="Weight:"
          value={charHeader.weight}
          onChange={({ target: { value } }) =>
            setCharHeader({
              ...charHeader,
              weight: value,
              metricWeight: `${(+value * 0.45359237).toFixed(2)}kg`,
            })
          }
        />
        <CustomInput
          id="charHeaderHair"
          name="hair"
          label="Hair:"
          value={charHeader.hair}
          onChange={({ target: { value } }) =>
            setCharHeader({ ...charHeader, hair: value })
          }
        />
        <CustomInput
          id="charHeaderEyes"
          name="eyes"
          label="Eyes:"
          value={charHeader.eyes}
          onChange={({ target: { value } }) =>
            setCharHeader({ ...charHeader, eyes: value })
          }
        />{" "}
      </header>
      <main className="charMainStats">
        <section>
          <div className="charAbilities">
            <div>
              {Object.keys(abilityScores).map((score) => (
                <Ability
                  key={score}
                  abilityName={score}
                  abilityScores={abilityScores}
                  abilityBaseValue={abilityScores[score]}
                  abilityOnChange={setAbilityScores}
                />
              ))}
            </div>
          </div>
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
              readOnly
              value={
                +vitalStats.hpMax -
                (+vitalStats.wounds + +vitalStats.woundsNonLethal)
              }
            />
            <CustomInput
              type="number"
              id="charWounds"
              name="hpWounds"
              label="Wounds"
              min={0}
              value={vitalStats.wounds}
              onChange={({ target: { value } }) =>
                setVitalStats({ ...vitalStats, wounds: value })
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
                setVitalStats({ ...vitalStats, woundsNonLethal: value })
              }
            />
          </div>
          <div className="charInitiative">
            <CustomInput
              type="number"
              id="charInitiative"
              name="initiative"
              label="Initiative"
              readOnly
              value={Math.floor((+abilityScores.dex - 10) / 2)}
            />
          </div>
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
        </section>
        <section>Skill Section</section>
        <section>Defense Stats</section>
        <section>Offensive Stats</section>
      </main>
    </div>
  );
}

export default Charsheet;
