import React, { useState } from "react";
import { CustomInput } from "./Inputs";
import {
  charHeaderInitialState as charInfo,
  alignments,
  charAbilityScoreInitialState as scores,
  healthInitialState as vitals,
} from "../utils/charData";
import Ability from "./Ability";
import Charhealth from "./Charhealth";
import CharResistances from "./CharResistances";
import CharInfo from "./CharInfo";
import CharDefenses from "./CharDefenses";

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
      <header className="charHeaderContainer">
        <CharInfo charHeader={charHeader} setCharHeader={setCharHeader} />
      </header>
      <main>
        <section className="charMainStats">
          <div className="charAbilities">
            <Ability
              abilityScores={abilityScores}
              setAbilityScores={setAbilityScores}
            />
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
            <CharResistances
              vitalStats={vitalStats}
              setVitalStats={setVitalStats}
            />
          </div>
        </section>
        <section>
          <CharDefenses />
        </section>
        <section>Skill Section</section>
        <section>Offensive Stats</section>
      </main>
    </div>
  );
}

export default Charsheet;
