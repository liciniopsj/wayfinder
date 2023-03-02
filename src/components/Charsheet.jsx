import React, { useState } from "react";
import { charHeaderInitialState as charInfo } from "../utils/charHeaderInitialState";
import { charAbilityScoreInitialState as scores } from "../utils/charAbilityScoreInitialState";

import { alignments } from "../utils/alignment";
import Ability from "./Ability";

import { CustomInput, SelectCustomInput } from "./Inputs";

function Charsheet() {
  const [charHeader, setCharHeader] = useState(charInfo);
  const [abilityScores, setAbilityScores] = useState(scores);

  return (
    <div>
      <button
        type="button"
        onClick={() => console.log(charHeader, abilityScores, alignments)}
      >
        Debug
      </button>
      <header className="charHeader">
        <CustomInput
          id={"teste"}
          name="teste"
          label="teste"
          value={charHeader.testInput}
          onChange={({ target: { value } }) =>
            setCharHeader({ ...charHeader, testInput: value })
          }
        />
        <label htmlFor="charHeaderCharName">
          Character Name:
          <input
            type="text"
            name="charName"
            id="charHeaderCharName"
            onChange={({ target }) =>
              setCharHeader({ ...charHeader, name: target.value })
            }
            value={charHeader.name}
          />
        </label>
        {/* <label htmlFor="charHeaderAlignment">
          Alignment:
          <select
            name="alignment"
            id="charHeaderAlignment"
            onChange={({ target }) =>
              setCharHeader({ ...charHeader, alignment: target.value })
            }
            value={charHeader.alignment}
          >
            <option value="LG">Lawful Good</option>
            <option value="LN">Lawful Neutral</option>
            <option value="LE">Lawful Evil</option>
            <option value="NG">Neutral Good</option>
            <option value="N">True Neutral</option>
            <option value="NE">Neutral Evil</option>
            <option value="CG">Chaotic Good</option>
            <option value="CN">Chaotic Neutral</option>
            <option value="CE">Chaotic Evil</option>
          </select>
        </label> */}
        <SelectCustomInput
          id="select"
          label="Select de Teste"
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
        <label htmlFor="charHeaderPlayerName">
          Player:
          <input
            type="text"
            name="playerName"
            id="charHeaderPlayerName"
            onChange={({ target }) =>
              setCharHeader({ ...charHeader, player: target.value })
            }
            value={charHeader.player}
          />
        </label>
        <label htmlFor="charHeaderCampaign">
          Campaign:
          <input
            type="text"
            name="campaign"
            id="charHeaderCampaign"
            onChange={({ target }) =>
              setCharHeader({ ...charHeader, campaign: target.value })
            }
            value={charHeader.campaign}
          />
        </label>
        <label htmlFor="charHeaderCharClass">
          Character Class:
          <input
            type="text"
            name="charClass"
            id="charHeaderCharClass"
            onChange={({ target }) =>
              setCharHeader({ ...charHeader, class: target.value })
            }
            value={charHeader.class}
          />
        </label>
        <label htmlFor="charHeaderCharLevel">
          Character Level:
          <input
            type="number"
            name="charLevel"
            id="charHeaderCharLevel"
            onChange={({ target }) =>
              setCharHeader({ ...charHeader, level: target.value })
            }
            value={charHeader.level}
          />
        </label>
        <label htmlFor="charHeaderCharRace">
          Race:
          <input
            type="text"
            name="charRace"
            id="charHeaderCharRace"
            onChange={({ target }) =>
              setCharHeader({ ...charHeader, race: target.value })
            }
            value={charHeader.race}
          />
        </label>
        <label htmlFor="charHeaderDeity">
          Deity:
          <input
            type="text"
            name="deity"
            id="charHeaderDeity"
            onChange={({ target }) =>
              setCharHeader({ ...charHeader, deity: target.value })
            }
            value={charHeader.deity}
          />
        </label>
        <label htmlFor="charHeaderHomeland">
          Homeland:
          <input
            type="text"
            name="homeland"
            id="charHeaderHomeland"
            onChange={({ target }) =>
              setCharHeader({ ...charHeader, homeland: target.value })
            }
            value={charHeader.homeland}
          />
        </label>
        <label htmlFor="charHeaderSize">
          Size:
          <input
            type="text"
            name="size"
            id="charHeaderSize"
            onChange={({ target }) =>
              setCharHeader({ ...charHeader, size: target.value })
            }
            value={charHeader.size}
          />
        </label>
        <label htmlFor="charHeaderGender">
          Gender:
          <input
            type="text"
            name="gender"
            id="charHeaderGender"
            onChange={({ target }) =>
              setCharHeader({ ...charHeader, gender: target.value })
            }
            value={charHeader.gender}
          />
        </label>
        <label htmlFor="charHeaderAge">
          Age:
          <input
            type="text"
            name="age"
            id="charHeaderAge"
            onChange={({ target }) =>
              setCharHeader({ ...charHeader, age: target.value })
            }
            value={charHeader.age}
          />
        </label>
        <label htmlFor="charHeaderHeight">
          Height:
          <input
            type="text"
            name="height"
            id="charHeaderHeight"
            onChange={({ target }) =>
              setCharHeader({
                ...charHeader,
                height: target.value,
                metricHeight: `${(+target.value * 0.3048).toFixed(2)}m`,
              })
            }
            value={charHeader.height}
          />
        </label>
        <label htmlFor="charHeaderWeight">
          Weight:
          <input
            type="text"
            name="weight"
            id="charHeaderWeight"
            onChange={({ target }) =>
              setCharHeader({
                ...charHeader,
                weight: target.value,
                metricWeight: `${(+target.value * 0.45359237).toFixed(2)}kg`,
              })
            }
            value={charHeader.weight}
          />
        </label>
        <label htmlFor="charHeaderHair">
          Hair:
          <input
            type="text"
            name="hair"
            id="charHeaderHair"
            onChange={({ target }) =>
              setCharHeader({ ...charHeader, hair: target.value })
            }
            value={charHeader.hair}
          />
        </label>
        <label htmlFor="charHeaderEyes">
          Eyes:
          <input
            type="text"
            name="eyes"
            id="charHeaderEyes"
            onChange={({ target }) =>
              setCharHeader({ ...charHeader, eyes: target.value })
            }
            value={charHeader.eyes}
          />
        </label>
      </header>
      <main className="charMainStats">
        <section>
          Vital Stats
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
          <div className="charHealth"></div>
        </section>
        <section>Abilities Section</section>
        <section>Skill Section</section>
        <section>Defense Stats</section>
        <section>Offensive Stats</section>
      </main>
    </div>
  );
}

export default Charsheet;
