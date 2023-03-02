import React, { useState } from "react";
import { charHeaderInitialState as charInfo } from "../utils/charHeaderInitialState";
import { charAbilityScoreInitialState as scores } from "../utils/charAbilityScoreInitialState";
import { healthInitialState as vitals } from "../utils/healthInitialState";
import { alignments } from "../utils/alignment";
import Ability from "./Ability";
import { CustomInput } from "./Inputs";
import Charhealth from "./Charhealth";
import CharResistances from "./CharResistances";
import CharInfo from "./CharInfo";

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
            <div>
              {/* {Object.keys(abilityScores).map((score) => (
                <Ability
                  key={score}
                  abilityName={score}
                  abilityScores={abilityScores}
                  abilityBaseValue={abilityScores[score]}
                  abilityOnChange={setAbilityScores}
                />
              ))} */}
              <Ability abilityScores={abilityScores} setAbilityScores={setAbilityScores} />
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
