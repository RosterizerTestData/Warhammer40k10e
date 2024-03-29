window.data = window.data || {};
window.data.ASM = {
  "id": "AM",
  "link": "https://game-datacards.eu",
  "name": "Astra Militarum",
  "is_subfaction": false,
  "parent_id": "",
  "allied_factions": ["AoI", "QI"],
  "stratagems": [
    {
      "name": "REINFORCEMENTS!",
      "cost": 2,
      "type": "Strategic Ploy",
      "detachment": "Combined Regiment",
      "turn": "either",
      "phase": ["any"],
      "fluff": "The Astra Militarum can call upon a nearly\ninexhaustible supply of warriors.",
      "when": "Any phase.",
      "target": "One Regiment unit from your\narmy that was just destroyed. You can use\nthis Stratagem on that unit even though it\nwas just destroyed.",
      "effect": "Add a new unit to your army\nidentical to your destroyed unit, in\nStrategic Reserves, at its Starting Strength\nand with all of its wounds remaining.",
      "restrictions": "This Stratagem cannot\nbe used to return destroyed Character\nunits to Attached units.",
      "id": "366f4bdb-8cdb-51e7-921f-77e09ff645c4"
    },
    {
      "name": "FIELDS OF FIRE",
      "cost": 2,
      "type": "Battle Tactic",
      "detachment": "Combined Regiment",
      "turn": "your",
      "phase": ["shooting"],
      "fluff": "Astra Militarum combat doctrine utilises\nthe concentration of focused firepower to\nhammer the foe from multiple angles.",
      "when": "Your Shooting phase.",
      "target": "One Regiment or Squadron\nunit from your army that has not been\nselected to shoot this phase.",
      "effect": "After your unit has resolved its\nattacks, select one enemy unit that was\ntargeted by one or more of those attacks.\nUntil the end of the phase, each time an\nattack is made against that enemy unit\nby a Regiment or Squadron model from\nyour army, unless the attacking unit\nis Battle-shocked, improve the Armour\nPenetration characteristic of that attack\nby 1.",
      "restrictions": "",
      "id": "402bbdab-a083-5ca8-841e-d1a9f8288bb8"
    },
    {
      "name": "SUPPRESSION FIRE",
      "cost": 1,
      "type": "Strategic Ploy",
      "detachment": "Combined Regiment",
      "turn": "either",
      "phase": ["any"],
      "fluff": "Ordered to focus a rapid and repeated\nvolley of fire, soldiers are able to rattle even\nthe staunchest foe with a blizzard of shots.",
      "when": "Your Shooting phase.",
      "target": "One Astra Militarum Infantry\nunit from your army that has not been\nselected to shoot this phase, and one\nenemy unit (excluding Monsters\nand Vehicles).",
      "effect": "If your Astra Militarum unit\nscores one or more hits against that\nenemy unit this phase, until the end of\nyour opponent’s next turn, each time\na model in that enemy unit makes an\nattack, subtract 1 from the Hit roll.",
      "restrictions": "",
      "id": "4ece7225-68af-56de-bdfc-c2ad9078312e"
    },
    {
      "name": "EXPERT BOMBARDIERS",
      "cost": 1,
      "type": "Strategic Ploy",
      "detachment": "Combined Regiment",
      "turn": "your",
      "phase": ["shooting"],
      "fluff": "Skilled in coordinating their targeting with\nforward spotter elements, this regiment’s\nartillery crews are capable of devastating\nprecision shelling.",
      "when": "Start of your Shooting phase.",
      "target": "One Astra Militarum unit from\nyour army equipped with a vox-caster, and\none enemy unit that is visible to that unit.",
      "effect": "Until the end of the phase, each\ntime an Astra Militarum model from\nyour army makes an attack with an\nIndirect Fire weapon that targets that\nenemy unit, unless the attacking model is\nBattle-shocked, add 1 to the Hit roll.",
      "restrictions": "",
      "id": "2c978081-474c-547c-82a6-2a2c02608b4f"
    },
    {
      "name": "INSPIRED COMMAND",
      "cost": 1,
      "type": "Epic Deed",
      "detachment": "Combined Regiment",
      "turn": "opponents",
      "phase": ["command"],
      "fluff": "This officer is known for their strategic\nexcellence, as are those they command.\nHoned over many years, their curt,\nwell-established battle cant is wielded\nwith consummate efficiency, reinforced\nby the inspirational example they\nthemselves set.",
      "when": "Your opponent’s Command phase.",
      "target": "One Astra Militarum Officer\nunit from your army.",
      "effect": "Your Officer can issue one Order\nas if it were your Command phase.",
      "restrictions": "Your Officer cannot issue\nthat Order to a Battle-shocked unit.",
      "id": "1c0d56d9-64e1-5ad3-bd70-35f265a44b94"
    },
    {
      "name": "ARMOURED MIGHT",
      "cost": 2,
      "type": "Wargear",
      "detachment": "Combined Regiment",
      "turn": "either",
      "phase": ["any"],
      "fluff": "The tanks of the Imperial Guard are\narmoured not only in reinforced\nplas-steel, but with devout faith in the\nEmperor and utter contempt for their foes.",
      "when": "Your opponent’s Shooting phase,\njust after an enemy unit has selected\nits targets.",
      "target": "One Astra Militarum Vehicle\nunit from your army that was selected as\nthe target of one or more of the attacking\nunit’s attacks.",
      "effect": "Until the end of the phase, each\ntime an attack is allocated to your unit,\nsubtract 1 from the Damage characteristic\nof that attack",
      "restrictions": "",
      "id": "7b845432-67f3-5ff5-b52a-9ea9d885bcf8"
    }
  ],
  "enhancements": [
    {
      "name": "Death Mask of Ollanius",
      "description": "Officer model only. While the bearer’s unit is Battle-shocked, subtract 1 from the Objective Control characteristic of models in that unit, instead of changing it to 0.",
      "keywords": ["Officer"],
      "excludes": [],
      "cost": "10"
    },
    {
      "name": "Drill Commander",
      "description": "Officer model only. While the bearer is leading a unit, each time a model in that unit makes a ranged attack, if that unit Remained Stationary this turn, a Critical Hit is scored on a successful unmodified Hit roll of 5+.",
      "keywords": ["Officer"],
      "excludes": [],
      "cost": "20"
    },
    {
      "name": "Grand Strategist",
      "description": "Officer model only. In your Command phase, the bearer can issue one additional Order.",
      "keywords": ["Officer"],
      "excludes": [],
      "cost": "15"
    },
    {
      "name": "Kurov’s Aquila",
      "description": "Officer model only. Once per battle, just after your opponent has used a Stratagem, the bearer can use this Enhancement. If it does, until the end of the battle, the CP cost your opponent must pay to use that Stratagem again is increased by 1CP.",
      "keywords": ["Officer"],
      "excludes": [],
      "cost": "40"
    }
  ],
  "datasheets": [
    {
      "id": "67fe0db3-86b2-59a8-a674-7402385d616a",
      "name": "‘iron Hand’ Straken",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Catachan Jungle Fighters",
      "composition": ["1 ‘Iron Hand’ Straken – Epic Hero"],
      "loadout": "This model is equipped with: auto shotgun; plasma pistol; bionic arm with devil’s claw.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "80",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader", "Scouts 6\""],
        "faction": ["Voice of Command"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Cold Steel and Courage",
            "description": "While this model is leading a unit, melee weapons equipped by models in that unit have the [LETHAL HITS] ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Been There, Seen it, Killed it",
            "description": "Each time this model makes a melee attack, if it made a Charge move this turn, you can re-roll the Hit roll and you can re-roll the Wound roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "ORDERS",
            "description": " This Officer can issue up to 2 Orders to Regiment units.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "3",
          "sv": "3+",
          "w": "4",
          "ld": "7+",
          "oc": "1",
          "name": "‘iron Hand’ Straken",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Auto shotgun",
              "keywords": ["assault"],
              "range": "12\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Plasma pistol – standard",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Plasma pistol – supercharge",
              "keywords": ["hazardous", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Bionic arm with devil’s claw",
              "keywords": ["anti-monster 4+"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "6",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Epic Hero",
        "Imperium",
        "Grenades",
        "Officer",
        "‘Iron Hand’ Straken"
      ],
      "factions": ["Astra Militarum"],
      "leads": {
        "units": ["Catachan Jungle Fighters"],
        "extra": ""
      }
    },
    {
      "id": "60347ffe-97e9-537c-a5c7-36ec13043805",
      "name": "Aquila Lander",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Aquila Lander"],
      "loadout": "This model is equipped with: heavy bolter; armoured hull.",
      "wargear": [
        "This model’s heavy bolter can be replaced with one of the following: ◦ 1 autocannon ◦ 1 multi-laser"
      ],
      "transport": "This model has a transport capacity of 12 Astra Militarum Infantry models. Each Heavy Weapons Team model and Veteran Heavy Weapons Team model takes up the space of 2 models. Each Ogryn model takes up the space of 3 models. It cannot transport Artillery models.",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3", "Hover"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Aerial Deployment",
            "description": "If this model starts the game in Hover mode and in Strategic Reserves, it can be set up in the Reinforcements step of your first, second or third Movement phase, regardless of any mission rules.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-4 WOUNDS REMAINING",
          "description": "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "20+\"",
          "t": "9",
          "sv": "3+",
          "w": "12",
          "ld": "7+",
          "oc": "0",
          "name": "Aquila Lander",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Autocannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "9",
              "ap": "-1",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Multi-laser",
              "keywords": [],
              "range": "36\"",
              "attacks": "4",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured hull",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Fly",
        "Aircraft",
        "Imperium",
        "Transport",
        "Aquila Lander"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "85f00598-738e-5b57-b3ef-97488b3641ae",
      "name": "Arkurian Stormhammer",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Arkurian Stormhammer"],
      "loadout": "This model is equipped with: lascannon; 7 multi-lasers; Stormhammer cannon; twin battle cannon; armoured tracks.",
      "wargear": [
        "This model’s 7 multi-lasers can be replaced with one of the following: ◦ 7 heavy bolters ◦ 7 heavy flamers ◦ 7 lascannons",
        "This model can be equipped with 1 hunter-killer missile.",
        "This model can be equipped with one of the following: ◦ 1 heavy stubber ◦ 1 storm bolter"
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+2"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Rolling Fortress",
            "description": "Each time a ranged attack is allocated to an Astra Militarum model from your army, if that model is not fully visible to every model in the attacking unit because of this Arkurian Stormhammer model, that model has the Benefit of Cover against that attack.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-8 WOUNDS REMAINING",
          "description": "While this model has 1-8 wounds remaining, subtract 4 from its Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "9\"",
          "t": "13",
          "sv": "2+",
          "w": "24",
          "ld": "7+",
          "oc": "8",
          "name": "Arkurian Stormhammer",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ],
          "abilities": [
            {
              "name": "One Shot",
              "description": "The bearer can only shoot with this weapon once per battle.",
              "showAbility": true,
              "showDescription": true
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Lascannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Multi-laser",
              "keywords": [],
              "range": "36\"",
              "attacks": "4",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Storm bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Stormhammer cannon",
              "keywords": ["blast"],
              "range": "72\"",
              "attacks": "3D6",
              "skill": "4+",
              "strength": "12",
              "ap": "-2",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin battle cannon",
              "keywords": ["blast", "twin-linked"],
              "range": "48\"",
              "attacks": "D6+3",
              "skill": "4+",
              "strength": "9",
              "ap": "-1",
              "damage": "3"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "8",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Titanic",
        "Imperium",
        "Smoke",
        "Arkurian Stormhammer"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "b40857b5-4392-562d-bbd9-8f62f8cd57b2",
      "name": "Armageddon-pattern Medusa",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Armageddon-pattern Medusa"],
      "loadout": "This model is equipped with: heavy bolter; Medusa siege cannon; armoured tracks.",
      "wargear": [
        "This model’s heavy bolter can be replaced with 1 heavy flamer.",
        "This model can be equipped with 1 hunter-killer missile.",
        "This model can be equipped with one of the following: ◦ 1 storm bolter ◦ 1 heavy stubber"
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Pinning Bombardment",
            "description": "In your Shooting phase, after this model has shot, if one or more of those attacks made with its Medusa siege cannon scored a hit against an enemy Infantry unit, that unit must take a Battle-shock test.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-4 WOUNDS REMAINING",
          "description": "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "9",
          "sv": "3+",
          "w": "11",
          "ld": "7+",
          "oc": "3",
          "name": "Armageddon-pattern Medusa",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ],
          "abilities": [
            {
              "name": "One Shot",
              "description": "The bearer can only shoot with this weapon once per battle.",
              "showAbility": true,
              "showDescription": true
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Medusa siege cannon",
              "keywords": ["blast", "indirect fire"],
              "range": "36\"",
              "attacks": "D6",
              "skill": "4+",
              "strength": "12",
              "ap": "-2",
              "damage": "4"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Storm bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Artillery",
        "Imperium",
        "Squadron",
        "Smoke",
        "Armageddon-pattern Medusa"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "56eaf04a-5f63-59fc-b025-381848088631",
      "name": "Armoured Sentinels",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1-3 Armoured Sentinels"],
      "loadout": "Every model is equipped with: Militarum multi-laser; close combat weapon.",
      "wargear": [
        "Any number of models can each have their Militarum multi-laser replaced with one of the following: ◦ 1 autocannon ◦ 1 heavy flamer ◦ 1 lascannon ◦ 1 missile launcher ◦ 1 plasma cannon",
        "Any number of models can each be equipped with 1 Sentinel chainsaw.",
        "Any number of models can each be equipped with 1 hunter-killer missile."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "70",
          "active": true
        },
        {
          "models": "2",
          "cost": "140",
          "active": true
        },
        {
          "models": "3",
          "cost": "210",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Mobile Hunter-killers",
            "description": "Each time a model in this unit makes an attack that targets a Monster or Vehicle unit, you can re-roll the Wound roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "8\"",
          "t": "8",
          "sv": "2+",
          "w": "7",
          "ld": "7+",
          "oc": "2",
          "name": "Armoured Sentinels",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Autocannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "9",
              "ap": "-1",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ],
          "abilities": [
            {
              "name": "One Shot",
              "description": "The bearer can only shoot with this weapon once per battle.",
              "showAbility": true,
              "showDescription": true
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Lascannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Militarum multi-laser",
              "keywords": [],
              "range": "36\"",
              "attacks": "4",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Missile launcher – frag",
              "keywords": ["blast", "heavy"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Missile launcher – krak",
              "keywords": ["heavy"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "9",
              "ap": "-2",
              "damage": "D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Plasma cannon – standard",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "4+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Plasma cannon – supercharge",
              "keywords": ["blast", "hazardous"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "4+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Sentinel chainsaw",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Imperium",
        "Regiment",
        "Squadron",
        "Smoke",
        "Armoured Sentinels"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "2e8e442d-f866-5df3-a8d8-0623dc433a71",
      "name": "Arvus Lighter",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Arvus Lighter"],
      "loadout": "This model is equipped with: armoured hull.",
      "wargear": ["None"],
      "transport": "This model has a transport capacity of 12 Astra Militarum Infantry models. Each Heavy Weapons Team model and Veteran Heavy Weapons Team model takes up the space of 2 models. It cannot transport Ogryn or Artillery models.",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1", "Hover"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Aerial Deployment",
            "description": "If this model starts the game in Hover mode and in Strategic Reserves, it can be set up in the Reinforcements step of your first, second or third Movement phase, regardless of any mission rules.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "20+\"",
          "t": "8",
          "sv": "3+",
          "w": "8",
          "ld": "7+",
          "oc": "0",
          "name": "Arvus Lighter",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured hull",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Fly",
        "Aircraft",
        "Imperium",
        "Transport",
        "Arvus Lighter"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "3d9bbfed-6870-50dc-91e1-863c74d8696b",
      "name": "Astra Militarum Infantry Armoury",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": [],
      "loadout": "",
      "wargear": [],
      "transport": "",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Autocannon",
              "keywords": ["heavy"],
              "range": "48\"",
              "attacks": "2",
              "skill": "5+",
              "strength": "9",
              "ap": "-1",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Bolt pistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+*",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Boltgun",
              "keywords": ["rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Lascannon",
              "keywords": ["heavy"],
              "range": "48\"",
              "attacks": "1",
              "skill": "5+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Missile launcher – frag",
              "keywords": ["blast", "heavy"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "5+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Missile launcher – krak",
              "keywords": ["heavy"],
              "range": "48\"",
              "attacks": "1",
              "skill": "5+",
              "strength": "9",
              "ap": "-2",
              "damage": "D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Mortar",
              "keywords": ["blast", "heavy", "indirect fire"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "5+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Plasma pistol – standard",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+*",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Plasma pistol – supercharge",
              "keywords": ["hazardous", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+*",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [],
      "keywords": [],
      "factions": [""]
    },
    {
      "id": "859b6cc3-0206-5b04-a2d9-2b0d13c25f35",
      "name": "Atlas Recovery Vehicle",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Atlas Recovery Vehicle"],
      "loadout": "This model is equipped with: heavy bolter; armoured tracks.",
      "wargear": [
        "This model can be equipped with 1 hunter-killer missile.",
        "This model can be equipped with one of the following: ◦ 1 heavy stubber ◦ 1 storm bolter"
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Recovery Vehicle",
            "description": "At the end of your Movement phase, you can select one friendly Astra Militarum Vehicle model within 3\" of this model. That Vehicle model regains up to D3 lost wounds. Each model can only be selected for this ability once per turn.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "9",
          "sv": "3+",
          "w": "10",
          "ld": "7+",
          "oc": "3",
          "name": "Atlas Recovery Vehicle",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ],
          "abilities": [
            {
              "name": "One Shot",
              "description": "The bearer can only shoot with this weapon once per battle.",
              "showAbility": true,
              "showDescription": true
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Storm bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Imperium",
        "Squadron",
        "Smoke",
        "Atlas Recovery Vehicle"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "0e37d396-4380-5f39-b941-719f05b6a376",
      "name": "Attilan Rough Riders",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Rough Rider Sergeant", "4-9 Rough Riders"],
      "loadout": "Every model is equipped with: lasgun; laspistol; hunting lance; steed’s hooves.",
      "wargear": [
        "For every 5 models in this unit, 1 model’s hunting lance can be replaced with 1 goad lance.",
        "The Rough Rider Sergeant can be equipped with 1 power sabre."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "80",
          "active": true
        },
        {
          "models": "10",
          "cost": "160",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Horsemasters",
            "description": "You can ignore any or all modifiers to this unit’s Move characteristic and to Advance and Charge rolls made for it. In addition, this unit is eligible to shoot and declare a charge in a turn in which it Fell Back.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "12\"",
          "t": "4",
          "sv": "4+",
          "w": "2",
          "ld": "7+",
          "oc": "1",
          "name": "Attilan Rough Riders",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Lasgun",
              "keywords": ["rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Laspistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Goad lance",
              "keywords": ["lance"],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "6",
              "ap": "-2",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hunting lance – frag tip",
              "keywords": ["lance"],
              "range": "Melee",
              "attacks": "D6",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Hunting lance – melta tip",
              "keywords": ["lance"],
              "range": "Melee",
              "attacks": "1",
              "skill": "3+",
              "strength": "9",
              "ap": "-4",
              "damage": "D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Power sabre",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "4",
              "ap": "-2",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Steed’s hooves",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Imperium",
        "Grenades",
        "Regiment",
        "Attilan Rough Riders"
      ],
      "factions": ["Astra Militarum"],
      "leadBy": ["Lord Solar Leontus"]
    },
    {
      "id": "2be420d2-e4c2-5d95-aa9c-ee61903ff086",
      "name": "Avenger Strike Fighter",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Avenger Strike Fighter"],
      "loadout": "This model is equipped with: Avenger bolt cannon; heavy stubber; 2 lascannons; armoured hull.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "130",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Fiery Vengeance",
            "description": "Once per turn, in your opponent’s Shooting phase, when another friendly Astra Militarum unit within 6\" of this model is destroyed by an attack made by a unit that can Fly, one model from your army with this ability can use it. If it does, after the attacking unit has finished making its attacks, that model can shoot as if it were your Shooting phase, but when resolving those attacks it can only target that enemy unit (and only if it is an eligible target).",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-5 WOUNDS REMAINING",
          "description": "While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "20+\"",
          "t": "9",
          "sv": "3+",
          "w": "14",
          "ld": "7+",
          "oc": "0",
          "name": "Avenger Strike Fighter",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Avenger bolt cannon",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "10",
              "skill": "4+",
              "strength": "6",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Lascannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured hull",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "8",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Fly",
        "Aircraft",
        "Imperium",
        "Avenger Strike Fighter"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "3dad9e7f-e0e5-554d-ae96-4021554a8dd6",
      "name": "Baneblade",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Baneblade"],
      "loadout": "This model is equipped with: Baneblade cannon; co-axial autocannon; demolisher cannon; heavy stubber; 2 lascannons; twin heavy bolter; 2 twin heavy flamers; armoured tracks.",
      "wargear": [
        "This model’s 2 twin heavy flamers can be replaced with 2 twin heavy bolters.",
        "This model can be equipped with one of the following: ◦ 2 lascannons and 2 twin heavy bolters ◦ 2 lascannons and 2 twin heavy flamers"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "540",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+2"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Rolling Fortress",
            "description": "Each time a ranged attack is allocated to an Astra Militarum model from your army, if that model is not fully visible to every model in the attacking unit because of this Baneblade model, that model has the Benefit of Cover against that attack.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-8 WOUNDS REMAINING",
          "description": "While this model has 1-8 wounds remaining, subtract 4 from its Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "9\"",
          "t": "13",
          "sv": "2+",
          "w": "24",
          "ld": "7+",
          "oc": "8",
          "name": "Baneblade",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Baneblade cannon",
              "keywords": ["blast"],
              "range": "72\"",
              "attacks": "3D6",
              "skill": "4+",
              "strength": "12",
              "ap": "-2",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Co-axial autocannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "9",
              "ap": "-1",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Demolisher cannon",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D6+3",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Lascannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin heavy bolter",
              "keywords": ["sustained hits 1", "twin-linked"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin heavy flamer",
              "keywords": ["ignores cover", "torrent", "twin-linked"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "8",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Titanic", "Imperium", "Smoke", "Baneblade"],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "16ef8376-8491-5ebb-a8fc-47c86f38d841",
      "name": "Banehammer",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Banehammer"],
      "loadout": "This model is equipped with: 2 lascannons; tremor cannon; twin heavy bolter; 2 twin heavy flamers; armoured tracks.",
      "wargear": [
        "This model’s 2 twin heavy flamers can be replaced with 2 twin heavy bolters.",
        "This model can be equipped with one of the following: ◦ 2 lascannons and 2 twin heavy bolters ◦ 2 lascannons and 2 twin heavy flamers"
      ],
      "transport": "This model has a transport capacity of 26 Astra Militarum Infantry models. Each Heavy Weapons Team model and Veteran Heavy Weapons Team model takes up the space of 2 models. Each Ogryn model takes up the space of 3 models. It cannot transport Artillery models.",
      "points": [
        {
          "models": "1",
          "cost": "490",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+2", "Firing Deck 12"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Tremor Quake",
            "description": "In your Shooting phase, just after selecting a target for this model’s tremor cannon, the target unit and every other enemy Infantry unit within 3\" of that unit must take a Battle-shock test.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-8 WOUNDS REMAINING",
          "description": "While this model has 1-8 wounds remaining, subtract 4 from its Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "9\"",
          "t": "13",
          "sv": "2+",
          "w": "24",
          "ld": "7+",
          "oc": "8",
          "name": "Banehammer",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Lascannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Tremor cannon",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "2D6+3",
              "skill": "4+",
              "strength": "12",
              "ap": "-2",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin heavy bolter",
              "keywords": ["sustained hits 1", "twin-linked"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin heavy flamer",
              "keywords": ["ignores cover", "torrent", "twin-linked"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "8",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Titanic",
        "Imperium",
        "Transport",
        "Smoke",
        "Banehammer"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "7f1333f1-5d75-5076-a03c-dd9adbaebc1a",
      "name": "Banesword",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Banesword"],
      "loadout": "This model is equipped with: 2 lascannons; quake cannon; twin heavy bolter; 2 twin heavy flamers; armoured tracks.",
      "wargear": [
        "This model’s 2 twin heavy flamers can be replaced with 2 twin heavy bolters.",
        "This model can be equipped with one of the following: ◦ 2 lascannons and 2 twin heavy bolters ◦ 2 lascannons and 2 twin heavy flamers"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "515",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+2"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Armour Obliteration",
            "description": "Each time an attack made with this model’s quake cannon destroys an enemy model that has the Deadly Demise ability, that model’s Deadly Demise ability inflicts mortal wounds on a D6 roll of 3+ instead of on a 6.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-8 WOUNDS REMAINING",
          "description": "While this model has 1-8 wounds remaining, subtract 4 from its Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "9\"",
          "t": "13",
          "sv": "2+",
          "w": "24",
          "ld": "7+",
          "oc": "8",
          "name": "Banesword",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Lascannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Quake cannon",
              "keywords": ["blast", "ignores cover"],
              "range": "72\"",
              "attacks": "D6+6",
              "skill": "4+",
              "strength": "16",
              "ap": "-4",
              "damage": "4"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin heavy bolter",
              "keywords": ["sustained hits 1", "twin-linked"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin heavy flamer",
              "keywords": ["ignores cover", "torrent", "twin-linked"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "8",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Titanic", "Imperium", "Smoke", "Banesword"],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "12c4bcc5-8a34-512e-8c0d-c999f37fd020",
      "name": "Basilisk",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Basilisk"],
      "loadout": "This model is equipped with: earthshaker cannon; heavy bolter; armoured tracks.",
      "wargear": [
        "This model’s heavy bolter can be replaced with 1 heavy flamer.",
        "This model can be equipped with 1 hunter-killer missile."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "135",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Earthshaker Rounds",
            "description": "In your Shooting phase, after this model has shot, if one or more of those attacks made with its earthshaker cannon scored a hit against an enemy Infantry unit, until the end of your opponent’s next turn, that unit is shaken. While a unit is shaken, subtract 2\" from its Move characteristic and subtract 2 from Advance and Charge rolls made for it.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-4 WOUNDS REMAINING",
          "description": "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "9",
          "sv": "3+",
          "w": "11",
          "ld": "7+",
          "oc": "3",
          "name": "Basilisk",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Earthshaker cannon",
              "keywords": ["blast", "heavy", "indirect fire"],
              "range": "240\"",
              "attacks": "D6+3",
              "skill": "4+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ],
          "abilities": [
            {
              "name": "One Shot",
              "description": "The bearer can only shoot with this weapon once per battle.",
              "showAbility": true,
              "showDescription": true
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Artillery",
        "Imperium",
        "Squadron",
        "Smoke",
        "Basilisk"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "3133ebae-9886-5aa6-abf1-d8be2febf99b",
      "name": "Bullgryn Squad",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Bullgryn Bone ‘ead", "2-5 Bullgryns"],
      "loadout": "Every model is equipped with: grenadier gauntlet; close combat weapon; slabshield.",
      "wargear": [
        "Any number of models can each have their grenadier gauntlet replaced with 1 Bullgryn maul.",
        "Any number of models can each have their slabshield replaced with 1 brute shield."
      ],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "90",
          "active": true
        },
        {
          "models": "6",
          "cost": "180",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Brute Shield",
            "description": "The bearer has a 4+ invulnerable save.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Slabshield",
            "description": "The bearer has a Wounds characteristic of 4.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Feel No Pain 6+"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Wall of Muscle",
            "description": "Each time an attack is allocated to a model in this unit, subtract 1 from the Damage characteristic of that attack (to a minimum of 1).",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "6",
          "sv": "4+",
          "w": "3",
          "ld": "7+",
          "oc": "1",
          "name": "Bullgryn Squad",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Grenadier gauntlet",
              "keywords": ["blast"],
              "range": "18\"",
              "attacks": "D6",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Bullgryn maul",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "7",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Imperium",
        "Grenades",
        "Ogryn",
        "Bullgryn Squad"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "ca0a3af9-15a2-522a-956d-07c0948d68a2",
      "name": "Cadian Castellan",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Cadian Shock Troops ■ Infantry Squad ■ Kasrkin",
      "composition": ["1 Cadian Castellan"],
      "loadout": "This model is equipped with: laspistol; chainsword.",
      "wargear": [
        "This model’s chainsword can be replaced with one of the following: ◦ 1 boltgun ◦ 1 power fist ◦ 1 power weapon",
        "This model’s laspistol can be replaced with one of the following: ◦ 1 bolt pistol ◦ 1 plasma pistol"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "50",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Voice of Command"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Senior Officer",
            "description": "While this model is leading a unit, ranged weapons equipped by models in that unit have the [SUSTAINED HITS 1] ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Get Back in the Fight",
            "description": "While this model is leading a unit, that unit is eligible to shoot in a turn in which it Fell Back.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "ORDERS",
            "description": " This Officer can issue 1 Order to Regiment units.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "3",
          "sv": "5+",
          "w": "4",
          "ld": "7+",
          "oc": "1",
          "name": "Cadian Castellan",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Bolt pistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Boltgun",
              "keywords": ["rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Laspistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Plasma pistol – standard",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Plasma pistol – supercharge",
              "keywords": ["hazardous", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Power fist",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "6",
              "ap": "-2",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Power weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "4",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Imperium",
        "Grenades",
        "Officer",
        "Cadian",
        "Cadian Castellan"
      ],
      "factions": ["Astra Militarum"],
      "leads": {
        "units": ["Cadian Shock Troops", "Infantry Squad", "Kasrkin"],
        "extra": ""
      }
    },
    {
      "id": "d2188f5b-7080-5831-93c3-f438a73d11aa",
      "name": "Cadian Command Squad",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "This unit can be attached to the following unit: ■ Cadian Shock Troops",
      "composition": ["1 Cadian Commander", "4 Cadian Veteran Guardsmen"],
      "loadout": "The Cadian Commander is equipped with: laspistol; chainsword. 1 Cadian Veteran Guardsman is equipped with: las pistol; chainsword. 1 other Cadian Veteran Guardsman is equipped with: lasgun; master vox; close combat weapon. 1 other Cadian Veteran Guardsman is equipped with: lasgun; medi-pack; close combat weapon. 1 other Cadian Veteran Guardsman is equipped with: lasgun; regimental standard; close combat weapon.",
      "wargear": [
        "1 Cadian Veteran Guardsman’s lasgun and regimental standard can be replaced with one of the following: ◦ 1 flamer ◦ 1 grenade launcher  ◦ 1 meltagun ◦ 1 plasma gun",
        "1 Cadian Veteran Guardsman’s chainsword can be replaced with one of the following:  ◦ 1 flamer  ◦ 1 grenade launcher  ◦ 1 meltagun ◦ 1 plasma gun  ◦ 1 power fist ◦ 1 power weapon",
        "1 Cadian Veteran Guardsman’s laspistol can be replaced with one of the following:* ◦ 1 bolt pistol ◦ 1 plasma pistol",
        "The Cadian Commander’s laspistol can be replaced with one of the following:* ◦ 1 bolt pistol ◦ 1 plasma pistol",
        "The Cadian Commander’s chainsword can be  replaced with one of the following:  ◦ 1 power fist ◦ 1 power weapon  *  The profiles of these weapons can be found on the Astra Militarum Infantry Armoury card."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "65",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Master Vox",
            "description": "Each time the Officer in the bearer’s unit issues an Order, it can issue it to an eligible unit up to 24\" away.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Medi-pack",
            "description": "The bearer’s unit has the Feel No Pain 6+ ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Regimental Standard",
            "description": "Add 1 to the Objective Control characteristic of models in the bearer’s unit. ORDERS This unit’s Officer can issue 1 Order to a Regiment unit.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Leader"],
        "faction": ["Voice of Command"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Cadia Stands!",
            "description": "While this unit contains a Cadian Officer, you can ignore any or all modifiers to the characteristics of models in this unit and to any roll or test made for models in this unit (excluding modifiers to saving throws).",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "ORDERS",
            "description": " This unit’s Officer can issue 1 Order to a Regiment unit.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "3",
          "sv": "5+",
          "w": "3",
          "ld": "7+",
          "oc": "1",
          "name": "CADIAN COMMANDER",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "6\"",
          "t": "3",
          "sv": "5+",
          "w": "1",
          "ld": "7+",
          "oc": "1",
          "name": "VETERAN GUARDSMAN",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Grenade launcher – frag",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Grenade launcher – krak",
              "keywords": [],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "9",
              "ap": "-2",
              "damage": "D3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Lasgun",
              "keywords": ["rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Laspistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Meltagun",
              "keywords": ["melta 2"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "9",
              "ap": "-4",
              "damage": "D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Plasma gun – standard",
              "keywords": ["rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Plasma gun – supercharge",
              "keywords": ["hazardous", "rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Power fist",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "-2",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Power weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Command Squad",
        "CADIAN COMMANDER:",
        "Character",
        "Officer"
      ],
      "factions": ["Astra Militarum"],
      "leads": {
        "units": ["Cadian Shock Troops"],
        "extra": ""
      }
    },
    {
      "id": "f19c1e48-ee95-5516-9bd6-bf7be6f57024",
      "name": "Cadian Shock Troops",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "This unit can have up to two Leader units attached to it, provided no more than one of those units is a Command Squad unit. If it does, and this Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": [
        "1 Shock Trooper Sergeant and 9 Shock Troopers OR",
        "2 Shock Trooper Sergeants and 18 Shock Troopers"
      ],
      "loadout": "Every Shock Trooper Sergeant is equipped with: laspistol; chainsword. Every Shock Trooper is equipped with: lasgun; close combat weapon.",
      "wargear": [
        "For every 10 models in this unit, up to 2 Shock Troopers can each have their lasgun replaced with one of the following:* ◦ 1 flamer ◦ 1 grenade launcher ◦ 1 meltagun ◦ 1 plasma gun",
        "For every 10 models in this unit, 1 Shock Trooper equipped with a lasgun can be equipped with 1 vox-caster (that model’s lasgun cannot be replaced).",
        "Any number of Shock Trooper Sergeants can each have their laspistol replaced with 1 bolt pistol.",
        "Any number of Shock Trooper Sergeants can each have their laspistol and chainsword replaced with 1 drum-fed autogun and 1 close combat weapon. *  You cannot select the same weapon more than once per unit unless it contains 20 models, in which case you cannot select the same weapon more than twice per unit."
      ],
      "transport": "",
      "points": [
        {
          "models": "10",
          "cost": "65",
          "active": true
        },
        {
          "models": "20",
          "cost": "130",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Vox-caster",
            "description": "Each time you target the bearer’s unit with a Stratagem, roll one D6, adding 1 to the result if there are one or more friendly Officer models within 6\": on a 5+, you gain 1CP.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": [],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Shock Troops",
            "description": "At the end of your Command phase, if this unit is within range of an objective marker you control, that objective marker remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of any turn.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "3",
          "sv": "5+",
          "w": "1",
          "ld": "7+",
          "oc": "2",
          "name": "Cadian Shock Troops",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Bolt pistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Drum-fed autogun",
              "keywords": [],
              "range": "24\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Grenade launcher – frag",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Grenade launcher – krak",
              "keywords": [],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "9",
              "ap": "-2",
              "damage": "D3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Lasgun",
              "keywords": ["rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Laspistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Meltagun",
              "keywords": ["melta 2"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "9",
              "ap": "-4",
              "damage": "D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Plasma gun – standard",
              "keywords": ["rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Plasma gun – supercharge",
              "keywords": ["hazardous", "rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "1",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Battleline",
        "Imperium",
        "Grenades",
        "Regiment",
        "Platoon",
        "Cadian",
        "Cadian Shock Troops"
      ],
      "factions": ["Astra Militarum"],
      "leadBy": [
        "Cadian Castellan",
        "Cadian Command Squad",
        "Commissar",
        "Lord Solar Leontus",
        "Primaris Psyker",
        "Regimental Enginseer",
        "Regimental Preacher",
        "Ursula Creed"
      ],
      "leads": {
        "units": [
          "This unit can have up to two Leader units attached to it, provided no more than one of those units is a Command Squad unit. If it does, and this Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths."
        ],
        "extra": ""
      }
    },
    {
      "id": "6469b4b2-c04f-5b12-ad65-deb78d406756",
      "name": "Carnodon",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Carnodon"],
      "loadout": "This model is equipped with: 2 autocannons; Carnodon twin autocannon; armoured tracks.",
      "wargear": [
        "This model’s Carnodon twin autocannon can be replaced with one of the following: ◦ 1 Carnodon twin lascannon ◦ 1 Carnodon twin multi-laser ◦  1 volkite culverin",
        "This model’s 2 autocannons can be replaced with one of the following: ◦ 2 heavy bolters ◦ 2 heavy flamers ◦ 2 lascannons ◦ 2 Militarum multi-lasers ◦ 2 volkite calivers",
        "This model can be equipped with 1 hunter-killer missile."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "160",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Ancient Conquest",
            "description": "Each time this model makes an attack that targets an enemy unit that is within your opponent’s deployment zone, re-roll a Hit roll of 1 and re-roll a Wound roll of 1.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-4 WOUNDS REMAINING",
          "description": "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "12\"",
          "t": "10",
          "sv": "2+",
          "w": "12",
          "ld": "7+",
          "oc": "3",
          "name": "Carnodon",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Autocannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "9",
              "ap": "-1",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Carnodon twin autocannon",
              "keywords": ["twin-linked"],
              "range": "48\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "9",
              "ap": "-1",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Carnodon twin lascannon",
              "keywords": ["twin-linked"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Carnodon twin multi-laser",
              "keywords": ["twin-linked"],
              "range": "36\"",
              "attacks": "6",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ],
          "abilities": [
            {
              "name": "One Shot",
              "description": "The bearer can only shoot with this weapon once per battle.",
              "showAbility": true,
              "showDescription": true
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Lascannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Militarum Multi-laser",
              "keywords": [],
              "range": "36\"",
              "attacks": "4",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Volkite caliver",
              "keywords": ["devastating wounds"],
              "range": "24\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "5",
              "ap": "0",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Volkite culverin",
              "keywords": ["devastating wounds"],
              "range": "36\"",
              "attacks": "4",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "7",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Imperium", "Squadron", "Smoke", "Carnodon"],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "71600359-698a-51e6-aee4-dad676bc7827",
      "name": "Catachan Jungle Fighters",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "This unit can have up to two Leader units attached to it, provided no more than one of those units is a Command Squad unit. If it does, and this Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": [
        "1 Jungle Fighter Sergeant and 9 Jungle Fighters OR",
        "2 Jungle Fighter Sergeants and 18 Jungle Fighters"
      ],
      "loadout": "Every Jungle Fighter Sergeant is equipped with: laspistol; close combat weapon. Every Jungle Fighter is equipped with: lasgun; close combat weapon.",
      "wargear": [
        "For every 5 models in this unit, 1 Jungle Fighter’s lasgun can be replaced with 1 flamer.",
        "For every 10 models in this unit, 1 Jungle Fighter equipped with a lasgun can be equipped with 1 vox-caster (that model’s lasgun cannot be replaced)."
      ],
      "transport": "",
      "points": [
        {
          "models": "10",
          "cost": "65",
          "active": true
        },
        {
          "models": "20",
          "cost": "130",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Vox-caster",
            "description": "Each time you target the bearer’s unit with a Stratagem, roll one D6, adding 1 to the result if there are one or more friendly Officer models within 6\": on a 5+, you gain 1CP.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Scouts 6\""],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Jungle Fighters",
            "description": "Each time a model in this unit makes a melee attack, if this unit made a Charge move or was charged this turn, improve the Strength and Armour Penetration characteristics of that attack by 1.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "3",
          "sv": "5+",
          "w": "1",
          "ld": "7+",
          "oc": "2",
          "name": "Catachan Jungle Fighters",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Lasgun",
              "keywords": ["rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Laspistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "1",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Battleline",
        "Imperium",
        "Regiment",
        "Grenades",
        "Platoon",
        "Catachan Jungle Fighters"
      ],
      "factions": ["Astra Militarum"],
      "leadBy": [
        "‘iron Hand’ Straken",
        "Commissar",
        "Lord Solar Leontus",
        "Platoon Command Squad",
        "Primaris Psyker",
        "Regimental Enginseer",
        "Regimental Preacher",
        "Sergeant Harker"
      ],
      "leads": {
        "units": [
          "This unit can have up to two Leader units attached to it, provided no more than one of those units is a Command Squad unit. If it does, and this Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths."
        ],
        "extra": ""
      }
    },
    {
      "id": "4764d6c3-991d-5919-bb3a-6d778fbda5a4",
      "name": "Centaur Light Carrier",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Centaur Light Carrier"],
      "loadout": "This model is equipped with: 2 heavy stubbers; armoured tracks.",
      "wargear": ["This model can be equipped with 1 hunter-killer missile."],
      "transport": "This model has a transport capacity of 6 Astra Militarum Infantry models. Each Heavy Weapons Team model and Veteran Heavy Weapons Team model takes up the space of 2 models. It cannot transport Ogryn or Artillery models.",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Blistering Advance",
            "description": "Units can disembark from this Transport after it has Advanced. Units that do so count as having made a Normal move that phase, and cannot declare a charge in the same turn, but can otherwise act normally in the remainder of the turn.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "7",
          "sv": "3+",
          "w": "7",
          "ld": "7+",
          "oc": "1",
          "name": "Centaur Light Carrier",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ],
          "abilities": [
            {
              "name": "One Shot",
              "description": "The bearer can only shoot with this weapon once per battle.",
              "showAbility": true,
              "showDescription": true
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Imperium",
        "Squadron",
        "Transport",
        "Smoke",
        "Centaur Light Carrier"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "24e3a4cd-a808-51f7-90ad-342da891568b",
      "name": "Chimera",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Chimera"],
      "loadout": "This model is equipped with: Chimera multi-laser; heavy bolter; lasgun array; armoured tracks.",
      "wargear": [
        "This model’s heavy bolter can be replaced with 1 heavy flamer.",
        "This model’s Chimera multi-laser can be replaced with one of the following: ◦ 1 Chimera heavy bolter ◦ 1 Chimera heavy flamer",
        "This model can be equipped with one of the following: ◦ 1 heavy stubber ◦ 1 storm bolter",
        "This model can be equipped with 1 hunter-killer missile."
      ],
      "transport": "This model has a transport capacity of 12 Astra Militarum Infantry models. Each Heavy Weapons Team model and Veteran Heavy Weapons Team model takes up the space of 2 models. Each Ogryn model takes up the space of 3 models. It cannot transport Artillery models.",
      "points": [
        {
          "models": "1",
          "cost": "85",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3", "Firing Deck 2"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Mobile Command Vehicle",
            "description": "In your Command phase, one Officer model embarked within this Transport can issue Orders even though it is not on the battlefield. When doing so, measure distances to and from this Transport.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "9",
          "sv": "3+",
          "w": "11",
          "ld": "7+",
          "oc": "2",
          "name": "Chimera",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Chimera heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Chimera heavy flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Chimera multi-laser",
              "keywords": [],
              "range": "36\"",
              "attacks": "4",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ],
          "abilities": [
            {
              "name": "One Shot",
              "description": "The bearer can only shoot with this weapon once per battle.",
              "showAbility": true,
              "showDescription": true
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Lasgun array",
              "keywords": ["rapid fire 6"],
              "range": "24\"",
              "attacks": "6",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Storm bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Imperium",
        "Squadron",
        "Transport",
        "Dedicated Transport",
        "Smoke",
        "Chimera"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "05398a15-528b-5d13-b16b-b2e44fb07bfd",
      "name": "Colossus",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Colossus"],
      "loadout": "This model is equipped with: Colossus siege mortar; armoured tracks.",
      "wargear": [
        "This model can be equipped with 1 hunter-killer missile.",
        "This model can be equipped with one of the following: ◦ 1 heavy stubber ◦ 1 storm bolter"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "160",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Tracking Target",
            "description": "Each time this model is selected to shoot, provided it Remained Stationary this turn, its Colossus siege mortar has the [ANTI-MONSTER 5+] and [ANTI-VEHICLE 5+] abilities while resolving those attacks.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-4 WOUNDS REMAINING",
          "description": "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "10",
          "sv": "2+",
          "w": "11",
          "ld": "7+",
          "oc": "3",
          "name": "Colossus",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Colossus siege mortar",
              "keywords": ["blast", "devastating wounds"],
              "range": "120\"",
              "attacks": "D6",
              "skill": "4+",
              "strength": "6",
              "ap": "-1",
              "damage": "D6+2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ],
          "abilities": [
            {
              "name": "One Shot",
              "description": "The bearer can only shoot with this weapon once per battle.",
              "showAbility": true,
              "showDescription": true
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Storm bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "7",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Imperium", "Squadron", "Smoke", "Colossus"],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "55268629-29e8-5fee-8342-e54c8a6df337",
      "name": "Commissar",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Cadian Shock Troops ■ Catachan Jungle Fighters ■ Death Korps of Krieg ■ Infantry Squad ■ Kasrkin ■ Tempestus Scions",
      "composition": ["1 Commissar"],
      "loadout": "This model is equipped with: bolt pistol; chainsword.",
      "wargear": [
        "This model’s bolt pistol can be replaced with 1 plasma pistol.",
        "This model’s chainsword can be replaced with 1 power weapon."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "35",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Voice of Command"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Summary Execution",
            "description": "Once per battle round, at the start of any phase, you can select one friendly Astra Militarum Infantry unit that is Battle-shocked and within 12\" of this model. If you do, one model in that unit is destroyed, and that unit is then no longer Battle-shocked.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Political Overwatch",
            "description": "While another Officer model is in the same unit as this model, you can re-roll Battle-shock tests taken for that unit.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "ORDERS",
            "description": " This Officer can issue 1 Order to a Regiment unit. This Officer can only issue the Duty and Honour! and Fix Bayonets! Orders.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "3",
          "sv": "5+",
          "w": "3",
          "ld": "6+",
          "oc": "1",
          "name": "Commissar",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Bolt pistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Plasma pistol – standard",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Plasma pistol – supercharge",
              "keywords": ["hazardous", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Power weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "4",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Imperium", "Officer", "Commissar"],
      "factions": ["Astra Militarum"],
      "leads": {
        "units": [
          "Cadian Shock Troops",
          "Catachan Jungle Fighters",
          "Death Korps of Krieg",
          "Infantry Squad",
          "Kasrkin",
          "Tempestus Scions"
        ],
        "extra": ""
      }
    },
    {
      "id": "04b01f35-3155-5eeb-a203-97fdc4d50c63",
      "name": "Crassus",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Crassus"],
      "loadout": "This model is equipped with: 4 heavy bolters; armoured tracks.",
      "wargear": [
        "This model can be equipped with one of the following: ◦ 1 heavy stubber ◦ 1 storm bolter"
      ],
      "transport": "This model has a transport capacity of 35 Astra Militarum Infantry models. Each Heavy Weapons Team model and Veteran Heavy Weapons Team model takes up the space of 2 models. Each Ogryn model takes up the space of 3 models. It cannot transport Artillery models.",
      "points": [
        {
          "models": "1",
          "cost": "180",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Fire Support",
            "description": "In your Shooting phase, after this model has shot, select one enemy unit that was hit by one or more of those attacks. Until the end of the phase, each time a friendly model that disembarked from this Transport this turn makes an attack that targets that enemy unit, you can re-roll the Wound roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-6 WOUNDS REMAINING",
          "description": "While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "11",
          "sv": "2+",
          "w": "18",
          "ld": "7+",
          "oc": "5",
          "name": "Crassus",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Storm bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "7",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Imperium",
        "Squadron",
        "Transport",
        "Smoke",
        "Crassus"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "cf709a8d-a7dd-54f5-b4a6-c6e7e3a8599a",
      "name": "Cyclops Demolition Vehicle",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Cyclops Demolition Vehicle"],
      "loadout": "This model is equipped with: nothing.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "25",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Demolition Charges",
            "description": "Each time this model or an enemy unit ends a move, if this model is within 3\" of one or more enemy units, select one of those enemy units. This model is destroyed, but instead of rolling for its Deadly Demise ability, roll one D6: on a 2-5, that enemy unit suffers D3 mortal wounds; on a 6, that enemy unit suffers D6 mortal wounds.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Unstable Payload",
            "description": "When rolling for this model’s Deadly Demise ability, units within 6\" suffer mortal wounds on a 4+, instead of on a 6.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "COMPACT",
            "description": "This model can embark within an Astra Militarum Transport model as if it were an Infantry model. If it does, it takes up the space of 7 models.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "8\"",
          "t": "4",
          "sv": "3+",
          "w": "4",
          "ld": "8+",
          "oc": "0",
          "name": "Cyclops Demolition Vehicle",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [],
      "meleeWeapons": [],
      "keywords": ["Vehicle", "Cyclops Demolition Vehicle"],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "4428c71c-01a8-5e44-bfdf-223af4641a58",
      "name": "Death Korps Grenadier Squad",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": [
        "One of the following:",
        "1 Grenadier Sergeant and 9 Grenadiers",
        "1 Grenadier Sergeant, 7 Grenadiers and 1 Heavy Weapons Team"
      ],
      "loadout": "T  he Grenadier Sergeant is equipped with: sergeant's pistol; sergeant's close combat weapon. E  very Grenadier model is equipped with: hot-shot lasgun; close combat weapon. The Heavy Weapons Team is equipped with: heavy flamer; close combat weapon. GRENADIER SQUAD If a model from your army with the Leader ability can be attached to a Death Korps of Krieg unit, it can be attached to this unit instead.",
      "wargear": [
        "Up to 2 Grenadier models can each have their hot-shot lasgun replaced with one of the following: ◦ 1 flamer ◦ 1 grenade launcher ◦ 1 heavy stubber ◦ 1 meltagun ◦ 1 plasma gun ◦ 1 sniper rifle"
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [
          {
            "name": "Vox-caster",
            "description": "Each time you target the bearer’s unit with a Stratagem, roll one D6, adding 1 to the result if there are one or more friendly Officer models within 6\": on a 5+, you gain 1CP.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": [],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Primed and Ready",
            "description": "In your Shooting phase, you can select one unit from your army with this ability as the target of the Grenade Stratagem for 0CP, provided that unit has not already been the target of that Stratagem this phase. This can allow you to use the Grenade Stratagem for a second time this phase.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "3",
          "sv": "4+",
          "w": "1",
          "ld": "7+",
          "oc": "2",
          "name": "HEAVY WEAPONS TEAM",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "6\"",
          "t": "3",
          "sv": "4+",
          "w": "2",
          "ld": "7+",
          "oc": "1",
          "name": "OTHER MODELS",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Grenade launcher – frag",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D3",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Grenade launcher – krak",
              "keywords": [],
              "range": "24\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "9",
              "ap": "-2",
              "damage": "D3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy stubber",
              "keywords": ["heavy", "rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hot-shot lasgun",
              "keywords": ["rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "3",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Meltagun",
              "keywords": ["melta 2"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "9",
              "ap": "-4",
              "damage": "D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Plasma gun – standard",
              "keywords": ["rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Plasma gun – supercharge",
              "keywords": ["hazardous", "rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Sergeant’s pistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "3",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Sniper rifle",
              "keywords": ["heavy", "precision"],
              "range": "36\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "4",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "1",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Sergeant’s close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "4",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Imperium",
        "Grenades",
        "Regiment",
        "Platoon",
        "Death Korps Grenadier Squad"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "6f200e1e-d78d-5ebb-b4a9-0b35c11a2403",
      "name": "Death Korps Marshal",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Death Korps of Krieg ■ Infantry Squad",
      "composition": ["1 Death Korps Marshal"],
      "loadout": "This model is equipped with: laspistol; power sword.",
      "wargear": [
        "This model’s laspistol can be replaced with one of the following: ◦ 1 bolt pistol ◦  1 plasma pistol"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "60",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Feel No Pain 5+", "Leader"],
        "faction": ["Voice of Command"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Martial Dedication",
            "description": "While this model is leading a unit, models in that unit have the Feel No Pain 5+ ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Cult of Sacrifice",
            "description": "Once per battle, you can target this model’s unit with the Insane Bravery Stratagem for 0CP, and can do so even if you have already targeted a different unit with that Stratagem this phase. This cannot allow you to use the Insane Bravery Stratagem more than twice per phase.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "ORDERS",
            "description": " This Officer can issue 1 Order to Regiment units.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "3",
          "sv": "5+",
          "w": "4",
          "ld": "7+",
          "oc": "1",
          "name": "Death Korps Marshal",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Bolt pistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Laspistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Plasma pistol – standard",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Plasma pistol – supercharge",
              "keywords": ["hazardous", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Power weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "4",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Imperium",
        "Grenades",
        "Officer",
        "Death Korps Marshal"
      ],
      "factions": ["Astra Militarum"],
      "leads": {
        "units": ["Death Korps of Krieg", "Infantry Squad"],
        "extra": ""
      }
    },
    {
      "id": "75399a95-5436-5eee-ba91-8172529e66b3",
      "name": "Death Korps Of Krieg",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "This unit can have up to two Leader units attached to it, provided no more than one of those units is a Command Squad unit. If it does, and this Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": [
        "1 Death Korps Watchmaster and 9 Death Korps Troopers OR",
        "2 Death Korps Watchmasters and 18 Death Korps Troopers"
      ],
      "loadout": "Every Death Korps Watchmaster is equipped with: laspistol; chainsword. Every Death Korps Trooper is equipped with: lasgun; close combat weapon.",
      "wargear": [
        "For every 10 models in this unit, up to 2 Death Korps Troopers can each have their lasgun replaced with one of the following:* ◦ 1 flamer ◦ 1 grenade launcher ◦ 1 meltagun ◦ 1 sniper rifle",
        "For every 10 models in this unit, 1 Death Korps Trooper’s lasgun can be replaced with one of the following:  ◦  1 lasgun and 1 vox-caster (that model’s  lasgun cannot be replaced) ◦ 1 plasma gun",
        "Any number of Death Korps Watchmasters can replace their chainsword with 1 power weapon.",
        "Any number of Death Korps Watchmasters can each have their laspistol replaced with one of the following:** ◦ 1 bolt pistol ◦ 1 boltgun ◦ 1 plasma pistol",
        "1 Death Korps Trooper equipped with a lasgun can be equipped with 1 Death Korps medi-pack (that model’s lasgun cannot be replaced).  *  You cannot select the same weapon more than once per unit unless it contains 20 models, in which case you cannot select the same weapon more than twice per unit.  **  The profiles of these weapons can be found on the Astra Militarum Infantry Armoury card."
      ],
      "transport": "",
      "points": [
        {
          "models": "10",
          "cost": "65",
          "active": true
        },
        {
          "models": "20",
          "cost": "130",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Vox-caster",
            "description": "Each time you target the bearer’s unit with a Stratagem, roll one D6, adding 1 to the result if there are one or more friendly Officer models within 6\": on a 5+, you gain 1CP.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Death Korps Medi-pack",
            "description": "At the start of your Command phase, if the bearer’s unit is below its Starting Strength, you can return up to D3 destroyed Death Korps Troopers to this unit.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": [],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Grim Demeanour",
            "description": "Each time a model in this unit makes an attack, add 1 to the Hit roll if this unit is below its Starting Strength, and add 1 to the Wound roll as well if this unit is Below Half-strength.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "3",
          "sv": "5+",
          "w": "1",
          "ld": "7+",
          "oc": "2",
          "name": "Death Korps Of Krieg",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Grenade launcher – frag",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Grenade launcher – krak",
              "keywords": [],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "9",
              "ap": "-2",
              "damage": "D3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Lasgun",
              "keywords": ["rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Laspistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Meltagun",
              "keywords": ["melta 2"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "9",
              "ap": "-4",
              "damage": "D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Plasma gun – standard",
              "keywords": ["rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Plasma gun – supercharge",
              "keywords": ["hazardous", "rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Sniper rifle",
              "keywords": ["heavy", "precision"],
              "range": "36\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "4",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "1",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Power weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "4",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Battleline",
        "Imperium",
        "Grenades",
        "Regiment",
        "Platoon",
        "Death Korps of Krieg"
      ],
      "factions": ["Astra Militarum"],
      "leadBy": [
        "Commissar",
        "Death Korps Marshal",
        "Lord Solar Leontus",
        "Platoon Command Squad",
        "Primaris Psyker",
        "Quartermaster Cadre Squad",
        "Regimental Enginseer",
        "Regimental Preacher"
      ],
      "leads": {
        "units": [
          "This unit can have up to two Leader units attached to it, provided no more than one of those units is a Command Squad unit. If it does, and this Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths."
        ],
        "extra": ""
      }
    },
    {
      "id": "9cf73c75-1289-54c3-a78d-0dd62cb081ec",
      "name": "Death Rider Commissar",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Death Rider Squadron You can attach this model to the above unit even if one Death Rider Squadron Commander model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": ["1 Death Rider Commissar"],
      "loadout": "This model is equipped with: Commissar's pistol; Commissar's close combat weapon; savage claws.",
      "wargear": ["None"],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Voice of Command"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Summary Execution",
            "description": "Once per battle round, at the start of any phase, you can select one friendly Astra Militarum Infantry or Astra Militarum Mounted unit that is Battle-shocked and within 12\" of this model. If you do, one model in that unit is destroyed, and that unit is then no longer Battle-shocked.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Political Overwatch",
            "description": "While another Officer model is in the same unit as this model, you can re-roll Battle-shock tests taken for that unit.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "ORDERS",
            "description": " This Officer can issue 1 Order to a Regiment unit. This Officer can only issue the Duty and Honour! and Fix Bayonets! Orders.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "12\"",
          "t": "4",
          "sv": "4+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Death Rider Commissar",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Commissar’s pistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "3",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Commissar’s close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "4",
              "ap": "-2",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Savage claws",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Character",
        "Imperium",
        "Grenades",
        "Officer",
        "Death Rider Commissar"
      ],
      "factions": ["Astra Militarum"],
      "leads": {
        "units": ["Death Rider Squadron"],
        "extra": "You can attach this model to the above unit even if one Death Rider Squadron Commander model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths."
      }
    },
    {
      "id": "2f72b922-8d03-5307-be9a-a370400d2290",
      "name": "Death Rider Squadron",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Ridemaster", "4-9 Death Riders"],
      "loadout": "Every model is equipped with: laspistol; Death Rider hunting lance; savage claws.",
      "wargear": [
        "The Ridemaster’s laspistol can be replaced with one of the following: ◦ 1 bolt pistol ◦  1 plasma pistol"
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "70",
          "active": true
        },
        {
          "models": "10",
          "cost": "140",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Screening Line",
            "description": "Once per turn, when an enemy unit ends a Normal, Advance or Fall Back move within 9\" of this unit, if this unit is not within Engagement Range of one or more enemy units, it can make a Normal move of up to 6\".",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "12\"",
          "t": "4",
          "sv": "4+",
          "w": "2",
          "ld": "7+",
          "oc": "1",
          "name": "Death Rider Squadron",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Bolt pistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Laspistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Plasma pistol – standard",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Plasma pistol – supercharge",
              "keywords": ["hazardous", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Death Rider hunting lance",
              "keywords": ["lance"],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Savage claws",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Imperium",
        "Grenades",
        "Regiment",
        "Death Rider Squadron"
      ],
      "factions": ["Astra Militarum"],
      "leadBy": ["Death Rider Commissar", "Death Rider Squadron Commander"]
    },
    {
      "id": "72a75b1e-af61-5b29-8ea3-080a837ccbad",
      "name": "Death Rider Squadron Commander",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Death Rider Squadron",
      "composition": ["1 Death Rider Squadron Commander"],
      "loadout": "This model is equipped with: laspistol; Death Rider hunting lance; savage claws.",
      "wargear": [
        "This model’s laspistol can be replaced with one of the following: ◦ 1 bolt pistol ◦ 1 plasma pistol"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "60",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Voice of Command"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Rapid Reconnaissance",
            "description": "While this model is leading a unit, models in that unit have the Infiltrators ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Glorious Charge",
            "description": "Each time this model makes a Charge move, until the end of the turn, its Death Rider hunting lance has the [DEVASTATING WOUNDS] ability.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "ORDERS",
            "description": " This Officer can issue 1 Order to Regiment units.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "12\"",
          "t": "4",
          "sv": "4+",
          "w": "5",
          "ld": "7+",
          "oc": "1",
          "name": "Death Rider Squadron Commander",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Bolt pistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Laspistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Plasma pistol – standard",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Plasma pistol – supercharge",
              "keywords": ["hazardous", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Death Rider hunting lance",
              "keywords": ["lance"],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Savage claws",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Character",
        "Imperium",
        "Grenades",
        "Officer",
        "Death Rider Squadron Commander"
      ],
      "factions": ["Astra Militarum"],
      "leads": {
        "units": ["Death Rider Squadron"],
        "extra": ""
      }
    },
    {
      "id": "afa5ded6-303a-5c0e-be6d-4e05d71849c1",
      "name": "Deathstrike",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Deathstrike"],
      "loadout": "This model is equipped with: heavy bolter; Deathstrike missile; armoured tracks.",
      "wargear": [
        "This model’s heavy bolter can be replaced with 1 heavy flamer.",
        "This model can be equipped with 1 hunter-killer missile."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "160",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Deathstrike Missile",
            "description": "In your Shooting phase, each time this model is selected to shoot, if it has not shot with its Deathstrike missile this battle, you can do one of the following in addition to resolving this model’s ranged attacks: ■  Designate Target: If this model does not have a Deathstrike Target marker on the battlefield, place a Deathstrike Target marker for this model anywhere on the battlefield. ■  Adjust Target: If this model has a Deathstrike Target marker on the battlefield, move that marker to anywhere else on the battlefield.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-4 WOUNDS REMAINING",
          "description": "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "10",
          "sv": "3+",
          "w": "11",
          "ld": "7+",
          "oc": "3",
          "name": "Deathstrike",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Deathstrike missile",
              "keywords": ["blast", "one shot", "plasma warhead"],
              "range": "N/A",
              "attacks": "2D6",
              "skill": "2+",
              "strength": "16",
              "ap": "-4",
              "damage": "1"
            }
          ],
          "abilities": [
            {
              "name": "Plasma Warhead",
              "description": "The bearer can only shoot with this weapon in your Shooting phase, and only if it  this model is selected to shoot, if it has not shot with its Remained Stationary this turn and you did not use its Deathstrike Missile ability to Designate Target",
              "showAbility": true,
              "showDescription": true
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ],
          "abilities": [
            {
              "name": "One Shot",
              "description": "The bearer can only shoot with this weapon once per battle.",
              "showAbility": true,
              "showDescription": true
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Artillery",
        "Imperium",
        "Squadron",
        "Smoke",
        "Deathstrike"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "3e351036-5e1d-527a-8adb-f5649268e06c",
      "name": "Dominus Armoured Siege Bombard",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Dominus Armoured Siege Bombard"],
      "loadout": "This model is equipped with: Dominus triple bombard; 2 heavy bolters; armoured tracks.",
      "wargear": [
        "This model’s 2 heavy bolters can be replaced with one of the following: ◦ 2 autocannons ◦ 2 heavy flamers ◦ 2 lascannons",
        "This model can be equipped with 1 hunter-killer missile.",
        "This model can be equipped with one of the following: ◦ 1 heavy stubber ◦ 1 storm bolter"
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+2"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Pinning Bombardment",
            "description": "In your Shooting phase, after this model has shot, if one or more of those attacks made with its Dominus triple bombard scored a hit against an enemy Infantry unit, that unit must take a Battle-shock test.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-7 WOUNDS REMAINING",
          "description": "While this model has 1-7 wounds remaining, subtract 4 from its Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "9\"",
          "t": "13",
          "sv": "2+",
          "w": "20",
          "ld": "7+",
          "oc": "8",
          "name": "Dominus Armoured Siege Bombard",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Autocannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "9",
              "ap": "-1",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Dominus triple bombard",
              "keywords": ["blast", "indirect fire"],
              "range": "48\"",
              "attacks": "2D6",
              "skill": "4+",
              "strength": "12",
              "ap": "-2",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ],
          "abilities": [
            {
              "name": "One Shot",
              "description": "The bearer can only shoot with this weapon once per battle.",
              "showAbility": true,
              "showDescription": true
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Lascannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Storm bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Titanic",
        "Imperium",
        "Smoke",
        "Dominus Armoured Siege Bombard"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "8eb847f9-373a-5adb-966e-d8a58675b9df",
      "name": "Doomhammer",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Doomhammer"],
      "loadout": "This model is equipped with: 2 lascannons; magma cannon; twin heavy bolter; 2 twin heavy flamers; armoured tracks.",
      "wargear": [
        "This model’s 2 twin heavy flamers can be replaced with 2 twin heavy bolters.",
        "This model can be equipped with one of the following: ◦ 2 lascannons and 2 twin heavy bolters ◦ 2 lascannons and 2 twin heavy flamers"
      ],
      "transport": "This model has a transport capacity of 26 Astra Militarum Infantry models. Each Heavy Weapons Team model and Veteran Heavy Weapons Team model takes up the space of 2 models. Each Ogryn model takes up the space of 3 models. It cannot transport Artillery models.",
      "points": [
        {
          "models": "1",
          "cost": "455",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+2", "Firing Deck 12"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Close-range Titan Killer",
            "description": "Each time this model’s magma cannon targets an enemy Monster or Vehicle unit, that target is always considered to be within half range of that weapon.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-8 WOUNDS REMAINING",
          "description": "While this model has 1-8 wounds remaining, subtract 4 from its Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "9\"",
          "t": "13",
          "sv": "2+",
          "w": "24",
          "ld": "7+",
          "oc": "8",
          "name": "Doomhammer",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Lascannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Magma cannon",
              "keywords": ["blast", "melta 6"],
              "range": "24\"",
              "attacks": "D6+3",
              "skill": "4+",
              "strength": "12",
              "ap": "-4",
              "damage": "D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin heavy bolter",
              "keywords": ["sustained hits 1", "twin-linked"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin heavy flamer",
              "keywords": ["ignores cover", "torrent", "twin-linked"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "8",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Titanic",
        "Imperium",
        "Transport",
        "Smoke",
        "Doomhammer"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "389e9a15-fefc-5170-8b5e-1058c115e330",
      "name": "Earthshaker Carriage Battery",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Earthshaker Carriage"],
      "loadout": "This model is equipped with: earthshaker cannon; battery close combat weapons. Designer’s Note: Place five Heavy Artillery Crew tokens next to each Earthshaker Carriage model when this unit is first set up, removing one each time its Earthshaker Carriage model loses a wound (an Earthshaker Carriage model itself is considered to represent its final wound). These do not count as models for any rules purposes.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "80",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Earthshaker Rounds",
            "description": "In your Shooting phase, after this model has shot, if one or more of those attacks made with its earthshaker cannon scored a hit against an Infantry unit, until the end of your opponent’s next turn, that Infantry unit is shaken. While a unit is shaken, subtract 2\" from its Move characteristic and subtract 2 from Advance and Charge rolls made for it.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "4\"",
          "t": "7",
          "sv": "4+",
          "w": "6",
          "ld": "7+",
          "oc": "2",
          "name": "Earthshaker Carriage Battery",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Earthshaker cannon",
              "keywords": ["blast", "heavy", "indirect fire"],
              "range": "240\"",
              "attacks": "D6+3",
              "skill": "5+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Battery close combat weapons",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Artillery",
        "Imperium",
        "Grenades",
        "Regiment",
        "Earthshaker Carriage Battery"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "45ae57bd-08ca-59c2-85fd-33551eb563a0",
      "name": "Earthshaker Platform",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Earthshaker Platform"],
      "loadout": "This model is equipped with: earthshaker cannon; close combat weapons.",
      "wargear": ["None"],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1"],
        "faction": [],
        "primarch": [
          {
            "name": "FORTIFICATION",
            "showAbility": true,
            "abilities": [
              {
                "name": "While an enemy unit is only within Engagement Range of one or more Fortifications from your army",
                "description": " ■  That unit can still be selected as the target of ranged attacks, but each time such an attack is made, unless it is made with a Pistol, subtract 1 from the Hit roll. ■  Models in that unit do not need to take Desperate Escape tests due to Falling Back while Battle-shocked, except for those that will move over enemy models when doing so.",
                "showAbility": true,
                "showDescription": true
              }
            ]
          }
        ],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Earthshaker Rounds",
            "description": "In your Shooting phase, after this model has shot, if one or more of those attacks made with its earthshaker cannon scored a hit against an enemy Infantry unit, until the end of your opponent’s next turn, that unit is shaken. While a unit is shaken, subtract 2\" from its Move characteristic and subtract 2 from Advance and Charge rolls made for it.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Reinforced Cover",
            "description": "Each time a ranged attack is allocated to a model, if that model is not fully visible to every model in the attacking unit because of this Fortification, that model has the Benefit of Cover against that attack.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "-",
          "t": "8",
          "sv": "3+",
          "w": "8",
          "ld": "7+",
          "oc": "2",
          "name": "Earthshaker Platform",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Earthshaker cannon",
              "keywords": ["blast", "indirect fire"],
              "range": "240\"",
              "attacks": "D6+3",
              "skill": "4+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Close combat weapons",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Fortification",
        "Imperium",
        "Artillery",
        "Earthshaker Platform"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "87c4f9c9-08ed-502d-9b3f-d168e50f4068",
      "name": "Elysian Drop Sentinel",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Elysian Drop Sentinel"],
      "loadout": "This model is equipped with: heavy bolter; close combat weapon.",
      "wargear": [
        "This model can be equipped with 1 hunter-killer missile.",
        "This model can be equipped with one of the following: ◦ 1 heavy flamer ◦ 1 multi-melta"
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1", "Deep Strike"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Meteoric Descent",
            "description": "When this model is set up on the battlefield using the Deep Strike ability, it can perform a meteoric descent. If it does, this model can be set up anywhere on the battlefield that is more than 3\" horizontally away from all enemy units, but until the end of the turn, it is not eligible to declare a charge.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "6",
          "sv": "3+",
          "w": "6",
          "ld": "7+",
          "oc": "2",
          "name": "Elysian Drop Sentinel",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ],
          "abilities": [
            {
              "name": "One Shot",
              "description": "The bearer can only shoot with this weapon once per battle.",
              "showAbility": true,
              "showDescription": true
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Multi-melta",
              "keywords": ["melta 2"],
              "range": "18\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "9",
              "ap": "-4",
              "damage": "D6"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Imperium",
        "Regiment",
        "Squadron",
        "Smoke",
        "Elysian Drop Sentinel"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "515c64ba-d98e-50d7-92a4-d6851c3f185e",
      "name": "Elysian Sniper Squad",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["3 Elysian Sniper Teams"],
      "loadout": "Every model is equipped with: lasgun; sniper rifle; close combat weapon. SNIPER TEAMS For the purposes of embarking within Transports, each Elysian Sniper Team model counts as one Heavy Weapons Team model.",
      "wargear": ["None"],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Mark the Target",
            "description": "Each time this unit Remains Stationary, until the start of your next Movement phase, ranged weapons equipped by models in this unit have the [DEVASTATING WOUNDS] ability.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "3",
          "sv": "5+",
          "w": "2",
          "ld": "7+",
          "oc": "2",
          "name": "Elysian Sniper Squad",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Lasgun",
              "keywords": ["rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Sniper rifle",
              "keywords": ["heavy", "precision"],
              "range": "36\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "4",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "1",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Imperium",
        "Grenades",
        "Regiment",
        "Elysian Sniper Squad"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "7ef00ad5-7f46-53ec-8fc8-7eac89de1157",
      "name": "Field Ordnance Battery",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["2 Ordnance Teams"],
      "loadout": "Every model is equipped with: malleus rocket launcher; lasgun; laspistol; battery close combat weapons.",
      "wargear": [
        "Any number of models can each have their malleus rocket launcher replaced with one of the following: ◦ 1 bombast field gun ◦ 1 heavy lascannon"
      ],
      "transport": "",
      "points": [
        {
          "models": "2",
          "cost": "100",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Rearm, Reload, Fire",
            "description": "While this unit is being affected by an Order, provided it Remained Stationary this turn, all Heavy weapons equipped by models in this unit have the [SUSTAINED HITS 1] ability.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "4\"",
          "t": "5",
          "sv": "4+",
          "w": "6",
          "ld": "7+",
          "oc": "2",
          "name": "Field Ordnance Battery",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Bombast field gun",
              "keywords": ["blast", "heavy", "indirect fire"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "5+",
              "strength": "7",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy lascannon",
              "keywords": ["heavy"],
              "range": "48\"",
              "attacks": "2",
              "skill": "5+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Lasgun",
              "keywords": ["rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Laspistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Malleus rocket launcher",
              "keywords": ["blast", "heavy"],
              "range": "48\"",
              "attacks": "D6+6",
              "skill": "5+",
              "strength": "6",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Battery close combat weapons",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Artillery",
        "Imperium",
        "Grenades",
        "Regiment",
        "Field Ordnance Battery"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "048ec1f5-98f4-5280-89c8-ed75df29977b",
      "name": "Gaunt’s Ghosts",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Ibram Gaunt", "5 Tanith Ghosts"],
      "loadout": "Ibram Gaunt is equipped with: bolt pistol; Gaunt’s chainsword. 1 Tanith Ghost is equipped with: Corbec’s hot-shot lascarbine; straight silver knife. 1 Tanith Ghost is equipped with: Rawne’s lascarbine; straight silver knife. 1 Tanith Ghost is equipped with: Larkin’s long-las; straight silver knife. 1 Tanith Ghost is equipped with: Bragg’s autocannon; straight silver knife. 1 Tanith Ghost is equipped with: lascarbine; Mkoll’s straight silver knife.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "6",
          "cost": "115",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Fights First", "Infiltrators", "Lone Operative", "Stealth"],
        "faction": ["Voice of Command"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "* Ibram Gaunt only.",
          "showInvulnerableSave": true,
          "showInfo": true
        },
        "other": [
          {
            "name": "Tanith Camo-cloaks",
            "description": "Each time a ranged attack targets this unit, models in this unit have the Benefit of Cover against it.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Covert Stealth Team",
            "description": "At the end of your opponent’s turn, if this unit is not within Engagement Range of one or more enemy units, you can remove this unit from the battlefield. In the Reinforcements step of your next Movement phase, set it up anywhere on the battlefield that is more than 9\" horizontally away from all enemy models.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "ORDERS",
            "description": " This unit’s Officer can issue up to 2 Orders to Regiment or Gaunt’s Ghosts units.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "3",
          "sv": "4+",
          "w": "3",
          "ld": "6+",
          "oc": "1",
          "name": "IBRAM GAUNT",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "6\"",
          "t": "3",
          "sv": "5+",
          "w": "2",
          "ld": "7+",
          "oc": "1",
          "name": "TANITH GHOST",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Bragg’s autocannon",
              "keywords": ["heavy"],
              "range": "48\"",
              "attacks": "4",
              "skill": "5+",
              "strength": "9",
              "ap": "-1",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Bolt pistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Corbec’s hot-shot lascarbine",
              "keywords": ["assault"],
              "range": "24\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "3",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Larkin’s long-las",
              "keywords": ["heavy", "precision"],
              "range": "36\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "5",
              "ap": "-2",
              "damage": "4"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Lascarbine",
              "keywords": ["assault"],
              "range": "24\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Rawne’s lascarbine",
              "keywords": ["assault", "sustained hits"],
              "range": "24\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Gaunt’s chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "3",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Straight silver knife",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Mkoll’s straight silver knife",
              "keywords": ["devastating wounds", "precision"],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "3",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "ALL MODELS:",
        "Infantry",
        "Imperium",
        "Grenades",
        "Gaunt’s Ghosts",
        "IBRAM GAUNT:",
        "Character",
        "Epic Hero",
        "Officer"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "28ecf6cb-89c8-522c-904f-af984c67b8d3",
      "name": "Gorgon Heavy Transport",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Gorgon Heavy Transport"],
      "loadout": "This model is equipped with: 2 Gorgon mortars; 2 twin heavy stubbers; landing ramp.",
      "wargear": [
        "This model’s 2 Gorgon mortars can be replaced with one of the following: ◦ 4 heavy bolters ◦ 4 heavy flamers ◦ 4 heavy stubbers",
        "This model can be equipped with 1 hunter-killer missile."
      ],
      "transport": "NS                                                              UNIT COMPOSITION s 2 Gorgon mortars can be replaced with one of the following:   ■ 1 Gorgon Heavy Transport bolters                                                         This model is equipped with: 2 Gorgon mortars; 2 twin heavy flamers                                                         stubbers; landing ramp. stubbers can be equipped with 1 hunter-killer missile.                   TRANSPORT This model has a transport capacity of 30 Astra Militarum Infantry models. Each Heavy Weapons Team model and Veteran Heavy Weapons Team model takes up the space of 2 models. Each Ogryn model takes up the space of 3 models. It cannot transport Artillery models.",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+2"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "5+*",
          "info": "Against ranged attacks only",
          "showInvulnerableSave": true,
          "showInfo": true
        },
        "other": [
          {
            "name": "Mount Up!",
            "description": "At the end of your opponent’s Movement phase, if there are no models currently embarked within this Transport, you can select one friendly Astra Militarum Infantry unit (excluding Artillery units) that is wholly within 6\" of this Transport. Unless that unit is within Engagement Range of one or more enemy units, it can embark within this Transport.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-7 WOUNDS REMAINING",
          "description": "While this model has 1-7 wounds remaining, subtract 4 from its Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "9\"",
          "t": "13",
          "sv": "2+",
          "w": "20",
          "ld": "7+",
          "oc": "8",
          "name": "Gorgon Heavy Transport",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Gorgon mortar",
              "keywords": ["blast", "indirect fire"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "4+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ],
          "abilities": [
            {
              "name": "One Shot",
              "description": "The bearer can only shoot with this weapon once per battle.",
              "showAbility": true,
              "showDescription": true
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin heavy stubber",
              "keywords": ["rapid fire 3", "twin-linked"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Landing ramp",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "8",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Titanic",
        "Imperium",
        "Smoke",
        "Transport",
        "Gorgon Heavy Transport"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "236b8bbf-5b29-50f6-9bf1-cce52ffa5d32",
      "name": "Griffon Mortar Carrier",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Griffon Mortar Carrier"],
      "loadout": "This model is equipped with: heavy bolter; Griffon heavy mortar; armoured tracks.",
      "wargear": [
        "This model’s heavy bolter can be replaced with 1 heavy flamer.",
        "This model can each be equipped with one of the following: ◦ 1 heavy stubber ◦ 1 storm bolter"
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Suppression Bombardment",
            "description": "In your Shooting phase, after this model has shot, select one enemy unit (excluding Monster and Vehicle units) hit by one or more of those attacks made with this model’s Griffon heavy mortar. Unit the start of your next turn, that enemy unit is suppressed. While a unit is suppressed, each time a model in that unit makes an attack, subtract 1 from the Hit roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "9",
          "sv": "3+",
          "w": "11",
          "ld": "7+",
          "oc": "3",
          "name": "Griffon Mortar Carrier",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Griffon heavy mortar",
              "keywords": ["blast", "indirect fire"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "4+",
              "strength": "7",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Storm bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Artillery",
        "Imperium",
        "Squadron",
        "Smoke",
        "Griffon Mortar Carrier"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "b501d1c6-22ef-5326-9dd9-c4ba80fd6892",
      "name": "Hades Breaching Drill",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Hades Breaching Drill"],
      "loadout": "This model is equipped with: melta-cutter drill.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "110",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Subterranean Assault",
            "description": "Each time you set up this model on the battlefield using the Deep Strike ability, you can select one friendly Astra Militarum Infantry unit in Strategic Reserves. If you do, set up that unit anywhere on the battlefield that is wholly within 9\" of this model and more than 9\" away from all enemy units.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "9",
          "sv": "3+",
          "w": "8",
          "ld": "7+",
          "oc": "2",
          "name": "Hades Breaching Drill",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Melta-cutter drill",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "9",
              "ap": "-4",
              "damage": "D6+2"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Imperium", "Hades Breaching Drill"],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "0b280b21-9f47-5bd0-80dd-076850058e87",
      "name": "Heavy Mortar Team",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Heavy Mortar Team"],
      "loadout": "This model is equipped with: heavy mortar; close combat weapons.",
      "wargear": ["None"],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Rearm, Reload, Fire",
            "description": "While this model is being affected by an Order, provided it Remained Stationary this turn, ranged weapons equipped by this model have the [SUSTAINED HITS 1] ability.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "ARTILLERY TEAM",
            "description": "Designer’s Note: Place three Crew tokens next to this model when it is first set up, removing one each time this model loses a wound (the Heavy Mortar Team model itself is considered to represent its final wound).",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "4\"",
          "t": "5",
          "sv": "3+",
          "w": "4",
          "ld": "7+",
          "oc": "2",
          "name": "Heavy Mortar Team",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy mortar",
              "keywords": ["heavy", "blast", "indirect fire"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "5+",
              "strength": "6",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Close combat weapons",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Artillery",
        "Imperium",
        "Grenades",
        "Regiment",
        "Heavy Mortar Team"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "898dafd9-01b6-5a13-bf17-e9fa3c1bca4f",
      "name": "Heavy Quad Launcher Team",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Heavy Quad Launcher Team"],
      "loadout": "This model is equipped with: heavy quad launcher; close combat weapons.",
      "wargear": ["None"],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Suppression Bombardment",
            "description": "In your Shooting phase, after this model has shot, select one enemy unit (excluding Monster and Vehicle units) hit by one or more of those attacks. Unit the start of your next turn, that enemy unit is suppressed. While a unit is suppressed, each time a model in that unit makes an attack, subtract 1 from the Hit roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "ARTILLERY TEAM",
            "description": "Designer’s Note: Place three Crew tokens next to this model when it is first set up, removing one each time this model loses a wound (the Heavy Quad Launcher Team model itself is considered to represent its final wound).",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "4\"",
          "t": "5",
          "sv": "3+",
          "w": "4",
          "ld": "7+",
          "oc": "2",
          "name": "Heavy Quad Launcher Team",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy quad launcher",
              "keywords": ["blast", "indirect fire"],
              "range": "48\"",
              "attacks": "2D6",
              "skill": "4+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Close combat weapons",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Artillery",
        "Imperium",
        "Grenades",
        "Regiment",
        "Heavy Quad Launcher Team"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "b70c2637-565f-5ac9-92d9-52e3803e3b1c",
      "name": "Heavy Weapons Squad",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["3 Heavy Weapons Teams"],
      "loadout": "Every model is equipped with: heavy bolter; las small arms; weapons team close combat weapons.",
      "wargear": [
        "Any number of models can each have their heavy bolter replaced with one of the following: ◦ 1 autocannon ◦ 1 lascannon ◦ 1 missile launcher ◦ 1 mortar"
      ],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "60",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Covering Fire",
            "description": "Each time you target this unit with the Fire Overwatch Stratagem, while resolving that Stratagem, hits are scored on unmodified Hit rolls of 5+, or on unmodified Hit rolls of 4+ instead if this unit is within 6\" of one or more friendly Platoon units.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "3",
          "sv": "5+",
          "w": "2",
          "ld": "7+",
          "oc": "2",
          "name": "Heavy Weapons Squad",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Autocannon",
              "keywords": ["heavy"],
              "range": "48\"",
              "attacks": "2",
              "skill": "5+",
              "strength": "9",
              "ap": "-1",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["heavy", "sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "5+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Las small arms",
              "keywords": ["pistol"],
              "range": "18\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Lascannon",
              "keywords": ["heavy"],
              "range": "48\"",
              "attacks": "1",
              "skill": "5+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Missile launcher – frag",
              "keywords": ["blast", "heavy"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "5+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Missile launcher – krak",
              "keywords": ["heavy"],
              "range": "48\"",
              "attacks": "1",
              "skill": "5+",
              "strength": "9",
              "ap": "-2",
              "damage": "D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Mortar",
              "keywords": ["blast", "heavy", "indirect fire"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "5+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Weapons team close combat weapons",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Imperium",
        "Grenades",
        "Regiment",
        "Heavy Weapons Squad"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "d31614d2-c878-59c7-87ae-7da76cd72b34",
      "name": "Hellhammer",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Hellhammer"],
      "loadout": "This model is equipped with: co-axial autocannon; demolisher cannon; heavy stubber; Hellhammer cannon; 2 lascannons; twin heavy bolter; 2 twin heavy flamers; armoured tracks.",
      "wargear": [
        "This model’s 2 twin heavy flamers can be replaced with 2 twin heavy bolters.",
        "This model can be equipped with one of the following: ◦ 2 lascannons and 2 twin heavy bolters ◦ 2 lascannons and 2 twin heavy flamers"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "510",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+2"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Close-quarters Warfare",
            "description": "This model does not suffer the penalty to its Hit rolls for making ranged attacks while enemy units are within Engagement Range of it.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-8 WOUNDS REMAINING",
          "description": "While this model has 1-8 wounds remaining, subtract 4 from its Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "9\"",
          "t": "13",
          "sv": "2+",
          "w": "24",
          "ld": "7+",
          "oc": "8",
          "name": "Hellhammer",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Co-axial autocannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "9",
              "ap": "-1",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Demolisher cannon",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D6+3",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hellhammer cannon",
              "keywords": ["blast", "ignores cover"],
              "range": "30\"",
              "attacks": "4D6",
              "skill": "4+",
              "strength": "7",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Lascannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin heavy bolter",
              "keywords": ["sustained hits 1", "twin-linked"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin heavy flamer",
              "keywords": ["ignores cover", "torrent", "twin-linked"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "8",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Titanic", "Imperium", "Smoke", "Hellhammer"],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "95afa0b2-ec46-5e39-a4cc-c51dee3df948",
      "name": "Hellhound",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Hellhound"],
      "loadout": "This model is equipped with: heavy flamer; inferno cannon; armoured tracks.",
      "wargear": [
        "This model’s inferno cannon can be replaced with one of the following: ◦ 1 chem cannon ◦ 1 melta cannon",
        "This model’s heavy flamer can be replaced with one of the following: ◦ 1 heavy bolter ◦ 1 multi-melta",
        "This model can be equipped with 1 hunter-killer missile."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "125",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Flush Them Out",
            "description": "In your Shooting phase, after this model has shot, select one enemy unit that was hit by one or more of those attacks. Until the end of the phase, that unit cannot have the Benefit of Cover.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-4 WOUNDS REMAINING",
          "description": "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "10",
          "sv": "2+",
          "w": "11",
          "ld": "7+",
          "oc": "3",
          "name": "Hellhound",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Chem cannon",
              "keywords": ["anti-infantry 2+", "torrent"],
              "range": "12\"",
              "attacks": "D6+1",
              "skill": "N/A",
              "strength": "2",
              "ap": "-2",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ],
          "abilities": [
            {
              "name": "One Shot",
              "description": "The bearer can only shoot with this weapon once per battle.",
              "showAbility": true,
              "showDescription": true
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Inferno cannon",
              "keywords": ["ignores cover", "torrent"],
              "range": "18\"",
              "attacks": "2D6",
              "skill": "N/A",
              "strength": "6",
              "ap": "-2",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Melta cannon",
              "keywords": ["blast", "melta 4"],
              "range": "18\"",
              "attacks": "D3",
              "skill": "4+",
              "strength": "9",
              "ap": "-4",
              "damage": "D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Multi-melta",
              "keywords": ["melta 2"],
              "range": "18\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "9",
              "ap": "-4",
              "damage": "D6"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Imperium", "Squadron", "Smoke", "Hellhound"],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "f98b9276-38e9-5c44-9630-201aa197151a",
      "name": "Hydra",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Hydra"],
      "loadout": "This model is equipped with: heavy bolter; Hydra autocannon; armoured tracks.",
      "wargear": [
        "This model’s heavy bolter can be replaced with 1 heavy flamer.",
        "This model can be equipped with 1 hunter-killer missile."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "95",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Flak Battery",
            "description": "Each time this model makes an attack that targets a unit that can Fly, you can re-roll the Hit roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-4 WOUNDS REMAINING",
          "description": "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "9",
          "sv": "3+",
          "w": "11",
          "ld": "7+",
          "oc": "3",
          "name": "Hydra",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ],
          "abilities": [
            {
              "name": "One Shot",
              "description": "The bearer can only shoot with this weapon once per battle.",
              "showAbility": true,
              "showDescription": true
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hydra autocannon",
              "keywords": ["anti-fly 2+", "twin-linked"],
              "range": "72\"",
              "attacks": "4",
              "skill": "4+",
              "strength": "9",
              "ap": "-1",
              "damage": "3"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Imperium", "Squadron", "Smoke", "Hydra"],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "b4d9370b-66f2-5cb6-b1d0-0084a766e858",
      "name": "Hydra Platform",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Hydra Platform"],
      "loadout": "This model is equipped with: Hydra quad autocannon; close combat weapons.",
      "wargear": ["None"],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1"],
        "faction": [],
        "primarch": [
          {
            "name": "FORTIFICATION",
            "showAbility": true,
            "abilities": [
              {
                "name": "While an enemy unit is only within Engagement Range of one or more Fortifications from your army",
                "description": " ■  That unit can still be selected as the target of ranged attacks, but each time such an attack is made, unless it is made with a Pistol, subtract 1 from the Hit roll. ■  Models in that unit do not need to take Desperate Escape tests due to Falling Back while Battle- shocked, except for those that will move over enemy models when doing so.",
                "showAbility": true,
                "showDescription": true
              }
            ]
          }
        ],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Flak Battery",
            "description": "Each time this model makes an attack that targets a unit that can Fly, you can re-roll the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Reinforced Cover",
            "description": "Each time a ranged attack is allocated to a model, if that model is not fully visible to every model in the attacking unit because of this Fortification, that model has the Benefit of Cover against that attack.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "-",
          "t": "8",
          "sv": "3+",
          "w": "8",
          "ld": "7+",
          "oc": "2",
          "name": "Hydra Platform",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hydra quad autocannon",
              "keywords": ["anti-fly 2+", "twin-linked"],
              "range": "72\"",
              "attacks": "4",
              "skill": "4+",
              "strength": "9",
              "ap": "-1",
              "damage": "3"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Close combat weapons",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Fortification", "Imperium", "Artillery", "Hydra Platform"],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "13375e02-0039-59de-a527-2d967a6e6476",
      "name": "Infantry Squad",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "This unit can have up to two Leader units attached to it, provided no more than one of those units is a Command Squad unit. If it does, and this Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths. Designer’s Note: Each Heavy Weapons Team model in this unit counts as 2 models for the purposes of wargear options.",
      "composition": [
        "One of the following:",
        "1 Sergeant and 9 Guardsmen",
        "1 Sergeant, 7 Guardsmen and 1 Heavy Weapons Team",
        "2 Sergeants and 18 Guardsmen",
        "2 Sergeants, 16 Guardsmen and 1 Heavy Weapons Team",
        "2 Sergeants, 14 Guardsmen and 2 Heavy Weapons Teams"
      ],
      "loadout": "Every Sergeant is equipped with: laspistol; close combat weapon. Every Guardsman is equipped with: lasgun; close combat weapon. Every Heavy Weapons Team is equipped with: heavy bolter; laspistol; close combat weapon.",
      "wargear": [
        "For every 10 models in this unit, 1 Guardsman’s lasgun can be replaced with one of the following: ◦ 1 flamer ◦ 1 grenade launcher ◦ 1 meltagun ◦ 1 plasma gun ◦ 1 sniper rifle",
        "For every 10 models in this unit, 1 Guardsman equipped with a lasgun can be equipped with 1 vox-caster (that model’s lasgun cannot be replaced).",
        "Each Sergeant’s close combat weapon can be replaced with one of the following: ◦ 1 chainsword ◦ 1 power weapon",
        "Each Sergeant’s laspistol can be replaced with one of the following:* ◦ 1 bolt pistol ◦ 1 boltgun ◦ 1 plasma pistol",
        "Each Heavy Weapons Team’s heavy bolter can be replaced with one of the following:* ◦ 1 autocannon ◦ 1 lascannon ◦ 1 missile launcher  ◦ 1 mortar *  The profiles of these weapons can be found on the Astra Militarum Infantry Armoury card."
      ],
      "transport": "",
      "points": [
        {
          "models": "10",
          "cost": "65",
          "active": true
        },
        {
          "models": "20",
          "cost": "130",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Vox-caster",
            "description": "Each time you target the bearer’s unit with a Stratagem, roll one D6, adding 1 to the result if there are one or more friendly Officer models within 6\": on a 5+, you gain 1CP.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": [],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Defenders of Humanity",
            "description": "Each time a ranged attack targets this unit, if this unit is within range of an objective marker you control, models in this unit have the Benefit of Cover against that attack.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "3",
          "sv": "5+",
          "w": "1",
          "ld": "7+",
          "oc": "2",
          "name": "GUARDSMAN",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "6\"",
          "t": "3",
          "sv": "5+",
          "w": "2",
          "ld": "7+",
          "oc": "4",
          "name": "HEAVY WEAPONS TEAM",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Grenade launcher – frag",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Grenade launcher – krak",
              "keywords": [],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "9",
              "ap": "-2",
              "damage": "D3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["heavy", "sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "5+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Lasgun",
              "keywords": ["rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Laspistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Meltagun",
              "keywords": ["melta 2"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "9",
              "ap": "-4",
              "damage": "D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Plasma gun – standard",
              "keywords": ["rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Plasma gun – supercharge",
              "keywords": ["hazardous", "rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Sniper rifle",
              "keywords": ["heavy", "precision"],
              "range": "36\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "4",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "1",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Power weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "4",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Battleline",
        "Imperium",
        "Grenades",
        "Regiment",
        "Platoon",
        "Infantry Squad"
      ],
      "factions": ["Astra Militarum"],
      "leadBy": [
        "Cadian Castellan",
        "Commissar",
        "Death Korps Marshal",
        "Lord Solar Leontus",
        "Platoon Command Squad",
        "Primaris Psyker",
        "Quartermaster Cadre Squad",
        "Regimental Enginseer",
        "Regimental Preacher",
        "Ursula Creed"
      ],
      "leads": {
        "units": [
          "This unit can have up to two Leader units attached to it, provided no more than one of those units is a Command Squad unit. If it does, and this Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths. Designer’s Note: Each Heavy Weapons Team model in this unit counts as 2 models for the purposes of wargear options."
        ],
        "extra": ""
      }
    },
    {
      "id": "8f7dddb7-e40d-5ed9-ba49-4eb1782957b4",
      "name": "Kasrkin",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Kasrkin Sergeant", "9 Kasrkin Troopers"],
      "loadout": "The Kasrkin Sergeant is equipped with: hot-shot laspistol; chainsword. Every Kasrkin Trooper is equipped with: hot-shot lasgun; close combat weapon.",
      "wargear": [
        "Up to 4 Kasrkin Troopers can each have their hot-shot lasgun replaced with one of the following:*  ◦ 1 flamer ◦ 1 grenade launcher ◦ 1 hot-shot volley gun  ◦ 1 meltagun  ◦ 1 plasma gun",
        "1 Kasrkin Trooper’s hot-shot lasgun can be replaced with 1 hot-shot marksman rifle.",
        "1 Kasrkin Trooper’s hot-shot lasgun can be replaced with 1 hot-shot laspistol and 1 melta mine.",
        "1 Kasrkin Trooper equipped with a hot-shot lasgun can be equipped with 1 vox-caster (that model’s hot-shot lasgun cannot be replaced).",
        "The Kasrkin Sergeant’s chainsword can be replaced with 1 power weapon.",
        "The Kasrkin Sergeant’s hot-shot laspistol can be replaced with one of the following:** ◦ 1 bolt pistol  ◦ 1 plasma pistol  *  You cannot select the same weapon from this list more than twice per unit. **   The profiles of these weapons can be found on the Astra Militarum Infantry Armoury card."
      ],
      "transport": "",
      "points": [
        {
          "models": "10",
          "cost": "120",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Vox-caster",
            "description": "Each time you target the bearer’s unit with a Stratagem, roll one D6, adding 1 to the result if there are one or more friendly Officer models within 6\": on a 5+, you gain 1CP.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Melta Mine",
            "description": "Once per battle, at the start of any phase, you can select one enemy unit within 3\" of the bearer and roll one D6: on a 2+, that enemy unit suffers D3 mortal wounds, or 2D3 mortal wounds instead if it is a Vehicle unit.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Scouts 6\""],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Warrior Elite",
            "description": "In your Command phase, you can select one Order to affect this unit until the start of your next Command phase, in addition to any other Orders issued to this unit by an Officer model this turn.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "3",
          "sv": "4+",
          "w": "1",
          "ld": "7+",
          "oc": "1",
          "name": "Kasrkin",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Grenade launcher – frag",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D3",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Grenade launcher – krak",
              "keywords": [],
              "range": "24\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "9",
              "ap": "-2",
              "damage": "D3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hot-shot lasgun",
              "keywords": ["rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "3",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hot-shot laspistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "3",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hot-shot marksman rifle",
              "keywords": ["heavy", "precision"],
              "range": "36\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "4",
              "ap": "-2",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hot-shot volley gun",
              "keywords": ["rapid fire 2"],
              "range": "30\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Meltagun",
              "keywords": ["melta 2"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "9",
              "ap": "-4",
              "damage": "D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Plasma gun – standard",
              "keywords": ["rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Plasma gun – supercharge",
              "keywords": ["hazardous", "rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Power weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Imperium", "Grenades", "Regiment", "Kasrkin"],
      "factions": ["Astra Militarum"],
      "leadBy": [
        "Cadian Castellan",
        "Commissar",
        "Lord Solar Leontus",
        "Primaris Psyker",
        "Regimental Enginseer",
        "Regimental Preacher",
        "Ursula Creed"
      ]
    },
    {
      "id": "2688537f-db61-54b5-962d-099dce8464ed",
      "name": "Leman Russ Battle Tank",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Leman Russ Battle Tank"],
      "loadout": "This model is equipped with: lascannon; Leman Russ battle cannon; armoured tracks.",
      "wargear": [
        "This model’s lascannon can be replaced with one of the following: ◦ 1 heavy bolter ◦ 1 heavy flamer",
        "This model can be equipped with one of the following: ◦ 2 heavy bolters ◦ 2 heavy flamers ◦ 2 multi-meltas ◦ 2 plasma cannons",
        "This model can be equipped with one of the following: ◦ 1 heavy stubber ◦ 1 storm bolter",
        "This model can be equipped with 1 hunter-killer missile."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "195",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Armoured Spearhead",
            "description": "Each time this model makes an attack that targets an enemy unit, re-roll a Hit roll of 1 and, if that unit is within range of an objective marker you do not control, you can re-roll the Hit roll instead.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-4 WOUNDS REMAINING",
          "description": "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "11",
          "sv": "2+",
          "w": "13",
          "ld": "7+",
          "oc": "3",
          "name": "Leman Russ Battle Tank",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ],
          "abilities": [
            {
              "name": "One Shot",
              "description": "The bearer can only shoot with this weapon once per battle.",
              "showAbility": true,
              "showDescription": true
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Lascannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Leman Russ battle cannon",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6+3",
              "skill": "4+",
              "strength": "10",
              "ap": "-1",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Multi-melta",
              "keywords": ["melta 2"],
              "range": "18\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "9",
              "ap": "-4",
              "damage": "D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Plasma cannon – standard",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "4+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Plasma cannon – supercharge",
              "keywords": ["blast", "hazardous"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "4+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Storm bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "7",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Imperium",
        "Squadron",
        "Smoke",
        "Leman Russ Battle Tank"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "aac11582-7219-55ea-ae6b-85ee08a56935",
      "name": "Leman Russ Demolisher",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Leman Russ Demolisher"],
      "loadout": "This model is equipped with: demolisher battle cannon; lascannon; armoured tracks.",
      "wargear": [
        "This model’s lascannon can be replaced with one of the following: ◦ 1 heavy bolter ◦ 1 heavy flamer",
        "This model can be equipped with one of the following: ◦ 2 heavy bolters ◦ 2 heavy flamers ◦ 2 multi-meltas ◦ 2 plasma cannons",
        "This model can be equipped with one of the following: ◦ 1 heavy stubber ◦ 1 storm bolter",
        "This model can be equipped with 1 hunter-killer missile."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "220",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Line-breaker",
            "description": "When making ranged attacks with its demolisher battle cannon, this model can target enemy units within Engagement Range of it (provided no other friendly units are also within Engagement Range of that enemy unit). In addition, when making ranged attacks, this model does not suffer the penalty to its Hit rolls for being within Engagement Range of one or more enemy units.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-4 WOUNDS REMAINING",
          "description": "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "11",
          "sv": "2+",
          "w": "13",
          "ld": "7+",
          "oc": "3",
          "name": "Leman Russ Demolisher",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Demolisher battle cannon",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D6+3",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ],
          "abilities": [
            {
              "name": "One Shot",
              "description": "The bearer can only shoot with this weapon once per battle.",
              "showAbility": true,
              "showDescription": true
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Lascannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Multi-melta",
              "keywords": ["melta 2"],
              "range": "18\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "9",
              "ap": "-4",
              "damage": "D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Plasma cannon – standard",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "4+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Plasma cannon – supercharge",
              "keywords": ["blast", "hazardous"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "4+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Storm bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "7",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Imperium",
        "Squadron",
        "Smoke",
        "Leman Russ Demolisher"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "5baa7d69-6599-5667-afe1-51caff374015",
      "name": "Leman Russ Eradicator",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Leman Russ Eradicator"],
      "loadout": "This model is equipped with: eradicator nova cannon; lascannon; armoured tracks.",
      "wargear": [
        "This model’s lascannon can be replaced with one of the following: ◦ 1 heavy bolter ◦ 1 heavy flamer",
        "This model can be equipped with one of the following: ◦ 2 heavy bolters ◦ 2 heavy flamers ◦ 2 multi-meltas ◦ 2 plasma cannons",
        "This model can be equipped with one of the following: ◦ 1 heavy stubber ◦ 1 storm bolter",
        "This model can be equipped with 1 hunter-killer missile."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "180",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Urban Warfare",
            "description": "When making ranged attacks with its eradicator nova cannon, this model can target enemy units within Engagement Range of it (provided no other friendly units are also within Engagement Range of that enemy unit). In addition, when making ranged attacks, this model does not suffer the penalty to its Hit rolls for being within Engagement Range of one or more enemy units.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-4 WOUNDS REMAINING",
          "description": "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "11",
          "sv": "2+",
          "w": "13",
          "ld": "7+",
          "oc": "3",
          "name": "Leman Russ Eradicator",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Eradicator nova cannon",
              "keywords": ["blast", "ignores cover"],
              "range": "36\"",
              "attacks": "D3+6",
              "skill": "4+",
              "strength": "7",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ],
          "abilities": [
            {
              "name": "One Shot",
              "description": "The bearer can only shoot with this weapon once per battle.",
              "showAbility": true,
              "showDescription": true
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Lascannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Multi-melta",
              "keywords": ["melta 2"],
              "range": "18\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "9",
              "ap": "-4",
              "damage": "D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Plasma cannon – standard",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "4+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Plasma cannon – supercharge",
              "keywords": ["blast", "hazardous"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "4+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Storm bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "7",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Imperium",
        "Squadron",
        "Smoke",
        "Leman Russ Eradicator"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "3114e22d-f95c-554d-ad97-77acddb98b73",
      "name": "Leman Russ Executioner",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Leman Russ Executioner"],
      "loadout": "This model is equipped with: executioner plasma cannon; lascannon; armoured tracks.",
      "wargear": [
        "This model’s lascannon can be replaced with one of the following: ◦ 1 heavy bolter ◦ 1 heavy flamer",
        "This model can be equipped with one of the following: ◦ 2 heavy bolters ◦ 2 heavy flamers ◦ 2 multi-meltas ◦ 2 plasma cannons",
        "This model can be equipped with one of the following: ◦ 1 heavy stubber ◦ 1 storm bolter",
        "This model can be equipped with 1 hunter-killer missile."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "195",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Gung-ho Executioners",
            "description": "Each time this model makes an attack with its executioner plasma cannon that targets a unit that is Below Half-strength, add 1 to the Hit roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-4 WOUNDS REMAINING",
          "description": "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "11",
          "sv": "2+",
          "w": "13",
          "ld": "7+",
          "oc": "3",
          "name": "Leman Russ Executioner",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Executioner plasma cannon – standard",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D6+3",
              "skill": "4+",
              "strength": "7",
              "ap": "-2",
              "damage": "2"
            },
            {
              "active": true,
              "name": "Executioner plasma cannon – supercharge",
              "keywords": ["blast", "hazardous"],
              "range": "36\"",
              "attacks": "D6+3",
              "skill": "4+",
              "strength": "8",
              "ap": "-3",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ],
          "abilities": [
            {
              "name": "One Shot",
              "description": "The bearer can only shoot with this weapon once per battle.",
              "showAbility": true,
              "showDescription": true
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Lascannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Multi-melta",
              "keywords": ["melta 2"],
              "range": "18\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "9",
              "ap": "-4",
              "damage": "D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Plasma cannon – standard",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "4+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Plasma cannon – supercharge",
              "keywords": ["blast", "hazardous"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "4+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Storm bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "7",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Imperium",
        "Squadron",
        "Smoke",
        "Leman Russ Executioner"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "c671810a-bd41-589c-a77d-e4992821eb0d",
      "name": "Leman Russ Exterminator",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Leman Russ Exterminator"],
      "loadout": "This model is equipped with: exterminator autocannon; lascannon; armoured tracks.",
      "wargear": [
        "This model’s lascannon can be replaced with one of the following: ◦ 1 heavy bolter ◦ 1 heavy flamer",
        "This model can be equipped with one of the following: ◦ 2 heavy bolters ◦ 2 heavy flamers ◦ 2 multi-meltas ◦ 2 plasma cannons",
        "This model can be equipped with one of the following: ◦ 1 heavy stubber ◦ 1 storm bolter",
        "This model can be equipped with 1 hunter-killer missile."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "200",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Withering Hail",
            "description": "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks made with its exterminator autocannon. Until the end of the phase, each time a friendly Astra Militarum unit makes an attack that targets that enemy unit, improve the Armour Penetration characteristic of that attack by 1. The same enemy unit can only be affected by this ability once per phase.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-4 WOUNDS REMAINING",
          "description": "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "11",
          "sv": "2+",
          "w": "13",
          "ld": "7+",
          "oc": "3",
          "name": "Leman Russ Exterminator",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Exterminator autocannon",
              "keywords": ["rapid fire 4", "twin-linked"],
              "range": "48\"",
              "attacks": "4",
              "skill": "4+",
              "strength": "9",
              "ap": "-1",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ],
          "abilities": [
            {
              "name": "One Shot",
              "description": "The bearer can only shoot with this weapon once per battle.",
              "showAbility": true,
              "showDescription": true
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Lascannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Multi-melta",
              "keywords": ["melta 2"],
              "range": "18\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "9",
              "ap": "-4",
              "damage": "D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Plasma cannon – standard",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "4+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Plasma cannon – supercharge",
              "keywords": ["blast", "hazardous"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "4+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Storm bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "7",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Imperium",
        "Squadron",
        "Smoke",
        "Leman Russ Exterminator"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "d39181c7-36f8-50f4-9432-9bffc627c8f4",
      "name": "Leman Russ Punisher",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Leman Russ Punisher"],
      "loadout": "This model is equipped with: lascannon; punisher gatling cannon; armoured tracks.",
      "wargear": [
        "This model’s lascannon can be replaced with one of the following: ◦ 1 heavy bolter ◦ 1 heavy flamer",
        "This model can be equipped with one of the following: ◦ 2 heavy bolters ◦ 2 heavy flamers ◦ 2 multi-meltas ◦ 2 plasma cannons",
        "This model can be equipped with one of the following: ◦ 1 heavy stubber ◦ 1 storm bolter",
        "This model can be equipped with 1 hunter-killer missile."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "180",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Mow Down the Enemy",
            "description": "Each time this model makes an attack with its punisher gatling cannon that targets an enemy unit (excluding Monsters and Vehicles), that attack has the [DEVASTATING WOUNDS] ability.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-4 WOUNDS REMAINING",
          "description": "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "11",
          "sv": "2+",
          "w": "13",
          "ld": "7+",
          "oc": "3",
          "name": "Leman Russ Punisher",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ],
          "abilities": [
            {
              "name": "One Shot",
              "description": "The bearer can only shoot with this weapon once per battle.",
              "showAbility": true,
              "showDescription": true
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Lascannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Multi-melta",
              "keywords": ["melta 2"],
              "range": "18\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "9",
              "ap": "-4",
              "damage": "D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Plasma cannon – standard",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "4+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Plasma cannon – supercharge",
              "keywords": ["blast", "hazardous"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "4+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Punisher gatling cannon",
              "keywords": [],
              "range": "24\"",
              "attacks": "20",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Storm bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "7",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Imperium",
        "Squadron",
        "Smoke",
        "Leman Russ Punisher"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "10d82aa9-6d6b-5a5e-af42-bfeb4dd0da2e",
      "name": "Leman Russ Vanquisher",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Leman Russ Vanquisher"],
      "loadout": "This model is equipped with: lascannon; vanquisher battle cannon; armoured tracks.",
      "wargear": [
        "This model’s lascannon can be replaced with one of the following: ◦ 1 heavy bolter ◦ 1 heavy flamer",
        "This model can be equipped with one of the following: ◦ 2 heavy bolters ◦ 2 heavy flamers ◦ 2 multi-meltas ◦ 2 plasma cannons",
        "This model can be equipped with one of the following: ◦ 1 heavy stubber ◦ 1 storm bolter",
        "This model can be equipped with 1 hunter-killer missile."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "190",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Tank-killer",
            "description": "Each time this model makes a ranged attack with its vanquisher battle cannon that targets a Monster or Vehicle unit, you can re-roll the Wound roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-4 WOUNDS REMAINING",
          "description": "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "11",
          "sv": "2+",
          "w": "13",
          "ld": "7+",
          "oc": "3",
          "name": "Leman Russ Vanquisher",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ],
          "abilities": [
            {
              "name": "One Shot",
              "description": "The bearer can only shoot with this weapon once per battle.",
              "showAbility": true,
              "showDescription": true
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Lascannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Multi-melta",
              "keywords": ["melta 2"],
              "range": "18\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "9",
              "ap": "-4",
              "damage": "D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Plasma cannon – standard",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "4+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Plasma cannon – supercharge",
              "keywords": ["blast", "hazardous"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "4+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Storm bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Vanquisher battle cannon",
              "keywords": ["heavy"],
              "range": "72\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "18",
              "ap": "-4",
              "damage": "D6+6"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "7",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Imperium",
        "Squadron",
        "Smoke",
        "Leman Russ Vanquisher"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "b09f212d-318a-5a0b-94af-8e39dfd2542a",
      "name": "Lord Solar Leontus",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Attilan Rough Riders ■ Cadian Shock Troops ■ Catachan Jungle Fighters ■ Death Korps of Krieg ■ Infantry Squad ■ Kasrkin",
      "composition": ["1 Lord Solar Leontus – Epic Hero"],
      "loadout": "This model is equipped with: Sol’s Righteous Gaze; Conquest; Konstantin’s hooves.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "125",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Voice of Command"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "The Lord Solar",
            "description": "At the start of your Command phase, If this model is on the battlefield, you gain 1CP.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "The Collegiate Astrolex",
            "description": "After both players have deployed their armies, select up to three Astra Militarum units from your army and redeploy them. When doing so, you can set those units up in Strategic Reserves if you wish, regardless of how many units are already in Strategic Reserves.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "SUPREME COMMANDER",
            "description": "If this model is in your army, it must be your Warlord.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "ORDERS",
            "description": " This Officer can issue up to 3 Orders to Astra Militarum units.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "12\"",
          "t": "4",
          "sv": "3+",
          "w": "8",
          "ld": "6+",
          "oc": "2",
          "name": "Lord Solar Leontus",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Sol’s Righteous Gaze",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "2",
              "skill": "2+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Conquest",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "6",
              "ap": "-2",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Konstantin’s hooves",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Character",
        "Epic Hero",
        "Imperium",
        "Officer",
        "Lord Solar Leontus"
      ],
      "factions": ["Astra Militarum"],
      "leads": {
        "units": [
          "Attilan Rough Riders",
          "Cadian Shock Troops",
          "Catachan Jungle Fighters",
          "Death Korps of Krieg",
          "Infantry Squad",
          "Kasrkin"
        ],
        "extra": ""
      }
    },
    {
      "id": "6cf07190-3331-5ec4-9a46-32b6571bf05c",
      "name": "Macharius",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Macharius"],
      "loadout": "This model is equipped with: 2 heavy stubbers; Macharius twin battle cannon; twin heavy stubber; armoured tracks.",
      "wargear": [
        "This model’s 2 heavy stubbers can be replaced with one of the following: ◦ 2 heavy bolters ◦ 2 heavy flamers",
        "This model can be equipped with 1 hunter-killer missile.",
        "This model can be equipped with one of the following: ◦ 1 heavy stubber ◦ 1 storm bolter"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "310",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+2"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Battlefield Control",
            "description": "Each time this model makes a ranged attack, if it is within range of an objective marker you control, re-roll a Hit roll of 1.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-7 WOUNDS REMAINING",
          "description": "While this model has 1-7 wounds remaining, subtract 4 from its Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "9\"",
          "t": "13",
          "sv": "2+",
          "w": "20",
          "ld": "7+",
          "oc": "8",
          "name": "Macharius",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ],
          "abilities": [
            {
              "name": "One Shot",
              "description": "The bearer can only shoot with this weapon once per battle.",
              "showAbility": true,
              "showDescription": true
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Macharius twin battle cannon",
              "keywords": ["blast", "twin-linked"],
              "range": "48\"",
              "attacks": "D6+3",
              "skill": "4+",
              "strength": "10",
              "ap": "-1",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Storm bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin heavy stubber",
              "keywords": ["rapid fire 3", "twin-linked"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "8",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Titanic", "Imperium", "Smoke", "Macharius"],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "e16e3c7a-0946-500d-b30c-bc02ef80c8a2",
      "name": "Macharius Omega",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Macharius Omega"],
      "loadout": "This model is equipped with: omega-pattern plasma blastgun; armoured tracks.",
      "wargear": [
        "This model can be equipped with one of the following: ◦ 2 autocannons ◦ 2 heavy bolters ◦ 2 heavy flamers",
        "This model can be equipped with 1 hunter-killer missile.",
        "This model can be equipped with one of the following: ◦ 1 heavy stubber ◦ 1 storm bolter"
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+2"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Overwhelming Short-range Firepower",
            "description": "Each time this model makes an attack that targets the closest eligible enemy unit, re-roll a Hit roll of 1 and re-roll a Wound roll or 1.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-7 WOUNDS REMAINING",
          "description": "While this model has 1-7 wounds remaining, subtract 4 from its Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "9\"",
          "t": "13",
          "sv": "2+",
          "w": "20",
          "ld": "7+",
          "oc": "8",
          "name": "Macharius Omega",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Autocannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "9",
              "ap": "-1",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ],
          "abilities": [
            {
              "name": "One Shot",
              "description": "The bearer can only shoot with this weapon once per battle.",
              "showAbility": true,
              "showDescription": true
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Omega-pattern plasma blastgun – standard",
              "keywords": ["blast"],
              "range": "6",
              "attacks": "4+",
              "skill": "8",
              "strength": "-2",
              "ap": "2"
            },
            {
              "active": true,
              "name": "Omega-pattern plasma blastgun – supercharge",
              "keywords": ["blast", "hazardous"],
              "range": "60\"",
              "attacks": "2D6",
              "skill": "4+",
              "strength": "9",
              "ap": "-3",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Storm bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Titanic",
        "Imperium",
        "Smoke",
        "Macharius Omega"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "43859b58-e0a5-5281-846e-f82bb7b1922e",
      "name": "Macharius Vanquisher",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Macharius Vanquisher"],
      "loadout": "This model is equipped with: 2 heavy stubbers; Macharius twin vanquisher cannon; twin heavy stubber; armoured tracks.",
      "wargear": [
        "This model’s 2 heavy stubbers can be replaced with one of the following: ◦ 2 heavy bolters ◦ 2 heavy flamers",
        "This model can be equipped with 1 hunter-killer missile.",
        "This model can be equipped with one of the following: ◦ 1 heavy stubber ◦ 1 storm bolter"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "285",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+2"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Tank Hunter",
            "description": "Each time this model makes a ranged attack with its Macharius twin vanquisher cannon that targets a Monster or Vehicle unit, you can re-roll the Hit roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-7 WOUNDS REMAINING",
          "description": "While this model has 1-7 wounds remaining, subtract 4 from its Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "9\"",
          "t": "13",
          "sv": "2+",
          "w": "20",
          "ld": "7+",
          "oc": "8",
          "name": "Macharius Vanquisher",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ],
          "abilities": [
            {
              "name": "One Shot",
              "description": "The bearer can only shoot with this weapon once per battle.",
              "showAbility": true,
              "showDescription": true
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Macharius twin vanquisher cannon",
              "keywords": ["heavy", "twin-linked"],
              "range": "72\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "18",
              "ap": "-4",
              "damage": "D6+6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Storm bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin heavy stubber",
              "keywords": ["rapid fire 3", "twin-linked"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "8",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Titanic",
        "Imperium",
        "Smoke",
        "Macharius Vanquisher"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "2fa3d8da-e3b2-58bb-a4f8-2e3534486252",
      "name": "Macharius Vulcan",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Macharius Vulcan"],
      "loadout": "This model is equipped with: 2 heavy stubbers; Macharius vulcan mega-bolter; twin heavy stubber; armoured tracks",
      "wargear": [
        "This model’s 2 heavy stubbers can be replaced with one of the following: ◦ 2 heavy bolters ◦ 2 heavy flamers",
        "This model can be equipped with 1 hunter-killer missile.",
        "This model can be equipped with one of the following: ◦ 1 heavy stubber ◦ 1 storm bolter"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "310",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+2"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Armoured Aggressor",
            "description": "Each time this model makes a ranged attack, it does not suffer the penalty to the Hit roll for being within Engagement Range of one or more enemy units.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-7 WOUNDS REMAINING",
          "description": "While this model has 1-7 wounds remaining, subtract 4 from its Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "9\"",
          "t": "13",
          "sv": "2+",
          "w": "20",
          "ld": "7+",
          "oc": "8",
          "name": "Macharius Vulcan",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ],
          "abilities": [
            {
              "name": "One Shot",
              "description": "The bearer can only shoot with this weapon once per battle.",
              "showAbility": true,
              "showDescription": true
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Macharius vulcan mega-bolter",
              "keywords": ["sustained hits 1"],
              "range": "48\"",
              "attacks": "16",
              "skill": "4+",
              "strength": "6",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Storm bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin heavy stubber",
              "keywords": ["rapid fire 3", "twin-linked"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "8",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Titanic",
        "Imperium",
        "Smoke",
        "Macharius Vulcan"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "298d17dd-60b2-5070-9db1-7c0043393406",
      "name": "Malcador",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Malcador"],
      "loadout": "This model is equipped with: 2 autocannons; heavy bolter; Malcador battle cannon; armoured tracks.",
      "wargear": [
        "This model’s 2 autocannons can be replaced with one of the following: ◦ 2 heavy bolters ◦ 2 lascannons",
        "This model’s heavy bolter can be replaced with one of the following: ◦ 1 autocannon ◦  1 lascannon",
        "This model can be equipped with 1 hunter-killer missile.",
        "This model can be equipped with one of the following: ◦ 1 heavy stubber ◦ 1 storm bolter"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "250",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Rugged Reliability",
            "description": "Each time a ranged attack targets this model, worsen the Armour Penetration characteristic of that attack by 1.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-6 WOUNDS REMAINING",
          "description": "While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "11",
          "sv": "2+",
          "w": "18",
          "ld": "7+",
          "oc": "5",
          "name": "Malcador",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Autocannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "9",
              "ap": "-1",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ],
          "abilities": [
            {
              "name": "One Shot",
              "description": "The bearer can only shoot with this weapon once per battle.",
              "showAbility": true,
              "showDescription": true
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Lascannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Malcador battle cannon",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6+3",
              "skill": "4+",
              "strength": "9",
              "ap": "-1",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Storm bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "7",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Imperium", "Squadron", "Smoke", "Malcador"],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "d66fff5c-1cbe-5c05-a5cc-09570612b99e",
      "name": "Malcador Annihilator",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Malcador Annihilator"],
      "loadout": "This model is equipped with: demolisher cannon; 2 heavy bolters; Malcador twin lascannon; armoured tracks.",
      "wargear": [
        "This model’s 2 heavy bolters can be replaced with one of the following: ◦ 2 autocannons ◦ 2 lascannons",
        "This model can be equipped with 1 hunter-killer missile.",
        "This model can be equipped with one of the following: ◦ 1 heavy stubber ◦ 1 storm bolter"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "270",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Battlefield Dominance",
            "description": "Ranged weapons equipped by this model have the [IGNORES COVER] ability while targeting an enemy unit within half range.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-6 WOUNDS REMAINING",
          "description": "While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "11",
          "sv": "2+",
          "w": "18",
          "ld": "7+",
          "oc": "5",
          "name": "Malcador Annihilator",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Autocannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "9",
              "ap": "-1",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Demolisher cannon",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D6+3",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ],
          "abilities": [
            {
              "name": "One Shot",
              "description": "The bearer can only shoot with this weapon once per battle.",
              "showAbility": true,
              "showDescription": true
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Lascannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Malcador twin lascannon",
              "keywords": ["twin-linked"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Storm bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "7",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Imperium",
        "Squadron",
        "Smoke",
        "Malcador Annihilator"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "ed1950ce-4c5f-5ff6-a32c-2f660881c898",
      "name": "Malcador Defender",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Malcador Defender"],
      "loadout": "This model is equipped with: demolisher cannon; 7 heavy bolters; armoured tracks.",
      "wargear": [
        "2 of this model’s heavy bolters can be replaced with one of the following: ◦ 2 autocannons ◦ 2 lascannons",
        "This model can be equipped with 1 hunter-killer missile.",
        "This model can be equipped with one of the following: ◦ 1 heavy stubber ◦ 1 storm bolter"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "310",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Armoured Defender",
            "description": "Each time you target this model with the Fire Overwatch Stratagem, hits are scored on unmodified Hit rolls of 5+ while resolving that Stratagem.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-6 WOUNDS REMAINING",
          "description": "While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "11",
          "sv": "2+",
          "w": "18",
          "ld": "7+",
          "oc": "5",
          "name": "Malcador Defender",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Autocannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "9",
              "ap": "-1",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Demolisher cannon",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D6+3",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ],
          "abilities": [
            {
              "name": "One Shot",
              "description": "The bearer can only shoot with this weapon once per battle.",
              "showAbility": true,
              "showDescription": true
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Lascannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Storm bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "7",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Imperium",
        "Squadron",
        "Smoke",
        "Malcador Defender"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "092f98f9-e09b-5763-8a2e-17a2e00cf311",
      "name": "Malcador Infernus",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Malcador Infernus"],
      "loadout": "This model is equipped with: 2 heavy stubbers; inferno gun; armoured tracks.",
      "wargear": [
        "This model’s 2 heavy stubbers can be replaced with one of the following: ◦ 2 autocannons ◦ 2 heavy bolters ◦ 2 heavy flamers ◦ 2 lascannons",
        "This model can be equipped with 1 hunter-killer missile.",
        "This model can be equipped with one of the following: ◦ 1 heavy stubber ◦ 1 storm bolter"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "235",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-6 WOUNDS REMAINING",
          "description": "While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "11",
          "sv": "2+",
          "w": "18",
          "ld": "7+",
          "oc": "5",
          "name": "Malcador Infernus",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Autocannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "9",
              "ap": "-1",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ],
          "abilities": [
            {
              "name": "One Shot",
              "description": "The bearer can only shoot with this weapon once per battle.",
              "showAbility": true,
              "showDescription": true
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Inferno gun",
              "keywords": ["ignores cover", "torrent"],
              "range": "18\"",
              "attacks": "D6+3",
              "skill": "N/A",
              "strength": "5",
              "ap": "-2",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Lascannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Storm bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "7",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Imperium",
        "Squadron",
        "Smoke",
        "Malcador Infernus"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "f3aaebf4-bb38-5594-a348-bb06ce8bd406",
      "name": "Manticore",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Manticore"],
      "loadout": "This model is equipped with: heavy bolter; storm eagle rockets; armoured tracks.",
      "wargear": [
        "This model’s heavy bolter can be replaced with 1 heavy flamer.",
        "This model can be equipped with 1 hunter-killer missile."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "125",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Furious Barrage",
            "description": "Each time this model makes an attack with its storm eagle rockets that targets an enemy unit that contains five or more models, you can re-roll the Hit roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-4 WOUNDS REMAINING",
          "description": "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "10",
          "sv": "3+",
          "w": "11",
          "ld": "7+",
          "oc": "3",
          "name": "Manticore",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ],
          "abilities": [
            {
              "name": "One Shot",
              "description": "The bearer can only shoot with this weapon once per battle.",
              "showAbility": true,
              "showDescription": true
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Storm eagle rockets",
              "keywords": ["blast", "heavy", "indirect fire"],
              "range": "120\"",
              "attacks": "D6+1",
              "skill": "4+",
              "strength": "10",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Artillery",
        "Imperium",
        "Squadron",
        "Smoke",
        "Manticore"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "13cf8ee4-67f1-57f4-8116-3a04dfe6413a",
      "name": "Manticore Platform",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Manticore Platform"],
      "loadout": "This model is equipped with: storm eagle rockets; close combat weapons.",
      "wargear": ["None"],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1"],
        "faction": [],
        "primarch": [
          {
            "name": "FORTIFICATION",
            "showAbility": true,
            "abilities": [
              {
                "name": "While an enemy unit is only within Engagement Range of one or more Fortifications from your army",
                "description": " ■  That unit can still be selected as the target of ranged attacks, but each time such an attack is made, unless it is made with a Pistol, subtract 1 from the Hit roll. ■  Models in that unit do not need to take Desperate Escape tests due to Falling Back while Battle-shocked, except for those that will move over enemy models when doing so.",
                "showAbility": true,
                "showDescription": true
              }
            ]
          }
        ],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Furious Barrage",
            "description": "Each time this model makes an attack with its storm eagle rockets that targets an enemy unit that contains five or more models, you can re-roll the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Reinforced Cover",
            "description": "Each time a ranged attack is allocated to a model, if that model is not fully visible to every model in the attacking unit because of this Fortification, that model has the Benefit of Cover against that attack.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "-",
          "t": "8",
          "sv": "3+",
          "w": "8",
          "ld": "7+",
          "oc": "2",
          "name": "Manticore Platform",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Storm eagle rockets",
              "keywords": ["blast", "indirect fire"],
              "range": "120\"",
              "attacks": "D6+1",
              "skill": "4+",
              "strength": "10",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Close combat weapons",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Fortification",
        "Imperium",
        "Artillery",
        "Manticore Platform"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "3346a10f-61d2-5bd4-a202-d0ab1bab08c6",
      "name": "Marauder Bomber",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Marauder Bomber"],
      "loadout": "This model is equipped with: heavy bombs; 2 heavy bolters; 2 lascannons; armoured hull.",
      "wargear": [
        "This model’s heavy bombs can be replaced with 1 inferno bombs."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "345",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Heavy Bombs",
            "description": "Each time the bearer ends a Normal move, you can select one enemy unit it moved over during that move and roll nine D6, adding 1 to each result if that unit is a Monster or Vehicle: for each 5+, that unit suffers 1 mortal wound.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Inferno Bombs",
            "description": "Each time the bearer ends a Normal move, you can select one enemy unit it moved over during that move and roll nine D6, adding 1 to each result if that unit is not a Monster or Vehicle: for each 5+, that unit suffers 1 mortal wound.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deadly Demise D6+2"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-7 WOUNDS REMAINING",
          "description": "While this model has 1-7 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "20+\"",
          "t": "10",
          "sv": "2+",
          "w": "20",
          "ld": "7+",
          "oc": "0",
          "name": "Marauder Bomber",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Lascannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured hull",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "8",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Titanic",
        "Fly",
        "Aircraft",
        "Imperium",
        "Marauder Bomber"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "b7b29e5e-b797-5b1d-a02f-736d40989092",
      "name": "Marauder Destroyer",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Marauder Destroyer"],
      "loadout": "This model is equipped with: 2 assault cannons; 2 heavy bolters; Marauder nose autocannons; armoured hull.",
      "wargear": ["This model can be equipped with 1 hellstrike missile rack."],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "375",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+2"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Bomb Drop",
            "description": "Each time this model ends a Normal move, you can select one enemy unit it moved over during that move and roll six D6: for each 3+, that unit suffers 1 mortal wound.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-7 WOUNDS REMAINING",
          "description": "While this model has 1-7 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "20+\"",
          "t": "10",
          "sv": "2+",
          "w": "20",
          "ld": "7+",
          "oc": "0",
          "name": "Marauder Destroyer",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Assault cannon",
              "keywords": ["devastating wounds"],
              "range": "24\"",
              "attacks": "6",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hellstrike missile rack",
              "keywords": ["anti-fly 2+"],
              "range": "48\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "10",
              "ap": "-3",
              "damage": "D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Marauder nose autocannons",
              "keywords": ["twin-linked"],
              "range": "48\"",
              "attacks": "4",
              "skill": "4+",
              "strength": "10",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured hull",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "8",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Titanic",
        "Fly",
        "Aircraft",
        "Imperium",
        "Marauder Destroyer"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "7f56fa74-73ca-529f-a432-d5d9aa2c7f10",
      "name": "Medusa Carriage Battery",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Medusa Carriage"],
      "loadout": "This model is equipped with: Medusa siege cannon; battery close combat weapons. Designer’s Note: Place five Heavy Artillery Crew tokens next to each Medusa Carriage model when this unit is first set up, removing one each time its Medusa Carriage model loses a wound (a Medusa Carriage model itself is considered to represent its final wound). These do not count as models for any rules purposes.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "80",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Siege Bombardment",
            "description": "In your Shooting phase, after this unit has shot, select one enemy unit hit by one or more of those attacks. That enemy unit must take a Battle-shock test.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "4\"",
          "t": "7",
          "sv": "4+",
          "w": "6",
          "ld": "7+",
          "oc": "2",
          "name": "Medusa Carriage Battery",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Medusa siege cannon",
              "keywords": ["blast", "heavy", "indirect fire"],
              "range": "36\"",
              "attacks": "D6",
              "skill": "5+",
              "strength": "10",
              "ap": "-3",
              "damage": "3"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Battery close combat weapons",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Artillery",
        "Imperium",
        "Grenades",
        "Regiment",
        "Medusa Carriage Battery"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "a5712db3-875c-5c29-82ed-2a5f455ca1c5",
      "name": "Militarum Tempestus Command Squad",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "This unit can be attached to the following unit: ■ Tempestus Scions",
      "composition": ["1 Tempestor Prime", "4 Tempestus Scions"],
      "loadout": "The Tempestor Prime is equipped with: bolt pistol; Tempestus dagger. Every Tempestus Scion is equipped with: hot-shot lasgun; close combat weapon.",
      "wargear": [
        "Any number of Tempestus Scions can each have their hot-shot lasgun replaced with one of the following:* ◦ 1 flamer ◦ 1 grenade launcher ◦ 1 hot-shot volley gun  ◦ 1 meltagun ◦ 1 plasma gun",
        "1 Tempestus Scion equipped with a hot-shot lasgun can be equipped with 1 regimental standard.**",
        "1 Tempestus Scion’s hot-shot lasgun can be replaced with 1 hot-shot laspistol and 1 master vox.",
        "1 Tempestus Scion’s hot-shot lasgun can be replaced with one of the following: ◦ 1 hot-shot laspistol and 1 medi-pack ◦  1 hot-shot lasgun, 1 hot-shot laspistol and 1 medi-pack**",
        "The Tempestor Prime’s bolt pistol can be replaced with one of the following: ◦ 1 plasma pistol ◦ 1 command rod *  You cannot select the same weapon from this list more than once per unit. ** That model’s hot-shot lasgun cannot be replaced."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "80",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Medi-pack",
            "description": "The bearer’s unit has the Feel No Pain 6+ ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Regimental Standard",
            "description": "Add 1 to the Objective Control characteristic of models in the bearer’s unit.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Command Rod",
            "description": "While the bearer is leading a unit, that unit can be affected by up to two different Orders at the same time.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Master Vox",
            "description": "Each time the Officer in the bearer’s unit issues an Order, it can issue it to an eligible unit up to 24\" away. ORDERS This unit’s Officer can issue 1 Order to a Regiment unit.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deep Strike", "Leader"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Tempestor Prime",
            "description": "While this unit contains a Tempestor Prime, ranged weapons equipped by models in this unit have the [SUSTAINED HITS 1] ability.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "TEMPESTOR PRIME",
            "description": "If this unit’s Tempestor Prime model is your Warlord, Tempestus Scions units from your army have the Battleline keyword.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "ORDERS",
            "description": " This unit’s Officer can issue 1 Order to a Regiment unit.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "3",
          "sv": "4+",
          "w": "1",
          "ld": "7+",
          "oc": "1",
          "name": "TEMPESTUS SCION",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "6\"",
          "t": "3",
          "sv": "4+",
          "w": "3",
          "ld": "7+",
          "oc": "1",
          "name": "TEMPESTOR PRIME",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Bolt pistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Grenade launcher – frag",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D3",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Grenade launcher – krak",
              "keywords": [],
              "range": "24\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "9",
              "ap": "-2",
              "damage": "D3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hot-shot lasgun",
              "keywords": ["rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "3",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hot-shot laspistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "3",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hot-shot volley gun",
              "keywords": ["rapid fire 2"],
              "range": "30\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Meltagun",
              "keywords": ["melta 2"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "9",
              "ap": "-4",
              "damage": "D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Plasma gun – standard",
              "keywords": ["rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Plasma gun – supercharge",
              "keywords": ["hazardous", "rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Plasma pistol – standard",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Plasma pistol – supercharge",
              "keywords": ["hazardous", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Tempestus dagger",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Imperium", "Grenades", "Regiment", "Militarum"],
      "factions": ["Astra Militarum"],
      "leads": {
        "units": ["Tempestus Scions"],
        "extra": ""
      }
    },
    {
      "id": "3755dbc7-6f3e-5f9e-b836-8288f45c1652",
      "name": "Minotaur",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Minotaur"],
      "loadout": "This model is equipped with: Minotaur twin earthshaker cannon; armoured tracks.",
      "wargear": ["None"],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Armoured Frontis",
            "description": "Each time an attack is allocated to this model, subtract 1 from the Damage characteristic of that attack.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-6 WOUNDS REMAINING",
          "description": "While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "11",
          "sv": "2+",
          "w": "18",
          "ld": "7+",
          "oc": "5",
          "name": "Minotaur",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Minotaur twin earthshaker cannon",
              "keywords": ["blast", "indirect fire", "twin-linked"],
              "range": "240\"",
              "attacks": "D6+3",
              "skill": "4+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Imperium",
        "Artillery",
        "Squadron",
        "Transport",
        "Smoke",
        "Minotaur"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "4c08e69d-e703-5073-acbc-eeaa1751da32",
      "name": "Mukaali Riders",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Mukaali Rider Sergeant", "2 Mukaali Riders"],
      "loadout": "Every model is equipped with: laspistol; hunting lance; stomping feet.",
      "wargear": [
        "The Mukaali Rider Sergeant’s laspistol can be replaced with 1 plasma pistol.",
        "The Mukaali Rider Sergeant’s hunting lance can be replaced with one of the following: ◦ 1 chainsword ◦ 1 power weapon",
        "Up to 2 Mukaali Riders can each have their hunting lance replaced with one of the following: ◦ 1 flamer ◦ 1 grenade launcher ◦ 1 meltagun ◦ 1 plasma gun"
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Scouts 6\""],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Desert Riders",
            "description": "You can ignore any or all modifiers to this unit’s Move characteristic and to Advance and Charge rolls made for it. In addition, this unit is eligible to shoot and declare a charge in a turn in which it Fell Back.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "8\"",
          "t": "6",
          "sv": "4+",
          "w": "5",
          "ld": "7+",
          "oc": "2",
          "name": "Mukaali Riders",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Grenade launcher – frag",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Grenade launcher – krak",
              "keywords": [],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "9",
              "ap": "-2",
              "damage": "D3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Laspistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Meltagun",
              "keywords": ["melta 2"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "9",
              "ap": "-4",
              "damage": "D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Plasma gun – standard",
              "keywords": ["rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Plasma gun – supercharge",
              "keywords": ["hazardous", "rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Plasma pistol – standard",
              "keywords": ["rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Plasma pistol – supercharge",
              "keywords": ["hazardous", "rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hunting lance",
              "keywords": ["lance"],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Power weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "-2",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Stomping feet",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Imperium",
        "Grenades",
        "Regiment",
        "Mukaali Riders"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "c6440514-2819-570e-ab48-09a895e09ce3",
      "name": "Munitorum Servitors",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["4 Munitorum Servitors"],
      "loadout": "Every model is equipped with: Servitor’s servo-arm.",
      "wargear": [
        "Up to 2 models can each have their Servitor’s servo-arm replaced with one of the following: ◦ 1 heavy bolter ◦ 1 multi-melta ◦ 1 plasma cannon"
      ],
      "transport": "",
      "points": [
        {
          "models": "4",
          "cost": "35",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Mindlock",
            "description": "While a friendly Regimental Enginseer model is leading this unit, improve the Ballistic Skill and Weapon Skill characteristics of ranged and melee weapons equipped by Munitorum Servitor models in this unit by 1.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "SERVITOR RETINUE",
            "description": "At the start of the Declare Battle Formations step, this unit can join one other unit from your army that is being led by a Regimental Enginseer (a unit cannot have more than one Munitorum Servitors unit joined to it). If it does, until the end of the battle, every model in this unit counts as being part of that Bodyguard unit, and that Bodyguard unit’s Starting Strength is increased accordingly.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "3",
          "sv": "4+",
          "w": "1",
          "ld": "8+",
          "oc": "0",
          "name": "Munitorum Servitors",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["heavy", "sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "6+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Multi-melta",
              "keywords": ["heavy", "melta 2"],
              "range": "18\"",
              "attacks": "2",
              "skill": "6+",
              "strength": "9",
              "ap": "-4",
              "damage": "D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Plasma cannon – standard",
              "keywords": ["blast", "heavy"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "6+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Plasma cannon – supercharge",
              "keywords": ["blast", "hazardous", "heavy"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "6+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "1",
              "skill": "5+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Servitor’s servo-arm",
              "keywords": [],
              "range": "Melee",
              "attacks": "1",
              "skill": "5+",
              "strength": "6",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Imperium", "Munitorum Servitors"],
      "factions": ["Astra Militarum"],
      "leadBy": ["Regimental Enginseer"]
    },
    {
      "id": "2aa9ed72-e758-5a5e-9316-80096aa9f049",
      "name": "Nork Deddog",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Nork Deddog – Epic Hero"],
      "loadout": "This model is equipped with: ripper gun; huge knife.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "70",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Feel No Pain 5+"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Ogryn Bodyguard",
            "description": "While one or more Officer models are in the same unit as this model, those Officer models have the Feel No Pain 4+ ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Thunderous Head-butt",
            "description": "Each time this model’s unit is selected to fight, you can select one enemy unit within Engagement Range of this model and roll one D6: on a 2-5, that enemy unit suffers D3 mortal wounds; on a 6, that enemy unit suffers D3+3 mortal wounds.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "LOYAL PROTECTOR",
            "description": "At the start of the Declare Battle Formations step, this model must join one Command Squad unit from your army (a Command Squad cannot have more than one Loyal Protector model joined to it). This model then counts as part of that Command Squad for the rest of the battle, and its Starting Strength is increased accordingly. If it is not possible to join this model to a Command Squad, it does not take part in the battle and counts as having been destroyed. While this model is joined to a unit, it can embark within any Transport that unit can embark within, and takes up the space of 3 models.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "6",
          "sv": "4+",
          "w": "6",
          "ld": "7+",
          "oc": "1",
          "name": "Nork Deddog",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Ripper gun",
              "keywords": ["sustained hits 1"],
              "range": "18\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Huge knife",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "8",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Epic Hero",
        "Imperium",
        "Grenades",
        "Loyal Protector",
        "Ogryn",
        "Nork Deddog"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "04b1e654-c5cd-55e2-939d-0cf21b200bfb",
      "name": "Ogryn Bodyguard",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Ogryn Bodyguard"],
      "loadout": "This model is equipped with: ripper gun; close combat weapon; huge knife.",
      "wargear": [
        "This model’s ripper gun can be replaced with one of the following: ◦ 1 grenadier gauntlet ◦ 1 Bullgryn maul",
        "This model’s huge knife can be replaced with one of the following: ◦ 1 brute shield ◦ 1 slabshield"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "40",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Brute Shield",
            "description": "The bearer has a 4+ invulnerable save.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Slabshield",
            "description": "The bearer has a Wounds characteristic of 7.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Feel No Pain 6+"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Ogryn Bodyguard",
            "description": "While one or more Officer models are in the same unit as this model, those Officer models have the Feel No Pain 4+ ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Redoubled Loyalty",
            "description": "While this model’s unit contains an Officer model that has lost one or more wounds, each time this model makes a melee attack, add 1 to the Hit roll and add 1 to the Wound roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "LOYAL PROTECTOR",
            "description": "At the start of the Declare Battle Formations step, this model must join one Command Squad unit from your army (a Command Squad cannot have more than one Loyal Protector model joined to it). This model then counts as part of that Command Squad for the rest of the battle, and its Starting Strength is increased accordingly. If it is not possible to join this model to a Command Squad, it does not take part in the battle and counts as having been destroyed. While this model is joined to a unit, it can embark within any Transport that unit can embark within, and takes up the space of 3 models.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "6",
          "sv": "5+",
          "w": "6",
          "ld": "7+",
          "oc": "1",
          "name": "Ogryn Bodyguard",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Grenadier gauntlet",
              "keywords": ["blast"],
              "range": "18\"",
              "attacks": "D6",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Ripper gun",
              "keywords": ["sustained hits 1"],
              "range": "18\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Bullgryn maul",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "7",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Huge knife",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "3+",
              "strength": "8",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Ripper gun",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "6",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Imperium",
        "Grenades",
        "Loyal Protector",
        "Ogryn",
        "Ogryn Bodyguard"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "d94a69fb-7df3-5835-a62e-153a2dfd9d93",
      "name": "Ogryn Squad",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Ogryn Bone ‘ead", "2-5 Ogryns"],
      "loadout": "Every model is equipped with: ripper gun.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "75",
          "active": true
        },
        {
          "models": "6",
          "cost": "150",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Feel No Pain 6+"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Point-blank Barrage",
            "description": "Each time a model in this unit makes a ranged attack that targets the closest eligible target, improve the Armour Penetration characteristic of that attack by 1.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "6",
          "sv": "5+",
          "w": "3",
          "ld": "7+",
          "oc": "1",
          "name": "Ogryn Squad",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Ripper gun",
              "keywords": ["rapid fire 3"],
              "range": "18\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Ripper gun",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "6",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Imperium", "Grenades", "Ogryn", "Ogryn Squad"],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "37d8de29-bb46-57f2-a2c7-1404e78ccec8",
      "name": "Platoon Command Squad",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "This unit can be attached to the following units: ■ Catachan Jungle Fighters ■ Death Korps of Krieg ■ Infantry Squad",
      "composition": [
        "One of the following:",
        "1 Platoon Commander and 4 Veteran Guardsmen OR",
        "1 Platoon Commander, 2 Veteran Guardsmen and 1 Veteran Heavy Weapons Team"
      ],
      "loadout": "The Platoon Commander is equipped with: laspistol; close combat weapon. Every Veteran Guardsman is equipped with: lasgun; laspistol; close combat weapon. The Veteran Heavy Weapons Team is equipped with: heavy bolter; laspistol; close combat weapon.",
      "wargear": [
        "Any number of Veteran Guardsmen can each have their lasgun replaced with one of the following:* ◦ 1 flamer ◦ 1 grenade launcher ◦ 1 heavy flamer*** ◦ 1 meltagun  ◦ 1 plasma gun  ◦ 1 sniper rifle ◦ 1 chainsword  *  Excluding the chainsword, you cannot select the same weapon from this list more than once per unit.",
        "1 Veteran Guardsman equipped with a lasgun or chainsword can be equipped with 1 master vox.**",
        "1 Veteran Guardsman equipped with a lasgun or chainsword can be equipped with 1 medi-pack.**",
        "1 Veteran Guardsman equipped with a lasgun or chainsword can be equipped with 1 regimental  standard.** ** A model can only take one of these options, and if it does so its lasgun cannot be replaced.",
        "The Platoon Commander’s laspistol can be replaced with one of the following:*** ◦ 1 bolt pistol ◦ 1 boltgun ◦ 1 plasma pistol",
        "The Platoon Commander can be equipped with one  of the following:  ◦ 1 power fist ◦ 1 power weapon",
        "The Veteran Heavy Weapons Team’s heavy bolter can be replaced with one of the following:***  ◦ 1 autocannon ◦ 1 lascannon ◦ 1 missile launcher ◦ 1 mortar  ** *  The profiles of these weapons can be found on the Astra   Militarum Infantry Armoury card."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "60",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Master Vox",
            "description": "Each time the Officer in the bearer’s unit issues an Order, it can issue it to an eligible unit up to 24\" away.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Medi-pack",
            "description": "The bearer’s unit has the Feel No Pain 6+ ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Regimental Standard",
            "description": "Add 1 to the Objective Control characteristic of models in the bearer’s unit. ORDERS This unit’s Officer can issue 1 Order to a Regiment unit.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Leader"],
        "faction": ["Voice of Command"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Command Structure (Aura)",
            "description": "While a friendly Platoon unit is within 6\" of this unit’s Platoon Commander, you can target that unit with Stratagems even while it is Battle-shocked.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "ORDERS",
            "description": " This unit’s Officer can issue 1 Order to a Regiment unit.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "3",
          "sv": "5+",
          "w": "3",
          "ld": "7+",
          "oc": "1",
          "name": "PLATOON COMMANDER ",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "6\"\"",
          "t": "3",
          "sv": "5+",
          "w": "2",
          "ld": "7+",
          "oc": "2",
          "name": "VETERAN HEAVY",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "6\"",
          "t": "3",
          "sv": "5+",
          "w": "1",
          "ld": "7+",
          "oc": "1",
          "name": "VETERAN GUARDSMAN",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Grenade launcher – frag",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Grenade launcher – krak",
              "keywords": [],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "9",
              "ap": "-2",
              "damage": "D3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["heavy", "sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "5+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Lasgun",
              "keywords": ["rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Laspistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Meltagun",
              "keywords": ["melta 2"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "9",
              "ap": "-4",
              "damage": "D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Plasma gun – standard",
              "keywords": ["rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Plasma gun – supercharge",
              "keywords": ["hazardous", "rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Sniper rifle",
              "keywords": ["heavy", "precision"],
              "range": "36\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "4",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Power fist",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "-2",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Power weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Command Squad",
        "PLATOON COMMANDER:",
        "Character",
        "Officer"
      ],
      "factions": ["Astra Militarum"],
      "leads": {
        "units": [
          "Catachan Jungle Fighters",
          "Death Korps of Krieg",
          "Infantry Squad"
        ],
        "extra": ""
      }
    },
    {
      "id": "ac9daa90-5179-508f-b9f5-1f66286d6a00",
      "name": "Praetor",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Praetor"],
      "loadout": "This model is equipped with: 2 heavy bolters; Praetor launcher; armoured tracks",
      "wargear": [
        "This model can be equipped with one of the following: ◦ 1 heavy stubber ◦ 1 storm bolter"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "275",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Targeting Coordinates",
            "description": "While this model is being affected by an Order, each time it makes an attack with its Praetor launcher, it does not suffer the penalty to the Hit roll for attacking a unit that is not visible to it.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-6 WOUNDS REMAINING",
          "description": "While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "11",
          "sv": "2+",
          "w": "18",
          "ld": "7+",
          "oc": "5",
          "name": "Praetor",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Praetor launcher – firestorm",
              "keywords": ["blast", "heavy", "ignores cover", "indirect fire"],
              "range": "120\"",
              "attacks": "2D6",
              "skill": "4+",
              "strength": "6",
              "ap": "-1",
              "damage": "2"
            },
            {
              "active": true,
              "name": "Praetor launcher – foehammer",
              "keywords": [
                "anti-monster 4+",
                "anti-vehicle 4+",
                "blast",
                "heavy",
                "indirect fire"
              ],
              "range": "120\"",
              "attacks": "D6+1",
              "skill": "4+",
              "strength": "4",
              "ap": "-2",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Storm bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "7",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Imperium", "Squadron", "Smoke", "Praetor"],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "79bd8092-0f99-59cd-afc3-9a2e47193f24",
      "name": "Primaris Psyker",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Cadian Shock Troops ■ Catachan Jungle Fighters ■ Death Korps of Krieg ■ Infantry Squad ■ Kasrkin ■ Tempestus Scions",
      "composition": ["1 Primaris Psyker"],
      "loadout": "This model is equipped with: laspistol; Psychic Maelstrom; force weapon.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "60",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Malign Wardings(Psychic)",
            "description": "While this model is leading a unit, models in that unit have the Feel No Pain 4+ ability against Psychic Attacks.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Psychic Barrier (Psychic)",
            "description": "At the start of your opponent’s Shooting phase, you can roll one D6: on a 1, this Psyker’s unit suffers D3 mortal wounds; on a 2+, until the end of the phase, models in this Psyker’s unit have a 4+ invulnerable save.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "3",
          "sv": "5+",
          "w": "3",
          "ld": "7+",
          "oc": "1",
          "name": "Primaris Psyker",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Laspistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Psychic Maelstrom – witchfire",
              "keywords": ["blast", "devastating wounds", "psychic"],
              "range": "18\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "6",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Psychic Maelstrom – focused witchfire",
              "keywords": [
                "blast",
                "devastating wounds",
                "hazardous",
                "psychic"
              ],
              "range": "18\"",
              "attacks": "D6+3",
              "skill": "3+",
              "strength": "6",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Force weapon",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "-1",
              "damage": "D3"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Psyker",
        "Imperium",
        "Primaris Psyker"
      ],
      "factions": ["Astra Militarum"],
      "leads": {
        "units": [
          "Cadian Shock Troops",
          "Catachan Jungle Fighters",
          "Death Korps of Krieg",
          "Infantry Squad",
          "Kasrkin",
          "Tempestus Scions"
        ],
        "extra": ""
      }
    },
    {
      "id": "31200cc0-d0e1-5bec-937d-751c864e707b",
      "name": "Quartermaster Cadre Squad",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "This unit can be attached to the following units: ■ Death Korps of Krieg ■ Infantry Squad",
      "composition": ["1 Quartermaster Revenant", "4 Medicae Servitors"],
      "loadout": "T  he Quartermaster Revenant is equipped with: Quartermaster's pistol; Quartermaster's close combat weapon. Every Medicae Servitor is equipped with: medical scalpels.",
      "wargear": ["None"],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Medicae Medi-packs",
            "description": "Whilst this unit contains one or more Medicae Servitors, models in this unit have the Feel No Pain 5+ ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Mindlock",
            "description": "While this unit contains a Quartermaster Revenant model, improve the Weapon Skill characteristic of this unit's Medical scalpels by 1.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "3",
          "sv": "4+",
          "w": "3",
          "ld": "7+",
          "oc": "1",
          "name": "QUARTERMASTER REVENANT",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "6\"",
          "t": "3",
          "sv": "4+",
          "w": "1",
          "ld": "8+",
          "oc": "0",
          "name": "MEDICAE SERVITOR",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Quartermaster’s pistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "3",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Medical scalpels",
              "keywords": [],
              "range": "Melee",
              "attacks": "1",
              "skill": "5+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Quartermaster’s close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "4",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "ALL MODELS: Infantry",
        "Imperium",
        "Grenades",
        "Regiment",
        "uartermaster Cadre Squad | QUARTERMASTER REVENANT: Character"
      ],
      "factions": ["Astra Militarum"],
      "leads": {
        "units": ["Death Korps of Krieg", "Infantry Squad"],
        "extra": ""
      }
    },
    {
      "id": "ba31f169-9b19-5658-8e1c-ca15ecf43fde",
      "name": "Rapier Laser Destroyer Battery",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1-3 Rapier Laser Destroyers"],
      "loadout": "Every model is equipped with: laser destroyer; close combat weapon. Designer’s Note: Place two Artillery Crew tokens next to each Rapier Laser Destroyer model when this unit is first set up, removing one each time its Rapier Laser Destroyer model loses a wound (a Rapier Laser Destroyer model itself is considered to represent its final wound).",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "30",
          "active": true
        },
        {
          "models": "2",
          "cost": "60",
          "active": true
        },
        {
          "models": "3",
          "cost": "90",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Powerful Volley",
            "description": "While this unit is being affected by an Order, provided it Remained Stationary this turn, Heavy weapons equipped by models in this unit have the [LETHAL HITS] ability.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "4",
          "sv": "4+",
          "w": "3",
          "ld": "7+",
          "oc": "1",
          "name": "Rapier Laser Destroyer Battery",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Laser destroyer",
              "keywords": ["heavy", "twin-linked"],
              "range": "36\"",
              "attacks": "2",
              "skill": "5+",
              "strength": "12",
              "ap": "-2",
              "damage": "D6+1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Artillery",
        "Grenades",
        "Regiment",
        "Imperium",
        "Rapier Laser Destroyer Battery"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "39883be9-51a6-568e-a219-8d8410c3f7f9",
      "name": "Ratling Snipers",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["5 Ratling Snipers"],
      "loadout": "Every model is equipped with: sniper rifle; close combat weapon.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "70",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Infiltrators", "Stealth"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Shoot Sharp and Scarper",
            "description": "In your Shooting phase, after this unit has shot, if it is not within Engagement Range of any enemy units, it can make a Normal move as if it were your Movement phase. If it does, until the end of the turn, this unit is not eligible to declare a charge.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "2",
          "sv": "6+",
          "w": "1",
          "ld": "8+",
          "oc": "1",
          "name": "Ratling Snipers",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Sniper rifle",
              "keywords": ["heavy", "precision"],
              "range": "36\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "4",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "1",
              "skill": "5+",
              "strength": "2",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Imperium", "Ratling Snipers"],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "ba1233c4-f392-5a45-a1d7-1359f5f4c6fa",
      "name": "Regimental Attachés",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": [
        "1 Master of Ordnance, 1 Officer of the Fleet and 1 Astropath."
      ],
      "loadout": "The Master of Ordnance and Officer of the Fleet are both equipped with: laspistol; close combat weapon. The Astropath is equipped with: laspistol; Astropath’s stave.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "40",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Artillery Commander",
            "description": "At the start of your Shooting phase, select one enemy unit within 30\" of and visible to this unit’s Master of Ordnance model that has not already been selected for this ability this phase. Until the end of the phase, Blast weapons equipped by friendly Astra Militarum Artillery models have the [SUSTAINED HITS 1] ability when targeting that unit.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Aeronautica Commander",
            "description": "At the start of your Shooting phase, select one enemy unit within 30\" of and visible to this unit’s Officer of the Fleet model. Until the end of the phase, each time a friendly Astra Militarum Aircraft model makes a ranged attack that targets that unit, add 1 to the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Divination (Psychic)",
            "description": "Enemy units that are set up on the battlefield as Reinforcements cannot be set up within 12\" of this unit’s Astropath model.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "ATTACHÉS",
            "description": "At the start of the Declare Battle Formations step, this unit must join one Command Squad unit from your army (a Command Squad unit cannot have more than one Regimental Attaché unit joined to it). For the rest of the battle, every model in this unit counts as part of that Command Squad unit, and its Starting Strength is increased accordingly. If it is not possible to join a Regimental Attaché unit to a Command Squad in this way, it does not take part in the battle and counts as having been destroyed. While this unit is joined to a unit, it can embark within any Transport that unit can embark within.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "3",
          "sv": "5+",
          "w": "1",
          "ld": "7+",
          "oc": "1",
          "name": "Regimental Attachés",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Laspistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "1",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Astropath’s stave",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "1",
              "skill": "4+",
              "strength": "6",
              "ap": "-1",
              "damage": "D3"
            }
          ]
        }
      ],
      "keywords": [
        "ALL MODELS:",
        "Infantry",
        "Imperium",
        "Regimental Attachés",
        "ASTROPATH:",
        "Psyker"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "dcda8d1a-8d70-5055-a186-c81a04af7e39",
      "name": "Regimental Enginseer",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Cadian Shock Troops ■ Catachan Jungle Fighters ■ Death Korps of Krieg ■ Infantry Squad ■ Kasrkin ■ Munitorum Servitors",
      "composition": ["1 Regimental Enginseer"],
      "loadout": "This model is equipped with: archeotech pistol; Enginseer axe; servo-arm.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "45",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Enginseer",
            "description": "While this model is within 3\" of one or more friendly Astra Militarum Vehicle units, this model has the Lone Operative ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Omnissiah’s Blessing",
            "description": "In your Command phase, select one friendly Astra Militarum Vehicle model within 3\" of this model. That Vehicle model regains up to D3 lost wounds and, until the start of your next Command phase, that Vehicle model has a 4+ invulnerable save. Each model can only be selected for this ability once per turn.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Vengeance for the Omnissiah",
            "description": "If a friendly Astra Militarum Vehicle model is destroyed within 12\" of this model, until the end of the battle, this model’s Enginseer axe has an Attacks characteristic of 6.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "4",
          "sv": "3+",
          "w": "3",
          "ld": "7+",
          "oc": "1",
          "name": "Regimental Enginseer",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Archeotech pistol",
              "keywords": ["devastating wounds", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Enginseer axe",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "-2",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Servo-arm",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "1",
              "skill": "4+",
              "strength": "6",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Imperium", "Regimental Enginseer"],
      "factions": ["Astra Militarum"],
      "leads": {
        "units": [
          "Cadian Shock Troops",
          "Catachan Jungle Fighters",
          "Death Korps of Krieg",
          "Infantry Squad",
          "Kasrkin",
          "Munitorum Servitors"
        ],
        "extra": ""
      }
    },
    {
      "id": "c065c66d-a4e0-5213-8126-f9f49c9c54db",
      "name": "Regimental Preacher",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Cadian Shock Troops ■ Catachan Jungle Fighters ■ Death Korps of Krieg ■ Infantry Squad ■ Kasrkin ■ Tempestus Scions",
      "composition": ["1 Regimental Preacher"],
      "loadout": "This model is equipped with: holy pistol; power weapon.",
      "wargear": [
        "This model’s power weapon can be replaced with one of the following: ◦ 1 autogun and 1 chainsword ◦  1 Preacher shotgun and 1 chainsword"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "35",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "War Hymns",
            "description": "While this model is leading a unit, melee weapons equipped by models in that unit have the [SUSTAINED HITS 1] ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Holy Piety",
            "description": "Each time this model makes a melee attack, unless this model’s unit is Battle-shocked, you can re-roll the Hit roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "3",
          "sv": "6+",
          "w": "3",
          "ld": "7+",
          "oc": "1",
          "name": "Regimental Preacher",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Autogun",
              "keywords": ["rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Holy pistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Preacher shotgun",
              "keywords": ["assault"],
              "range": "12\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Power weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Imperium",
        "Grenades",
        "Regimental Preacher"
      ],
      "factions": ["Astra Militarum"],
      "leads": {
        "units": [
          "Cadian Shock Troops",
          "Catachan Jungle Fighters",
          "Death Korps of Krieg",
          "Infantry Squad",
          "Kasrkin",
          "Tempestus Scions"
        ],
        "extra": ""
      }
    },
    {
      "id": "c850fd1d-6d33-54bb-b610-d9c90eb3eee7",
      "name": "Rein And Raus",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Rein – Epic Hero", "1 Raus – Epic Hero"],
      "loadout": "Rein is equipped with: sniper rifle; stub pistol; close R combat weapon. Raus is equipped with: demolition charge; stub pistol; close combat weapon.",
      "wargear": ["None"],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Infiltrators", "Lone Operative", "Stealth"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Shoot Sharp and Scarper",
            "description": "In your Shooting phase, after this unit has shot, if it is not within Engagement Range of one or more enemy units, it can make a Normal move. If it does, until the end of the turn, this unit is not eligible to declare a charge.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "The Ratling Twins",
            "description": "While this unit contains 2 models, each time a model in this unit makes a ranged attack, you can re-roll the Hit roll and you can re-roll the Wound roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "2",
          "sv": "6+",
          "w": "1",
          "ld": "8+",
          "oc": "1",
          "name": "Rein And Raus",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Demolition charge",
              "keywords": ["blast", "hazardous", "one shot"],
              "range": "6\"",
              "attacks": "D6+3",
              "skill": "4+",
              "strength": "12",
              "ap": "-2",
              "damage": "2"
            }
          ],
          "abilities": [
            {
              "name": "One Shot",
              "description": "The bearer can only shoot with this weapon once per battle.",
              "showAbility": true,
              "showDescription": true
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Sniper rifle",
              "keywords": ["heavy", "precision"],
              "range": "36\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "4",
              "ap": "-2",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Stub pistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "1",
              "skill": "5+",
              "strength": "2",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Imperium",
        "Character",
        "Epic Hero",
        "Rein and Raus"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "8d01f1ba-a813-5e47-9a04-520b6d74f0e2",
      "name": "Rogal Dorn Battle Tank",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Rogal Dorn Battle Tank"],
      "loadout": "This model is equipped with: castigator gatling cannon; heavy stubber; twin battle cannon; armoured tracks.",
      "wargear": [
        "This model’s twin battle cannon can be replaced with 1 oppressor cannon and 1 co-axial autocannon.",
        "This model’s castigator gatling cannon can be replaced with 1 pulveriser cannon.",
        "This model can be equipped with one of the following: ◦ 2 meltaguns ◦ 2 additional heavy stubbers",
        "This model can be equipped with one of the following: ◦ 2 heavy bolters ◦ 2 multi-meltas"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "285",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Ablative Plating",
            "description": "Once per battle, when an attack is allocated to this model, you change the Damage characteristic of that attack to 0.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-6 WOUNDS REMAINING",
          "description": "While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "12",
          "sv": "2+",
          "w": "18",
          "ld": "7+",
          "oc": "5",
          "name": "Rogal Dorn Battle Tank",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Castigator gatling cannon",
              "keywords": [],
              "range": "24\"",
              "attacks": "12",
              "skill": "4+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Co-axial autocannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "9",
              "ap": "-1",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Meltagun",
              "keywords": ["melta 2"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "9",
              "ap": "-4",
              "damage": "D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Multi-melta",
              "keywords": ["melta 2"],
              "range": "18\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "9",
              "ap": "-4",
              "damage": "D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Oppressor cannon",
              "keywords": ["blast"],
              "range": "72\"",
              "attacks": "D6+3",
              "skill": "4+",
              "strength": "12",
              "ap": "-2",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Pulveriser cannon",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D6",
              "skill": "4+",
              "strength": "9",
              "ap": "-3",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin battle cannon",
              "keywords": ["blast", "twin-linked"],
              "range": "48\"",
              "attacks": "D6+3",
              "skill": "4+",
              "strength": "10",
              "ap": "-1",
              "damage": "3"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "7",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Imperium",
        "Squadron",
        "Smoke",
        "Rogal Dorn Battle Tank"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "efa1c51d-0f81-5ee1-977a-06fe3e91f6fb",
      "name": "Sabre Weapons Battery",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1-2 Sabre Gun Platforms"],
      "loadout": "Every model is equipped with: twin heavy bolter; close combat weapon.",
      "wargear": [
        "Any number of models’ twin heavy bolters can each be replaced with one of the following: ◦ 1 defence searchlight ◦ 1 twin autocannon ◦ 1 twin heavy stubber ◦ 1 twin lascannon"
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [
          {
            "name": "Defence Searchlight",
            "description": "At the start of your Shooting phase, you can select one enemy unit within 24\" and visible to the bearer. Until the end of the phase, that unit cannot have the Benefit of Cover.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": [],
        "faction": [],
        "primarch": [
          {
            "name": "FORTIFICATION",
            "showAbility": true,
            "abilities": [
              {
                "name": "While an enemy unit is only within Engagement Range of one or more Fortifications from your army",
                "description": " ■  That unit can still be selected as the target of ranged attacks, but each time such an attack is made, unless it is made with a Pistol, subtract 1 from the Hit roll. ■  Models in that unit do not need to take Desperate Escape tests due to Falling Back while Battle-shocked, except for those that will move over enemy models when doing so.",
                "showAbility": true,
                "showDescription": true
              }
            ]
          }
        ],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Sentinel Directives",
            "description": "Each time you target this unit with the Fire Overwatch Stratagem, hits are scored on unmodified Hit rolls of 5+ when resolving that Stratagem.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "-",
          "t": "4",
          "sv": "4+",
          "w": "4",
          "ld": "7+",
          "oc": "1",
          "name": "Sabre Weapons Battery",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin autocannon",
              "keywords": ["twin-linked"],
              "range": "48\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "9",
              "ap": "-1",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin heavy bolter",
              "keywords": ["sustained hits 1", "twin-linked"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin heavy stubber",
              "keywords": ["rapid fire 3", "twin-linked"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin lascannon",
              "keywords": ["twin-linked"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "1",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Fortification",
        "Imperium",
        "Artillery",
        "Sabre Weapons Battery"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "e836ff1e-1ea4-5276-bf84-81a5d893a01b",
      "name": "Salamander Command Vehicle",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Salamander Command Vehicle"],
      "loadout": "This model is equipped with: heavy bolter; heavy flamer; armoured tracks.",
      "wargear": [
        "This model can be equipped with 1 hunter-killer missile.",
        "This model can be equipped with one of the following: ◦ 1 heavy stubber ◦ 1 storm bolter"
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Auspex Surveyor",
            "description": "Each time this model has shot, select one enemy unit hit by one or more of those attacks. Until the end of the phase, that unit cannot have the Benefit of Cover.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "12\"",
          "t": "8",
          "sv": "3+",
          "w": "10",
          "ld": "7+",
          "oc": "3",
          "name": "Salamander Command Vehicle",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ],
          "abilities": [
            {
              "name": "One Shot",
              "description": "The bearer can only shoot with this weapon once per battle.",
              "showAbility": true,
              "showDescription": true
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Storm bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Imperium",
        "Squadron",
        "Smoke",
        "Salamander Command Vehicle"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "69a4e895-c893-5424-b3a7-06dc251fab04",
      "name": "Salamander Scout Vehicle",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Salamander Scout Vehicle"],
      "loadout": "This model is equipped with: autocannon; heavy bolter; armoured tracks.",
      "wargear": [
        "This model can be equipped with 1 hunter-killer missile.",
        "This model can be equipped with one of the following: ◦ 1 heavy stubber ◦ 1 storm bolter"
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3", "Scouts 9\""],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Outflank",
            "description": "When this model arrives from Strategic Reserves, it can be set up within your opponent’s deployment zone (all other restrictions still apply).",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "12\"",
          "t": "8",
          "sv": "3+",
          "w": "10",
          "ld": "7+",
          "oc": "3",
          "name": "Salamander Scout Vehicle",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Autocannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "9",
              "ap": "-1",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ],
          "abilities": [
            {
              "name": "One Shot",
              "description": "The bearer can only shoot with this weapon once per battle.",
              "showAbility": true,
              "showDescription": true
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Storm bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Imperium",
        "Squadron",
        "Smoke",
        "Salamander Scout Vehicle"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "0ea8f7c0-0699-5076-9aa1-eaa75e23aef6",
      "name": "Scout Sentinels",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1-3 Scout Sentinels"],
      "loadout": "Every model is equipped with: Militarum multi-laser; close combat weapon.",
      "wargear": [
        "Any number of models can each have their Militarum multi-laser replaced with one of the following: ◦ 1 autocannon ◦ 1 heavy flamer ◦ 1 lascannon ◦ 1 missile launcher ◦ 1 plasma cannon",
        "Any number of models can each be equipped with 1 Sentinel chainsaw.",
        "Any number of models can each be equipped with 1 hunter-killer missile."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "50",
          "active": true
        },
        {
          "models": "2",
          "cost": "100",
          "active": true
        },
        {
          "models": "3",
          "cost": "150",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1", "Scouts 9\""],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Daring Recon",
            "description": "At the start of your Shooting phase, select one enemy unit within 18\" of and visible to this unit. Until the end of the phase, each time a friendly Astra Militarum model makes an attack that targets that unit, re-roll a Hit roll of 1 and, if that attack has the [INDIRECT FIRE] ability, it does not suffer the penalty to the Hit roll for shooting at a target that is not visible to the attacking unit.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "7",
          "sv": "3+",
          "w": "7",
          "ld": "7+",
          "oc": "2",
          "name": "Scout Sentinels",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Autocannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "9",
              "ap": "-1",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ],
          "abilities": [
            {
              "name": "One Shot",
              "description": "The bearer can only shoot with this weapon once per battle.",
              "showAbility": true,
              "showDescription": true
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Lascannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Militarum multi-laser",
              "keywords": [],
              "range": "36\"",
              "attacks": "4",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Missile launcher – frag",
              "keywords": ["blast", "heavy"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Missile launcher – krak",
              "keywords": ["heavy"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "9",
              "ap": "-2",
              "damage": "D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Plasma cannon – standard",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "4+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Plasma cannon – supercharge",
              "keywords": ["blast", "hazardous"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "4+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Sentinel chainsaw",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Imperium",
        "Regiment",
        "Squadron",
        "Smoke",
        "Scout Sentinels"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "83eacf45-4bcf-5b48-b484-d89c58e327ec",
      "name": "Sentinel Powerlifter",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Sentinel Powerlifter"],
      "loadout": "This model is equipped with: powerlifter.",
      "wargear": ["None"],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Powerlifter Charge",
            "description": "Each time this model ends a Charge move, select one enemy unit within Engagement Range of it and roll one D6: on a 2-5, that enemy unit suffers D3 mortal wounds; on a 6, that enemy unit suffers 3 mortal wounds.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "8\"",
          "t": "7",
          "sv": "3+",
          "w": "6",
          "ld": "7+",
          "oc": "2",
          "name": "Sentinel Powerlifter",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Powerlifter",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "10",
              "ap": "-2",
              "damage": "D3"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Imperium",
        "Regiment",
        "Squadron",
        "Smoke",
        "Sentinel Powerlifter"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "288165f1-a3f2-5e85-8643-6111bf083fff",
      "name": "Sergeant Harker",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Catachan Jungle Fighters",
      "composition": ["1 Sergeant Harker – Epic Hero"],
      "loadout": "This model is equipped with: Payback; close combat weapon.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "60",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Feel No Pain 6+", "Leader", "Scouts 6\""],
        "faction": ["Voice of Command"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Harker’s Hellraisers",
            "description": "While this model is leading a unit, each time a ranged attack targets that unit, if the attacking model is more than 12\" away, subtract 1 from the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Payback Time",
            "description": "Once per battle, when this model is selected to shoot, it can use this ability. If it does, until the end of the phase, its Payback weapon has an Attacks characteristic of 6 and the [SUSTAINED HITS 3] ability instead of the [SUSTAINED HITS 1] ability.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "ORDERS",
            "description": " This Officer can issue 1 Order to a Catachan Jungle Fighters unit.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "4",
          "sv": "5+",
          "w": "3",
          "ld": "7+",
          "oc": "1",
          "name": "Sergeant Harker",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Payback",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Epic Hero",
        "Imperium",
        "Grenades",
        "Officer",
        "Sergeant Harker"
      ],
      "factions": ["Astra Militarum"],
      "leads": {
        "units": ["Catachan Jungle Fighters"],
        "extra": ""
      }
    },
    {
      "id": "62baec66-a524-59fc-996c-09704aa94053",
      "name": "Shadowsword",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Shadowsword"],
      "loadout": "T  his model is equipped with: 2 lascannons; twin heavy bolter; 2 twin heavy flamers; volcano cannon; armoured tracks.",
      "wargear": [
        "This model’s 2 twin heavy flamers can be replaced with 2 twin heavy bolters.",
        "This model can be equipped with one of the following: ◦ 2 lascannons and 2 twin heavy bolters ◦ 2 lascannons and 2 twin heavy flamers"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "440",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+2"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Titan-killer",
            "description": "Each time this model makes a ranged attack with its volcano cannon that targets a Monster or Vehicle unit, that attack has the [DEVASTATING WOUNDS] ability.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-8 WOUNDS REMAINING",
          "description": "While this model has 1-8 wounds remaining, subtract 4 from its Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "9\"",
          "t": "13",
          "sv": "2+",
          "w": "24",
          "ld": "7+",
          "oc": "8",
          "name": "Shadowsword",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Lascannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin heavy bolter",
              "keywords": ["sustained hits 1", "twin-linked"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin heavy flamer",
              "keywords": ["ignores cover", "torrent", "twin-linked"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Volcano cannon",
              "keywords": ["blast", "heavy"],
              "range": "96\"",
              "attacks": "D3+1",
              "skill": "4+",
              "strength": "24",
              "ap": "-5",
              "damage": "12"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "8",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Titanic", "Imperium", "Smoke", "Shadowsword"],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "2c3f29b7-300b-58a7-b5a0-17682f0ab772",
      "name": "Sly Marbo",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Sly Marbo – Epic Hero"],
      "loadout": "This model is equipped with: ripper pistol; envenomed blade.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "75",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Infiltrators", "Lone Operative", "Stealth"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "One-man Army",
            "description": "Each time an enemy unit targets a friendly Astra Militarum unit within 3\" of this model with ranged attacks, after that enemy unit has finished making its attacks, this model can shoot as if it were your Shooting phase.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Like Fighting a Shadow",
            "description": "Each time this model has shot, if it is not within Engagement Range of any enemy units, it can make a Normal move as if it were your Movement phase. If it does, until the end of the turn, this model is not eligible to declare a charge.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "LONER",
            "description": "This model cannot be selected as your Warlord.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "3",
          "sv": "5+",
          "w": "4",
          "ld": "7+",
          "oc": "1",
          "name": "Sly Marbo",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Ripper pistol",
              "keywords": ["anti-infantry 2+", "pistol", "precision"],
              "range": "12\"",
              "attacks": "3",
              "skill": "2+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Envenomed blade",
              "keywords": ["anti-infantry 2+", "precision"],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Epic Hero",
        "Imperium",
        "Grenades",
        "Regiment",
        "Sly Marbo"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "723fd6e5-89f4-5f48-be0c-e03c708f24a1",
      "name": "Storm Chimera",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Storm Chimera"],
      "loadout": "This model is equipped with: autocannon; heavy bolter; armoured tracks.",
      "wargear": [
        "This model’s heavy bolter can be replaced with 1 heavy flamer.",
        "This model can be equipped with 1 hunter-killer missile.",
        "This model can be equipped with one of the following: ◦ 1 heavy stubber ◦ 1 storm bolter"
      ],
      "transport": "This model has a transport capacity of 12 Astra Militarum Infantry models. Each Heavy Weapons Team model and Veteran Heavy Weapons Team model takes up the space of 2 models. Each Ogryn model takes up the space of 3 models. It cannot transport Artillery models.",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3", "Firing Deck 2"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Mobile Command Vehicle",
            "description": "In your Command phase, one Officer model embarked within this Transport can issue Orders even though it is not on the battlefield. When doing so, measure distances to and from this Transport.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "9",
          "sv": "3+",
          "w": "11",
          "ld": "7+",
          "oc": "2",
          "name": "Storm Chimera",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Autocannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "9",
              "ap": "-1",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ],
          "abilities": [
            {
              "name": "One Shot",
              "description": "The bearer can only shoot with this weapon once per battle.",
              "showAbility": true,
              "showDescription": true
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Storm bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Imperium",
        "Squadron",
        "Transport",
        "Dedicated Transport",
        "Smoke",
        "Storm Chimera"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "07925a21-282f-5b05-89ea-7175aa18f629",
      "name": "Stormblade",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Stormblade"],
      "loadout": "This model is equipped with: 2 lascannons; 1 Stormblade plasma blastgun; 2 twin heavy bolters; armoured tracks.",
      "wargear": [
        "This model’s 2 twin heavy bolters can be replaced with 2 twin heavy flamers.",
        "This model can be equipped with 1 hunter-killer missile.",
        "This model can be equipped with one of the following: ◦ 1 heavy stubber ◦ 1 storm bolter",
        "This model can be equipped with one of the following: ◦ 2 lascannons and 2 twin heavy bolters ◦ 2 lascannons and 2 twin heavy flamers"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "415",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+2"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Close-range Devastation",
            "description": "Each time this model makes a ranged attack with its Stormblade plasma blastgun that targets a unit within half range, you can re-roll the Hit roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-8 WOUNDS REMAINING",
          "description": "While this model has 1-8 wounds remaining, subtract 4 from its Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "9\"",
          "t": "13",
          "sv": "2+",
          "w": "24",
          "ld": "7+",
          "oc": "8",
          "name": "Stormblade",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ],
          "abilities": [
            {
              "name": "One Shot",
              "description": "The bearer can only shoot with this weapon once per battle.",
              "showAbility": true,
              "showDescription": true
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Lascannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Storm bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Stormblade plasma blastgun – standard",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6+3",
              "skill": "4+",
              "strength": "9",
              "ap": "-2",
              "damage": "3"
            },
            {
              "active": true,
              "name": "Stormblade plasma blastgun – supercharge",
              "keywords": ["blast", "hazardous"],
              "range": "48\"",
              "attacks": "D6+3",
              "skill": "4+",
              "strength": "10",
              "ap": "-3",
              "damage": "4"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin heavy bolter",
              "keywords": ["sustained hits 1", "twin-linked"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin heavy flamer",
              "keywords": ["ignores cover", "torrent", "twin-linked"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "8",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Titanic", "Imperium", "Smoke", "Stormblade"],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "4c3c3338-8ac7-5542-b413-755736d151db",
      "name": "Stormlord",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Stormlord"],
      "loadout": "This model is equipped with: 2 heavy stubbers; 2 lascannons; twin heavy bolter; 2 twin heavy flamers; vulcan mega-bolter; armoured tracks",
      "wargear": [
        "This model’s 2 twin heavy flamers can be replaced with 2 twin heavy bolters.",
        "This model can be equipped with one of the following: ◦ 2 lascannons and 2 twin heavy bolters ◦ 2 lascannons and 2 twin heavy flamers"
      ],
      "transport": "This model has a transport capacity of 40 Astra Militarum Infantry models. Each Heavy Weapons Team model and Veteran Heavy Weapons Team model takes up the space of 2 models. Each Ogryn model takes up the space of 3 models. It cannot transport Artillery models.",
      "points": [
        {
          "models": "1",
          "cost": "460",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+2", "Firing Deck 24"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Mount Up!",
            "description": "At the end of your opponent’s Movement phase, if there are no models currently embarked within this Transport, you can select one friendly Astra Militarum Infantry unit (excluding Artillery units) that is wholly within 6\" of this Transport. Unless that unit is within Engagement Range of one or more enemy units, it can embark within this Transport.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-8 WOUNDS REMAINING",
          "description": "While this model has 1-8 wounds remaining, subtract 4 from its Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "9\"",
          "t": "13",
          "sv": "2+",
          "w": "24",
          "ld": "7+",
          "oc": "8",
          "name": "Stormlord",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Lascannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin heavy bolter",
              "keywords": ["sustained hits 1", "twin-linked"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin heavy flamer",
              "keywords": ["ignores cover", "torrent", "twin-linked"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Vulcan mega-bolter",
              "keywords": ["sustained hits 1"],
              "range": "48\"",
              "attacks": "20",
              "skill": "4+",
              "strength": "6",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "8",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Titanic",
        "Imperium",
        "Transport",
        "Smoke",
        "Stormlord"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "2cc958fb-b677-5085-885d-3c78a6d5200c",
      "name": "Stormsword",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Stormsword"],
      "loadout": "This model is equipped with: 2 lascannons; Stormsword siege cannon; twin heavy bolter; 2 twin heavy flamers; armoured tracks.",
      "wargear": [
        "This model’s 2 twin heavy flamers can be replaced with 2 twin heavy bolters.",
        "This model can be equipped with one of the following: ◦ 2 lascannons and 2 twin heavy bolters ◦ 2 lascannons and 2 twin heavy flamers"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "520",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+2"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Concussive Wave",
            "description": "In your Shooting phase, just after selecting a target for this model’s Stormsword siege cannon, roll one D6 for the target unit and every other unit within 3\" of that unit: on a 5+, the unit being rolled for is struck by a concussive wave. After this model has finished making its attacks against that target unit this phase, each unit struck by a concussive wave suffers D3 mortal wounds.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-8 WOUNDS REMAINING",
          "description": "While this model has 1-8 wounds remaining, subtract 4 from its Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "9\"",
          "t": "13",
          "sv": "2+",
          "w": "24",
          "ld": "7+",
          "oc": "8",
          "name": "Stormsword",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Lascannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Stormsword siege cannon",
              "keywords": ["blast", "ignores cover"],
              "range": "48\"",
              "attacks": "D6+6",
              "skill": "4+",
              "strength": "16",
              "ap": "-4",
              "damage": "D6+2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin heavy bolter",
              "keywords": ["sustained hits 1", "twin-linked"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin heavy flamer",
              "keywords": ["ignores cover", "torrent", "twin-linked"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "6",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "8",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Titanic", "Imperium", "Smoke", "Stormsword"],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "35c71ff9-0cf4-52ca-9924-b4c6d5176ca8",
      "name": "Stygies Destroyer Tank Hunter",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Stygies Destroyer Tank Hunter"],
      "loadout": "This model is equipped with: Stygies laser destroyer; armoured tracks.",
      "wargear": [
        "This model can be equipped with 1 hunter-killer missile.",
        "This model can be equipped with one of the following: ◦ 1 heavy stubber ◦ 1 storm bolter"
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Tank Hunter",
            "description": "Each time this model makes a ranged attack that targets a Vehicle unit, add 1 to the Wound roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-4 WOUNDS REMAINING",
          "description": "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "11",
          "sv": "2+",
          "w": "13",
          "ld": "7+",
          "oc": "3",
          "name": "Stygies Destroyer Tank Hunter",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ],
          "abilities": [
            {
              "name": "One Shot",
              "description": "The bearer can only shoot with this weapon once per battle.",
              "showAbility": true,
              "showDescription": true
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Storm bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Stygies laser destroyer",
              "keywords": ["heavy"],
              "range": "72\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "14",
              "ap": "-4",
              "damage": "D6+3"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Imperium",
        "Squadron",
        "Smoke",
        "Stygies Destroyer Tank Hunter"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "be0d234a-e718-5fdd-a738-7dcda061e497",
      "name": "Tank Commander",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Tank Commander"],
      "loadout": "This model is equipped with: lascannon; Leman Russ battle cannon; armoured tracks.",
      "wargear": [
        "This model’s Leman Russ battle cannon can be replaced with one of the following:* ◦ 1 demolisher battle cannon ◦ 1 eradicator nova cannon ◦ 1 executioner plasma cannon ◦ 1 exterminator autocannon ◦ 1 punisher gatling cannon ◦ 1 vanquisher battle cannon",
        "This model’s lascannon can be replaced with one of the following: ◦ 1 heavy bolter ◦ 1 heavy flamer",
        "This model can be equipped with one of the following: ◦ 2 heavy bolters ◦ 2 heavy flamers ◦ 2 multi-meltas ◦ 2 Militarum plasma cannons",
        "This model can be equipped with one of the following: ◦ 1 heavy stubber ◦ 1 storm bolter",
        "This model can be equipped with 1 hunter-killer missile. *   The profiles of these weapons can be found on the Astra Militarum Vehicle Armoury card."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "240",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["Voice of Command"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Vox-net",
            "description": "Each time this model issues an Order, it can issue it to an eligible unit up to 12\" away.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Death Befitting An Officer",
            "description": "When this model is destroyed , roll one D6: on a 2+, do not remove it from play – it can, after the attacking model’s unit has finished making its attacks, shoot as if it were your Shooting phase and as if it had its full wounds remaining. This model is then removed from play.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "ORDERS",
            "description": " This Officer can issue 1 Order to Squadron units. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-4 WOUNDS REMAINING",
          "description": "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "11",
          "sv": "2+",
          "w": "13",
          "ld": "7+",
          "oc": "3",
          "name": "Tank Commander",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ],
          "abilities": [
            {
              "name": "One Shot",
              "description": "The bearer can only shoot with this weapon once per battle.",
              "showAbility": true,
              "showDescription": true
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Lascannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Leman Russ battle cannon",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6+3",
              "skill": "4+",
              "strength": "10",
              "ap": "-1",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Militarum plasma cannon – standard",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "4+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Militarum plasma cannon – supercharge",
              "keywords": ["blast", "hazardous"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "4+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Multi-melta",
              "keywords": ["melta 2"],
              "range": "18\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "9",
              "ap": "-4",
              "damage": "D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Storm bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "7",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Character",
        "Imperium",
        "Smoke",
        "Officer",
        "Tank Commander"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "5f21cbc0-678d-5000-b9f9-b86324439b0f",
      "name": "Tarantula Battery",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1-3 Tarantula Sentry Guns"],
      "loadout": "Every model is equipped with: twin heavy bolter; close combat weapon.",
      "wargear": [
        "Any number of models can each have their twin heavy bolter replaced with 1 twin lascannon."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "35",
          "active": true
        },
        {
          "models": "2",
          "cost": "70",
          "active": true
        },
        {
          "models": "3",
          "cost": "105",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Sentry Programming",
            "description": "You can target this unit with the Fire Overwatch Stratagem for 0CP, and can do so even if you have already used that Stratagem on a different unit this phase.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "-",
          "t": "5",
          "sv": "3+",
          "w": "4",
          "ld": "7+",
          "oc": "0",
          "name": "Tarantula Battery",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin heavy bolter",
              "keywords": ["sustained hits 1", "twin-linked"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin lascannon",
              "keywords": ["twin-linked"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "1",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Imperium", "Tarantula Battery"],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "4a17a23f-a956-5133-a967-8f4fa0705f34",
      "name": "Tauros Assault Vehicle",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Tauros Assault Vehicle"],
      "loadout": "This model is equipped with: heavy flamer; armoured frame.",
      "wargear": [
        "This model’s heavy flamer can be replaced with 1 Tauros grenade launcher.",
        "This model can be equipped with 1 hunter-killer missile."
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1", "Scouts 9\""],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Turbo-boost",
            "description": "Each time this model Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 6\" to the Move characteristic of this model.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "12\"",
          "t": "6",
          "sv": "4+",
          "w": "6",
          "ld": "7+",
          "oc": "2",
          "name": "Tauros Assault Vehicle",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ],
          "abilities": [
            {
              "name": "One Shot",
              "description": "The bearer can only shoot with this weapon once per battle.",
              "showAbility": true,
              "showDescription": true
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Tauros grenade launcher – frag",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D6",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Tauros grenade launcher – krak",
              "keywords": [],
              "range": "24\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "9",
              "ap": "-2",
              "damage": "D3"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured frame",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Regiment",
        "Imperium",
        "Tauros",
        "Tauros Assault Vehicle"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "792c956a-2591-5298-b084-b0d8a3e42eed",
      "name": "Tauros Venator",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Tauros Venator"],
      "loadout": "This model is equipped with: twin multi-laser; armoured frame.",
      "wargear": [
        "This model’s twin multi-laser can be replaced with 1 twin lascannon.",
        "This model can be equipped with 1 hunter-killer missile."
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Mobile Hunter-killer",
            "description": "Each time this model makes an attack that targets a Monster or Vehicle unit, you can re-roll the Wound roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "12\"",
          "t": "6",
          "sv": "4+",
          "w": "6",
          "ld": "7+",
          "oc": "2",
          "name": "Tauros Venator",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ],
          "abilities": [
            {
              "name": "One Shot",
              "description": "The bearer can only shoot with this weapon once per battle.",
              "showAbility": true,
              "showDescription": true
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin lascannon",
              "keywords": ["twin-linked"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin multi-laser",
              "keywords": ["twin-linked"],
              "range": "36\"",
              "attacks": "4",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured frame",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Regiment",
        "Imperium",
        "Tauros",
        "Tauros Venator"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "05755bb1-69d5-599c-b66a-49e1eb8ff541",
      "name": "Taurox",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Taurox"],
      "loadout": "This model is equipped with: twin autocannon; armoured tracks.",
      "wargear": ["This model can be equipped with 1 storm bolter."],
      "transport": "This model has a transport capacity of 12 Astra Militarum Infantry models. Each Heavy Weapons Team model and Veteran Heavy Weapons Team model takes up the space of 2 models. Each Ogryn model takes up the space of 3 models. It cannot transport Artillery models.",
      "points": [
        {
          "models": "1",
          "cost": "65",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Rapid Deployment",
            "description": "Units can disembark from this Transport after it has Advanced. Units that do so count as having made a Normal move that phase, and cannot declare a charge in the same turn, but can otherwise act normally.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "12\"",
          "t": "8",
          "sv": "3+",
          "w": "10",
          "ld": "7+",
          "oc": "2",
          "name": "Taurox",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin autocannon",
              "keywords": ["twin-linked"],
              "range": "48\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "9",
              "ap": "-1",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Storm bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Imperium",
        "Squadron",
        "Transport",
        "Dedicated Transport",
        "Taurox"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "0b4eff47-d171-5168-8bcb-58ab356db8cf",
      "name": "Taurox Prime",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Taurox Prime"],
      "loadout": "This model is equipped with: Taurox battle cannon; twin Taurox hot-shot volley gun; armoured tracks.",
      "wargear": [
        "This model’s Taurox battle cannon can be replaced with one of the following: ◦ 1 Taurox gatling cannon ◦ 1 Taurox missile launcher",
        "This model’s twin Taurox hot-shot volley gun can be replaced with 1 twin autocannon.",
        "This model can be equipped with 1 storm bolter."
      ],
      "transport": "This model has a transport capacity of 12 Militarum Tempestus Infantry or Astra Militarum Infantry Character models.",
      "points": [
        {
          "models": "1",
          "cost": "90",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Fire Support",
            "description": "In your Shooting phase, after this model has shot, select one enemy unit that was hit by one or more of those attacks. Until the end of the phase, each time a friendly model that disembarked from this Transport this turn makes an attack that targets that enemy unit, you can re-roll the Wound roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "12\"",
          "t": "8",
          "sv": "3+",
          "w": "10",
          "ld": "7+",
          "oc": "2",
          "name": "Taurox Prime",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Storm bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Taurox battle cannon",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "8",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Taurox gatling cannon",
              "keywords": [],
              "range": "24\"",
              "attacks": "12",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Taurox missile launcher – frag",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "2D6",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Taurox missile launcher – krak",
              "keywords": [],
              "range": "48\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "9",
              "ap": "-2",
              "damage": "D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin autocannon",
              "keywords": ["twin-linked"],
              "range": "48\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "9",
              "ap": "-1",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin Taurox hot-shot volley gun",
              "keywords": ["rapid fire 3", "twin-linked"],
              "range": "30\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Imperium",
        "Squadron",
        "Transport",
        "Dedicated Transport",
        "Taurox Prime"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "3389bf1d-bb6a-5a66-9789-3d867ceabecb",
      "name": "Tempestus Scions",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "This unit can have up to two Leader units attached to it, provided no more than one of those units is a Command Squad unit. If it does, and this Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": ["1 Tempestor", "4-9 Tempestus Scions"],
      "loadout": "The Tempestor is equipped with: hot-shot laspistol; chainsword. Every Tempestus Scion is equipped with: hot-shot lasgun; close combat weapon.",
      "wargear": [
        "For every 5 models in this unit, up to two Tempestus Scions can each have their hot-shot lasgun replaced with one of the following:* ◦ 1 flamer ◦ 1 grenade launcher ◦ 1 hot-shot volley gun  ◦ 1 meltagun  ◦ 1 plasma gun",
        "1 Tempestus Scion’s hot-shot lasgun can be replaced with 1 hot-shot laspistol and 1 vox-caster.",
        "The Tempestor’s chainsword can be replaced with one of the following: ◦ 1 power fist ◦ 1 power weapon",
        "The Tempestor’s hot-shot laspistol can be replaced with one of the following:** ◦ 1 bolt pistol ◦ 1 plasma pistol *  You cannot select the same weapon from this list more than once per unit, unless this unit contains 10 models, in which case you cannot select the same weapon more than twice  per unit.  **  The profiles of these weapons can be found on the Astra Militarum Infantry Armoury card."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "60",
          "active": true
        },
        {
          "models": "10",
          "cost": "120",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Vox-caster",
            "description": "Each time you target the bearer’s unit with a Stratagem, roll one D6, adding 1 to the result if there are one or more friendly Officer models within 6\": on a 5+, you gain 1CP.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deep Strike"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Storm Troopers",
            "description": "Each time a model in this unit makes an attack, re-roll a Hit roll of 1. If the target of that attack is an enemy unit within range of an objective marker, you can re-roll the Hit roll instead.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "3",
          "sv": "4+",
          "w": "1",
          "ld": "7+",
          "oc": "1",
          "name": "Tempestus Scions",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Grenade launcher – frag",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D3",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Grenade launcher – krak",
              "keywords": [],
              "range": "24\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "9",
              "ap": "-2",
              "damage": "D3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hot-shot lasgun",
              "keywords": ["rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "3",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hot-shot laspistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "3",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hot-shot volley gun",
              "keywords": ["rapid fire 2"],
              "range": "30\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Meltagun",
              "keywords": ["melta 2"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "9",
              "ap": "-4",
              "damage": "D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Plasma gun – standard",
              "keywords": ["rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Plasma gun – supercharge",
              "keywords": ["hazardous", "rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Power fist",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "-2",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Power weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Imperium",
        "Grenades",
        "Regiment",
        "Militarum Tempestus",
        "Tempestus Scions"
      ],
      "factions": ["Astra Militarum"],
      "leadBy": [
        "Commissar",
        "Militarum Tempestus Command Squad",
        "Primaris Psyker",
        "Regimental Preacher"
      ],
      "leads": {
        "units": [
          "This unit can have up to two Leader units attached to it, provided no more than one of those units is a Command Squad unit. If it does, and this Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths."
        ],
        "extra": ""
      }
    },
    {
      "id": "a011f2a0-6787-5be0-96e8-ebeb4415d2b8",
      "name": "Thunderbolt Heavy Fighter",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Thunderbolt Heavy Fighter"],
      "loadout": "This model is equipped with: Thunderbolt nose autocannons; 2 lascannons; armoured hull.",
      "wargear": [
        "This model can be equipped with 1 Thunderbolt hellstrike rack."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "190",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Fighter Craft",
            "description": "Each time this model makes a ranged attack that targets a unit that can Fly, add 1 to the Hit roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-5 WOUNDS REMAINING",
          "description": "While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "20+\"",
          "t": "10",
          "sv": "3+",
          "w": "15",
          "ld": "7+",
          "oc": "0",
          "name": "Thunderbolt Heavy Fighter",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Lascannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Thunderbolt hellstrike rack",
              "keywords": ["anti-fly 2+"],
              "range": "48\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "10",
              "ap": "-3",
              "damage": "D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Thunderbolt nose autocannons",
              "keywords": ["twin-linked"],
              "range": "48\"",
              "attacks": "4",
              "skill": "4+",
              "strength": "9",
              "ap": "-1",
              "damage": "3"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured hull",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "8",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Fly",
        "Aircraft",
        "Imperium",
        "Thunderbolt Heavy Fighter"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "5ce20c8b-d7fc-5873-b77f-1d9dba73265c",
      "name": "Trojan Support Vehicle",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Trojan Support Vehicle"],
      "loadout": "This model is equipped with: heavy bolter; armoured tracks.",
      "wargear": [
        "This model’s heavy bolter can be replaced with 1 heavy flamer.",
        "This model can be equipped with 1 hunter-killer missile."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "80",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Support Vehicle",
            "description": "In your Command phase, select one friendly Astra Militarum Vehicle model within 3\" of this model. That Vehicle model regains up to D3 lost wounds and, until the start of your next Command phase, each time that Vehicle model makes an attack, re-roll a Hit roll of 1. The same Vehicle model cannot be selected for both this ability and the Regimental Enginseer's Omnissiah’s Blessing ability in the same turn, and each model can only be selected for this ability once per Command phase.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "9",
          "sv": "3+",
          "w": "11",
          "ld": "7+",
          "oc": "2",
          "name": "Trojan Support Vehicle",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ],
          "abilities": [
            {
              "name": "One Shot",
              "description": "The bearer can only shoot with this weapon once per battle.",
              "showAbility": true,
              "showDescription": true
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Squadron",
        "Smoke",
        "Imperium",
        "Trojan Support Vehicle"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "fc122308-0133-5f4a-a07c-587b9e32791f",
      "name": "Ursula Creed",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Cadian Shock Troops ■ Infantry Squad ■ Kasrkin",
      "composition": ["1 Ursula Creed – Epic Hero"],
      "loadout": "This model is equipped with: Duty and Vengeance; power weapon.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "55",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Voice of Command"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Lord Castellan",
            "description": "While this model is leading a unit, that unit can be affected by up to two different Orders at the same time.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Tactical Genius",
            "description": "Once per battle round, one Regiment unit from your army within 12\" of this model can be targeted with a Stratagem for 0CP, even if another unit from your army has already been targeted with that Stratagem this phase.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "ORDERS",
            "description": " This Officer can issue up to 2 Orders to Regiment units.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "damaged": {
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "3",
          "sv": "4+",
          "w": "4",
          "ld": "7+",
          "oc": "1",
          "name": "Ursula Creed",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Duty and Vengeance",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "4",
              "skill": "3+",
              "strength": "5",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Power weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "4",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Epic Hero",
        "Imperium",
        "Officer",
        "Ursula Creed"
      ],
      "factions": ["Astra Militarum"],
      "leads": {
        "units": ["Cadian Shock Troops", "Infantry Squad", "Kasrkin"],
        "extra": ""
      }
    },
    {
      "id": "331e84a5-47be-505c-99d9-6d9bed5f45f3",
      "name": "Valdor",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Valdor"],
      "loadout": "This model is equipped with: autocannon; Valdor neutron laser; armoured tracks.",
      "wargear": [
        "This model’s autocannon can be replaced with one of the following: ◦ 1 heavy bolter ◦  1 heavy flamer ◦ 1 lascannon",
        "This model can be equipped with 1 hunter-killer missile.",
        "This model can be equipped with one of the following: ◦ 1 heavy stubber ◦ 1 storm bolter"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "285",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+2"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Power Overload",
            "description": "Each time this model makes an attack that targets a Monster or Vehicle unit, you can re-roll the Damage roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-7 WOUNDS REMAINING",
          "description": "While this model has 1-7 wounds remaining, subtract 4 from its Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "9\"",
          "t": "13",
          "sv": "2+",
          "w": "20",
          "ld": "7+",
          "oc": "8",
          "name": "Valdor",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Autocannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "9",
              "ap": "-1",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ],
          "abilities": [
            {
              "name": "One Shot",
              "description": "The bearer can only shoot with this weapon once per battle.",
              "showAbility": true,
              "showDescription": true
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Lascannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Storm bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Valdor neutron laser",
              "keywords": ["heavy"],
              "range": "48\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "16",
              "ap": "-4",
              "damage": "D6+1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "8",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Titanic", "Imperium", "Smoke", "Valdor"],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "e13c0399-951f-5348-9403-5b088ba94d19",
      "name": "Valkyrie",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Valkyrie"],
      "loadout": "This model is equipped with: hellstrike missiles; Militarum multi-laser; armoured hull.",
      "wargear": [
        "This model’s Militarum multi-laser can be replaced with 1 lascannon.",
        "This model’s hellstrike missiles can be replaced with 2 multiple rocket pods.",
        "This model can be equipped with 2 heavy bolters."
      ],
      "transport": "This model has a transport capacity of 12 Astra Militarum Infantry models. Each Heavy Weapons Team model and Veteran Heavy Weapons Team model takes up the space of 2 models. Each Ogryn model takes up the space of 3 models. It cannot transport Artillery models.",
      "points": [
        {
          "models": "1",
          "cost": "200",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6", "Hover"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Grav Chute Insertion",
            "description": "At the end of your opponent’s Movement phase, one or more units embarked within this Transport can disembark from it, provided every model in each of those disembarking units has the Deep Strike ability.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-5 WOUNDS REMAINING",
          "description": "While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "20+\"",
          "t": "10",
          "sv": "2+",
          "w": "14",
          "ld": "7+",
          "oc": "0",
          "name": "Valkyrie",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hellstrike missiles",
              "keywords": ["anti-fly 2+"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "10",
              "ap": "-3",
              "damage": "D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Lascannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Militarum multi-laser",
              "keywords": [],
              "range": "36\"",
              "attacks": "4",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Multiple rocket pod",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D6",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured hull",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Fly",
        "Aircraft",
        "Imperium",
        "Transport",
        "Valkyrie"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "b8ac0db1-3539-574c-8876-819e33d54986",
      "name": "Valkyrie Sky Talon",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Valkyrie Sky Talon"],
      "loadout": "This model is equipped with: heavy bolter; 2 hellstrike missiles; armoured hull.",
      "wargear": [
        "This model’s 2 hellstrike missiles can be replaced with 2 multiple rocket pods."
      ],
      "transport": "This model has a transport capacity of 1 Tauros model or 2 Astra Militarum Walker models.",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6", "Hover"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Fire Support",
            "description": "In your Shooting phase, after this model has shot, select one enemy unit it scored one or more hits against this phase. Until the end of the phase, each time a friendly model that disembarked from this Transport this turn makes an attack that targets that enemy unit, you can re-roll the Wound roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-5 WOUNDS REMAINING",
          "description": "While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "20+\"",
          "t": "10",
          "sv": "2+",
          "w": "14",
          "ld": "7+",
          "oc": "0",
          "name": "Valkyrie Sky Talon",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hellstrike missile",
              "keywords": ["anti-fly 2+"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "10",
              "ap": "-3",
              "damage": "D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Multiple rocket pod",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D6",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured hull",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Fly",
        "Aircraft",
        "Imperium",
        "Transport",
        "Valkyrie Sky Talon"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "c167b573-24e1-5c9e-a99b-0e7a90137cc7",
      "name": "Vendetta Gunship",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Vendetta Gunship"],
      "loadout": "This model is equipped with: 3 Vendetta twin lascannons; armoured hull.",
      "wargear": [
        "2 of this model’s Vendetta twin lascannons can be replaced with 1 Vendetta hellstrike rack.",
        "This model can be equipped with 2 heavy bolters."
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3", "Hover"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Anti-armour Gunship",
            "description": "Each time a ranged attack made by this model is allocated to a Monster or Vehicle model, re-roll a Damage roll of 1.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-5 WOUNDS REMAINING",
          "description": "While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "20+\"",
          "t": "10",
          "sv": "2+",
          "w": "14",
          "ld": "7+",
          "oc": "0",
          "name": "Vendetta Gunship",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Vendetta hellstrike rack",
              "keywords": ["anti-fly 2+"],
              "range": "48\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "10",
              "ap": "-3",
              "damage": "D6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Vendetta twin lascannon",
              "keywords": ["twin-linked"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured hull",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Fly",
        "Aircraft",
        "Imperium",
        "Transport",
        "Vendetta Gunship"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "021f984f-fded-54cd-8faf-1ce147bcaecf",
      "name": "Voss-pattern Lightning",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Voss-pattern Lightning"],
      "loadout": "This model is equipped with: 2 lascannons; armoured hull.",
      "wargear": [
        "This model can be equipped with 1 Lightning hellstrike rack."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "130",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Agile Dogfighter",
            "description": "Each time an attack targets this model, subtract 1 from the Hit roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-5 WOUNDS REMAINING",
          "description": "While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "20+\"",
          "t": "9",
          "sv": "3+",
          "w": "14",
          "ld": "7+",
          "oc": "0",
          "name": "Voss-pattern Lightning",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Lascannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Lightning hellstrike rack",
              "keywords": ["anti-fly 2+"],
              "range": "48\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "10",
              "ap": "-3",
              "damage": "D6"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured hull",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "8",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": ".",
              "keywords": []
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Fly",
        "Aircraft",
        "Imperium",
        "Voss-pattern Lightning"
      ],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "4fe87652-e49a-54de-8d0c-b60b00aa95ed",
      "name": "Vulture Gunship",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Vulture Gunship"],
      "loadout": "This model is equipped with: heavy bolter; 2 multiple rocket pods; Vulture hellstrike racks; armoured hull.",
      "wargear": [
        "This model’s 2 multiple rocket pods and Vulture hellstrike rack can be replaced with 2 Vulture gatling cannons."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "225",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6", "Hover"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Gunship Barrage",
            "description": "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks. That enemy unit must take a Battle-shock test.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-5 WOUNDS REMAINING",
          "description": "While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "20+\"",
          "t": "10",
          "sv": "2+",
          "w": "14",
          "ld": "7+",
          "oc": "0",
          "name": "Vulture Gunship",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Multiple rocket pod",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D6",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Vulture gatling cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
              "attacks": "18",
              "skill": "4+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Vulture hellstrike rack",
              "keywords": ["anti-fly 2+"],
              "range": "48\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "10",
              "ap": "-3",
              "damage": "D6"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured hull",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Fly", "Aircraft", "Imperium", "Vulture Gunship"],
      "factions": ["Astra Militarum"]
    },
    {
      "id": "24e3f75d-1609-5e2e-802e-6c8871b6b028",
      "name": "Wyvern",
      "source": "40k-10e",
      "faction_id": "AM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Wyvern"],
      "loadout": "This model is equipped with: heavy bolter; Wyvern quad stormshard mortar; armoured tracks.",
      "wargear": [
        "This model’s heavy bolter can be replaced with 1 heavy flamer.",
        "This model can be equipped with 1 hunter-killer missile."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "110",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Suppression Bombardment",
            "description": "In your Shooting phase, after this model has shot, select one enemy unit (excluding Monster and Vehicle units) that was hit by one or more attacks made with this model’s Wyvern quad stormshard mortar this phase. Until the start of your next turn, that enemy unit is suppressed. While a unit is suppressed, each time a model in that unit makes an attack, subtract 1 from the Hit roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-4 WOUNDS REMAINING",
          "description": "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "9",
          "sv": "3+",
          "w": "11",
          "ld": "7+",
          "oc": "3",
          "name": "Wyvern",
          "showDamagedMarker": true,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heavy flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ],
          "abilities": [
            {
              "name": "One Shot",
              "description": "The bearer can only shoot with this weapon once per battle.",
              "showAbility": true,
              "showDescription": true
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Wyvern quad stormshard mortar",
              "keywords": [
                "blast",
                "ignores cover",
                "heavy",
                "indirect fire",
                "twin-linked"
              ],
              "range": "48\"",
              "attacks": "2D6",
              "skill": "4+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Artillery",
        "Imperium",
        "Squadron",
        "Smoke",
        "Wyvern"
      ],
      "factions": ["Astra Militarum"]
    }
  ],
  "colours": {
    "banner": "#0a2118",
    "header": "#324935"
  }
}