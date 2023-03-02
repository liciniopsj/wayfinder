export const charAbilityScoreInitialState = {
  str: 10,
  dex: 10,
  con: 10,
  int: 10,
  wis: 10,
  cha: 10,
  strMod: 0,
  dexMod: 0,
  conMod: 0,
  intMod: 0,
  wisMod: 0,
  chaMod: 0,
};

export const alignments = {
  LG: "Lawful Good",
  LN: "Lawful Neutral",
  LE: "Lawful Evil",
  NG: "Neutral Good",
  N: "True Neutral",
  NE: "Neutral Evil",
  CG: "Chaotic Good",
  CN: "Chaotic Neutral",
  CE: "Chaotic Evil",
};

export const charHeaderInitialState = {
  name: "",
  alignment: "LG",
  player: "",
  campaign: "",
  class: "",
  level: 1,
  race: "",
  deity: "",
  homeland: "",
  size: "",
  gender: "",
  age: "",
  height: 0,
  metricHeight: 0,
  weight: 0,
  metricWeight: 0,
  hair: "",
  eyes: "",
};

export const healthInitialState = {
  hpCurrent: 0,
  hpMax: 0,
  wounds: 0,
  woundsNonLethal: 0,
  initiative: 0,
  DR: 0,
  SR: 0,
  drBypass: "",
};

export const charDefenses = {
  ac: 0,
  abilityMod: 0,
  armorBonus: 0,
  shieldBonus: 0,
  sizeMod: 0,
  natArmor: 0,
  deflectMod: 0,
  miscMod: 0,
};

export const drBypassTypes = [
  "--",
  "Magic",
  "Cold Iron",
  "Bludgeoning",
  "Piercing",
  "Slashing",
  "Epic",
  "Adamantine",
  "Silver",
  "Good",
  "Evil",
  "Chaos",
  "Law",
];

export const skills = {
  placeholder: "WIP",
};
