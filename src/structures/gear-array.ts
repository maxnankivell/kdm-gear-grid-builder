import { head } from "lodash";

export type Versions = "all" | "1.5" | "1.6";

export enum Expansion {
  DragonKing = "Dragon King",
  Sunstalker = "Sunstalker",
  Gorm = "Gorm",
  DungBeetleKnight = "Dung Beetle Knight",
  FlowerKnight = "Flower Knight",
  LionGod = "Lion God",
  LionKnight = "Lion Knight",
  Spidicules = "Spidicules",
  Slenderman = "Slenderman",
  Manhunter = "Manhunter",
}

export enum ArmorLocations {
  Head = "head",
  Arms = "arms",
  Body = "body",
  Waist = "waist",
  Legs = "legs",
}

export enum ArmorSets {
  BrawlerArmor,
  CycloidScaleArmor,
  DancerArmor,
  DragonArmor,
  GormentArmor,
  GreenArmor,
  LanternArmor,
  LeatherArmor,
  PhoenixArmor,
  RawhideArmor,
  RollingArmor,
  ScreamingArmor,
  SilkArmor,
  VagabondArmor,
  WarlordArmor,
  WhiteLionArmor,
}

export enum Impairments {
  Blind,
  BrokenArm,
  BrokenHip,
  BrokenLeg,
  BrokenRib,
  Contracture,
  DeadInside,
  Deaf,
  DestroyedBack,
  DestroyedGeneitals,
  DismemberedArm,
  DismemberdLEg,
  EndlessBabble,
  IntracranialHemorrhage,
  Leprosy,
  MarrowHunger,
  RupturedMuscle,
  ShatteredJaw,
  Thin_Skinned,
  WarpedPelvis,
}

type AffinityColors = "red" | "blue" | "green";
type AffinityRequirementColors = "red" | "blue" | "green" | "connectedred" | "connectedblue" | "connectedgreen";

interface StatsObject {
  movement?: number;
  evasion?: number;
  strength?: number;
  luck?: number;
  accuracy?: number;
  speed?: number;
}

interface AffinityDirections {
  up?: AffinityColors;
  right?: AffinityColors;
  down?: AffinityColors;
  left?: AffinityColors;
}

interface ArmorValues {
  head?: number;
  arms?: number;
  body?: number;
  waist?: number;
  legs?: number;
}

interface AffinityBonuses {
  requirements: AffinityRequirementColors[];
  stats?: StatsObject;
  gearAbilities?: GearAbilities;
  abilityText?: string;
  impairments?: Impairments[];
}

interface AttackProfile {
  speed: number;
  accuracy: number;
  strength: number;
}

// https://kingdomdeath.fandom.com/wiki/Category:Gear_Special_Rules add all these hoes laterm
interface GearAbilities {
  accessory?: number;
  activationLimit?: number;
  affinityBonus?: number;
  aim?: number;
  ammo_bow?: number;
  barbed?: number;
  blindside?: number;
  block?: number;
  charge?: number;
  cleavage?: number;
  cleave?: number;
  consume?: number;
  cumbersome?: number;
  cursed?: number;
  dazed?: number;
  deadly?: number;
  deflect?: number;
  devastating?: number;
  earlyIron?: number;
  ethereal?: number;
  frail?: number;
  grimstep?: number;
  irreplaceable?: number;
  leap?: number;
  outfit?: number;
  paired?: number;
  perfectHit?: number;
  pounce?: number;
  provoke?: number;
  puzzleAffinity?: number;
  range?: number;
  reach?: number;
  refined?: number;
  ripplePattern?: number;
  roar?: number;
  savage?: number;
  scream?: number;
  sealed?: number;
  selfish?: number;
  sentient?: number;
  shadowWalk?: number;
  sharp?: number;
  sideswipe?: number;
  skewer?: number;
  slam?: number;
  slow?: number;
  undeathable?: number;
  unique?: number;
  unshakeable?: number;
  unstoppable?: number;
  unwieldy?: number;
  vital?: number;
}

interface GearImage {
  id: number;
  source: string;
  categories: string[];
  versions: Versions[];
  expansion: Expansion | null;
  stats?: StatsObject;
  gearAbilities?: GearAbilities;
  affinities?: AffinityDirections;
  builtInAffinites?: AffinityColors[];
  affinityBonuses?: AffinityBonuses[];
  armorLocation?: ArmorLocations[];
  armorValues?: ArmorValues;
  armorSets?: ArmorSets[];
  attackProfile?: AttackProfile;
}

const gearArray: GearImage[] = [
  // barber-surgeon
  {
    id: 1,
    source: "gear-images/barber-surgeon/almanac.webp",
    categories: ["barber-surgeon", "item", "soluble", "flammable", "blue"],
    versions: ["all"],
    expansion: null,
    affinities: { right: "blue" },
  },
  {
    id: 2,
    source: "gear-images/kdm-1.5-gear/barber-surgeon/brain_mint.webp",
    categories: ["barber-surgeon", "item", "consumable", "green", "blue"],
    versions: ["1.5"],
    expansion: null,
    affinities: { up: "green", left: "blue" },
    gearAbilities: { consume: 0 },
  },
  {
    id: 3,
    source: "gear-images/barber-surgeon/bug_trap.webp",
    categories: ["barber-surgeon", "item", "soluble"],
    versions: ["all"],
    expansion: null,
  },
  {
    id: 4,
    source: "gear-images/kdm-1.5-gear/barber-surgeon/elder_earrings.webp",
    categories: ["barber-surgeon", "item", "jewelery", "red", "blue", "green"],
    versions: ["1.5"],
    expansion: null,
    affinities: { right: "green", down: "blue", left: "red" },
  },
  {
    id: 5,
    source: "gear-images/barber-surgeon/first_aid_kit.webp",
    categories: ["barber-surgeon", "item", "heavy", "green"],
    versions: ["all"],
    expansion: null,
    affinities: { up: "green", right: "green", down: "green", left: "green" },
  },
  {
    id: 6,
    source: "gear-images/barber-surgeon/musk_bomb.webp",
    categories: ["barber-surgeon", "item", "stinky", "thrown", "fragile"],
    versions: ["all"],
    expansion: null,
  },
  {
    id: 7,
    source: "gear-images/barber-surgeon/scavenger_kit.webp",
    categories: ["barber-surgeon", "item", "heavy", "green"],
    versions: ["all"],
    expansion: null,
    affinities: { down: "green" },
  },
  {
    id: 8,
    source: "gear-images/kdm-1.5-gear/barber-surgeon/speed_powder.webp",
    categories: ["barber-surgeon", "item", "soluble", "blue"],
    versions: ["1.5"],
    expansion: null,
  },
  {
    id: 9,
    source: "gear-images/kdm-1.6-gear/barber-surgeon/blue_charm.webp",
    categories: ["barber-surgeon", "item", "jewelery", "fragile", "blue"],
    versions: ["1.6"],
    expansion: null,
    builtInAffinites: ["blue"],
    affinityBonuses: [{ requirements: ["blue", "blue", "blue", "blue", "blue"], gearAbilities: { unshakeable: 0 } }],
  },
  {
    id: 10,
    source: "gear-images/kdm-1.6-gear/barber-surgeon/green_charm.webp",
    categories: ["barber-surgeon", "item", "jewelery", "fragile", "green"],
    versions: ["1.6"],
    expansion: null,
    builtInAffinites: ["green"],
    affinityBonuses: [
      { requirements: ["green", "green", "green", "green", "green"], gearAbilities: { undeathable: 0 } },
    ],
  },
  {
    id: 11,
    source: "gear-images/kdm-1.6-gear/barber-surgeon/red_charm.webp",
    categories: ["barber-surgeon", "item", "jewelery", "fragile", "red"],
    versions: ["1.6"],
    expansion: null,
    builtInAffinites: ["red"],
    affinityBonuses: [{ requirements: ["red", "red", "red", "red", "red"], gearAbilities: { unstoppable: 0 } }],
  },
  // blacksmith
  {
    id: 12,
    source: "gear-images/blacksmith/beacon_shield.webp",
    categories: ["blacksmith", "weapon", "melee", "metal", "shield", "heavy"],
    versions: ["all"],
    expansion: null,
    gearAbilities: { block: 2 },
    armorValues: { head: 2, arms: 2, body: 2, waist: 2, legs: 2 },
    attackProfile: { speed: 1, accuracy: 6, strength: 5 },
  },
  {
    id: 13,
    source: "gear-images/blacksmith/dragon_slayer.webp",
    categories: ["blacksmith", "weapon", "melee", "grand-weapon", "heavy", "two-handed", "metal", "red", "blue"],
    versions: ["all"],
    expansion: null,
    affinities: { up: "blue", right: "red" },
    gearAbilities: { frail: 0, slow: 0, sharp: 0, devastating: 1, earlyIron: 0 },
    attackProfile: { speed: 1, accuracy: 6, strength: 9 },
  },
  {
    id: 14,
    source: "gear-images/blacksmith/lantern_cuirass.webp",
    categories: ["blacksmith", "armor", "set", "metal", "heavy", "body-armor", "green", "blue", "lantern-armor"],
    versions: ["all"],
    expansion: null,
    affinities: { up: "blue", right: "green", down: "blue", left: "green" },
    stats: { movement: -2 },
    affinityBonuses: [
      {
        requirements: ["connectedblue", "connectedgreen", "connectedgreen", "connectedblue"],
        abilityText: "When you depart, add 3 armor value to all hit locations with metal armor.",
      },
    ],
    armorLocation: [ArmorLocations.Body],
    armorValues: { body: 5 },
  },
  {
    id: 15,
    source: "gear-images/blacksmith/lantern_dagger.webp",
    categories: ["blacksmith", "weapon", "melee", "dagger", "metal", "finesse", "red"],
    versions: ["all"],
    expansion: null,
    affinities: { left: "red" },
    gearAbilities: { paired: 0, sharp: 0, earlyIron: 0 },
    attackProfile: { speed: 2, accuracy: 7, strength: 1 },
  },
  {
    id: 16,
    source: "gear-images/blacksmith/lantern_gauntlets.webp",
    categories: ["blacksmith", "armor", "set", "metal", "heavy", "arm-armor", "green", "lantern-armor"],
    versions: ["all"],
    expansion: null,
    affinities: { left: "green" },
    affinityBonuses: [{ requirements: ["connectedgreen"], abilityText: "+2 Accuracy with club weapons." }],
    armorLocation: [ArmorLocations.Arms],
    armorValues: { arms: 5 },
  },
  {
    id: 17,
    source: "gear-images/blacksmith/lantern_glaive.webp",
    categories: ["blacksmith", "weapon", "melee", "spear", "axe", "finesse", "two-handed", "metal", "green"],
    versions: ["all"],
    expansion: null,
    affinities: { down: "green" },
    gearAbilities: { reach: 2, sharp: 0, earlyIron: 0 },
    attackProfile: { speed: 2, accuracy: 6, strength: 4 },
  },
  {
    id: 18,
    source: "gear-images/blacksmith/lantern_greaves.webp",
    categories: ["blacksmith", "armor", "set", "metal", "heavy", "leg-armor", "red", "blue", "lantern-armor"],
    versions: ["all"],
    expansion: null,
    affinities: { up: "blue", right: "red", left: "red" },
    affinityBonuses: [
      {
        requirements: ["connectedred", "connectedred", "connectedblue"],
        stats: { movement: 2 },
      },
    ],
    armorLocation: [ArmorLocations.Legs],
    armorValues: { legs: 5 },
  },
  {
    id: 19,
    source: "gear-images/blacksmith/lantern_helm.webp",
    categories: ["blacksmith", "armor", "set", "metal", "heavy", "head-armor", "blue", "lantern-armor"],
    versions: ["all"],
    expansion: null,
    affinities: { down: "blue" },
    affinityBonuses: [{ requirements: ["connectedblue"], stats: { accuracy: -1 }, impairments: [Impairments.Deaf] }],
  },
  {
    id: 20,
    source: "gear-images/blacksmith/lantern_mail.webp",
    categories: ["blacksmith", "armor", "set", "metal", "heavy", "waist-armor", "green", "lantern-armor"],
    versions: ["all"],
    expansion: null,
    affinities: { right: "green" },
    armorLocation: [ArmorLocations.Waist],
    armorValues: { waist: 5 },
  },
  {
    id: 21,
    source: "gear-images/blacksmith/lantern_sword.webp",
    categories: ["blacksmith", "weapon", "melee", "sword", "finesse", "metal", "red"],
    versions: ["all"],
    expansion: null,
    affinities: { left: "red" },
    gearAbilities: { sharp: 0, earlyIron: 0 },
    attackProfile: { speed: 3, accuracy: 5, strength: 3 },
  },
  {
    id: 22,
    source: "gear-images/blacksmith/perfect_slayer.webp",
    categories: [
      "blacksmith",
      "weapon",
      "melee",
      "grand-weapon",
      "two-handed",
      "sword",
      "heavy",
      "finesse",
      "metal",
      "red",
    ],
    versions: ["all"],
    expansion: null,
    affinities: { down: "red" },
    gearAbilities: { slow: 0, sharp: 0, devastating: 2, irreplaceable: 0 },
    stats: { movement: -2 },
    attackProfile: { speed: 3, accuracy: 6, strength: 14 },
  },
  {
    id: 23,
    source: "gear-images/kdm-1.6-gear/blacksmith/polishing_lantern.webp",
    categories: ["blacksmith", "item", "metal", "lantern"],
    versions: ["1.6"],
    expansion: null,
    affinities: { left: "red" },
  },
  {
    id: 24,
    source: "gear-images/blacksmith/ring_whip.webp",
    categories: ["blacksmith", "weapon", "melee", "whip", "finesse", "metal", "blue"],
    versions: ["all"],
    expansion: null,
    affinities: { left: "blue" },
    gearAbilities: { sharp: 0, reach: 2, earlyIron: 0 },
    attackProfile: { speed: 2, accuracy: 5, strength: 0 },
  },
  {
    id: 25,
    source: "gear-images/blacksmith/scrap_shield.webp",
    categories: ["blacksmith", "weapon", "melee", "shield", "bone", "metal", "red"],
    versions: ["all"],
    expansion: null,
    affinities: { right: "red" },
    gearAbilities: { block: 1 },
    armorValues: { head: 1, arms: 1, body: 1, waist: 1, legs: 1 },
    attackProfile: { speed: 2, accuracy: 7, strength: 3 },
  },
  // bone smith
  {
    id: 26,
    source: "gear-images/bone-smith/bone_axe.webp",
    categories: ["bone-smith", "weapon", "melee", "axe", "bone", "red"],
    versions: ["all"],
    expansion: null,
    affinities: { left: "red" },
    gearAbilities: { frail: 0, savage: 0 },
    attackProfile: { speed: 2, accuracy: 3, strength: 3 },
  },
  {
    id: 27,
    source: "gear-images/bone-smith/bone_blade.webp",
    categories: ["bone-smith", "weapon", "melee", "sword", "bone", "red"],
    versions: ["all"],
    expansion: null,
    affinities: { left: "red" },
    gearAbilities: { frail: 0 },
    attackProfile: { speed: 2, accuracy: 6, strength: 2 },
  },
  {
    id: 28,
    source: "gear-images/bone-smith/bone_club.webp",
    categories: ["bone-smith", "weapon", "melee", "club", "bone", "red"],
    versions: ["all"],
    expansion: null,
    affinities: { right: "red", left: "red" },
    gearAbilities: { cumbersome: 0 },
    attackProfile: { speed: 2, accuracy: 6, strength: 5 },
  },
  {
    id: 29,
    source: "gear-images/bone-smith/bone_dagger.webp",
    categories: ["bone-smith", "weapon", "melee", "dagger", "bone", "red"],
    versions: ["all"],
    expansion: null,
    affinities: { up: "red", left: "red" },
  },
  {
    id: 30,
    source: "gear-images/bone-smith/bone_darts.webp",
    categories: ["bone-smith", "weapon", "ranged", "thrown", "bone", "red"],
    versions: ["all"],
    expansion: null,
    affinities: { left: "red" },
    gearAbilities: { range: 6, frail: 0 },
    attackProfile: { speed: 1, accuracy: 7, strength: 3 },
  },
  {
    id: 31,
    source: "gear-images/bone-smith/bone_pickaxe.webp",
    categories: ["bone-smith", "item", "tool", "pickaxe", "bone", "green"],
    versions: ["all"],
    expansion: null,
    affinities: { up: "green" },
    attackProfile: { speed: 1, accuracy: 8, strength: 2 },
  },
  {
    id: 32,
    source: "gear-images/bone-smith/bone_sickle.webp",
    categories: ["bone-smith", "item", "tool", "sickle", "bone", "green"],
    versions: ["all"],
    expansion: null,
    affinities: { up: "green" },
    attackProfile: { speed: 2, accuracy: 8, strength: 1 },
  },
  {
    id: 33,
    source: "gear-images/bone-smith/skull_helm.webp",
    categories: ["bone-smith", "armor", "bone", "fragile", "head-armor", "red"],
    versions: ["all"],
    expansion: null,
    affinities: { down: "red" },
    armorLocation: [ArmorLocations.Head],
    armorValues: { head: 3 },
    armorSets: [ArmorSets.BrawlerArmor],
  },

  // catarium
  {
    id: 34,
    source: "gear-images/catarium/cat_eye_circlet.webp",
    categories: ["catarium", "item", "jewelery", "other", "blue"],
    versions: ["all"],
    expansion: null,
    affinities: { left: "blue" },
  },
  {
    id: 35,
    source: "gear-images/catarium/cat_fang_knife.webp",
    categories: ["catarium", "weapon", "melee", "dagger", "bone", "red"],
    versions: ["all"],
    expansion: null,
    affinities: { up: "red", right: "red", down: "red", left: "red" },
    affinityBonuses: [
      {
        requirements: ["red", "red", "red"],
        abilityText: "On a Perfect hit, gain +1 strength token. When knocked down, remove all your +1 strength tokens.",
      },
    ],
    attackProfile: { speed: 3, accuracy: 6, strength: 2 },
  },
  {
    id: 36,
    source: "gear-images/catarium/cat_gut_bow.webp",
    categories: ["catarium", "weapon", "ranged", "bow", "two-handed", "blue"],
    versions: ["all"],
    expansion: null,
    affinities: { up: "blue" },
    gearAbilities: { cumbersome: 0, range: 6, aim: 0 },
    attackProfile: { speed: 2, accuracy: 7, strength: 3 },
  },
  {
    id: 37,
    source: "gear-images/catarium/claw_head_arrow.webp",
    categories: ["catarium", "item", "ammunition", "arrow", "blue"],
    versions: ["all"],
    expansion: null,
    affinities: { right: "blue" },
    gearAbilities: { slow: 0, ammo_bow: 6 },
    attackProfile: { speed: 1, accuracy: 6, strength: 6 },
  },
  {
    id: 38,
    source: "gear-images/catarium/frenzy_drink.webp",
    categories: ["catarium", "item", "consumable", "fragile"],
    versions: ["all"],
    expansion: null,
    gearAbilities: { consume: 0 },
  },
  {
    id: 39,
    source: "gear-images/catarium/king_spear.webp",
    categories: ["catarium", "weapon", "melee", "spear", "heavy", "two-handed", "red"],
    versions: ["all"],
    expansion: null,
    affinities: { right: "red" },
    gearAbilities: { reach: 2 },
    attackProfile: { speed: 2, accuracy: 6, strength: 3 },
  },
  {
    id: 40,
    source: "gear-images/catarium/lion_beast_katar.webp",
    categories: ["catarium", "weapon", "melee", "katar", "paired"],
    versions: ["all"],
    expansion: null,
    gearAbilities: { deadly: 1, paired: 0 },
    attackProfile: { speed: 2, accuracy: 7, strength: 3 },
  },
  {
    id: 41,
    source: "gear-images/catarium/lion_headdress.webp",
    categories: ["catarium", "item", "flammable"],
    versions: ["all"],
    expansion: null,
    gearAbilities: { accessory: 0 },
    armorLocation: [ArmorLocations.Head],
    armorValues: { head: 1 },
  },
  {
    id: 42,
    source: "gear-images/catarium/lion_skin_cloak.webp",
    categories: ["catarium", "armor", "fur", "heavy", "bone", "flammable", "green"],
    versions: ["all"],
    expansion: null,
    affinities: { right: "green" },
    armorLocation: [ArmorLocations.Body],
    armorValues: { body: 0 },
  },
  {
    id: 43,
    source: "gear-images/catarium/whisker_harp.webp",
    categories: ["catarium", "item", "instrument", "noisy", "blue"],
    versions: ["all"],
    expansion: null,
    affinities: { left: "blue" },
  },
  {
    id: 44,
    source: "gear-images/catarium/white_lion_boots.webp",
    categories: ["catarium", "armor", "set", "fur", "heavy", "leg-armor", "red", "white-lion-armor"],
    versions: ["all"],
    expansion: null,
    affinities: { right: "red", down: "red" },
    affinityBonuses: [{ requirements: ["connectedred", "connectedred"], stats: { movement: 1 } }],
    armorLocation: [ArmorLocations.Legs],
    armorValues: { legs: 2 },
    armorSets: [ArmorSets.WhiteLionArmor],
  },
  {
    id: 45,
    source: "gear-images/catarium/white_lion_coat.webp",
    categories: ["catarium", "armor", "set", "fur", "heavy", "body-armor", "blue", "white-lion-armor"],
    versions: ["all"],
    expansion: null,
    affinities: { up: "blue" },
    gearAbilities: { pounce: 0 },
    armorLocation: [ArmorLocations.Body],
    armorValues: { body: 2 },
    armorSets: [ArmorSets.WhiteLionArmor],
  },
  {
    id: 46,
    source: "gear-images/catarium/white_lion_gauntlet.webp",
    categories: ["catarium", "armor", "set", "fur", "heavy", "arm-armor", "white-lion-armor"],
    versions: ["all"],
    expansion: null,
    armorLocation: [ArmorLocations.Arms],
    armorValues: { arms: 2 },
    armorSets: [ArmorSets.WhiteLionArmor],
  },
  {
    id: 47,
    source: "gear-images/catarium/white_lion_helm.webp",
    categories: ["catarium", "armor", "set", "fur", "heavy", "head-armor", "red", "white-lion-armor"],
    versions: ["all"],
    expansion: null,
    affinities: { down: "red" },
    affinityBonuses: [
      {
        requirements: ["connectedred", "blue"],
        abilityText:
          "[Activation] and 1 survival: Roar, Non-Deaf Insane survivors gain +2 strength until end of round. All other survivors gain +1 insanity.",
      },
    ],
    armorLocation: [ArmorLocations.Head],
    armorValues: { head: 2 },
    armorSets: [ArmorSets.WhiteLionArmor],
  },
  {
    id: 48,
    source: "gear-images/catarium/white_lion_skirt.webp",
    categories: ["catarium", "armor", "set", "fur", "heavy", "waist-armor", "red", "white-lion-armor"],
    versions: ["all"],
    expansion: null,
    affinities: { right: "red", left: "red" },
    armorLocation: [ArmorLocations.Waist],
    armorValues: { waist: 2 },
    armorSets: [ArmorSets.WhiteLionArmor],
  },

  //dragon armory
  {
    id: 49,
    source: "gear-images/dragon-king-expansion/dragon-armory/blast_shield.webp",
    categories: ["dragon-armory", "weapon", "melee", "shield", "metal"],
    versions: ["all"],
    expansion: Expansion.DragonKing,
    gearAbilities: { block: 1 },
    armorValues: { head: 1, arms: 1, body: 1, waist: 1, legs: 1 },
    attackProfile: { speed: 1, accuracy: 7, strength: 4 },
  },
  {
    id: 50,
    source: "gear-images/dragon-king-expansion/dragon-armory/blast_sword.webp",
    categories: ["dragon-armory", "weapon", "melee", "sword", "bone", "red", "green"],
    versions: ["all"],
    expansion: Expansion.DragonKing,
    affinities: { up: "green", down: "red" },
    gearAbilities: { block: 1 },
    attackProfile: { speed: 2, accuracy: 6, strength: 4 },
  },
  {
    id: 51,
    source: "gear-images/dragon-king-expansion/dragon-armory/blue_power_core.webp",
    categories: ["dragon-armory", "item", "jewelry"],
    versions: ["all"],
    expansion: Expansion.DragonKing,
  },
  {
    id: 52,
    source: "gear-images/dragon-king-expansion/dragon-armory/dragon_belt.webp",
    categories: ["dragon-armory", "armor", "set", "metal", "waist-armor", "red", "blue"],
    versions: ["all"],
    expansion: Expansion.DragonKing,
    affinities: { down: "blue", left: "red" },
    affinityBonuses: [
      {
        requirements: ["connectedblue", "connectedred"],
        abilityText: "You are not knocked down from suffering a heavy injury.",
      },
    ],
    armorLocation: [ArmorLocations.Waist],
    armorValues: { waist: 4 },
    armorSets: [ArmorSets.DragonArmor],
  },
  {
    id: 53,
    source: "gear-images/dragon-king-expansion/dragon-armory/dragon_bite_bolt.webp",
    categories: ["dragon-armory", "item", "ammunition", "arrow"],
    versions: ["all"],
    expansion: Expansion.DragonKing,
    gearAbilities: { slow: 0, ammo_bow: 0, devastating: 1 },
    attackProfile: { speed: 1, accuracy: 6, strength: 6 },
  },
  {
    id: 54,
    source: "gear-images/dragon-king-expansion/dragon-armory/dragon_boots.webp",
    categories: ["dragon-armory", "armor", "set", "metal", "leg-armor", "red", "green", "dragon-armor"],
    versions: ["all"],
    expansion: Expansion.DragonKing,
    affinities: { up: "green", right: "red" },
    armorLocation: [ArmorLocations.Legs],
    armorValues: { legs: 4 },
    armorSets: [ArmorSets.DragonArmor],
  },
  {
    id: 55,
    source: "gear-images/dragon-king-expansion/dragon-armory/dragon_chakram.webp",
    categories: ["dragon-armory", "weapon", "ranged", "thrown", "bone"],
    versions: ["all"],
    expansion: Expansion.DragonKing,
    gearAbilities: { range: 3 },
    attackProfile: { speed: 2, accuracy: 6, strength: 3 },
  },
  {
    id: 56,
    source: "gear-images/dragon-king-expansion/dragon-armory/dragon_gloves.webp",
    categories: ["dragon-armory", "armor", "set", "metal", "arm-armor", "dragon-armor", "green", "blue"],
    versions: ["all"],
    expansion: Expansion.DragonKing,
    affinities: { up: "blue", right: "green" },
    armorLocation: [ArmorLocations.Arms],
    armorValues: { arms: 4 },
    armorSets: [ArmorSets.DragonArmor],
  },
  {
    id: 57,
    source: "gear-images/dragon-king-expansion/dragon-armory/dragon_mantle.webp",
    categories: ["dragon-armory", "armor", "set", "metal", "body-armor", "red", "green", "dragon-armor"],
    versions: ["all"],
    expansion: Expansion.DragonKing,
    affinities: { up: "red", right: "blue", down: "green", left: "green" },
    affinityBonuses: [
      {
        requirements: ["connectedgreen", "connectedred", "connectedgreen", "connectedblue"],
        abilityText:
          "At the start of the showdown you beat your chest mightily and gain survival up to the survival limit",
      },
    ],
    armorLocation: [ArmorLocations.Body],
    armorValues: { body: 4 },
    armorSets: [ArmorSets.DragonArmor],
  },
  {
    id: 58,
    source: "gear-images/dragon-king-expansion/dragon-armory/dragonskull_helm.webp",
    categories: ["dragon-armory", "armor", "set", "metal", "head-armor", "red", "dragon-armor"],
    versions: ["all"],
    expansion: Expansion.DragonKing,
    affinities: { right: "red", down: "red", left: "red" },
    affinityBonuses: [
      {
        requirements: ["connectedred", "connectedred"],
        abilityText:
          "Gain +1 to all severe Head injury rolle results. Ignore Shattered Jaw severe Head injudry result.",
      },
    ],
    armorLocation: [ArmorLocations.Head],
    armorValues: { head: 4 },
    armorSets: [ArmorSets.DragonArmor],
  },
  {
    id: 59,
    source: "gear-images/dragon-king-expansion/dragon-armory/nuclear_knife.webp",
    categories: ["dragon-armory", "weapon", "melee", "dagger", "nuclear", "red", "green", "blue"],
    versions: ["all"],
    expansion: Expansion.DragonKing,
    affinities: { up: "blue", right: "red", down: "green", left: "blue" },
    affinityBonuses: [
      {
        requirements: ["connectedred", "connectedgreen", "connectedblue"],
        abilityText:
          "Activation: Edge ignites! Suffer 3 brain damage. Your next attack with this weapon games Devastating 1. Limit, once per round.",
      },
    ],
    attackProfile: { speed: 3, accuracy: 6, strength: 3 },
  },
  {
    id: 60,
    source: "gear-images/dragon-king-expansion/dragon-armory/nuclear_scythe.webp",
    categories: ["dragon-armory", "weapon", "melee", "scythe", "nuclear", "red", "blue"],
    versions: ["all"],
    expansion: Expansion.DragonKing,
    affinities: { up: "red", down: "red", left: "blue" },
    gearAbilities: { range: 3 },
    affinityBonuses: [
      {
        requirements: ["connectedred", "connectedred", "connectedblue"],
        abilityText:
          "Activation: Edge ignites! Suffer 3 brain damage. Your next attack with this weapon games Devastating 1. Limit, once per round.",
      },
    ],
    attackProfile: { speed: 2, accuracy: 6, strength: 4 },
  },
  {
    id: 60,
    source: "gear-images/dragon-king-expansion/dragon-armory/red_power_core.webp",
    categories: ["dragon-armory", "item", "jewelry"],
    versions: ["all"],
    expansion: Expansion.DragonKing,
  },
  {
    id: 61,
    source: "gear-images/dragon-king-expansion/dragon-armory/shielded_quiver.webp",
    categories: ["dragon-armory", "item", "leather"],
    versions: ["all"],
    expansion: Expansion.DragonKing,
  },
  {
    id: 62,
    source: "gear-images/dragon-king-expansion/dragon-armory/talon_knife.webp",
    categories: ["dragon-armory", "weapon", "melee", "katar", "bone", "paired", "blue"],
    versions: ["all"],
    expansion: Expansion.DragonKing,
    affinities: { up: "blue", left: "blue" },
    gearAbilities: { paired: 0 },
    attackProfile: { speed: 2, accuracy: 6, strength: 4 },
  },
  //exhausted lantern hoard
  {
    id: 63
    source: "gear-images/kdm-1.5-gear/exhausted-lantern-hoard/final_lantern.webp",
    categories: ["exhausted-lantern-hoard", "item", "lantern", "other", "green", "blue"],
    versions: ["1.5"],
    expansion: null,
    affinities: { up: "green", left: "blue" },
    gearAbilities: { vital: 0 },

  },
  {
    id: 64
    source: "gear-images/kdm-1.6-gear/exhausted-lantern-hoard/final_lantern.webp",
    categories: ["exhausted-lantern-hoard", "item", "lantern", "other", "green", "blue"],
    versions: ["1.6"],
    expansion: null,
    affinities: { up: "green", left: "blue" },
    gearAbilities: { vital: 0 },
  },
  {
    id: 65,
    source: "gear-images/kdm-1.5-gear/exhausted-lantern-hoard/final_lantern_closed.webp",
    categories: ["exhausted-lantern-hoard", "item", "lantern", "other", "green", "blue"],
    versions: ["1.5"],
    expansion: null,
    affinities: { up: "green", left: "blue" },
    gearAbilities: { vital: 0 },
  },
  {
    id: 66,
    source: "gear-images/kdm-1.6-gear/exhausted-lantern-hoard/final_lantern_closed.webp",
    categories: ["exhausted-lantern-hoard", "item", "lantern", "other", "green", "blue"],
    versions: ["1.6"],
    expansion: null,
    affinities: { up: "green", left: "blue" },
    gearAbilities: { vital: 0 },
  },
  {
    id: 67,
    source: "gear-images/exhausted-lantern-hoard/oxidized_beacon_shield.webp",
    categories: ["exhausted-lantern-hoard", "weapon", "melee", "shield", "metal", "heavy"],
    versions: ["all"],
    expansion: null,
    gearAbilities: { deflect: 2 },
    armorValues: { head: 2, arms: 2, body: 2, waist: 2, legs: 2 },
    attackProfile: { speed: 1, accuracy: 6, strength: 6 },
  },
  {
    id: 68,
    source: "gear-images/exhausted-lantern-hoard/oxidized_lantern_dagger.webp",
    categories: ["exhausted-lantern-hoard", "weapon", "melee", "dagger", "finesse", "metal", "red"],
    versions: ["all"],
    expansion: null,
    affinities: { right: "red", left: "red" },
    gearAbilities: { sharp: 0, paired: 0 },
    affinityBonuses: [
      {requirements: ["connectedred", "red"],abilityText:"On a Perfect hit, gain +1 survival",},],
    attackProfile: { speed: 3, accuracy: 6, strength: 4 },

  },
  {
    id: 69,
    source: "gear-images/kdm-1.5-gear/exhausted-lantern-hoard/oxidized_lantern_glaive.webp",
    categories: [
      "exhausted-lantern-hoard",
      "weapon",
      "melee",
      "spear",
      "axe",
      "two-handed",
      "finesse",
      "metal",
      "green",
    ],
    versions: ["1.5"],
    expansion: null,
    affinities: { down: "green" },
    gearAbilities: { sharp: 0, reach: 2 },
    affinityBonuses: [
      {requirements: ["connectedgreen", "red"], abilityText: "On a Perfect Hit, the edge sharpens. This weapon gains +4 strength for this attack.",},],
      attackProfile: { speed: 2, accuracy: 5, strength: 6 },
  },
  {
    id: 70,
    source: "gear-images/kdm-1.6-gear/exhausted-lantern-hoard/oxidized_lantern_glaive.webp",
    categories: [
      "exhausted-lantern-hoard",
      "weapon",
      "melee",
      "spear",
      "axe",
      "two-handed",
      "finesse",
      "metal",
      "green",
    ],
    versions: ["1.6"],
    expansion: null,
    affinities: { down: "green" },
    gearAbilities: { sharp: 0, reach: 2 },
    affinityBonuses: [
      {requirements: ["connectedgreen", "red"], gearAbilities: {barbed: 4}},],
      attackProfile: { speed: 2, accuracy: 5, strength: 6 },
  },
  {
    id: 71,
    source: "gear-images/exhausted-lantern-hoard/oxidized_lantern_helm.webp",
    categories: ["exhausted-lantern-hoard", "armor", "set", "metal", "head-armor", "blue"],
    versions: ["all"],
    expansion: null,
    affinities: { down: "red" },
    gearAbilities: { outfit: 0 },
    armorValues: { head: 6},
    armorLocation: [ArmorLocations.Head],
  },
  {
    id: 72,
    source: "gear-images/exhausted-lantern-hoard/oxidized_lantern_sword.webp",
    categories: ["exhausted-lantern-hoard", "weapon", "melee", "sword", "finesse", "metal", "red"],
    versions: ["all"],
    expansion: null,
    affinities: { left: "red" },
    gearAbilities: { sharp: 0, deflect: 1 },
    attackProfile: { speed: 3, accuracy: 5, strength: 5 },
  },
  {
    id: 73,
    source: "gear-images/exhausted-lantern-hoard/oxidized_ring_whip.webp",
    categories: ["exhausted-lantern-hoard", "weapon", "melee", "whip", "finesse", "metal", "blue"],
    versions: ["all"],
    expansion: null,
    affinities: { left: "blue" },
    affinityBonuses: [
      {requirements: ["connectedblue", "red", "red", "red"], gearAbilities: {provoke: 0}},],
    gearAbilities: { sharp: 0, reach: 2 },
    attackProfile: { speed: 2, accuracy: 5, strength: 3 },
  },
  {
    id: 74,
    source: "gear-images/exhausted-lantern-hoard/survivors'_lantern.webp",
    categories: ["exhausted-lantern-hoard", "item", "lantern", "red", "green", "blue"],
    versions: ["all"],
    expansion: null,
    affinities: { right: "green", down: "blue", left: "red" },

  },
  //gormchymist
  {
    id: 75,
    source: "gear-images/gorm-expansion/gormchymist/healing_potion.webp",
    categories: ["gormchymist", "item", "consumable", "fragile", "red"],
    versions: ["all"],
    expansion: Expansion.Gorm,
    affinities: { down: "red" },
  },
  {
    id: 76,
    source: "gear-images/gorm-expansion/gormchymist/life_elixir.webp",
    categories: ["gormchymist", "item", "consumable", "stinky"],
    versions: ["all"],
    expansion: Expansion.Gorm,
  },
  {
    id: 77,
    source: "gear-images/gorm-expansion/gormchymist/power_potion.webp",
    categories: ["gormchymist", "item", "consumable", "green"],
    versions: ["all"],
    expansion: Expansion.Gorm,
    affinities: { up: "green" },
  },
  {
    id: 78,
    source: "gear-images/gorm-expansion/gormchymist/steadfast_potion.webp",
    categories: ["gormchymist", "item", "consumable", "heavy", "red"],
    versions: ["all"],
    expansion: Expansion.Gorm,
    affinities: { up: "red" },
  },
  {
    id: 79,
    source: "gear-images/gorm-expansion/gormchymist/wisdom_potion.webp",
    categories: ["gormchymist", "item", "consumable", "other", "blue"],
    versions: ["all"],
    expansion: Expansion.Gorm,
    affinities: { right: "blue" },
    affinityBonuses: [
      {requirements: ["connectedblue", "blue"], abilityText: "Play the showdown with the top card of the hit location deck revealed."},],
  },
  //gormery
  {
    id: 80,
    source: "gear-images/gorm-expansion/gormery/acid-tooth_dagger.webp",
    categories: ["gormery", "weapon", "melee", "dagger", "bone", "red", "paired"],
    versions: ["all"],
    expansion: Expansion.Gorm,
    affinities: { up: "red", down: "red" },
    gearAbilities: { paired: 0 },
    attackProfile: { speed: 2, accuracy: 7, strength: 2 },


  },
  {
    id: 81,
    source: "gear-images/gorm-expansion/gormery/armor_spikes.webp",
    categories: ["gormery", "item", "bone", "heavy", "blue"],
    versions: ["all"],
    expansion: Expansion.Gorm,
    affinities: { down: "blue" },
  },
  {
    id: 82,
    source: "gear-images/gorm-expansion/gormery/black_sword.webp",
    categories: ["gormery", "weapon", "melee", "sword", "heavy"],
    versions: ["all"],
    expansion: Expansion.Gorm,
    attackProfile: { speed: 3, accuracy: 5, strength: 10 },

  },
  {
    id: 83,
    source: "gear-images/gorm-expansion/gormery/gaxe.webp",
    categories: ["gormery", "weapon", "melee", "axe", "bone", "red"],
    versions: ["all"],
    expansion: Expansion.Gorm,
    affinities: { up: "red", left: "red" },
    affinityBonuses: [
      {requirements: ["red"], stats: {speed: 1}, gearAbilities: {savage: 0} },],
  },
  {
    id: 84,
    source: "gear-images/gorm-expansion/gormery/gorment_boots.webp",
    categories: ["gormery", "armor", "set", "gormskin", "heavy", "leg-armor", "gorment-armor"],
    versions: ["all"],
    expansion: Expansion.Gorm,
    armorLocation: [ArmorLocations.Legs],
    armorValues: { legs: 2 },
    armorSets: [ArmorSets.GormentArmor],
  },
  {
    id: 85,
    source: "gear-images/gorm-expansion/gormery/gorment_mask.webp",
    categories: ["gormery", "armor", "set", "gormskin", "heavy", "head-armor", "green", "blue", "gorment-armor"],
    versions: ["all"],
    expansion: Expansion.Gorm,
    affinities: { up: "blue", down: "green" },
    affinityBonuses: [
      {requirements: ["connectedgreen", "connectedblue"], abilityText: "If your courage is higher than [Star], ignore intimidate actions" },],
    armorLocation: [ArmorLocations.Head],
    armorValues: { head: 2 },
    armorSets: [ArmorSets.GormentArmor],
  },
  {
    id: 86,
    source: "gear-images/gorm-expansion/gormery/gorment_sleeves.webp",
    categories: ["gormery", "armor", "set", "gormskin", "heavy", "arm-armor", "green", "gorment-armor"],
    versions: ["all"],
    expansion: Expansion.Gorm,
    affinities: { right: "green" },
    affinityBonuses: [
      {requirements: ["green", "green"], abilityText: "You may Guard without spending survival." },],
    armorLocation: [ArmorLocations.Arms],
    armorValues: { arms: 2 },
    armorSets: [ArmorSets.GormentArmor],
  },
  {
    source: "gear-images/gorm-expansion/gormery/gorment_suit.webp",
    categories: ["gormery", "armor", "set", "gormskin", "heavy", "body-armor", "waist-armor", "green", "gorment-armor"],
    versions: ["all"],
    expansion: Expansion.Gorm,
  },
  {
    source: "gear-images/gorm-expansion/gormery/gorn.webp",
    categories: ["gormery", "item", "instrument", "gormskin", "blue"],
    versions: ["all"],
    expansion: Expansion.Gorm,
  },
  {
    source: "gear-images/gorm-expansion/gormery/greater_gaxe.webp",
    categories: ["gormery", "weapon", "melee", "axe", "two-handed", "heavy", "red"],
    versions: ["all"],
    expansion: Expansion.Gorm,
  },
  {
    source: "gear-images/gorm-expansion/gormery/knuckle_shield.webp",
    categories: ["gormery", "weapon", "melee", "shield", "gormskin", "red"],
    versions: ["all"],
    expansion: Expansion.Gorm,
  },
  {
    source: "gear-images/gorm-expansion/gormery/pulse_lantern.webp",
    categories: ["gormery", "item", "lantern", "gormskin", "fragile", "red"],
    versions: ["all"],
    expansion: Expansion.Gorm,
  },
  {
    source: "gear-images/gorm-expansion/gormery/regeneration_suit.webp",
    categories: ["gormery", "item", "gorm", "body-armor", "green", "gorment-armor"],
    versions: ["all"],
    expansion: Expansion.Gorm,
  },
  {
    source: "gear-images/gorm-expansion/gormery/rib_blade.webp",
    categories: ["gormery", "weapon", "melee", "grand-weapon", "bone", "blue"],
    versions: ["all"],
    expansion: Expansion.Gorm,
  },
  {
    source: "gear-images/gorm-expansion/gormery/riot_mace.webp",
    categories: ["gormery", "weapon", "melee", "club", "blue"],
    versions: ["all"],
    expansion: Expansion.Gorm,
  },
  //leather worker
  {
    source: "gear-images/leather-worker/hunter_whip.webp",
    categories: ["leather-worker", "weapon", "melee", "whip", "leather", "blue"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/leather-worker/leather_boots.webp",
    categories: ["leather-worker", "armor", "set", "leather", "leg-armor", "green", "leather-armor"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/leather-worker/leather_bracers.webp",
    categories: ["leather-worker", "armor", "set", "leather", "arm-armor", "green", "leather-armor"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/leather-worker/leather_cuirass.webp",
    categories: ["leather-worker", "armor", "set", "leather", "body-armor", "red", "blue", "leather-armor"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/leather-worker/leather_mask.webp",
    categories: ["leather-worker", "armor", "set", "leather", "head-armor", "red", "blue", "leather-armor"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/leather-worker/leather_skirt.webp",
    categories: ["leather-worker", "armor", "set", "leather", "waist-armor", "green", "leather-armor"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/leather-worker/round_leather_shield.webp",
    categories: ["leather-worker", "weapon", "melee", "shield", "leather", "green"],
    versions: ["all"],
    expansion: null,
  },
  //light-forging
  {
    source: "gear-images/slenderman-expansion/light-forging/dark_water_vial.webp",
    categories: ["light-forging", "item", "consumable", "gloomy", "fragile", "green"],
    versions: ["all"],
    expansion: Expansion.Slenderman,
  },
  {
    source: "gear-images/slenderman-expansion/light-forging/gloom_bracelets.webp",
    categories: ["light-forging", "item", "jewelry", "gloomy", "fragile", "heavy", "arm-armor", "red", "blue"],
    versions: ["all"],
    expansion: Expansion.Slenderman,
  },
  {
    source: "gear-images/slenderman-expansion/light-forging/gloom_cream.webp",
    categories: ["light-forging", "item", "consumable", "balm", "gloomy", "stinky", "other", "red", "blue"],
    versions: ["all"],
    expansion: Expansion.Slenderman,
  },
  {
    source: "gear-images/slenderman-expansion/light-forging/gloom_hammer.webp",
    categories: ["light-forging", "weapon", "melee", "club", "two-handed", "gloomy", "other", "red", "blue"],
    versions: ["all"],
    expansion: Expansion.Slenderman,
  },
  {
    source: "gear-images/slenderman-expansion/light-forging/gloom_katana.webp",
    categories: ["light-forging", "weapon", "melee", "katana", "two-handed", "gloomy", "other", "blue"],
    versions: ["all"],
    expansion: Expansion.Slenderman,
  },
  {
    source: "gear-images/slenderman-expansion/light-forging/gloom_mehndi.webp",
    categories: ["light-forging", "item", "gloomy", "soluble", "red", "blue"],
    versions: ["all"],
    expansion: Expansion.Slenderman,
  },
  {
    source: "gear-images/slenderman-expansion/light-forging/gloom_sheath.webp",
    categories: ["light-forging", "item", "gloomy", "other", "red"],
    versions: ["all"],
    expansion: Expansion.Slenderman,
  },
  {
    source: "gear-images/slenderman-expansion/light-forging/gloom-coated_arrow.webp",
    categories: ["light-forging", "item", "ammunition", "arrow", "gloomy"],
    versions: ["all"],
    expansion: Expansion.Slenderman,
  },
  {
    source: "gear-images/slenderman-expansion/light-forging/raptor-worm_collar.webp",
    categories: ["light-forging", "item", "jewelry", "gloomy", "red", "green"],
    versions: ["all"],
    expansion: Expansion.Slenderman,
  },
  {
    source: "gear-images/slenderman-expansion/light-forging/slender_ovule.webp",
    categories: ["light-forging", "item", "jewelry", "gloomy", "other", "green", "blue"],
    versions: ["all"],
    expansion: Expansion.Slenderman,
  },
  //mask maker
  {
    source: "gear-images/mask-maker/antelope_mask.webp",
    categories: ["mask-maker", "item", "mask", "bone", "other"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/mask-maker/death_mask.webp",
    categories: ["mask-maker", "item", "mask", "bone", "other"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/mask-maker/god_mask.webp",
    categories: ["mask-maker", "item", "mask", "bone", "other"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/mask-maker/man_mask.webp",
    categories: ["mask-maker", "item", "mask", "bone", "other"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/mask-maker/phoenix_mask.webp",
    categories: ["mask-maker", "item", "mask", "bone", "other"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/mask-maker/white_lion_mask.webp",
    categories: ["mask-maker", "item", "mask", "bone", "other"],
    versions: ["all"],
    expansion: null,
  },
  //organ grinder
  {
    source: "gear-images/organ-grinder/dried_acanthus.webp",
    categories: ["organ-grinder", "item", "herb", "consumable"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/organ-grinder/fecal_salve.webp",
    categories: ["organ-grinder", "item", "balm", "stinky", "blue"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/organ-grinder/lucky_charm.webp",
    categories: ["organ-grinder", "item", "jewelery", "blue"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/kdm-1.5-gear/organ-grinder/monster_grease.webp",
    categories: ["organ-grinder", "item", "consumable", "soluble", "stinky", "green"],
    versions: ["1.5"],
    expansion: null,
  },
  {
    source: "gear-images/kdm-1.6-gear/organ-grinder/monster_grease.webp",
    categories: ["organ-grinder", "item", "consumable", "soluble", "stinky", "flammable", "green"],
    versions: ["1.6"],
    expansion: null,
  },
  {
    source: "gear-images/organ-grinder/monster_tooth_necklace.webp",
    categories: ["organ-grinder", "item", "jewelery", "bone", "red"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/organ-grinder/stone_noses.webp",
    categories: ["organ-grinder", "item", "jewelery"],
    versions: ["all"],
    expansion: null,
  },

  // plumery
  {
    source: "gear-images/plumery/arc_bow.webp",
    categories: ["plumery", "weapon", "ranged", "bow", "two-handed", "red", "green"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/plumery/bird_bread.webp",
    categories: ["plumery", "item", "consumable", "soluble", "green"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/kdm-1.6-gear/plumery/blood_sheath.webp",
    categories: ["plumery", "item", "bone", "other"],
    versions: ["1.6"],
    expansion: null,
  },
  {
    source: "gear-images/plumery/bloom_sphere.webp",
    categories: ["plumery", "item", "stinky", "other", "green", "blue"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/plumery/crest_crown.webp",
    categories: ["plumery", "item", "other", "red", "green", "blue"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/plumery/feather_mantle.webp",
    categories: ["plumery", "item", "flammable", "red", "green", "blue"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/plumery/feather_shield.webp",
    categories: ["plumery", "weapon", "melee", "shield", "flammable", "blue"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/kdm-1.6-gear/plumery/finger_of_god.webp",
    categories: ["plumery", "weapon", "melee", "spear", "two-handed", "red", "green", "blue"],
    versions: ["1.6"],
    expansion: null,
  },
  {
    source: "gear-images/kdm-1.5-gear/plumery/hollow_sword.webp",
    categories: ["plumery", "weapon", "melee", "sword", "bone"],
    versions: ["1.5"],
    expansion: null,
  },
  {
    source: "gear-images/kdm-1.6-gear/plumery/hollow_sword.webp",
    categories: ["plumery", "weapon", "melee", "sword", "dagger", "bone"],
    versions: ["1.6"],
    expansion: null,
  },
  {
    source: "gear-images/plumery/hollowpoint_arrow.webp",
    categories: ["plumery", "item", "ammunition", "arrow"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/plumery/hours_ring.webp",
    categories: ["plumery", "item", "other"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/plumery/phoenix_faulds.webp",
    categories: ["plumery", "armor", "set", "feather", "metal", "flammable", "waist-armor", "phoenix-armor"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/plumery/phoenix_gauntlet.webp",
    categories: ["plumery", "armor", "set", "feather", "metal", "flammable", "arm-armor", "phoenix-armor"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/plumery/phoenix_greaves.webp",
    categories: ["plumery", "armor", "set", "feather", "metal", "flammable", "leg-armor", "red", "phoenix-armor"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/plumery/phoenix_helm.webp",
    categories: ["plumery", "armor", "set", "feather", "metal", "flammable", "head-armor", "blue", "phoenix-armor"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/plumery/phoenix_plackart.webp",
    categories: [
      "plumery",
      "armor",
      "set",
      "feather",
      "metal",
      "flammable",
      "body-armor",
      "red",
      "green",
      "blue",
      "phoenix-armor",
    ],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/kdm-1.6-gear/plumery/rainbow_katana.webp",
    categories: ["plumery", "weapon", "melee", "katana", "finesse", "two-handed", "red", "green", "blue"],
    versions: ["1.6"],
    expansion: null,
  },
  {
    source: "gear-images/kdm-1.5-gear/plumery/sonic_tomahawk.webp",
    categories: ["plumery", "weapon", "melee", "axe", "metal", "red", "green", "blue"],
    versions: ["1.5"],
    expansion: null,
  },
  {
    source: "gear-images/kdm-1.6-gear/plumery/sonic_tomahawk.webp",
    categories: ["plumery", "weapon", "melee", "axe", "metal", "red", "blue"],
    versions: ["1.6"],
    expansion: null,
  },
  //rare gear
  {
    source: "gear-images/rare-gear/adventure_sword.webp",
    categories: ["rare-gear", "weapon", "melee", "sword", "finesse", "other"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/lion-god-expansion/rare-gear/ancient_lion_claws.webp",
    categories: ["rare-gear", "item", "fur", "heavy", "arm-armor", "red"],
    versions: ["all"],
    expansion: Expansion.LionGod,
  },
  {
    source: "gear-images/lion-god-expansion/rare-gear/bone_witch_mehndi.webp",
    categories: ["rare-gear", "item", "soluble", "symbol", "other", "red", "green", "blue"],
    versions: ["all"],
    expansion: Expansion.LionGod,
  },
  {
    source: "gear-images/lion-god-expansion/rare-gear/butcher's_blood.webp",
    categories: ["rare-gear", "item", "soluble", "symbol", "other", "red", "blue"],
    versions: ["all"],
    expansion: Expansion.LionGod,
  },
  {
    source: "gear-images/rare-gear/butcher_cleaver.webp",
    categories: ["rare-gear", "weapon", "melee", "axe", "other", "paired"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/dung-beetle-knight-expansion/rare-gear/calcified_digging_claw.webp",
    categories: ["rare-gear", "weapon", "melee", "katar", "pickaxe", "paired", "green"],
    versions: ["all"],
    expansion: Expansion.DungBeetleKnight,
  },
  {
    source: "gear-images/dung-beetle-knight-expansion/rare-gear/calcified_greaves.webp",
    categories: ["rare-gear", "item", "bone", "heavy", "green"],
    versions: ["all"],
    expansion: Expansion.DungBeetleKnight,
  },
  {
    source: "gear-images/dung-beetle-knight-expansion/rare-gear/calcified_juggernaut_blade.webp",
    categories: ["rare-gear", "weapon", "melee", "grand-weapon", "bone", "other", "red"],
    versions: ["all"],
    expansion: Expansion.DungBeetleKnight,
  },
  {
    source: "gear-images/dung-beetle-knight-expansion/rare-gear/calcified_shoulder_pads.webp",
    categories: ["rare-gear", "item", "bone", "heavy", "green"],
    versions: ["all"],
    expansion: Expansion.DungBeetleKnight,
  },
  {
    source: "gear-images/dragon-king-expansion/rare-gear/celestial_spear.webp",
    categories: ["rare-gear", "weapon", "melee", "spear", "metal"],
    versions: ["all"],
    expansion: Expansion.DragonKing,
  },
  {
    source: "gear-images/lion-god-expansion/rare-gear/death_mehndi.webp",
    categories: ["rare-gear", "item", "soluble", "symbol", "other", "red", "green", "blue"],
    versions: ["all"],
    expansion: Expansion.LionGod,
  },
  {
    source: "gear-images/manhunter-expansion/rare-gear/deathpact.webp",
    categories: ["rare-gear", "item", "metal", "fragile", "red", "blue"],
    versions: ["all"],
    expansion: Expansion.Manhunter,
  },
  {
    source: "gear-images/dragon-king-expansion/rare-gear/dragon_vestments.webp",
    categories: ["rare-gear", "item", "silk", "other"],
    versions: ["all"],
    expansion: Expansion.DragonKing,
  },
  {
    source: "gear-images/sunstalker-expansion/rare-gear/eye_patch.webp",
    categories: ["rare-gear", "item", "leather", "red", "green"],
    versions: ["all"],
    expansion: Expansion.Sunstalker,
  },
  {
    source: "gear-images/flower-knight-expansion/rare-gear/flower_knight_badge.webp",
    categories: ["rare-gear", "item", "jewelry", "badge", "blue"],
    versions: ["all"],
    expansion: Expansion.FlowerKnight,
  },
  {
    source: "gear-images/flower-knight-expansion/rare-gear/flower_knight_helm.webp",
    categories: ["rare-gear", "armor", "heavy", "head-armor", "blue"],
    versions: ["all"],
    expansion: Expansion.FlowerKnight,
  },
  {
    source: "gear-images/rare-gear/forsaker_mask.webp",
    categories: ["rare-gear", "mask", "metal", "other"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/lion-god-expansion/rare-gear/glyph_of_solitude.webp",
    categories: ["rare-gear", "item", "soluble", "symbol", "other", "red", "green"],
    versions: ["all"],
    expansion: Expansion.LionGod,
  },
  {
    source: "gear-images/sunstalker-expansion/rare-gear/god's_string.webp",
    categories: ["rare-gear", "item", "other"],
    versions: ["all"],
    expansion: Expansion.Sunstalker,
  },
  {
    source: "gear-images/lion-god-expansion/rare-gear/golden_plate.webp",
    categories: ["rare-gear", "item", "metal", "heavy", "red"],
    versions: ["all"],
    expansion: Expansion.LionGod,
  },
  {
    source: "gear-images/spidicules-expansion/rare-gear/grinning_visage.webp",
    categories: ["rare-gear", "weapon", "melee", "shield", "red", "green"],
    versions: ["all"],
    expansion: Expansion.Spidicules,
  },
  {
    source: "gear-images/dragon-king-expansion/rare-gear/hazmat_shield.webp",
    categories: ["rare-gear", "weapon", "melee", "shield", "metal", "heavy"],
    versions: ["all"],
    expansion: Expansion.DragonKing,
  },
  {
    source: "gear-images/dung-beetle-knight-expansion/rare-gear/hidden_crimson_jewel.webp",
    categories: ["rare-gear", "item", "jewelry", "other", "red"],
    versions: ["all"],
    expansion: Expansion.DungBeetleKnight,
  },
  {
    source: "gear-images/lion-knight-expansion/rare-gear/hideous_disguise.webp",
    categories: ["rare-gear", "item", "mask", "bone", "other", "head-armor"],
    versions: ["all"],
    expansion: Expansion.LionKnight,
  },
  {
    source: "gear-images/manhunter-expansion/rare-gear/hunter's_heart.webp",
    categories: ["rare-gear", "item", "consumable", "metal", "heavy"],
    versions: ["all"],
    expansion: Expansion.Manhunter,
  },
  {
    source: "gear-images/dragon-king-expansion/rare-gear/husk_of_destiny.webp",
    categories: ["rare-gear", "item", "other"],
    versions: ["all"],
    expansion: Expansion.DragonKing,
  },
  {
    source: "gear-images/kdm-1.6-gear/rare-gear/lantern_brassiere.webp",
    categories: ["rare-gear", "armor", "set", "metal", "heavy", "green", "blue"],
    versions: ["1.6"],
    expansion: null,
  },
  {
    source: "gear-images/kdm-1.5-gear/rare-gear/lantern_halberd.webp",
    categories: ["rare-gear", "weapon", "melee", "two-handed", "spear", "other"],
    versions: ["1.5"],
    expansion: null,
  },
  {
    source: "gear-images/kdm-1.6-gear/rare-gear/lantern_halberd.webp",
    categories: ["rare-gear", "weapon", "melee", "two-handed", "axe", "spear", "lantern", "other"],
    versions: ["1.6"],
    expansion: null,
  },
  {
    source: "gear-images/kdm-1.6-gear/rare-gear/leather_bodysuit.webp",
    categories: ["rare-gear", "armor", "set", "leather", "red", "blue"],
    versions: ["1.6"],
    expansion: null,
  },
  {
    source: "gear-images/lion-god-expansion/rare-gear/lantern_mehndi.webp",
    categories: ["rare-gear", "item", "soluble", "symbol", "other", "red", "blue"],
    versions: ["all"],
    expansion: Expansion.LionGod,
  },
  {
    source: "gear-images/lion-god-expansion/rare-gear/lion_god_statue.webp",
    categories: ["rare-gear", "item", "stone", "heavy", "red", "blue"],
    versions: ["all"],
    expansion: Expansion.LionGod,
  },
  {
    source: "gear-images/lion-knight-expansion/rare-gear/lion_knight_badge.webp",
    categories: ["rare-gear", "item", "jewelry", "knight"],
    versions: ["all"],
    expansion: Expansion.LionKnight,
  },
  {
    source: "gear-images/lion-knight-expansion/rare-gear/lion_knight's_left_claw.webp",
    categories: ["rare-gear", "weapon", "melee", "katar", "red", "blue"],
    versions: ["all"],
    expansion: Expansion.LionKnight,
  },
  {
    source: "gear-images/lion-knight-expansion/rare-gear/lion_knight's_right_claw.webp",
    categories: ["rare-gear", "weapon", "melee", "katar", "red", "blue"],
    versions: ["all"],
    expansion: Expansion.LionKnight,
  },
  {
    source: "gear-images/manhunter-expansion/rare-gear/manhunter's_hat.webp",
    categories: ["rare-gear", "item", "rawhide", "leather", "head-armor", "red", "blue"],
    versions: ["all"],
    expansion: Expansion.Manhunter,
  },
  {
    source: "gear-images/rare-gear/muramasa.webp",
    categories: ["rare-gear", "weapon", "melee", "katana", "two-handed", "finesse", "other"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/lion-god-expansion/rare-gear/necromancer's_eye.webp",
    categories: ["rare-gear", "item", "set", "jewelry", "other", "blue"],
    versions: ["all"],
    expansion: Expansion.LionGod,
  },
  {
    source: "gear-images/kdm-1.6-gear/rare-gear/rawhide_corset.webp",
    categories: ["rare-gear", "armor", "set", "rawhide", "red", "blue"],
    versions: ["1.6"],
    expansion: null,
  },
  {
    source: "gear-images/dragon-king-expansion/rare-gear/regal_edge.webp",
    categories: ["rare-gear", "weapon", "melee", "sword", "metal", "red", "green"],
    versions: ["all"],
    expansion: Expansion.DragonKing,
  },
  {
    source: "gear-images/rare-gear/regal_faulds.webp",
    categories: ["rare-gear", "armor", "bone", "metal", "waist-armor"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/rare-gear/regal_gauntlet.webp",
    categories: ["rare-gear", "armor", "bone", "metal", "arm-armor"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/rare-gear/regal_greaves.webp",
    categories: ["rare-gear", "armor", "bone", "metal", "leg-armor"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/rare-gear/regal_helm.webp",
    categories: ["rare-gear", "armor", "bone", "metal", "head-armor"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/rare-gear/regal_plackart.webp",
    categories: ["rare-gear", "armor", "bone", "metal", "body-armor"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/dung-beetle-knight-expansion/rare-gear/regenerating_blade.webp",
    categories: ["rare-gear", "item", "mineral", "other", "green", "blue"],
    versions: ["all"],
    expansion: Expansion.DungBeetleKnight,
  },
  {
    source: "gear-images/flower-knight-expansion/rare-gear/replica_flower_sword.webp",
    categories: ["rare-gear", "weapon", "melee", "grand-weapon", "red", "green"],
    versions: ["all"],
    expansion: Expansion.FlowerKnight,
  },
  {
    source: "gear-images/manhunter-expansion/rare-gear/reverberating_lantern.webp",
    categories: ["rare-gear", "item", "tool", "lantern", "green", "blue"],
    versions: ["all"],
    expansion: Expansion.Manhunter,
  },
  {
    source: "gear-images/flower-knight-expansion/rare-gear/sleeping_virus_flower.webp",
    categories: ["rare-gear", "item", "flammable", "blue"],
    versions: ["all"],
    expansion: Expansion.FlowerKnight,
  },
  {
    source: "gear-images/rare-gear/steel_shield.webp",
    categories: ["rare-gear", "weapon", "melee", "shield", "metal", "heavy"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/kdm-1.5-gear/rare-gear/steel_sword.webp",
    categories: ["rare-gear", "weapon", "melee", "sword", "finesse", "metal"],
    versions: ["1.5"],
    expansion: null,
  },
  {
    source: "gear-images/kdm-1.6-gear/rare-gear/steel_sword.webp",
    categories: ["rare-gear", "weapon", "melee", "sword", "finesse", "metal"],
    versions: ["1.6"],
    expansion: null,
  },
  {
    source: "gear-images/kdm-1.6-gear/rare-gear/teeth_bikini.webp",
    categories: ["rare-gear", "armor", "set", "scale"],
    versions: ["1.6"],
    expansion: null,
  },
  {
    source: "gear-images/spidicules-expansion/rare-gear/the_weaver.webp",
    categories: ["rare-gear", "weapon", "melee", "sword", "amber", "red"],
    versions: ["all"],
    expansion: Expansion.Spidicules,
  },
  {
    source: "gear-images/rare-gear/thunder_maul.webp",
    categories: ["rare-gear", "weapon", "melee", "club", "two-handed", "other"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/manhunter-expansion/rare-gear/tool_belt.webp",
    categories: ["rare-gear", "item", "metal", "fragile"],
    versions: ["all"],
    expansion: Expansion.Manhunter,
  },
  {
    source: "gear-images/dung-beetle-knight-expansion/rare-gear/trash_crown.webp",
    categories: ["rare-gear", "item", "jewelry", "fragile", "other", "head-armor", "red", "blue"],
    versions: ["all"],
    expansion: Expansion.DungBeetleKnight,
  },
  {
    source: "gear-images/rare-gear/twilight_sword.webp",
    categories: ["rare-gear", "weapon", "melee", "two-handed", "finesse", "other"],
    versions: ["all"],
    expansion: null,
  },
  //sacred-pool
  {
    source: "gear-images/sunstalker-expansion/sacred-pool/apostle_crown.webp",
    categories: ["sacred-pool", "item", "jewelry", "other", "head-armor", "red", "blue"],
    versions: ["all"],
    expansion: Expansion.Sunstalker,
  },
  {
    source: "gear-images/sunstalker-expansion/sacred-pool/prisim_mace.webp",
    categories: ["sacred-pool", "weapon", "melee", "club", "two-handed", "bone", "red", "green", "blue"],
    versions: ["all"],
    expansion: Expansion.Sunstalker,
  },
  {
    source: "gear-images/sunstalker-expansion/sacred-pool/sun_vestments.webp",
    categories: ["sacred-pool", "item", "flammable", "silk", "red"],
    versions: ["all"],
    expansion: Expansion.Sunstalker,
  },
  {
    source: "gear-images/sunstalker-expansion/sacred-pool/sunring_bow.webp",
    categories: ["sacred-pool", "weapon", "ranged", "two-handed", "bone", "red"],
    versions: ["all"],
    expansion: Expansion.Sunstalker,
  },
  //sense memory
  {
    source: "gear-images/flower-knight-expansion/sense-memory/satchel.webp",
    categories: ["sense-memory", "item", "heavy", "stinky", "green"],
    versions: ["all"],
    expansion: Expansion.FlowerKnight,
  },
  {
    source: "gear-images/flower-knight-expansion/sense-memory/vespertine_arrow.webp",
    categories: ["sense-memory", "item", "ammunition", "arrow"],
    versions: ["all"],
    expansion: Expansion.FlowerKnight,
  },
  {
    source: "gear-images/flower-knight-expansion/sense-memory/vespertine_bow.webp",
    categories: ["sense-memory", "weapon", "ranged", "bow", "two-handed", "other", "green", "blue"],
    versions: ["1.5"],
    expansion: Expansion.FlowerKnight,
  },
  {
    source: "gear-images/kdm-1.6-gear/sense-memory/vespertine_bow.webp",
    categories: ["sense-memory", "weapon", "ranged", "bow", "two-handed", "other", "green", "blue"],
    versions: ["1.6"],
    expansion: Expansion.FlowerKnight,
  },
  {
    source: "gear-images/flower-knight-expansion/sense-memory/vespertine_cello.webp",
    categories: ["sense-memory", "item", "instrument", "noisy", "other", "blue"],
    versions: ["all"],
    expansion: Expansion.FlowerKnight,
  },
  {
    source: "gear-images/flower-knight-expansion/sense-memory/vespertine_foil.webp",
    categories: ["sense-memory", "weapon", "melee", "sword", "fragile", "red", "blue"],
    versions: ["all"],
    expansion: Expansion.FlowerKnight,
  },
  //silk-mill
  {
    source: "gear-images/spidicules-expansion/silk-mill/amber_edge.webp",
    categories: ["silk-mill", "weapon", "melee", "scimitar", "amber"],
    versions: ["all"],
    expansion: Expansion.Spidicules,
  },
  {
    source: "gear-images/spidicules-expansion/silk-mill/amber_poleaxe.webp",
    categories: ["silk-mill", "weapon", "melee", "axe", "spear", "two-handed", "amber", "green"],
    versions: ["all"],
    expansion: Expansion.Spidicules,
  },
  {
    source: "gear-images/spidicules-expansion/silk-mill/blue_ring.webp",
    categories: ["silk-mill", "item", "jewelry", "amber", "arm-armor", "blue"],
    versions: ["all"],
    expansion: Expansion.Spidicules,
  },
  {
    source: "gear-images/spidicules-expansion/silk-mill/green_ring.webp",
    categories: ["silk-mill", "item", "jewelry", "amber", "arm-armor", "green"],
    versions: ["all"],
    expansion: Expansion.Spidicules,
  },
  {
    source: "gear-images/spidicules-expansion/silk-mill/hooded_scrap_katar.webp",
    categories: ["silk-mill", "weapon", "melee", "katar", "metal", "paired", "blue"],
    versions: ["all"],
    expansion: Expansion.Spidicules,
  },
  {
    source: "gear-images/spidicules-expansion/silk-mill/red_ring.webp",
    categories: ["silk-mill", "item", "jewelry", "amber", "arm-armor", "red"],
    versions: ["all"],
    expansion: Expansion.Spidicules,
  },
  {
    source: "gear-images/spidicules-expansion/silk-mill/silk_body_suit.webp",
    categories: ["silk-mill", "item", "silk", "flammable"],
    versions: ["all"],
    expansion: Expansion.Spidicules,
  },
  {
    source: "gear-images/spidicules-expansion/silk-mill/silk_bomb.webp",
    categories: ["silk-mill", "item", "thrown", "silk", "amber", "fragile"],
    versions: ["all"],
    expansion: Expansion.Spidicules,
  },
  {
    source: "gear-images/spidicules-expansion/silk-mill/silk_boots.webp",
    categories: ["silk-mill", "armor", "set", "silk", "flammable", "leg-armor", "green", "silk-armor"],
    versions: ["all"],
    expansion: Expansion.Spidicules,
  },
  {
    source: "gear-images/spidicules-expansion/silk-mill/silk_robes.webp",
    categories: ["silk-mill", "armor", "set", "silk", "flammable", "body-armor", "red", "blue", "silk-armor"],
    versions: ["all"],
    expansion: Expansion.Spidicules,
  },
  {
    source: "gear-images/spidicules-expansion/silk-mill/silk_sash.webp",
    categories: ["silk-mill", "armor", "set", "silk", "flammable", "waist-armor", "green", "silk-armor"],
    versions: ["all"],
    expansion: Expansion.Spidicules,
  },
  {
    source: "gear-images/spidicules-expansion/silk-mill/silk_turban.webp",
    categories: ["silk-mill", "armor", "set", "silk", "flammable", "head-armor", "green", "blue", "silk-armor"],
    versions: ["all"],
    expansion: Expansion.Spidicules,
  },
  {
    source: "gear-images/spidicules-expansion/silk-mill/silk_whip.webp",
    categories: ["silk-mill", "weapon", "melee", "whip", "silk", "green", "blue"],
    versions: ["all"],
    expansion: Expansion.Spidicules,
  },
  {
    source: "gear-images/spidicules-expansion/silk-mill/silk_wraps.webp",
    categories: ["silk-mill", "armor", "set", "silk", "flammable", "arm-armor", "red", "green", "silk-armor"],
    versions: ["all"],
    expansion: Expansion.Spidicules,
  },
  {
    source: "gear-images/spidicules-expansion/silk-mill/throwing_knife.webp",
    categories: ["silk-mill", "weapon", "ranged", "thrown", "red"],
    versions: ["all"],
    expansion: Expansion.Spidicules,
  },
  //skinnery
  {
    source: "gear-images/skinnery/bandages.webp",
    categories: ["skinnery", "item", "green", "blue"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/skinnery/rawhide_boots.webp",
    categories: ["skinnery", "armor", "set", "rawhide", "leg-armor", "rawhide-armor"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/skinnery/rawhide_drum.webp",
    categories: ["skinnery", "item", "rawhide", "instrument", "noisy", "green"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/skinnery/rawhide_gloves.webp",
    categories: ["skinnery", "armor", "set", "rawhide", "arm-armor", "red", "rawhide-armor"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/skinnery/rawhide_headband.webp",
    categories: ["skinnery", "armor", "set", "rawhide", "head-armor", "blue", "rawhide-armor"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/skinnery/rawhide_pants.webp",
    categories: ["skinnery", "armor", "set", "rawhide", "waist-armor", "rawhide-armor"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/skinnery/rawhide_vest.webp",
    categories: ["skinnery", "armor", "set", "rawhide", "body-armor", "red", "blue", "rawhide-armor"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/skinnery/rawhide_whip.webp",
    categories: ["skinnery", "weapon", "melee", "whip", "rawhide"],
    versions: ["all"],
    expansion: null,
  },
  //skyreef-sanctuary
  {
    source: "gear-images/sunstalker-expansion/skyreef-sanctuary/cycloid_scale_hood.webp",
    categories: ["skyreef-sanctuary", "armor", "set", "scale", "head-armor", "blue", "cycloid-scale-armor"],
    versions: ["all"],
    expansion: Expansion.Sunstalker,
  },
  {
    source: "gear-images/sunstalker-expansion/skyreef-sanctuary/cycloid_scale_jacket.webp",
    categories: ["skyreef-sanctuary", "armor", "set", "scale", "body-armor", "red", "blue", "cycloid-scale-armor"],
    versions: ["all"],
    expansion: Expansion.Sunstalker,
  },
  {
    source: "gear-images/sunstalker-expansion/skyreef-sanctuary/cycloid_scale_shoes.webp",
    categories: ["skyreef-sanctuary", "armor", "set", "scale", "body-armor", "green", "blue", "cycloid-scale-armor"],
    versions: ["all"],
    expansion: Expansion.Sunstalker,
  },
  {
    source: "gear-images/sunstalker-expansion/skyreef-sanctuary/cycloid_scale_skirt.webp",
    categories: ["skyreef-sanctuary", "armor", "set", "scale", "waist-armor", "green", "blue", "cycloid-scale-armor"],
    versions: ["all"],
    expansion: Expansion.Sunstalker,
  },
  {
    source: "gear-images/sunstalker-expansion/skyreef-sanctuary/cycloid_scale_sleeves.webp",
    categories: ["skyreef-sanctuary", "armor", "set", "scale", "arm-armor", "blue", "cycloid-scale-armor"],
    versions: ["all"],
    expansion: Expansion.Sunstalker,
  },
  {
    source: "gear-images/sunstalker-expansion/skyreef-sanctuary/denticle_axe.webp",
    categories: ["skyreef-sanctuary", "weapon", "melee", "axe", "scale", "red", "blue"],
    versions: ["all"],
    expansion: Expansion.Sunstalker,
  },
  {
    source: "gear-images/sunstalker-expansion/skyreef-sanctuary/ink_blood_bow.webp",
    categories: ["skyreef-sanctuary", "weapon", "ranged", "bow", "two-handed", "other", "red", "blue"],
    versions: ["all"],
    expansion: Expansion.Sunstalker,
  },
  {
    source: "gear-images/sunstalker-expansion/skyreef-sanctuary/ink_sword.webp",
    categories: ["skyreef-sanctuary", "weapon", "melee", "sword", "fragile", "blue"],
    versions: ["all"],
    expansion: Expansion.Sunstalker,
  },
  {
    source: "gear-images/sunstalker-expansion/skyreef-sanctuary/quiver_&_sun_string.webp",
    categories: ["skyreef-sanctuary", "item", "leather", "scale", "red", "blue"],
    versions: ["all"],
    expansion: Expansion.Sunstalker,
  },
  {
    source: "gear-images/sunstalker-expansion/skyreef-sanctuary/rainbow_wing_belt.webp",
    categories: ["skyreef-sanctuary", "item", "flammable", "red", "green", "blue"],
    versions: ["all"],
    expansion: Expansion.Sunstalker,
  },
  {
    source: "gear-images/sunstalker-expansion/skyreef-sanctuary/shadow_saliva_shawl.webp",
    categories: ["skyreef-sanctuary", "item", "balm", "stinky", "other", "green"],
    versions: ["all"],
    expansion: Expansion.Sunstalker,
  },
  {
    source: "gear-images/sunstalker-expansion/skyreef-sanctuary/skleaver.webp",
    categories: ["skyreef-sanctuary", "weapon", "melee", "grand-weapon", "heavy", "two-handed", "bone", "red"],
    versions: ["all"],
    expansion: Expansion.Sunstalker,
  },
  {
    source: "gear-images/sunstalker-expansion/skyreef-sanctuary/sun_lure_and_hook.webp",
    categories: ["skyreef-sanctuary", "item", "hook", "blue"],
    versions: ["all"],
    expansion: Expansion.Sunstalker,
  },
  {
    source: "gear-images/sunstalker-expansion/skyreef-sanctuary/sunshark_bow.webp",
    categories: ["skyreef-sanctuary", "weapon", "melee", "ranged", "bow", "two-handed", "red"],
    versions: ["all"],
    expansion: Expansion.Sunstalker,
  },
  {
    source: "gear-images/sunstalker-expansion/skyreef-sanctuary/sunshark_arrows.webp",
    categories: ["skyreef-sanctuary", "item", "ammunition", "arrow", "soluble"],
    versions: ["all"],
    expansion: Expansion.Sunstalker,
  },
  {
    source: "gear-images/sunstalker-expansion/skyreef-sanctuary/sunspot_dart.webp",
    categories: ["skyreef-sanctuary", "weapon", "ranged", "thrown", "red"],
    versions: ["all"],
    expansion: Expansion.Sunstalker,
  },
  {
    source: "gear-images/sunstalker-expansion/skyreef-sanctuary/sunspot_lantern.webp",
    categories: ["skyreef-sanctuary", "item", "lantern", "green"],
    versions: ["all"],
    expansion: Expansion.Sunstalker,
  },
  //starting gear
  {
    source: "gear-images/starting-gear/cloth.webp",
    categories: ["starting-gear", "armor", "waist-armor"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/starting-gear/founding_stone.webp",
    categories: ["starting-gear", "weapon", "melee", "stone"],
    versions: ["all"],
    expansion: null,
  },
  //stone circle
  {
    source: "gear-images/stone-circle/beast_knuckle.webp",
    categories: ["stone-circle", "weapon", "melee", "katar", "bone", "paired"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/stone-circle/blood_paint.webp",
    categories: ["stone-circle", "item", "soluble"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/kdm-1.5-gear/stone-circle/blue_charm.webp",
    categories: ["stone-circle", "item", "jewelery", "fragile", "blue"],
    versions: ["1.5"],
    expansion: null,
  },
  {
    source: "gear-images/stone-circle/bone_earrings.webp",
    categories: ["stone-circle", "item", "jewelery", "bone"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/stone-circle/boss_mehndi.webp",
    categories: ["stone-circle", "item", "soluble"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/kdm-1.6-gear/stone-circle/brain_mint.webp",
    categories: ["stone-circle", "item", "consumable", "green", "blue"],
    versions: ["1.6"],
    expansion: null,
  },
  {
    source: "gear-images/kdm-1.6-gear/stone-circle/elder_earrings.webp",
    categories: ["stone-circle", "item", "jewelery", "red", "blue", "green"],
    versions: ["1.6"],
    expansion: null,
  },
  {
    source: "gear-images/kdm-1.5-gear/stone-circle/green_charm.webp",
    categories: ["stone-circle", "item", "jewelery", "fragile", "green"],
    versions: ["1.5"],
    expansion: null,
  },
  {
    source: "gear-images/stone-circle/lance_of_longinus.webp",
    categories: ["stone-circle", "weapon", "melee", "spear", "two-handed", "bone"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/kdm-1.5-gear/stone-circle/red_charm.webp",
    categories: ["stone-circle", "item", "jewelery", "fragile", "red"],
    versions: ["1.5"],
    expansion: null,
  },
  {
    source: "gear-images/kdm-1.5-gear/stone-circle/screaming_bracers.webp",
    categories: ["stone-circle", "armor", "set", "fur", "arm-armor", "red", "green", "screaming-armor"],
    versions: ["1.5"],
    expansion: null,
  },
  {
    source: "gear-images/kdm-1.6-gear/stone-circle/screaming_bracers.webp",
    categories: ["stone-circle", "armor", "set", "fur", "arm-armor", "red", "green", "screaming-armor"],
    versions: ["1.6"],
    expansion: null,
  },
  {
    source: "gear-images/stone-circle/screaming_coat.webp",
    categories: ["stone-circle", "armor", "set", "fur", "body-armor", "green", "blue", "screaming-armor"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/kdm-1.5-gear/stone-circle/screaming_horns.webp",
    categories: ["stone-circle", "armor", "set", "bone", "head-armor", "blue", "screaming-armor"],
    versions: ["1.5"],
    expansion: null,
  },
  {
    source: "gear-images/kdm-1.6-gear/stone-circle/screaming_horns.webp",
    categories: ["stone-circle", "armor", "set", "fur", "head-armor", "blue", "screaming-armor"],
    versions: ["1.6"],
    expansion: null,
  },
  {
    source: "gear-images/stone-circle/screaming_leg_warmers.webp",
    categories: ["stone-circle", "armor", "set", "fur", "leg-armor", "red", "blue", "screaming-armor"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/kdm-1.5-gear/stone-circle/screaming_skirt.webp",
    categories: ["stone-circle", "armor", "set", "fur", "waist-armor", "green", "blue", "screaming-armor"],
    versions: ["1.5"],
    expansion: null,
  },
  {
    source: "gear-images/kdm-1.6-gear/stone-circle/screaming_skirt.webp",
    categories: ["stone-circle", "armor", "set", "fur", "waist-armor", "green", "blue", "screaming-armor"],
    versions: ["1.6"],
    expansion: null,
  },
  {
    source: "gear-images/kdm-1.6-gear/stone-circle/speed_powder.webp",
    categories: ["stone-circle", "item", "soluble", "blue"],
    versions: ["1.6"],
    expansion: null,
  },
  //weapon crafter
  {
    source: "gear-images/kdm-1.5-gear/weapon-crafter/blood_sheath.webp",
    categories: ["weapon-crafter", "item", "bone", "other"],
    versions: ["1.5"],
    expansion: null,
  },
  {
    source: "gear-images/kdm-1.5-gear/weapon-crafter/counterweighted_axe.webp",
    categories: ["weapon-crafter", "weapon", "melee", "axe", "two-handed", "red"],
    versions: ["1.5"],
    expansion: null,
  },
  {
    source: "gear-images/kdm-1.6-gear/weapon-crafter/counterweighted_axe.webp",
    categories: ["weapon-crafter", "weapon", "melee", "axe", "two-handed", "red"],
    versions: ["1.6"],
    expansion: null,
  },
  {
    source: "gear-images/kdm-1.5-gear/weapon-crafter/finger_of_god.webp",
    categories: ["weapon-crafter", "weapon", "melee", "spear", "two-handed", "red"],
    versions: ["1.5"],
    expansion: null,
  },
  {
    source: "gear-images/kdm-1.5-gear/weapon-crafter/rainbow_katana.webp",
    categories: ["weapon-crafter", "weapon", "melee", "katana", "finesse", "two-handed", "red"],
    versions: ["1.5"],
    expansion: null,
  },
  {
    source: "gear-images/kdm-1.6-gear/weapon-crafter/scrap_bone_spear.webp",
    categories: ["weapon-crafter", "weapon", "melee", "spear", "bone", "metal", "red", "green"],
    versions: ["1.6"],
    expansion: null,
  },
  {
    source: "gear-images/kdm-1.5-gear/weapon-crafter/scrap_dagger.webp",
    categories: ["weapon-crafter", "weapon", "melee", "dagger", "metal", "red"],
    versions: ["1.5"],
    expansion: null,
  },
  {
    source: "gear-images/kdm-1.6-gear/weapon-crafter/scrap_dagger.webp",
    categories: ["weapon-crafter", "weapon", "melee", "dagger", "metal", "red"],
    versions: ["1.6"],
    expansion: null,
  },
  {
    source: "gear-images/kdm-1.6-gear/weapon-crafter/scrap_lantern.webp",
    categories: ["weapon-crafter", "item", "metal", "lantern", "red", "blue"],
    versions: ["1.6"],
    expansion: null,
  },
  {
    source: "gear-images/kdm-1.6-gear/weapon-crafter/scrap_rebar.webp",
    categories: ["weapon-crafter", "item", "metal", "heavy"],
    versions: ["1.6"],
    expansion: null,
  },
  {
    source: "gear-images/kdm-1.5-gear/weapon-crafter/scrap_sword.webp",
    categories: ["weapon-crafter", "weapon", "melee", "sword", "metal", "blue"],
    versions: ["1.5"],
    expansion: null,
  },
  {
    source: "gear-images/kdm-1.6-gear/weapon-crafter/scrap_sword.webp",
    categories: ["weapon-crafter", "weapon", "melee", "sword", "metal", "blue"],
    versions: ["1.6"],
    expansion: null,
  },
  {
    source: "gear-images/weapon-crafter/skullcap_hammer.webp",
    categories: ["weapon-crafter", "weapon", "melee", "club", "bone", "green"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/weapon-crafter/whistling_mace.webp",
    categories: ["weapon-crafter", "weapon", "melee", "club", "bone", "green"],
    versions: ["all"],
    expansion: null,
  },
  {
    source: "gear-images/weapon-crafter/zambato.webp",
    categories: ["weapon-crafter", "weapon", "melee", "grand-weapon", "two-handed", "bone", "red", "green"],
    versions: ["all"],
    expansion: null,
  },
  //wet resin crafter
  {
    source: "gear-images/dung-beetle-knight-expansion/wet-resin-crafter/century_greaves.webp",
    categories: ["wet-resin-crafter", "item", "bone", "mineral", "heavy", "green"],
    versions: ["all"],
    expansion: Expansion.DungBeetleKnight,
  },
  {
    source: "gear-images/dung-beetle-knight-expansion/wet-resin-crafter/century_shoulder_pads.webp",
    categories: ["wet-resin-crafter", "item", "bone", "mineral", "heavy", "green"],
    versions: ["all"],
    expansion: Expansion.DungBeetleKnight,
  },
  {
    source: "gear-images/dung-beetle-knight-expansion/wet-resin-crafter/dbk_errant_badge.webp",
    categories: ["wet-resin-crafter", "item", "jewelery", "knight"],
    versions: ["all"],
    expansion: Expansion.DungBeetleKnight,
  },
  {
    source: "gear-images/dung-beetle-knight-expansion/wet-resin-crafter/digging_claw.webp",
    categories: ["wet-resin-crafter", "weapon", "melee", "katar", "pickaxe", "bone", "mineral", "green", "paired"],
    versions: ["all"],
    expansion: Expansion.DungBeetleKnight,
  },
  {
    source: "gear-images/dung-beetle-knight-expansion/wet-resin-crafter/rubber_bone_harness.webp",
    categories: ["wet-resin-crafter", "item", "bone", "leather", "red", "green", "blue"],
    versions: ["all"],
    expansion: Expansion.DungBeetleKnight,
  },
  {
    source: "gear-images/dung-beetle-knight-expansion/wet-resin-crafter/scarab_circlet.webp",
    categories: ["wet-resin-crafter", "item", "bone", "jewelry", "other", "blue"],
    versions: ["all"],
    expansion: Expansion.DungBeetleKnight,
  },
  {
    source: "gear-images/dung-beetle-knight-expansion/wet-resin-crafter/seasoned_monster_meat.webp",
    categories: ["wet-resin-crafter", "item", "consumable", "red", "green"],
    versions: ["all"],
    expansion: Expansion.DungBeetleKnight,
  },
  {
    source: "gear-images/dung-beetle-knight-expansion/wet-resin-crafter/the_beetle_bomb.webp",
    categories: ["wet-resin-crafter", "item", "thrown", "fragile", "red", "blue"],
    versions: ["all"],
    expansion: Expansion.DungBeetleKnight,
  },
];

export default gearArray;
