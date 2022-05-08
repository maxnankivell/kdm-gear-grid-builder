interface GearImage {
  source: string;
  categories: string[];
  versions: string[];
}

const gearArray: GearImage[] = [
  // barber-surgeon
  {
    source: "gear-images/barber-surgeon/almanac.webp",
    categories: ["barber-surgeon", "item", "soluble", "flammable", "blue"],
    versions: ["all"],
  },
  {
    source: "gear-images/kdm-1.5-gear/barber-surgeon/brain_mint.webp",
    categories: ["barber-surgeon", "item", "consumable", "green", "blue"],
    versions: ["1.5"],
  },
  {
    source: "gear-images/barber-surgeon/bug_trap.webp",
    categories: ["barber-surgeon", "item", "soluble"],
    versions: ["all"],
  },
  {
    source: "gear-images/kdm-1.5-gear/barber-surgeon/elder_earrings.webp",
    categories: ["barber-surgeon", "item", "jewelery", "red", "blue", "green"],
    versions: ["1.5"],
  },
  {
    source: "gear-images/barber-surgeon/first_aid_kit.webp",
    categories: ["barber-surgeon", "item", "heavy", "green"],
    versions: ["all"],
  },
  {
    source: "gear-images/barber-surgeon/musk_bomb.webp",
    categories: ["barber-surgeon", "item", "stinky", "thrown", "fragile"],
    versions: ["all"],
  },
  {
    source: "gear-images/barber-surgeon/scavenger_kit.webp",
    categories: ["barber-surgeon", "item", "heavy", "green"],
    versions: ["all"],
  },
  {
    source: "gear-images/kdm-1.5-gear/barber-surgeon/speed_powder.webp",
    categories: ["barber-surgeon", "item", "soluble", "blue"],
    versions: ["1.5"],
  },
  {
    source: "gear-images/kdm-1.6-gear/barber-surgeon/blue_charm.webp",
    categories: ["barber-surgeon", "item", "jewelery", "fragile", "blue"],
    versions: ["1.6"],
  },
  {
    source: "gear-images/kdm-1.6-gear/barber-surgeon/green_charm.webp",
    categories: ["barber-surgeon", "item", "jewelery", "fragile", "green"],
    versions: ["1.6"],
  },
  {
    source: "gear-images/kdm-1.6-gear/barber-surgeon/red_charm.webp",
    categories: ["barber-surgeon", "item", "jewelery", "fragile", "red"],
    versions: ["1.6"],
  },
  // blacksmith
  {
    source: "gear-images/blacksmith/beacon_shield.webp",
    categories: ["blacksmith", "weapon", "melee", "metal", "shield", "heavy"],
    versions: ["all"],
  },
  {
    source: "gear-images/blacksmith/dragon_slayer.webp",
    categories: ["blacksmith", "weapon", "melee", "grand-weapon", "heavy", "two-handed", "metal", "red", "blue"],
    versions: ["all"],
  },
  {
    source: "gear-images/blacksmith/lantern_cuirass.webp",
    categories: ["blacksmith", "armour", "set", "metal", "heavy", "chest-armour", "green", "blue", "lantern-armour"],
    versions: ["all"],
  },
  {
    source: "gear-images/blacksmith/lantern_dagger.webp",
    categories: ["blacksmith", "weapon", "melee", "dagger", "metal", "finesse", "red"],
    versions: ["all"],
  },
  {
    source: "gear-images/blacksmith/lantern_gauntlets.webp",
    categories: ["blacksmith", "armour", "set", "metal", "heavy", "arm-armour", "green", "lantern-armour"],
    versions: ["all"],
  },
  {
    source: "gear-images/blacksmith/lantern_glaive.webp",
    categories: ["blacksmith", "weapon", "melee", "spear", "axe", "finesse", "two-handed", "metal", "green"],
    versions: ["all"],
  },
  {
    source: "gear-images/blacksmith/lantern_greaves.webp",
    categories: ["blacksmith", "armour", "set", "metal", "heavy", "leg-armour", "red", "blue", "lantern-armour"],
    versions: ["all"],
  },
  {
    source: "gear-images/blacksmith/lantern_helm.webp",
    categories: ["blacksmith", "armour", "set", "metal", "heavy", "head-armour", "blue", "lantern-armour"],
    versions: ["all"],
  },
  {
    source: "gear-images/blacksmith/lantern_mail.webp",
    categories: ["blacksmith", "armour", "set", "metal", "heavy", "waist-armour", "green", "lantern-armour"],
    versions: ["all"],
  },
  {
    source: "gear-images/blacksmith/lantern_sword.webp",
    categories: ["blacksmith", "weapon", "melee", "sword", "finesse", "metal", "red"],
    versions: ["all"],
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
    versions: ["all"],
  },
  {
    source: "gear-images/blacksmith/ring_whip.webp",
    categories: ["blacksmith", "weapon", "melee", "whip", "finesse", "metal", "blue"],
    versions: ["all"],
  },
  {
    source: "gear-images/blacksmith/scrap_shield.webp",
    categories: ["blacksmith", "weapon", "melee", "shield", "bone", "metal", "red"],
    versions: ["all"],
  },
  {
    source: "gear-images/kdm-1.6-gear/blacksmith/polishing_lantern.webp",
    categories: ["blacksmith", "item", "metal", "lantern"],
    versions: ["1.6"],
  },
  // bone smith
  {
    source: "gear-images/bone-smith/bone_axe.webp",
    categories: ["bone-smith", "weapon", "melee", "axe", "bone", "red"],
    versions: ["all"],
  },
  {
    source: "gear-images/bone-smith/bone_blade.webp",
    categories: ["bone-smith", "weapon", "melee", "sword", "bone", "red"],
    versions: ["all"],
  },
  {
    source: "gear-images/bone-smith/bone_club.webp",
    categories: ["bone-smith", "weapon", "melee", "club", "bone", "red"],
    versions: ["all"],
  },
  {
    source: "gear-images/bone-smith/bone_dagger.webp",
    categories: ["bone-smith", "weapon", "melee", "dagger", "bone", "red"],
    versions: ["all"],
  },
  {
    source: "gear-images/bone-smith/bone_darts.webp",
    categories: ["bone-smith", "weapon", "ranged", "thrown", "bone", "red"],
    versions: ["all"],
  },
  {
    source: "gear-images/bone-smith/bone_pickaxe.webp",
    categories: ["bone-smith", "item", "tool", "pickaxe", "bone", "green"],
    versions: ["all"],
  },
  {
    source: "gear-images/bone-smith/bone_sickle.webp",
    categories: ["bone-smith", "item", "tool", "sickle", "bone", "green"],
    versions: ["all"],
  },
  {
    source: "gear-images/bone-smith/skull_helm.webp",
    categories: ["bone-smith", "armour", "bone", "fragile", "head-armour", "red"],
    versions: ["all"],
  },

  // catarium
  {
    source: "gear-images/catarium/cat_eye_circlet.webp",
    categories: ["catarium", "item", "jewelery", "other", "blue"],
    versions: ["all"],
  },
  {
    source: "gear-images/catarium/cat_fang_knife.webp",
    categories: ["catarium", "weapon", "melee", "dagger", "bone", "red"],
    versions: ["all"],
  },
  {
    source: "gear-images/catarium/cat_gut_bow.webp",
    categories: ["catarium", "weapon", "ranged", "bow", "two-handed", "blue"],
    versions: ["all"],
  },
  {
    source: "gear-images/catarium/claw_head_arrow.webp",
    categories: ["catarium", "item", "ammunition", "arrow", "blue"],
    versions: ["all"],
  },
  {
    source: "gear-images/catarium/frenzy_drink.webp",
    categories: ["catarium", "item", "consumable", "fragile"],
    versions: ["all"],
  },
  {
    source: "gear-images/catarium/king_spear.webp",
    categories: ["catarium", "weapon", "melee", "spear", "heavy", "two-handed", "red"],
    versions: ["all"],
  },
  {
    source: "gear-images/catarium/lion_beast_katar.webp",
    categories: ["catarium", "weapon", "melee", "katar", "paired"],
    versions: ["all"],
  },
  {
    source: "gear-images/catarium/lion_headdress.webp",
    categories: ["catarium", "item", "flammable"],
    versions: ["all"],
  },
  {
    source: "gear-images/catarium/lion_skin_cloak.webp",
    categories: ["catarium", "armour", "fur", "heavy", "bone", "flammable", "green"],
    versions: ["all"],
  },
  {
    source: "gear-images/catarium/whisker_harp.webp",
    categories: ["catarium", "item", "instrument", "noisy", "blue"],
    versions: ["all"],
  },
  {
    source: "gear-images/catarium/white_lion_boots.webp",
    categories: ["catarium", "armour", "set", "fur", "heavy", "leg-armour", "red", "white-lion-armour"],
    versions: ["all"],
  },
  {
    source: "gear-images/catarium/white_lion_coat.webp",
    categories: ["catarium", "armour", "set", "fur", "heavy", "chest-armour", "blue", "white-lion-armour"],
    versions: ["all"],
  },
  {
    source: "gear-images/catarium/white_lion_gauntlet.webp",
    categories: ["catarium", "armour", "set", "fur", "heavy", "arm-armour", "white-lion-armour"],
    versions: ["all"],
  },
  {
    source: "gear-images/catarium/white_lion_helm.webp",
    categories: ["catarium", "armour", "set", "fur", "heavy", "head-armour", "red", "white-lion-armour"],
    versions: ["all"],
  },
  {
    source: "gear-images/catarium/white_lion_skirt.webp",
    categories: ["catarium", "armour", "set", "fur", "heavy", "waist-armour", "red", "white-lion-armour"],
    versions: ["all"],
  },
  //exhausted lantern hoard
  {
    source: "gear-images/kdm-1.5-gear/exhausted-lantern-hoard/final_lantern.webp",
    categories: ["exhausted-lantern-hoard", "item", "lantern", "other", "green", "blue"],
    versions: ["1.5"],
  },
  {
    source: "gear-images/kdm-1.6-gear/exhausted-lantern-hoard/final_lantern.webp",
    categories: ["exhausted-lantern-hoard", "item", "lantern", "other", "green", "blue"],
    versions: ["1.6"],
  },
  {
    source: "gear-images/kdm-1.5-gear/exhausted-lantern-hoard/final_lantern_closed.webp",
    categories: ["exhausted-lantern-hoard", "item", "lantern", "other", "green", "blue"],
    versions: ["1.5"],
  },
  {
    source: "gear-images/kdm-1.6-gear/exhausted-lantern-hoard/final_lantern_closed.webp",
    categories: ["exhausted-lantern-hoard", "item", "lantern", "other", "green", "blue"],
    versions: ["1.6"],
  },
  {
    source: "gear-images/exhausted-lantern-hoard/oxidized_beacon_shield.webp",
    categories: ["exhausted-lantern-hoard", "weapon", "melee", "shield", "metal", "heavy"],
    versions: ["all"],
  },
  {
    source: "gear-images/exhausted-lantern-hoard/oxidized_lantern_dagger.webp",
    categories: ["exhausted-lantern-hoard", "weapon", "melee", "dagger", "finesse", "metal", "red"],
    versions: ["all"],
  },
  {
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
  },
  {
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
  },
  {
    source: "gear-images/exhausted-lantern-hoard/oxidized_lantern_helm.webp",
    categories: ["exhausted-lantern-hoard", "armour", "set", "metal", "head-armour", "blue"],
    versions: ["all"],
  },
  {
    source: "gear-images/exhausted-lantern-hoard/oxidized_lantern_sword.webp",
    categories: ["exhausted-lantern-hoard", "weapon", "melee", "sword", "finesse", "metal", "red"],
    versions: ["all"],
  },
  {
    source: "gear-images/exhausted-lantern-hoard/oxidized_ring_whip.webp",
    categories: ["exhausted-lantern-hoard", "weapon", "melee", "whip", "finesse", "metal", "blue"],
    versions: ["all"],
  },
  {
    source: "gear-images/exhausted-lantern-hoard/survivors'_lantern.webp",
    categories: ["exhausted-lantern-hoard", "item", "lantern", "red", "green", "blue"],
    versions: ["all"],
  },

  //leather worker
  {
    source: "gear-images/leather-worker/hunter_whip.webp",
    categories: ["leather-worker", "weapon", "melee", "whip", "leather", "blue"],
    versions: ["all"],
  },
  {
    source: "gear-images/leather-worker/leather_boots.webp",
    categories: ["leather-worker", "armour", "set", "leather", "leg-armour", "green", "leather-armour"],
    versions: ["all"],
  },
  {
    source: "gear-images/leather-worker/leather_bracers.webp",
    categories: ["leather-worker", "armour", "set", "leather", "arm-armour", "green", "leather-armour"],
    versions: ["all"],
  },
  {
    source: "gear-images/leather-worker/leather_cuirass.webp",
    categories: ["leather-worker", "armour", "set", "leather", "chest-armour", "red", "blue", "leather-armour"],
    versions: ["all"],
  },
  {
    source: "gear-images/leather-worker/leather_mask.webp",
    categories: ["leather-worker", "armour", "set", "leather", "head-armour", "red", "blue", "leather-armour"],
    versions: ["all"],
  },
  {
    source: "gear-images/leather-worker/leather_skirt.webp",
    categories: ["leather-worker", "armour", "set", "leather", "waist-armour", "green", "leather-armour"],
    versions: ["all"],
  },
  {
    source: "gear-images/leather-worker/round_leather_shield.webp",
    categories: ["leather-worker", "weapon", "melee", "shield", "leather", "green"],
    versions: ["all"],
  },
  //mask maker
  {
    source: "gear-images/mask-maker/antelope_mask.webp",
    categories: ["mask-maker", "item", "mask", "bone", "other"],
    versions: ["all"],
  },
  {
    source: "gear-images/mask-maker/death_mask.webp",
    categories: ["mask-maker", "item", "mask", "bone", "other"],
    versions: ["all"],
  },
  {
    source: "gear-images/mask-maker/god_mask.webp",
    categories: ["mask-maker", "item", "mask", "bone", "other"],
    versions: ["all"],
  },
  {
    source: "gear-images/mask-maker/man_mask.webp",
    categories: ["mask-maker", "item", "mask", "bone", "other"],
    versions: ["all"],
  },
  {
    source: "gear-images/mask-maker/phoenix_mask.webp",
    categories: ["mask-maker", "item", "mask", "bone", "other"],
    versions: ["all"],
  },
  {
    source: "gear-images/mask-maker/white_lion_mask.webp",
    categories: ["mask-maker", "item", "mask", "bone", "other"],
    versions: ["all"],
  },
  //organ grinders
  {
    source: "gear-images/organ-grinder/dried_acanthus.webp",
    categories: ["organ-grinder", "item", "herb", "consumable"],
    versions: ["all"],
  },
  {
    source: "gear-images/organ-grinder/fecal_salve.webp",
    categories: ["organ-grinder", "item", "balm", "stinky", "blue"],
    versions: ["all"],
  },
  {
    source: "gear-images/organ-grinder/lucky_charm.webp",
    categories: ["organ-grinder", "item", "jewelery", "blue"],
    versions: ["all"],
  },
  {
    source: "gear-images/kdm-1.5-gear/organ-grinder/monster_grease.webp",
    categories: ["organ-grinder", "item", "consumable", "soluble", "stinky", "green"],
    versions: ["1.5"],
  },
  {
    source: "gear-images/kdm-1.6-gear/organ-grinder/monster_grease.webp",
    categories: ["organ-grinder", "item", "consumable", "soluble", "stinky", "flammable", "green"],
    versions: ["1.6"],
  },
  {
    source: "gear-images/organ-grinder/monster_tooth_necklace.webp",
    categories: ["organ-grinder", "item", "jewelery", "bone", "red"],
    versions: ["all"],
  },
  {
    source: "gear-images/organ-grinder/stone_noses.webp",
    categories: ["organ-grinder", "item", "jewelery"],
    versions: ["all"],
  },

  // plumery
  {
    source: "gear-images/plumery/arc_bow.webp",
    categories: ["plumery", "weapon", "ranged", "bow", "two-handed", "red", "green"],
    versions: ["all"],
  },
  {
    source: "gear-images/plumery/bird_bread.webp",
    categories: ["plumery", "item", "consumable", "soluble", "green"],
    versions: ["all"],
  },
  {
    source: "gear-images/kdm-1.6-gear/plumery/blood_sheath.webp",
    categories: ["plumery", "item", "bone", "other"],
    versions: ["1.6"],
  },
  {
    source: "gear-images/plumery/bloom_sphere.webp",
    categories: ["plumery", "item", "stinky", "other", "green", "blue"],
    versions: ["all"],
  },
  {
    source: "gear-images/plumery/crest_crown.webp",
    categories: ["plumery", "item", "other", "red", "green", "blue"],
    versions: ["all"],
  },
  {
    source: "gear-images/plumery/feather_mantle.webp",
    categories: ["plumery", "item", "flammable", "red", "green", "blue"],
    versions: ["all"],
  },
  {
    source: "gear-images/plumery/feather_shield.webp",
    categories: ["plumery", "weapon", "melee", "shield", "flammable", "blue"],
    versions: ["all"],
  },
  {
    source: "gear-images/kdm-1.6-gear/plumery/finger_of_god.webp",
    categories: ["plumery", "weapon", "melee", "spear", "two-handed", "red", "green", "blue"],
    versions: ["1.6"],
  },
  {
    source: "gear-images/kdm-1.5-gear/plumery/hollow_sword.webp",
    categories: ["plumery", "weapon", "melee", "sword", "bone"],
    versions: ["1.5"],
  },
  {
    source: "gear-images/kdm-1.6-gear/plumery/hollow_sword.webp",
    categories: ["plumery", "weapon", "melee", "sword", "dagger", "bone"],
    versions: ["1.6"],
  },
  {
    source: "gear-images/plumery/hollowpoint_arrow.webp",
    categories: ["plumery", "item", "ammunition", "arrow"],
    versions: ["all"],
  },
  {
    source: "gear-images/plumery/hours_ring.webp",
    categories: ["plumery", "item", "other"],
    versions: ["all"],
  },
  {
    source: "gear-images/plumery/phoenix_faulds.webp",
    categories: ["plumery", "armour", "set", "feather", "metal", "flammable", "waist-armour", "phoenix-armour"],
    versions: ["all"],
  },
  {
    source: "gear-images/plumery/phoenix_gauntlet.webp",
    categories: ["plumery", "armour", "set", "feather", "metal", "flammable", "arm-armour", "phoenix-armour"],
    versions: ["all"],
  },
  {
    source: "gear-images/plumery/phoenix_greaves.webp",
    categories: ["plumery", "armour", "set", "feather", "metal", "flammable", "leg-armour", "red", "phoenix-armour"],
    versions: ["all"],
  },
  {
    source: "gear-images/plumery/phoenix_helm.webp",
    categories: ["plumery", "armour", "set", "feather", "metal", "flammable", "head-armour", "blue", "phoenix-armour"],
    versions: ["all"],
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
    versions: ["all"],
  },
  {
    source: "gear-images/kdm-1.6-gear/plumery/rainbow_katana.webp",
    categories: ["plumery", "weapon", "melee", "katana", "finesse", "two-handed", "red", "green", "blue"],
    versions: ["1.6"],
  },
  {
    source: "gear-images/kdm-1.5-gear/plumery/sonic_tomahawk.webp",
    categories: ["plumery", "weapon", "melee", "axe", "metal", "red", "green", "blue"],
    versions: ["1.5"],
  },
  {
    source: "gear-images/kdm-1.6-gear/plumery/sonic_tomahawk.webp",
    categories: ["plumery", "weapon", "melee", "axe", "metal", "red", "blue"],
    versions: ["1.6"],
  },
  //rare gear
  {
    source: "gear-images/rare-gear/adventure_sword.webp",
    categories: ["rare-gear", "weapon", "melee", "sword", "finesse", "other"],
    versions: ["all"],
  },
  {
    source: "gear-images/rare-gear/butcher_cleaver.webp",
    categories: ["rare-gear", "weapon", "melee", "axe", "other", "paired"],
    versions: ["all"],
  },
  {
    source: "gear-images/rare-gear/forsaker_mask.webp",
    categories: ["rare-gear", "mask", "metal", "other"],
    versions: ["all"],
  },
  {
    source: "gear-images/kdm-1.6-gear/rare-gear/lantern_brassiere.webp",
    categories: ["rare-gear", "armor", "set", "metal", "heavy"],
    versions: ["1.6"],
  },
  {
    source: "gear-images/kdm-1.5-gear/rare-gear/lantern_halberd.webp",
    categories: ["rare-gear", "weapon", "melee", "two-handed", "spear", "other"],
    versions: ["1.5"],
  },
  {
    source: "gear-images/kdm-1.6-gear/rare-gear/lantern_halberd.webp",
    categories: ["rare-gear", "weapon", "melee", "two-handed", "axe", "spear", "lantern", "other"],
    versions: ["1.6"],
  },
  {
    source: "gear-images/kdm-1.6-gear/rare-gear/leather_bodysuit.webp",
    categories: ["rare-gear", "armor", "set", "leather"],
    versions: ["1.6"],
  },
  {
    source: "gear-images/rare-gear/muramasa.webp",
    categories: ["rare-gear", "weapon", "melee", "katana", "two-handed", "finesse", "other"],
    versions: ["all"],
  },
  {
    source: "gear-images/kdm-1.6-gear/rare-gear/rawhide_corset.webp",
    categories: ["rare-gear", "armor", "set", "rawhide"],
    versions: ["1.6"],
  },
  {
    source: "gear-images/rare-gear/regal_faulds.webp",
    categories: ["rare-gear", "armour", "bone", "metal", "waist-armour"],
    versions: ["all"],
  },
  {
    source: "gear-images/rare-gear/regal_gauntlet.webp",
    categories: ["rare-gear", "armour", "bone", "metal", "arm-armour"],
    versions: ["all"],
  },
  {
    source: "gear-images/rare-gear/regal_greaves.webp",
    categories: ["rare-gear", "armour", "bone", "metal", "leg-armour"],
    versions: ["all"],
  },
  {
    source: "gear-images/rare-gear/regal_helm.webp",
    categories: ["rare-gear", "armour", "bone", "metal", "head-armour"],
    versions: ["all"],
  },
  {
    source: "gear-images/rare-gear/regal_plackart.webp",
    categories: ["rare-gear", "armour", "bone", "metal", "chest-armour"],
    versions: ["all"],
  },
  {
    source: "gear-images/rare-gear/steel_shield.webp",
    categories: ["rare-gear", "weapon", "melee", "shield", "metal", "heavy"],
    versions: ["all"],
  },
  {
    source: "gear-images/kdm-1.5-gear/rare-gear/steel_sword.webp",
    categories: ["rare-gear", "weapon", "melee", "sword", "finesse", "metal"],
    versions: ["1.5"],
  },
  {
    source: "gear-images/kdm-1.6-gear/rare-gear/steel_sword.webp",
    categories: ["rare-gear", "weapon", "melee", "sword", "finesse", "metal"],
    versions: ["1.6"],
  },
  {
    source: "gear-images/kdm-1.6-gear/rare-gear/teeth_bikini.webp",
    categories: ["rare-gear", "armor", "set", "scale"],
    versions: ["1.6"],
  },
  {
    source: "gear-images/rare-gear/thunder_maul.webp",
    categories: ["rare-gear", "weapon", "melee", "club", "two-handed", "other"],
    versions: ["all"],
  },
  {
    source: "gear-images/rare-gear/twilight_sword.webp",
    categories: ["rare-gear", "weapon", "melee", "two-handed", "finesse", "other"],
    versions: ["all"],
  },
  //sense memory
  {
    source: "gear-images/kdm-1.6-gear/sense-memory/vespertine_bow.webp",
    categories: ["sense-memory", "weapon", "ranged", "bow", "two-handed", "other"],
    versions: ["1.6"],
  },
  //skinnery
  {
    source: "gear-images/skinnery/bandages.webp",
    categories: ["skinnery", "item", "green", "blue"],
    versions: ["all"],
  },
  {
    source: "gear-images/skinnery/rawhide_boots.webp",
    categories: ["skinnery", "armour", "set", "rawhide", "leg-armour", "rawhide-armour"],
    versions: ["all"],
  },
  {
    source: "gear-images/skinnery/rawhide_drum.webp",
    categories: ["skinnery", "item", "rawhide", "instrument", "noisy", "green"],
    versions: ["all"],
  },
  {
    source: "gear-images/skinnery/rawhide_gloves.webp",
    categories: ["skinnery", "armour", "set", "rawhide", "arm-armour", "red", "rawhide-armour"],
    versions: ["all"],
  },
  {
    source: "gear-images/skinnery/rawhide_headband.webp",
    categories: ["skinnery", "armour", "set", "rawhide", "head-armour", "blue", "rawhide-armour"],
    versions: ["all"],
  },
  {
    source: "gear-images/skinnery/rawhide_pants.webp",
    categories: ["skinnery", "armour", "set", "rawhide", "waist-armour", "rawhide-armour"],
    versions: ["all"],
  },
  {
    source: "gear-images/skinnery/rawhide_vest.webp",
    categories: ["skinnery", "armour", "set", "rawhide", "chest-armour", "red", "blue", "rawhide-armour"],
    versions: ["all"],
  },
  {
    source: "gear-images/skinnery/rawhide_whip.webp",
    categories: ["skinnery", "weapon", "melee", "whip", "rawhide"],
    versions: ["all"],
  },
  //starting gear
  {
    source: "gear-images/starting-gear/cloth.webp",
    categories: ["starting-gear", "armour", "waist-armour"],
    versions: ["all"],
  },
  {
    source: "gear-images/starting-gear/founding_stone.webp",
    categories: ["starting-gear", "weapon", "melee", "stone"],
    versions: ["all"],
  },
  //stone circle
  {
    source: "gear-images/stone-circle/beast_knuckle.webp",
    categories: ["stone-circle", "weapon", "melee", "katar", "bone", "paired"],
    versions: ["all"],
  },
  {
    source: "gear-images/stone-circle/blood_paint.webp",
    categories: ["stone-circle", "item", "soluble"],
    versions: ["all"],
  },
  {
    source: "gear-images/kdm-1.5-gear/stone-circle/blue_charm.webp",
    categories: ["stone-circle", "item", "jewelery", "fragile", "blue"],
    versions: ["1.5"],
  },
  {
    source: "gear-images/stone-circle/bone_earrings.webp",
    categories: ["stone-circle", "item", "jewelery", "bone"],
    versions: ["all"],
  },
  {
    source: "gear-images/stone-circle/boss_mehndi.webp",
    categories: ["stone-circle", "item", "soluble"],
    versions: ["all"],
  },
  {
    source: "gear-images/kdm-1.6-gear/stone-circle/brain_mint.webp",
    categories: ["stone-circle", "item", "consumable", "green", "blue"],
    versions: ["1.6"],
  },
  {
    source: "gear-images/kdm-1.6-gear/stone-circle/elder_earrings.webp",
    categories: ["stone-circle", "item", "jewelery", "red", "blue", "green"],
    versions: ["1.6"],
  },
  {
    source: "gear-images/kdm-1.5-gear/stone-circle/green_charm.webp",
    categories: ["stone-circle", "item", "jewelery", "fragile", "green"],
    versions: ["1.5"],
  },
  {
    source: "gear-images/stone-circle/lance_of_longinus.webp",
    categories: ["stone-circle", "weapon", "melee", "spear", "two-handed", "bone"],
    versions: ["all"],
  },
  {
    source: "gear-images/kdm-1.5-gear/stone-circle/red_charm.webp",
    categories: ["stone-circle", "item", "jewelery", "fragile", "red"],
    versions: ["1.5"],
  },
  {
    source: "gear-images/kdm-1.5-gear/stone-circle/screaming_bracers.webp",
    categories: ["stone-circle", "armour", "set", "fur", "arm-armour", "red", "green", "screaming-armour"],
    versions: ["1.5"],
  },
  {
    source: "gear-images/kdm-1.6-gear/stone-circle/screaming_bracers.webp",
    categories: ["stone-circle", "armour", "set", "fur", "arm-armour", "red", "green", "screaming-armour"],
    versions: ["1.6"],
  },
  {
    source: "gear-images/stone-circle/screaming_coat.webp",
    categories: ["stone-circle", "armour", "set", "fur", "chest-armour", "green", "blue", "screaming-armour"],
    versions: ["all"],
  },
  {
    source: "gear-images/kdm-1.5-gear/stone-circle/screaming_horns.webp",
    categories: ["stone-circle", "armour", "set", "bone", "head-armour", "blue", "screaming-armour"],
    versions: ["1.5"],
  },
  {
    source: "gear-images/kdm-1.6-gear/stone-circle/screaming_horns.webp",
    categories: ["stone-circle", "armour", "set", "fur", "head-armour", "blue", "screaming-armour"],
    versions: ["1.6"],
  },
  {
    source: "gear-images/stone-circle/screaming_leg_warmers.webp",
    categories: ["stone-circle", "armour", "set", "fur", "leg-armour", "red", "blue", "screaming-armour"],
    versions: ["all"],
  },
  {
    source: "gear-images/kdm-1.5-gear/stone-circle/screaming_skirt.webp",
    categories: ["stone-circle", "armour", "set", "fur", "waist-armour", "green", "blue", "screaming-armour"],
    versions: ["1.5"],
  },
  {
    source: "gear-images/kdm-1.6-gear/stone-circle/screaming_skirt.webp",
    categories: ["stone-circle", "armour", "set", "fur", "waist-armour", "green", "blue", "screaming-armour"],
    versions: ["1.6"],
  },
  {
    source: "gear-images/kdm-1.6-gear/stone-circle/speed_powder.webp",
    categories: ["stone-circle", "item", "soluble", "blue"],
    versions: ["1.6"],
  },
  //weapon crafter
  {
    source: "gear-images/kdm-1.5-gear/weapon-crafter/blood_sheath.webp",
    categories: ["weapon-crafter", "item", "bone", "other"],
    versions: ["1.5"],
  },
  {
    source: "gear-images/kdm-1.5-gear/weapon-crafter/counterweighted_axe.webp",
    categories: ["weapon-crafter", "weapon", "melee", "axe", "two-handed", "red"],
    versions: ["1.5"],
  },
  {
    source: "gear-images/kdm-1.6-gear/weapon-crafter/counterweighted_axe.webp",
    categories: ["weapon-crafter", "weapon", "melee", "axe", "two-handed", "red"],
    versions: ["1.6"],
  },
  {
    source: "gear-images/kdm-1.5-gear/weapon-crafter/finger_of_god.webp",
    categories: ["weapon-crafter", "weapon", "melee", "spear", "two-handed", "red"],
    versions: ["1.5"],
  },
  {
    source: "gear-images/kdm-1.5-gear/weapon-crafter/rainbow_katana.webp",
    categories: ["weapon-crafter", "weapon", "melee", "katana", "finesse", "two-handed", "red"],
    versions: ["1.5"],
  },
  {
    source: "gear-images/kdm-1.6-gear/weapon-crafter/scrap_bone_spear.webp",
    categories: ["weapon-crafter", "weapon", "melee", "spear", "bone", "metal", "red", "green"],
    versions: ["1.6"],
  },
  {
    source: "gear-images/kdm-1.5-gear/weapon-crafter/scrap_dagger.webp",
    categories: ["weapon-crafter", "weapon", "melee", "dagger", "metal", "red"],
    versions: ["1.5"],
  },
  {
    source: "gear-images/kdm-1.6-gear/weapon-crafter/scrap_dagger.webp",
    categories: ["weapon-crafter", "weapon", "melee", "dagger", "metal", "red"],
    versions: ["1.6"],
  },
  {
    source: "gear-images/kdm-1.6-gear/weapon-crafter/scrap_lantern.webp",
    categories: ["weapon-crafter", "item", "metal", "lantern", "red", "blue"],
    versions: ["1.6"],
  },
  {
    source: "gear-images/kdm-1.6-gear/weapon-crafter/scrap_rebar.webp",
    categories: ["weapon-crafter", "item", "metal", "heavy"],
    versions: ["1.6"],
  },
  {
    source: "gear-images/kdm-1.5-gear/weapon-crafter/scrap_sword.webp",
    categories: ["weapon-crafter", "weapon", "melee", "sword", "metal", "blue"],
    versions: ["1.5"],
  },
  {
    source: "gear-images/kdm-1.6-gear/weapon-crafter/scrap_sword.webp",
    categories: ["weapon-crafter", "weapon", "melee", "sword", "metal", "blue"],
    versions: ["1.6"],
  },
  {
    source: "gear-images/weapon-crafter/skullcap_hammer.webp",
    categories: ["weapon-crafter", "weapon", "melee", "club", "bone", "green"],
    versions: ["all"],
  },
  {
    source: "gear-images/weapon-crafter/whistling_mace.webp",
    categories: ["weapon-crafter", "weapon", "melee", "club", "bone", "green"],
    versions: ["all"],
  },
  {
    source: "gear-images/weapon-crafter/zambato.webp",
    categories: ["weapon-crafter", "weapon", "melee", "grand-weapon", "two-handed", "bone", "red", "green"],
    versions: ["all"],
  },
];

export default gearArray;
