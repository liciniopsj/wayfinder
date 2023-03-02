import React, { useState } from "react";
import { charHeaderInitialState as charInfo } from "../utils/charHeaderInitialState";
import { charAbilityScoreInitialState as scores } from "../utils/charAbilityScoreInitialState";
import { healthInitialState as vitals } from "../utils/healthInitialState";
import { alignments } from "../utils/alignment";
import Ability from "./Ability";

import { CustomInput, SelectCustomInput } from "./Inputs";
import Charhealth from "./Charhealth";
import CharResistances from "./CharResistances";

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
      <main>
        <section className="charMainStats">
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
          <div className="charHealthContainer">
            <Charhealth vitalStats={vitalStats} setVitalStats={setVitalStats} />
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
          <div className="charResistancesContainer">
            <CharResistances vitalStats={vitalStats} setVitalStats={setVitalStats} />
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
