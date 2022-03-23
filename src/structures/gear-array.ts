interface GearImage {
  source: string;
  categories: string[];
}

const gearArray: GearImage[] = [
  // barber-surgeon
  {
    source: "gear-images/barber-surgeon/almanac.webp",
    categories: ["barber-surgeon", "item", "soluble", "flammable", "blue"],
  },
  {
    source: "gear-images/barber-surgeon/brain_mint.webp",
    categories: ["barber-surgeon", "item", "consumable", "green", "blue"],
  },
  {
    source: "gear-images/barber-surgeon/bug_trap.webp",
    categories: ["barber-surgeon", "item", "soluble"],
  },
  {
    source: "gear-images/barber-surgeon/elder_earrings.webp",
    categories: ["barber-surgeon", "item", "jewelery", "red", "blue", "green"],
  },
  {
    source: "gear-images/barber-surgeon/first_aid_kit.webp",
    categories: ["barber-surgeon", "item", "heavy", "green"],
  },
  {
    source: "gear-images/barber-surgeon/musk_bomb.webp",
    categories: ["barber-surgeon", "item", "stinky", "thrown", "fragile"],
  },
  {
    source: "gear-images/barber-surgeon/scavenger_kit.webp",
    categories: ["barber-surgeon", "item", "heavy", "green"],
  },
  {
    source: "gear-images/barber-surgeon/speed_powder.webp",
    categories: ["barber-surgeon", "item", "soluble", "blue"],
  },
  // blacksmith
  {
    source: "gear-images/blacksmith/beacon_shield.webp",
    categories: ["blacksmith", "weapon", "melee", "metal", "shield", "heavy"],
  },
  {
    source: "gear-images/blacksmith/dragon_slayer.webp",
    categories: ["blacksmith", "weapon", "melee", "grand-weapon", "heavy", "two-handed", "metal", "red", "blue"],
  },
  {
    source: "gear-images/blacksmith/lantern_cuirass.webp",
    categories: ["blacksmith", "armour", "set", "metal", "heavy", "chest-armour", "green", "blue", "lantern-armour"],
  },
  {
    source: "gear-images/blacksmith/lantern_dagger.webp",
    categories: ["blacksmith", "weapon", "melee", "dagger", "metal", "finesse", "red"],
  },
  {
    source: "gear-images/blacksmith/lantern_gauntlets.webp",
    categories: ["blacksmith", "armour", "set", "metal", "heavy", "arm-armour", "green", "lantern-armour"],
  },
  {
    source: "gear-images/blacksmith/lantern_glaive.webp",
    categories: ["blacksmith", "weapon", "melee", "spear", "axe", "finesse", "two-handed", "metal", "green"],
  },
  {
    source: "gear-images/blacksmith/lantern_greaves.webp",
    categories: ["blacksmith", "armour", "set", "metal", "heavy", "leg-armour", "red", "blue", "lantern-armour"],
  },
  {
    source: "gear-images/blacksmith/lantern_helm.webp",
    categories: ["blacksmith", "armour", "set", "metal", "heavy", "head-armour", "blue", "lantern-armour"],
  },
  {
    source: "gear-images/blacksmith/lantern_mail.webp",
    categories: ["blacksmith", "armour", "set", "metal", "heavy", "waist-armour", "green", "lantern-armour"],
  },
  {
    source: "gear-images/blacksmith/lantern_sword.webp",
    categories: ["blacksmith", "weapon", "melee", "sword", "finesse", "metal", "red"],
  },
  {
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
  },
  {
    source: "gear-images/blacksmith/ring_whip.webp",
    categories: ["blacksmith", "weapon", "melee", "whip", "finesse", "metal", "blue"],
  },
  {
    source: "gear-images/blacksmith/scrap_shield.webp",
    categories: ["blacksmith", "weapon", "melee", "shield", "bone", "metal", "red"],
  },
  // bone smith
  {
    source: "gear-images/bone-smith/bone_axe.webp",
    categories: ["bone-smith", "weapon", "melee", "axe", "bone", "red"],
  },
  {
    source: "gear-images/bone-smith/bone_blade.webp",
    categories: ["bone-smith", "weapon", "melee", "sword", "bone", "red"],
  },
  {
    source: "gear-images/bone-smith/bone_club.webp",
    categories: ["bone-smith", "weapon", "melee", "club", "bone", "red"],
  },
  {
    source: "gear-images/bone-smith/bone_dagger.webp",
    categories: ["bone-smith", "weapon", "melee", "dagger", "bone", "red"],
  },
  {
    source: "gear-images/bone-smith/bone_darts.webp",
    categories: ["bone-smith", "weapon", "ranged", "thrown", "bone", "red"],
  },
  {
    source: "gear-images/bone-smith/bone_pickaxe.webp",
    categories: ["bone-smith", "item", "tool", "pickaxe", "bone", "green"],
  },
  {
    source: "gear-images/bone-smith/bone_sickle.webp",
    categories: ["bone-smith", "item", "tool", "sickle", "bone", "green"],
  },
  {
    source: "gear-images/bone-smith/skull_helm.webp",
    categories: ["bone-smith", "armour", "bone", "fragile", "head-armour", "red"],
  },

  // catarium
  {
    source: "gear-images/catarium/cat_eye_circlet.webp",
    categories: ["catarium", "item", "jewelery", "other", "blue"],
  },
  {
    source: "gear-images/catarium/cat_fang_knife.webp",
    categories: ["catarium", "weapon", "melee", "dagger", "bone", "red"],
  },
  {
    source: "gear-images/catarium/cat_gut_bow.webp",
    categories: ["catarium", "weapon", "ranged", "bow", "two-handed", "blue"],
  },
  {
    source: "gear-images/catarium/claw_head_arrow.webp",
    categories: ["catarium", "item", "ammunition", "arrow", "blue"],
  },
  {
    source: "gear-images/catarium/frenzy_drink.webp",
    categories: ["catarium", "item", "consumable", "fragile"],
  },
  {
    source: "gear-images/catarium/king_spear.webp",
    categories: ["catarium", "weapon", "melee", "spear", "heavy", "two-handed", "red"],
  },
  {
    source: "gear-images/catarium/lion_beast_katar.webp",
    categories: ["catarium", "weapon", "melee", "katar", "paired"],
  },
  {
    source: "gear-images/catarium/lion_headdress.webp",
    categories: ["catarium", "item", "flammable"],
  },
  {
    source: "gear-images/catarium/lion_skin_cloak.webp",
    categories: ["catarium", "armour", "fur", "heavy", "bone", "flammable", "green"],
  },
  {
    source: "gear-images/catarium/whisker_harp.webp",
    categories: ["catarium", "item", "instrument", "noisy", "blue"],
  },
  {
    source: "gear-images/catarium/white_lion_boots.webp",
    categories: ["catarium", "armour", "set", "fur", "heavy", "leg-armour", "red", "white-lion-armour"],
  },
  {
    source: "gear-images/catarium/white_lion_coat.webp",
    categories: ["catarium", "armour", "set", "fur", "heavy", "chest-armour", "blue", "white-lion-armour"],
  },
  {
    source: "gear-images/catarium/white_lion_gauntlet.webp",
    categories: ["catarium", "armour", "set", "fur", "heavy", "arm-armour", "white-lion-armour"],
  },
  {
    source: "gear-images/catarium/white_lion_helm.webp",
    categories: ["catarium", "armour", "set", "fur", "heavy", "head-armour", "red", "white-lion-armour"],
  },
  {
    source: "gear-images/catarium/white_lion_skirt.webp",
    categories: ["catarium", "armour", "set", "fur", "heavy", "waist-armour", "red", "white-lion-armour"],
  },
  //exhausted lantern hoard
  {
    source: "gear-images/exhausted-lantern-hoard/final_lantern.webp",
    categories: ["exhausted-lantern-hoard", "item", "lantern", "other", "green", "blue"],
  },
  {
    source: "gear-images/exhausted-lantern-hoard/oxidized_beacon_shield.webp",
    categories: ["exhausted-lantern-hoard", "weapon", "melee", "shield", "metal", "heavy"],
  },
  {
    source: "gear-images/exhausted-lantern-hoard/oxidized_lantern_dagger.webp",
    categories: ["exhausted-lantern-hoard", "weapon", "melee", "dagger", "finesse", "metal", "red"],
  },
  {
    source: "gear-images/exhausted-lantern-hoard/oxidized_lantern_glaive.webp",
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
  },
  {
    source: "gear-images/exhausted-lantern-hoard/oxidized_lantern_helm.webp",
    categories: ["exhausted-lantern-hoard", "armour", "set", "metal", "head-armour", "blue"],
  },
  {
    source: "gear-images/exhausted-lantern-hoard/oxidized_lantern_sword.webp",
    categories: ["exhausted-lantern-hoard", "weapon", "melee", "sword", "finesse", "metal", "red"],
  },
  {
    source: "gear-images/exhausted-lantern-hoard/oxidized_ring_whip.webp",
    categories: ["exhausted-lantern-hoard", "weapon", "melee", "whip", "finesse", "metal", "blue"],
  },
  {
    source: "gear-images/exhausted-lantern-hoard/survivors'_lantern.webp",
    categories: ["exhausted-lantern-hoard", "item", "lantern", "red", "green", "blue"],
  },

  //leather worker
  {
    source: "gear-images/leather-worker/hunter_whip.webp",
    categories: ["leather-worker", "weapon", "melee", "whip", "leather", "blue"],
  },
  {
    source: "gear-images/leather-worker/leather_boots.webp",
    categories: ["leather-worker", "armour", "set", "leather", "leg-armour", "green", "leather-armour"],
  },
  {
    source: "gear-images/leather-worker/leather_bracers.webp",
    categories: ["leather-worker", "armour", "set", "leather", "arm-armour", "green", "leather-armour"],
  },
  {
    source: "gear-images/leather-worker/leather_cuirass.webp",
    categories: ["leather-worker", "armour", "set", "leather", "chest-armour", "red", "blue", "leather-armour"],
  },
  {
    source: "gear-images/leather-worker/leather_mask.webp",
    categories: ["leather-worker", "armour", "set", "leather", "head-armour", "red", "blue", "leather-armour"],
  },
  {
    source: "gear-images/leather-worker/leather_skirt.webp",
    categories: ["leather-worker", "armour", "set", "leather", "waist-armour", "green", "leather-armour"],
  },
  {
    source: "gear-images/leather-worker/round_leather_shield.webp",
    categories: ["leather-worker", "weapon", "melee", "shield", "leather", "green"],
  },
  //mask maker
  {
    source: "gear-images/mask-maker/antelope_mask.webp",
    categories: ["mask-maker", "item", "mask", "bone", "other"],
  },
  {
    source: "gear-images/mask-maker/death_mask.webp",
    categories: ["mask-maker", "item", "mask", "bone", "other"],
  },
  {
    source: "gear-images/mask-maker/god_mask.webp",
    categories: ["mask-maker", "item", "mask", "bone", "other"],
  },
  {
    source: "gear-images/mask-maker/man_mask.webp",
    categories: ["mask-maker", "item", "mask", "bone", "other"],
  },
  {
    source: "gear-images/mask-maker/phoenix_mask.webp",
    categories: ["mask-maker", "item", "mask", "bone", "other"],
  },
  {
    source: "gear-images/mask-maker/white_lion_mask.webp",
    categories: ["mask-maker", "item", "mask", "bone", "other"],
  },
  //organ grinders
  {
    source: "gear-images/organ-grinder/dried_acanthus.webp",
    categories: ["organ-grinder", "item", "herb", "consumable"],
  },
  {
    source: "gear-images/organ-grinder/fecal_salve.webp",
    categories: ["organ-grinder", "item", "balm", "stinky", "blue"],
  },
  {
    source: "gear-images/organ-grinder/lucky_charm.webp",
    categories: ["organ-grinder", "item", "jewelery", "blue"],
  },
  {
    source: "gear-images/organ-grinder/monster_grease.webp",
    categories: ["organ-grinder", "item", "consumable", "soluble", "stinky", "green"],
  },
  {
    source: "gear-images/organ-grinder/monster_tooth_necklace.webp",
    categories: ["organ-grinder", "item", "jewelery", "bone", "red"],
  },
  {
    source: "gear-images/organ-grinder/stone_noses.webp",
    categories: ["organ-grinder", "item", "jewelery"],
  },

  // plumery
  {
    source: "gear-images/plumery/arc_bow.webp",
    categories: ["plumery", "weapon", "ranged", "bow", "two-handed", "red", "green"],
  },
  {
    source: "gear-images/plumery/bird_bread.webp",
    categories: ["plumery", "item", "consumable", "soluble", "green"],
  },
  {
    source: "gear-images/plumery/bloom_sphere.webp",
    categories: ["plumery", "item", "stinky", "other", "green", "blue"],
  },
  {
    source: "gear-images/plumery/crest_crown.webp",
    categories: ["plumery", "item", "other", "red", "green", "blue"],
  },
  {
    source: "gear-images/plumery/feather_mantle.webp",
    categories: ["plumery", "item", "flammable", "red", "green", "blue"],
  },
  {
    source: "gear-images/plumery/feather_shield.webp",
    categories: ["plumery", "weapon", "melee", "shield", "flammable", "blue"],
  },
  {
    source: "gear-images/plumery/hollow_sword.webp",
    categories: ["plumery", "weapon", "melee", "sword", "bone"],
  },
  {
    source: "gear-images/plumery/hollowpoint_arrow.webp",
    categories: ["plumery", "item", "ammunition", "arrow"],
  },
  {
    source: "gear-images/plumery/hours_ring.webp",
    categories: ["plumery", "item", "other"],
  },
  {
    source: "gear-images/plumery/phoenix_faulds.webp",
    categories: ["plumery", "armour", "set", "feather", "metal", "flammable", "waist-armour", "phoenix-armour"],
  },
  {
    source: "gear-images/plumery/phoenix_gauntlet.webp",
    categories: ["plumery", "armour", "set", "feather", "metal", "flammable", "arm-armour", "phoenix-armour"],
  },
  {
    source: "gear-images/plumery/phoenix_greaves.webp",
    categories: ["plumery", "armour", "set", "feather", "metal", "flammable", "leg-armour", "red", "phoenix-armour"],
  },
  {
    source: "gear-images/plumery/phoenix_helm.webp",
    categories: ["plumery", "armour", "set", "feather", "metal", "flammable", "head-armour", "blue", "phoenix-armour"],
  },
  {
    source: "gear-images/plumery/phoenix_plackart.webp",
    categories: [
      "plumery",
      "armour",
      "set",
      "feather",
      "metal",
      "flammable",
      "chest-armour",
      "red",
      "green",
      "blue",
      "phoenix-armour",
    ],
  },
  {
    source: "gear-images/plumery/sonic_tomahawk.webp",
    categories: ["plumery", "weapon", "melee", "axe", "metal", "red"],
  },
  //rare gear
  {
    source: "gear-images/rare-gear/adventure_sword.webp",
    categories: ["rare-gear", "weapon", "melee", "sword", "finesse", "other"],
  },
  {
    source: "gear-images/rare-gear/butcher_cleaver.webp",
    categories: ["rare-gear", "weapon", "melee", "axe", "other", "paired"],
  },
  {
    source: "gear-images/rare-gear/forsaker_mask.webp",
    categories: ["rare-gear", "mask", "metal", "other"],
  },
  {
    source: "gear-images/rare-gear/lantern_halberd.webp",
    categories: ["rare-gear", "weapon", "melee", "two-handed", "spear", "other"],
  },
  {
    source: "gear-images/rare-gear/muramasa.webp",
    categories: ["rare-gear", "weapon", "melee", "katana", "two-handed", "finesse", "other"],
  },
  {
    source: "gear-images/rare-gear/regal_faulds.webp",
    categories: ["rare-gear", "armour", "bone", "metal", "waist-armour"],
  },
  {
    source: "gear-images/rare-gear/regal_gauntlet.webp",
    categories: ["rare-gear", "armour", "bone", "metal", "arm-armour"],
  },
  {
    source: "gear-images/rare-gear/regal_greaves.webp",
    categories: ["rare-gear", "armour", "bone", "metal", "leg-armour"],
  },
  {
    source: "gear-images/rare-gear/regal_helm.webp",
    categories: ["rare-gear", "armour", "bone", "metal", "head-armour"],
  },
  {
    source: "gear-images/rare-gear/regal_plackart.webp",
    categories: ["rare-gear", "armour", "bone", "metal", "chest-armour"],
  },
  {
    source: "gear-images/rare-gear/steel_shield.webp",
    categories: ["rare-gear", "weapon", "melee", "shield", "metal", "heavy"],
  },
  {
    source: "gear-images/rare-gear/steel_sword.webp",
    categories: ["rare-gear", "weapon", "melee", "sword", "finesse", "metal"],
  },
  {
    source: "gear-images/rare-gear/thunder_maul.webp",
    categories: ["rare-gear", "weapon", "melee", "club", "two-handed", "other"],
  },
  {
    source: "gear-images/rare-gear/twilight_sword.webp",
    categories: ["rare-gear", "weapon", "melee", "two-handed", "finesse", "other"],
  },
  //skinnery
  {
    source: "gear-images/skinnery/bandages.webp",
    categories: ["skinnery", "item", "green", "blue"],
  },
  {
    source: "gear-images/skinnery/rawhide_boots.webp",
    categories: ["skinnery", "armour", "set", "rawhide", "leg-armour", "rawhide-armour"],
  },
  {
    source: "gear-images/skinnery/rawhide_drum.webp",
    categories: ["skinnery", "item", "rawhide", "instrument", "noisy", "green"],
  },
  {
    source: "gear-images/skinnery/rawhide_gloves.webp",
    categories: ["skinnery", "armour", "set", "rawhide", "arm-armour", "red", "rawhide-armour"],
  },
  {
    source: "gear-images/skinnery/rawhide_headband.webp",
    categories: ["skinnery", "armour", "set", "rawhide", "head-armour", "blue", "rawhide-armour"],
  },
  {
    source: "gear-images/skinnery/rawhide_pants.webp",
    categories: ["skinnery", "armour", "set", "rawhide", "waist-armour", "rawhide-armour"],
  },
  {
    source: "gear-images/skinnery/rawhide_vest.webp",
    categories: ["skinnery", "armour", "set", "rawhide", "chest-armour", "red", "blue", "rawhide-armour"],
  },
  {
    source: "gear-images/skinnery/rawhide_whip.webp",
    categories: ["skinnery", "weapon", "melee", "whip", "rawhide"],
  },
  //starting gear
  {
    source: "gear-images/starting-gear/cloth.webp",
    categories: ["starting-gear", "armour", "waist-armour"],
  },
  {
    source: "gear-images/starting-gear/founding_stone.webp",
    categories: ["starting-gear", "weapon", "melee", "stone"],
  },
  //stone circle
  {
    source: "gear-images/stone-circle/beast_knuckle.webp",
    categories: ["stone-circle", "weapon", "melee", "katar", "bone", "paired"],
  },
  {
    source: "gear-images/stone-circle/blood_paint.webp",
    categories: ["stone-circle", "item", "soluble"],
  },
  {
    source: "gear-images/stone-circle/blue_charm.webp",
    categories: ["stone-circle", "item", "jewelery", "fragile", "blue"],
  },
  {
    source: "gear-images/stone-circle/bone_earrings.webp",
    categories: ["stone-circle", "item", "jewelery", "bone"],
  },
  {
    source: "gear-images/stone-circle/boss_mehndi.webp",
    categories: ["stone-circle", "item", "soluble"],
  },
  {
    source: "gear-images/stone-circle/green_charm.webp",
    categories: ["stone-circle", "item", "jewelery", "fragile", "green"],
  },
  {
    source: "gear-images/stone-circle/lance_of_longinus.webp",
    categories: ["stone-circle", "weapon", "melee", "spear", "two-handed", "bone"],
  },
  {
    source: "gear-images/stone-circle/red_charm.webp",
    categories: ["stone-circle", "item", "jewelery", "fragile", "red"],
  },
  {
    source: "gear-images/stone-circle/screaming_bracers.webp",
    categories: ["stone-circle", "armour", "set", "bone", "arm-armour", "red", "green", "screaming-armour"],
  },
  {
    source: "gear-images/stone-circle/screaming_coat.webp",
    categories: ["stone-circle", "armour", "set", "bone", "chest-armour", "green", "blue", "screaming-armour"],
  },
  {
    source: "gear-images/stone-circle/screaming_horns.webp",
    categories: ["stone-circle", "armour", "set", "bone", "head-armour", "blue", "screaming-armour"],
  },
  {
    source: "gear-images/stone-circle/screaming_leg_warmers.webp",
    categories: ["stone-circle", "armour", "set", "bone", "leg-armour", "red", "blue", "screaming-armour"],
  },
  {
    source: "gear-images/stone-circle/screaming_skirt.webp",
    categories: ["stone-circle", "armour", "set", "bone", "waist-armour", "green", "blue", "screaming-armour"],
  },
  //weapon crafter
  {
    source: "gear-images/weapon-crafter/blood_sheath.webp",
    categories: ["weapon-crafter", "item", "bone", "other"],
  },
  {
    source: "gear-images/weapon-crafter/counterweighted_axe.webp",
    categories: ["weapon-crafter", "weapon", "melee", "axe", "two-handed", "red"],
  },
  {
    source: "gear-images/weapon-crafter/finger_of_god.webp",
    categories: ["weapon-crafter", "weapon", "melee", "spear", "two-handed", "red"],
  },
  {
    source: "gear-images/weapon-crafter/rainbow_katana.webp",
    categories: ["weapon-crafter", "weapon", "melee", "katana", "finesse", "two-handed", "red"],
  },
  {
    source: "gear-images/weapon-crafter/scrap_dagger.webp",
    categories: ["weapon-crafter", "weapon", "melee", "dagger", "metal", "red"],
  },
  {
    source: "gear-images/weapon-crafter/scrap_sword.webp",
    categories: ["weapon-crafter", "weapon", "melee", "sword", "metal", "blue"],
  },
  {
    source: "gear-images/weapon-crafter/skullcap_hammer.webp",
    categories: ["weapon-crafter", "weapon", "melee", "club", "bone", "green"],
  },
  {
    source: "gear-images/weapon-crafter/whistling_mace.webp",
    categories: ["weapon-crafter", "weapon", "melee", "club", "bone", "green"],
  },
  {
    source: "gear-images/weapon-crafter/zambato.webp",
    categories: ["weapon-crafter", "weapon", "melee", "grand-weapon", "two-handed", "bone", "red", "green"],
  },
];

export default gearArray;
