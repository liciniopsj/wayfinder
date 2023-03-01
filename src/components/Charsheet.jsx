import React from 'react'

function Charsheet() {
  return (
    <div>
      <header className='charHeader'>
        <label htmlFor="charHeaderCharName">
          Character Name:
        <input type="text" name="charName" id="charHeaderCharName" />
        </label>
        <label htmlFor="charHeaderAlignment">
          Alignment:
        <select name="alignment" id="charHeaderAlignment">
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
        </label>
        <label htmlFor="charHeaderPlayerName">
          Player:
        <input type="text" name="playerName" id="charHeaderPlayerName" />
        </label>
        <label htmlFor="charHeaderCampaign">
          Campaign:
        <input type="text" name="campaign" id="charHeaderCampaign" />
        </label>
        <label htmlFor="charHeaderCharClass">
          Character Class:
        <input type="text" name="charClass" id="charHeaderCharClass" />
        </label>
        <label htmlFor="charHeaderCharLevel">
          Character Level:
        <input type="number" name="charLevel" id="charHeaderCharLevel" />
        </label>
        <label htmlFor="charHeaderCharRace">
          Race:
        <input type="text" name="charRace" id="charHeaderCharRace" />
        </label>
        <label htmlFor="charHeaderDeity">
          Deity:
        <input type="text" name="deity" id="charHeaderDeity" />
        </label>
        <label htmlFor="charHeaderHomeland">
          Homeland:
        <input type="text" name="homeland" id="charHeaderHomeland" />
        </label>
        <label htmlFor="charHeaderSize">
          Size:
        <input type="text" name="size" id="charHeaderSize" />
        </label>
        <label htmlFor="charHeaderGender">
          Gender:
        <input type="text" name="gender" id="charHeaderGender" />
        </label>
        <label htmlFor="charHeaderAge">
          Age:
        <input type="text" name="age" id="charHeaderAge" />
        </label>
        <label htmlFor="charHeaderHeight">
          Height:
        <input type="text" name="height" id="charHeaderHeight" />
        </label>
        <label htmlFor="charHeaderWeight">
          Weight:
        <input type="text" name="weight" id="charHeaderWeight" />
        </label>
        <label htmlFor="charHeaderHair">
          Hair:
        <input type="text" name="hair" id="charHeaderHair" />
        </label>
        <label htmlFor="charHeaderEyes">
          Eyes:
        <input type="text" name="eyes" id="charHeaderEyes" />
        </label>
      </header>
      <section>
        Vital Stats
      </section>
      <section>
        Abilities Section
      </section>
      <section>
        Skill Section
      </section>
      <section>
        Defense Stats
      </section>
      <section>
        Offensive Stats
      </section>
    </div>
  )
}

export default Charsheet