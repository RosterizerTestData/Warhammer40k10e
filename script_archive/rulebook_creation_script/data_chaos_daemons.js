window.data = window.data || {};
window.data.CD = {
  "id": "CD",
  "link": "https://game-datacards.eu",
  "name": "Chaos Daemons",
  "is_subfaction": false,
  "parent_id": "",
  "allied_factions": ["QT"],
  "stratagems": [
    {
      "name": "CORRUPT REALSPACE",
      "cost": 1,
      "type": "Strategic Ploy",
      "detachment": "Demonic Incursion",
      "turn": "either",
      "phase": ["command"],
      "fluff": "Daemons instinctively feel the need\nto despoil and corrupt every corner of\nrealspace, the better to sustain their\notherworldly forms.",
      "when": "Start of any Command phase.",
      "target": "One Legiones Daemonica unit\nfrom your army that is within range of an\nobjective marker you control.",
      "effect": "That objective marker is said to\nbe Corrupted and remains under your\ncontrol, even if you have no models within\nrange of it, until your opponent controls it\nat the start or end of any turn. In addition,\nwhile an objective marker is Corrupted\nand under your control, the area of the\nbattlefield within 6\" of that objective\nmarker is considered to be within your\narmy’s Shadow of Chaos. ",
      "restrictions": "",
      "id": "76f27b4a-ec7b-53d8-9f5a-7da514d5624d"
    },
    {
      "name": "WARP SURGE",
      "cost": 1,
      "type": "Strategic Ploy",
      "detachment": "Demonic Incursion",
      "turn": "your",
      "phase": ["charge"],
      "fluff": "The winds of the warp blow strong,\ninvigorating daemonkind and lending\nthem supernatural speed and ferocity.",
      "when": "Your Charge phase.",
      "target": "One Legiones Daemonica unit\nfrom your army that is within your army’s\nShadow of Chaos.",
      "effect": "Until the end of the phase, your\nunit is eligible to declare a charge even if it\nAdvanced this turn",
      "restrictions": "",
      "id": "d80478bb-f1bc-5dd2-ada0-41786eb3d94f"
    },
    {
      "name": "DRAUGHT OF TERROR",
      "cost": 1,
      "type": "Battle Tactic",
      "detachment": "Demonic Incursion",
      "turn": "either",
      "phase": ["shooting", "fight"],
      "fluff": "The swelling fear of their mortal prey serves\nas an intoxicating elixir to the daemonic\nfollowers, each draught invigorating their\nforms with deadly power.",
      "when": "Your Shooting phase or the\nFight phase.",
      "target": "One Legiones Daemonica\nunit from your army that has not been\nselected to shoot or fight this phase.",
      "effect": "Until the end of the phase,\nimprove the Armour Penetration\ncharacteristic of weapons equipped by\nmodels in that unit by 1. In addition,\nuntil the end of the phase, each time\nsuch a weapon targets a unit that is\nBattle-shocked, you can re-roll the\nWound roll.",
      "restrictions": "",
      "id": "0dec2827-36b3-5779-974d-dffb04b7ebac"
    },
    {
      "name": "DENIZENS OF THE WARP",
      "cost": 1,
      "type": "Strategic Ploy",
      "detachment": "Demonic Incursion",
      "turn": "either",
      "phase": ["any"],
      "fluff": "Ever lurking in the warp, daemons will\nwait until the barriers between realms thin\nbefore tearing their way into realspace.",
      "when": "Your Movement phase.",
      "target": "One Legiones Daemonica unit\nfrom your army that is arriving using the\nDeep Strike ability this phase.",
      "effect": "Your unit can be set up anywhere\non the battlefield that is more than 3\"\nhorizontally away from all enemy models.",
      "restrictions": "A unit targeted by this\nStratagem is not eligible to declare a\ncharge in the same turn.",
      "id": "95fc8887-3145-563c-880b-f964210c533f"
    },
    {
      "name": "THE REALM OF CHAOS",
      "cost": 1,
      "type": "Battle Tactic",
      "detachment": "Demonic Incursion",
      "turn": "opponents",
      "phase": ["endOfTurn"],
      "fluff": "When the energies of the warp bleed into\nrealspace, the Legiones Daemonica can rip\nopen portals in seeming thin-air, returning\nto their hellscapes only to rematerialise\namidst their foes a heartbeat later.",
      "when": "End of your opponent’s turn.",
      "target": "Up to two Legiones Daemonica\nunits from your army that are within\nyour army’s Shadow of Chaos, or one\nother Legiones Daemonica unit from\nyour army.",
      "effect": "Remove the targeted units\nfrom the battlefield and place them into\nStrategic Reserves. They will arrive back\non the battlefield in the Reinforcements\nstep of your next Movement phase using\nthe Deep Strike ability.",
      "restrictions": "You cannot target units\nthat are within Engagement Range of one\nor more enemy units with this Stratagem",
      "id": "f877e137-62fb-53bc-b58b-02ed5f5f7f60"
    },
    {
      "name": "DAEMONIC INVULNERABILITY",
      "cost": 1,
      "type": "Battle Tactic",
      "detachment": "Demonic Incursion",
      "turn": "opponents",
      "phase": ["shooting"],
      "fluff": "Daemons are madness given form. Their\nvery bodies are fashioned from the stuff\nof the warp, and are difficult to destroy\nthrough conventional means.",
      "when": "Your opponent’s Shooting phase,\njust after an enemy unit has selected\nits targets.",
      "target": "One Legiones Daemonica unit\nfrom your army that was selected as\nthe target of one or more of that enemy\nunit’s attacks.",
      "effect": "Until the end of the phase, each\ntime an invulnerable saving throw is made\nfor a model in your unit, re-roll a saving\nthrow of 1.",
      "restrictions": "",
      "id": "eb29065e-53a3-5d26-9adc-612864557b22"
    }
  ],
  "enhancements": [
    {
      "name": "A’rgath, the King of Blades",
      "description": "Khorne Legiones Daemonica model only. Add 1 to the Attacks and Strength characteristics of the bearer’s melee weapons. While the bearer is within your army’s Shadow of Chaos, add 2 to the Attacks and Strength characteristics of the bearer’s melee weapons instead.",
      "keywords": ["Khorne", "Legiones Daemonica"],
      "excludes": [],
      "cost": "20"
    },
    {
      "name": "Soulstealer",
      "description": "Slaanesh Legiones Daemonica model only. Each time the bearer destroys an enemy model with a melee attack, roll one D6, adding 1 to the result if the bearer is within your army’s Shadow of Chaos. On a 4+, the bearer regains 1 lost wound.",
      "keywords": ["Slaanesh", "Legiones Daemonica"],
      "excludes": [],
      "cost": "15"
    },
    {
      "name": "The Endless Gift",
      "description": "Nurgle Legiones Daemonica model only. The bearer has the Feel No Pain 5+ ability. While the bearer is within your army’s Shadow of Chaos, the bearer has the Feel No Pain 4+ ability instead.",
      "keywords": ["Nurgle", "Legiones Daemonica"],
      "excludes": [],
      "cost": "30"
    },
    {
      "name": "The Everstave",
      "description": "Tzeentch Legiones Daemonica model only. Add 1 to the Strength characteristic of the bearer’s ranged weapons and increase the Range characteristic of such weapons by 3\". While the bearer is within your army’s Shadow of Chaos, add 2 to the Strength characteristic of the bearer’s ranged weapons and increase the Range characteristic of such weapons by 6\" instead.",
      "keywords": ["Tzeentch", "Legiones Daemonica"],
      "excludes": [],
      "cost": "25"
    }
  ],
  "datasheets": [
    {
      "id": "81f57600-0efe-533d-90c3-b15d60a1ce7e",
      "name": "Aetaos'rau'keres",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Aetaos'rau'keres – Epic Hero"],
      "loadout": "This model is equipped with: Bolt of Tzeentch; staff of cataclysm; warpfire talons.",
      "wargear": ["None"],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6", "Deep Strike"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Emissary of the Great Mutator (Aura)",
            "description": "While a friendly Tzeentch Legiones Daemonica unit is within 6\" of this model, you can re-roll Battle-shock tests taken for that unit.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Master of Magicks (Psychic)",
            "description": "In your Shooting phase, select one of the following abilities: [IGNORES COVER]; [LETHAL HITS]; [SUSTAINED HITS D3]. Until the end of the phase, this model’s ranged weapon has that ability.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-8 WOUNDS REMAINING",
          "description": "While this model has 1-8 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "12\"",
          "t": "10",
          "sv": "6+",
          "w": "24",
          "ld": "6+",
          "oc": "6",
          "name": "Aetaos'rau'keres",
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
              "name": "Bolt of Tzeentch – focused witchfire",
              "keywords": ["hazardous", "psychic"],
              "range": "24\"",
              "attacks": "9",
              "skill": "2+",
              "strength": "10",
              "ap": "-2",
              "damage": "D3"
            },
            {
              "active": true,
              "name": "Bolt of Tzeentch – witchfire",
              "keywords": ["psychic"],
              "range": "24\"",
              "attacks": "9",
              "skill": "2+",
              "strength": "10",
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
              "name": "Staff of cataclysm",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "6",
              "skill": "3+",
              "strength": "8",
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
              "name": "Warpfire talons",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "12",
              "skill": "3+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Character",
        "Epic Hero",
        "Titanic",
        "Towering",
        "Fly",
        "Psyker",
        "Chaos",
        "Daemon",
        "Tzeentch",
        "Aetaos'rau'keres"
      ],
      "factions": ["Legiones Daemonica"]
    },
    {
      "id": "44a1ebfb-4aaf-5eb2-9f4d-7fee09b5cfde",
      "name": "An'ggrath The Unbound",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 An'ggrath the Unbound – Epic Hero"],
      "loadout": "This model is equipped with: bloodlash; axe of Khorne.",
      "wargear": ["None"],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+2", "Deep Strike"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Emissary of the Blood God (Aura)",
            "description": "While a friendly Khorne Legiones Daemonica unit is within 6\" of this model, you can re-roll Battle-shock tests taken for that unit.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Relentless Carnage",
            "description": "At the end of the Fight phase, you can select one enemy unit within Engagement Range of this model and roll eight D6: for each 4+, that enemy unit suffers 1 mortal wound.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-8 WOUNDS REMAINING",
          "description": "While this model has 1-8 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "12\"",
          "t": "11",
          "sv": "4+",
          "w": "24",
          "ld": "6+",
          "oc": "6",
          "name": "An'ggrath The Unbound",
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
              "name": "Bloodlash",
              "keywords": [],
              "range": "12\"",
              "attacks": "9",
              "skill": "2+",
              "strength": "8",
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
              "name": "Axe of Khorne – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "8",
              "skill": "2+",
              "strength": "16",
              "ap": "-4",
              "damage": "D6+2"
            },
            {
              "active": true,
              "name": "Axe of Khorne – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "16",
              "skill": "2+",
              "strength": "10",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Character",
        "Epic Hero",
        "Titanic",
        "Towering",
        "Chaos",
        "Daemon",
        "Khorne",
        "An'ggrath the Unbound"
      ],
      "factions": ["Legiones Daemonica"]
    },
    {
      "id": "288c226b-e687-5486-ac5e-c682e653d53e",
      "name": "Be’lakor",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Be’lakor – Epic Hero"],
      "loadout": "This model is equipped with: Betraying Shades; the Blade of Shadows.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "325",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6", "Deep Strike", "Stealth"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [
          {
            "name": "SHADOW FORM ABILITIES",
            "showAbility": true,
            "abilities": [
              {
                "name": "Wreathed in Shadows (Aura, Psychic)",
                "description": "While a friendly Legiones Daemonica unit is within 6\" of this model, that unit can only be targeted by a ranged attack if the attacking model is within 18\".",
                "showAbility": true,
                "showDescription": true
              },
              {
                "name": "Pall of Despair (Aura, Psychic)",
                "description": "In the Battle-shock step of your opponent’s Command phase, if an enemy unit that is below its Starting Strength is within 6\" of this model, that unit must take a Battle-shock test. For the purposes of this ability, if a unit has a Starting Strength of 1, it is considered to be below its Starting Strength while it has lost one or more wounds.",
                "showAbility": true,
                "showDescription": true
              },
              {
                "name": "Shadow Lord (Aura, Psychic)",
                "description": "While a friendly Legiones Daemonica unit is within 6\" of this model, you can re-roll Battle-shock and Leadership tests taken for that unit.",
                "showAbility": true,
                "showDescription": true
              }
            ]
          }
        ],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "The Dark Master (Aura)",
            "description": "The area of the battlefield within 6\" of this model is considered to be within your army’s Shadow of Chaos.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Shadow Form",
            "description": "At the start of the battle round, select one Shadow Form ability (see left). Until the end of the battle round, this model has that ability.",
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
          }
        ],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-6 WOUNDS REMAINING",
          "description": "While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "12\"",
          "t": "10",
          "sv": "4+",
          "w": "18",
          "ld": "6+",
          "oc": "5",
          "name": "Be’lakor",
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
              "name": "Betraying Shades – witchfire",
              "keywords": ["devastating wounds", "ignores cover", "psychic"],
              "range": "18\"",
              "attacks": "9",
              "skill": "2+",
              "strength": "5",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Betraying Shades – focused witchfire",
              "keywords": [
                "devastating wounds",
                "hazardous",
                "ignores cover",
                "psychic"
              ],
              "range": "18\"",
              "attacks": "12",
              "skill": "2+",
              "strength": "6",
              "ap": "-3",
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
              "name": "The Blade of Shadows – strike",
              "keywords": ["lethal hits"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "14",
              "ap": "-4",
              "damage": "D6+1"
            },
            {
              "active": true,
              "name": "The Blade of Shadows – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "14",
              "skill": "2+",
              "strength": "8",
              "ap": "-3",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Character",
        "Fly",
        "Epic Hero",
        "Psyker",
        "Chaos",
        "Daemon",
        "Be’lakor"
      ],
      "factions": ["Legiones Daemonica"]
    },
    {
      "id": "879b69f5-1485-5126-bdd3-0186babda451",
      "name": "Beasts Of Nurgle",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1-2 Beasts of Nurgle"],
      "loadout": "Every model is equipped with: putrid appendages.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "75",
          "active": true
        },
        {
          "models": "2",
          "cost": "150",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1", "Deep Strike"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Grotesque Regeneration",
            "description": "At the end of each phase, if a Beasts of Nurgle model in this unit has lost any wounds but is not destroyed, that model regains all of its lost wounds.",
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
          "sv": "6+",
          "w": "7",
          "ld": "7+",
          "oc": "2",
          "name": "Beasts Of Nurgle",
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
              "name": "Putrid appendages",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "6",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Beast", "Chaos", "Daemon", "Nurgle", "Beasts of Nurgle"],
      "factions": ["Legiones Daemonica"],
      "leadBy": ["Horticulous Slimux"]
    },
    {
      "id": "d42abf8d-e119-5791-90a7-70a1183240c7",
      "name": "Bloodcrushers",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Bloodhunter", "2-5 Bloodcrushers"],
      "loadout": "Every model is equipped with: hellblade; Juggernaut’s bladed horn.",
      "wargear": [
        "1 Bloodcrusher that is not equipped with a daemonic icon can be equipped with 1 instrument of Chaos.",
        "1 Bloodcrusher that is not equipped with an instrument of Chaos can be equipped with 1 daemonic icon."
      ],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "120",
          "active": true
        },
        {
          "models": "6",
          "cost": "240",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Daemonic Icon",
            "description": "Models in the bearer’s unit have a Leadership characteristic of 6+.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Instrument of Chaos",
            "description": "Add 1 to Charge rolls made for the bearer’s unit.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deep Strike"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Brass Stampede",
            "description": "Each time this unit ends a Charge move, select one enemy unit within Engagement Range of this unit and roll one D6 for each model in this unit: for each 4+, that enemy unit suffers D3 mortal wounds.",
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
          "sv": "4+",
          "w": "4",
          "ld": "7+",
          "oc": "2",
          "name": "Bloodcrushers",
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
              "name": "Hellblade",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
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
              "name": "Juggernaut’s bladed horn",
              "keywords": ["extra attacks", "lance"],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
              "strength": "6",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Mounted", "Chaos", "Daemon", "Khorne", "Bloodcrushers"],
      "factions": ["Legiones Daemonica"],
      "leadBy": ["Skullmaster"]
    },
    {
      "id": "25ab9e93-fc0c-52b2-b6a7-5ca993d15f1b",
      "name": "Bloodletters",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Bloodreaper", "9 Bloodletters"],
      "loadout": "Every model is equipped with: hellblade.",
      "wargear": [
        "1 Bloodletter that is not equipped with a daemonic icon can be equipped with 1 instrument of Chaos.",
        "1 Bloodletter that is not equipped with an instrument of Chaos can be equipped with 1 daemonic icon."
      ],
      "transport": "",
      "points": [
        {
          "models": "10",
          "cost": "160",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Daemonic Icon",
            "description": "Models in the bearer’s unit have a Leadership characteristic of 6+.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Instrument of Chaos",
            "description": "Add 1 to Charge rolls made for the bearer’s unit.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deep Strike"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Blood Begets Blood",
            "description": "Each time a model in this unit makes a melee attack, re-roll a Wound roll of 1. If that attack targets a unit that is Below Half-strength, you can re-roll the Wound roll instead.",
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
          "sv": "7+",
          "w": "1",
          "ld": "7+",
          "oc": "2",
          "name": "Bloodletters",
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
              "name": "Hellblade",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "5",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Battleline",
        "Chaos",
        "Daemon",
        "Khorne",
        "Bloodletters"
      ],
      "factions": ["Legiones Daemonica"],
      "leadBy": ["Bloodmaster", "Skulltaker"]
    },
    {
      "id": "6317a045-4a71-59a1-9291-4808c2b82e4b",
      "name": "Bloodmaster",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Bloodletters",
      "composition": ["1 Bloodmaster"],
      "loadout": "This model is equipped with: blade of blood.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "85",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike", "Leader"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Bloodmaster",
            "description": "While this model is leading a unit, each time a model in that unit makes an attack, add 1 to the Wound roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "A Gory Path",
            "description": "Each time this model’s unit Consolidates, it can move up to 6\" instead of up to 3\".",
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
          "sv": "5+",
          "w": "4",
          "ld": "7+",
          "oc": "1",
          "name": "Bloodmaster",
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
              "name": "Blade of blood",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "6",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Chaos",
        "Daemon",
        "Khorne",
        "Bloodmaster"
      ],
      "factions": ["Legiones Daemonica"],
      "leads": {
        "units": ["Bloodletters"],
        "extra": ""
      }
    },
    {
      "id": "7d466720-589e-54d0-abb0-1bd094a28515",
      "name": "Bloodthirster",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Bloodthirster"],
      "loadout": "This model is equipped with: hellfire breath; great axe of Khorne",
      "wargear": [
        "This model’s great axe of Khorne can be replaced with 1 axe of Khorne and one of the following: ◦ 1 bloodflail ◦ 1 lash of Khorne"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "300",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6", "Deep Strike"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Daemon Lord of Khorne (Aura)",
            "description": "While a friendly Khorne Legiones Daemonica unit is within 6\" of this model, each time a model in that unit makes a melee attack, add 1 to the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Relentless Carnage",
            "description": "At the end of the Fight phase, you can select one enemy unit within Engagement Range of this model and roll eight D6: for each 4+, that enemy unit suffers 1 mortal wound.",
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
          "m": "12\"",
          "t": "11",
          "sv": "4+",
          "w": "18",
          "ld": "6+",
          "oc": "5",
          "name": "Bloodthirster",
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
              "name": "Bloodflail",
              "keywords": ["devastating wounds"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "16",
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
              "name": "Hellfire breath",
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
              "name": "Lash of Khorne",
              "keywords": [],
              "range": "12\"",
              "attacks": "6",
              "skill": "2+",
              "strength": "8",
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
              "name": "Axe of Khorne – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "8",
              "skill": "2+",
              "strength": "14",
              "ap": "-4",
              "damage": "D6"
            },
            {
              "active": true,
              "name": "Axe of Khorne – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "16",
              "skill": "2+",
              "strength": "8",
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
              "name": "Great axe of Khorne – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "7",
              "skill": "2+",
              "strength": "16",
              "ap": "-4",
              "damage": "D6+2"
            },
            {
              "active": true,
              "name": "Great axe of Khorne – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "14",
              "skill": "2+",
              "strength": "10",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Character",
        "Fly",
        "Chaos",
        "Daemon",
        "Khorne",
        "Bloodthirster"
      ],
      "factions": ["Legiones Daemonica"]
    },
    {
      "id": "cb91d01b-ae8d-5076-9392-5829f1e47eb9",
      "name": "Blue Horrors",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["10 Blue Horrors"],
      "loadout": "Every Blue Horror is equipped with: Coruscating Blue Flames; blue claws. Every Brimstone Horror added to this unit using the Split ability is equipped with: Coruscating Yellow Flames; yellow claws.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "10",
          "cost": "125",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike", "Infiltrators"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Split",
            "description": "Each time a Blue Horror model in this unit is destroyed, after the attacking unit has finished making its attacks, if this unit is not destroyed, roll one D6 for that model. On a 4+, add one Brimstone Horror model to this unit.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Cackling Horrors (Aura)",
            "description": "While an enemy unit is within 6\" of this unit, if this unit contains one or more Blue Horror models, worsen the Leadership characteristic of models in that enemy unit by 1.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Exploding Horrors",
            "description": "Each time this unit is selected to fight, you can select one enemy unit within Engagement Range of it, then select one or more Brimstone Horror models in this unit. For each Brimstone Horror model you select, roll one D6: on a 4+, that model is destroyed and that enemy unit suffers 1 mortal wound.",
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
          "sv": "8+",
          "w": "1",
          "ld": "8+",
          "oc": "1",
          "name": "Blue Horrors",
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
              "name": "Coruscating Blue Flames",
              "keywords": ["psychic"],
              "range": "18\"",
              "attacks": "2",
              "skill": "4+",
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
              "name": "Coruscating Yellow Flames",
              "keywords": ["psychic"],
              "range": "18\"",
              "attacks": "2",
              "skill": "5+",
              "strength": "2",
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
              "name": "Blue claws",
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
              "name": "Yellow claws",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "5+",
              "strength": "2",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "ALL MODELS:",
        "Infantry",
        "Battleline",
        "Chaos",
        "Daemon",
        "Tzeentch",
        "Horrors",
        "BLUE HORRORS:",
        "Blue",
        "BRIMSTONE HORRORS:",
        "Brimstone"
      ],
      "factions": ["Legiones Daemonica"],
      "leadBy": ["Changecaster", "Fluxmaster"]
    },
    {
      "id": "ab00821d-d054-5125-964d-0837d7520ca9",
      "name": "Burning Chariot",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Burning Chariot"],
      "loadout": "This model is equipped with: Fire of Tzeentch; Flamer mouths; Screamer bites.",
      "wargear": ["None"],
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
        "core": ["Deep Strike"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Eldritch Flames (Psychic)",
            "description": "In your Shooting phase, after this model has shot, select one enemy unit that was hit by one or more of those attacks. Until the end of the phase, that unit cannot have the Benefit of Cover.",
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
          "sv": "7+",
          "w": "9",
          "ld": "7+",
          "oc": "3",
          "name": "Burning Chariot",
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
              "name": "Fire of Tzeentch – blue fire",
              "keywords": ["ignores cover", "psychic"],
              "range": "18\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "9",
              "ap": "-3",
              "damage": "3"
            },
            {
              "active": true,
              "name": "Fire of Tzeentch – pink fire",
              "keywords": ["ignores cover", "psychic", "torrent"],
              "range": "12\"",
              "attacks": "2D6",
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
              "name": "Flamer mouths",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
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
              "name": "Screamer bites",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "6",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Fly",
        "Chaos",
        "Daemon",
        "Tzeentch",
        "Burning Chariot"
      ],
      "factions": ["Legiones Daemonica"]
    },
    {
      "id": "21ff17b2-3fa7-5e1d-b34c-a05356232b29",
      "name": "Changecaster",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Blue Horrors ■ Pink Horrors",
      "composition": ["1 Changecaster"],
      "loadout": "This model is equipped with: Arcane Fireball; Herald combat weapon.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "65",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike", "Leader"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Changecaster",
            "description": "While this model is leading a unit, ranged weapons equipped by models in that unit have the [SUSTAINED HITS 1] ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Storm of Mutating Sorcery (Psychic)",
            "description": "In your Shooting phase, after this model has shot, select one enemy Infantry unit hit by one or more of those attacks. That unit must take a Battle-shock test.",
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
          "name": "Changecaster",
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
              "name": "Arcane Fireball – witchfire",
              "keywords": ["psychic"],
              "range": "18\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "5",
              "ap": "-1",
              "damage": "D3"
            },
            {
              "active": true,
              "name": "Arcane Fireball – focused witchfire",
              "keywords": ["devastating wounds", "hazardous", "psychic"],
              "range": "18\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "6",
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
              "name": "Herald combat weapon",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Psyker",
        "Chaos",
        "Daemon",
        "Tzeentch",
        "Changecaster"
      ],
      "factions": ["Legiones Daemonica"],
      "leads": {
        "units": ["Blue Horrors", "Pink Horrors"],
        "extra": ""
      }
    },
    {
      "id": "d7bf34ae-8c48-5d7c-8004-ddc81179e195",
      "name": "Contorted Epitome",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Daemonettes",
      "composition": ["1 Contorted Epitome"],
      "loadout": "This model is equipped with: coiled tentacles; ravaging claws.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "85",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike", "Leader"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Swallow Energy (Psychic)",
            "description": "While this model is leading a unit, models in that unit have the Feel No Pain 4+ ability against mortal wounds and Psychic Attacks.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Horrible Fascination(Psychic)",
            "description": "At the start of your opponent’s Shooting phase, one Psyker model from your army with this ability can use it. If it does, select one enemy unit within 12\" of and visible to that Psyker model and roll one D6: on a 1, that Psyker model suffers D3 mortal wounds; on a 2-5, until the end of the phase, each time a model in that enemy unit makes an attack, subtract 1 from the Hit roll; on a 6, that enemy unit is not eligible to shoot this phase.",
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
          "m": "9\"",
          "t": "6",
          "sv": "5+",
          "w": "8",
          "ld": "7+",
          "oc": "2",
          "name": "Contorted Epitome",
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
              "name": "Coiled tentacles",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "D6",
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
              "name": "Ravaging claws",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "8",
              "skill": "2+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Psyker",
        "Chaos",
        "SLaanesh",
        "Contorted Epitome"
      ],
      "factions": ["Legiones Daemonica"],
      "leads": {
        "units": ["Daemonettes"],
        "extra": ""
      }
    },
    {
      "id": "e697d09c-4032-564a-8548-f5954454e0e2",
      "name": "Daemon Prince Of Chaos",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Daemon Prince of Chaos"],
      "loadout": "This model is equipped with: infernal cannon; hellforged weapons.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "215",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3", "Deep Strike"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [
          {
            "name": "DAEMONIC ALLEGIANCE",
            "showAbility": true,
            "abilities": [
              {
                "name": "Daemon Prince of Khorne",
                "description": "If this model has the Khorne keyword, add 2 to the Strength characteristic of this model’s hellforged weapons.",
                "showAbility": true,
                "showDescription": true
              },
              {
                "name": "Daemon Prince of Tzeentch",
                "description": "If this model has the Tzeentch keyword, add 3 to the Attacks characteristic of this model’s infernal cannon.",
                "showAbility": true,
                "showDescription": true
              },
              {
                "name": "Daemon Prince of Nurgle",
                "description": "If this model has the Nurgle keyword, add 1 to this model’s Toughness characteristic.",
                "showAbility": true,
                "showDescription": true
              },
              {
                "name": "Daemon Prince of Slaanesh",
                "description": "If this model has the Slaanesh keyword, add 2\" to this model’s Move characteristic.",
                "showAbility": true,
                "showDescription": true
              }
            ]
          }
        ],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Prince of Darkness (Aura)",
            "description": "While a friendly Legiones Daemonica unit is within 6\" of this model, models in that unit have the Stealth ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Unholy Vigour",
            "description": "Once per battle, at the start of any phase, this model can use this ability. If it does, until the end of the phase, this model has a 3+ invulnerable save.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "DAEMONIC ALLEGIANCE",
            "description": "When you select this model to include in your army, you must select one of the following keywords for it to gain: ■ Khorne ■ Tzeentch ■ Nurgle ■ Slaanesh The keyword you select will also affect some of this model’s characteristics, as stated overleaf.",
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
          "t": "10",
          "sv": "2+",
          "w": "10",
          "ld": "6+",
          "oc": "3",
          "name": "Daemon Prince Of Chaos",
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
              "name": "Infernal cannon",
              "keywords": [],
              "range": "24\"",
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
              "name": "Hellforged weapons – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "8",
              "ap": "-2",
              "damage": "3"
            },
            {
              "active": true,
              "name": "Hellforged weapons – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "14",
              "skill": "2+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Character",
        "Chaos",
        "Daemon",
        "Daemon Prince of Chaos"
      ],
      "factions": ["Legiones Daemonica"]
    },
    {
      "id": "7d9d9ace-d9eb-5024-886d-f0f1b06da04a",
      "name": "Daemon Prince Of Chaos With Wings",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Daemon Prince of Chaos with Wings"],
      "loadout": "This model is equipped with: infernal cannon; hellforged weapons.",
      "wargear": ["None"],
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
        "core": ["Deadly Demise D3", "Deep Strike"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [
          {
            "name": "DAEMONIC ALLEGIANCE",
            "showAbility": true,
            "abilities": [
              {
                "name": "Daemon Prince of Khorne",
                "description": "If this model has the Khorne keyword, add 2 to the Strength characteristic of this model’s hellforged weapons.",
                "showAbility": true,
                "showDescription": true
              },
              {
                "name": "Daemon Prince of Tzeentch",
                "description": "If this model has the Tzeentch keyword, add 3 to the Attacks characteristic of this model’s infernal cannon.",
                "showAbility": true,
                "showDescription": true
              },
              {
                "name": "Daemon Prince of Nurgle",
                "description": "If this model has the Nurgle keyword, add 1 to this model’s Toughness characteristic.",
                "showAbility": true,
                "showDescription": true
              },
              {
                "name": "Daemon Prince of Slaanesh",
                "description": "If this model has the Slaanesh keyword, add 2\" to this model’s Move characteristic.",
                "showAbility": true,
                "showDescription": true
              }
            ]
          }
        ],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Malefic Destruction",
            "description": "Once per battle, at the start of the Fight phase, this model can use this ability. If it does, until the end of the phase, add 3 to the Attacks characteristic of this model’s hellforged weapons.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Harbinger of Death",
            "description": "Each time this model is selected to fight, select one of the following abilities. Until the end of the phase,",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "this model’s hellforged weapons have that ability",
            "description": " ■ [LETHAL HITS] ■ [PRECISION] ■ [SUSTAINED HITS 1]",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "DAEMONIC ALLEGIANCE",
            "description": "When you select this model to include in your army, you must select one of the following keywords for it to gain: ■ Khorne ■ Tzeentch ■ Nurgle ■ Slaanesh The keyword you select will also affect some of this model’s characteristics, as stated overleaf.",
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
          "t": "9",
          "sv": "2+",
          "w": "10",
          "ld": "6+",
          "oc": "3",
          "name": "Daemon Prince Of Chaos With Wings",
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
              "name": "Infernal cannon",
              "keywords": [],
              "range": "24\"",
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
              "name": "Hellforged weapons – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "8",
              "ap": "-2",
              "damage": "3"
            },
            {
              "active": true,
              "name": "Hellforged weapons – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "14",
              "skill": "2+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Character",
        "Fly",
        "Chaos",
        "Daemon",
        "Daemon Prince of Chaos with Wings"
      ],
      "factions": ["Legiones Daemonica"]
    },
    {
      "id": "06f8d9b6-0079-542c-b2aa-d0c8eca630b7",
      "name": "Daemonettes",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Alluress", "9 Daemonettes"],
      "loadout": "Every model is equipped with: slashing claws.",
      "wargear": [
        "1 Daemonette that is not equipped with a daemonic icon can be equipped with 1 instrument of Chaos.",
        "1 Daemonette that is not equipped with an instrument of Chaos can be equipped with 1 daemonic icon."
      ],
      "transport": "",
      "points": [
        {
          "models": "10",
          "cost": "140",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Daemonic Icon",
            "description": "Models in the bearer’s unit have a Leadership characteristic of 6+.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Instrument of Chaos",
            "description": "Add 1 to Charge rolls made for the bearer’s unit.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deep Strike"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Swift-taloned Slaughter",
            "description": "Each time a model in this unit makes an attack, re-roll a Hit roll of 1. If the target of that attack is within range of an objective marker, you can re-roll the Hit roll instead.",
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
          "m": "9\"",
          "t": "3",
          "sv": "7+",
          "w": "1",
          "ld": "7+",
          "oc": "2",
          "name": "Daemonettes",
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
              "name": "Slashing claws",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Battleline",
        "Chaos",
        "Daemon",
        "Slaanesh",
        "Daemonettes"
      ],
      "factions": ["Legiones Daemonica"],
      "leadBy": [
        "Contorted Epitome",
        "Infernal Enrapturess",
        "Syll’esske",
        "Tranceweaver"
      ]
    },
    {
      "id": "a4959c03-e36e-5386-9b07-29994f666115",
      "name": "Epidemius",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Plaguebearers",
      "composition": ["1 Epidemius – Epic Hero"],
      "loadout": "This model is equipped with: balesword and Nurgling attendants.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "85",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike", "Leader"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Blessed by the Plague God",
            "description": "While this model is leading a unit, models in that unit have a 4+ invulnerable save.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Tally of Pestilence",
            "description": "Keep a tally of how many enemy models are destroyed by Nurgle Legiones Daemonica models from your army during the battle. At the start of your Command phase, if this tally is 7 or more, you gain 1CP and the tally is reset to 0.",
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
          "m": "5\"",
          "t": "5",
          "sv": "6+",
          "w": "8",
          "ld": "7+",
          "oc": "2",
          "name": "Epidemius",
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
              "name": "Balesword and Nurgling attendants",
              "keywords": ["lethal hits"],
              "range": "Melee",
              "attacks": "D6+3",
              "skill": "3+",
              "strength": "5",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Epic hero",
        "Chaos",
        "Daemon",
        "Nurgle",
        "Epidemius"
      ],
      "factions": ["Legiones Daemonica"],
      "leads": {
        "units": ["Plaguebearers"],
        "extra": ""
      }
    },
    {
      "id": "06ac659a-793f-5875-9b7f-7bd9d029e1e4",
      "name": "Exalted Flamer",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Flamers",
      "composition": ["1 Exalted Flamer"],
      "loadout": "This model is equipped with: Fire of Tzeentch; Flamer mouths.",
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
        "core": ["Deep Strike", "Leader"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Blazing Warpfire (Psychic)",
            "description": "While this model is leading a unit, ranged weapons equipped by models in that unit have the [ASSAULT] ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Flames of Change (Psychic)",
            "description": "In your Shooting phase, after this model has shot, select one enemy unit (excluding Monsters and Vehicles) hit by one or more of those attacks, and roll one D6. On a 4+, until the end of your opponent’s next turn, that enemy unit is aflame. While a unit is aflame, subtract 2\" from its Move characteristic and subtract 2 from Advance and Charge rolls made for it.",
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
          "m": "9\"",
          "t": "4",
          "sv": "7+",
          "w": "6",
          "ld": "7+",
          "oc": "1",
          "name": "Exalted Flamer",
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
              "name": "Fire of Tzeentch – blue fire",
              "keywords": ["ignores cover", "psychic"],
              "range": "18\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "9",
              "ap": "-3",
              "damage": "3"
            },
            {
              "active": true,
              "name": "Fire of Tzeentch – pink fire",
              "keywords": ["ignores cover", "psychic", "torrent"],
              "range": "12\"",
              "attacks": "2D6",
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
              "name": "Flamer mouths",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Fly",
        "Chaos",
        "Daemon",
        "Tzeentch",
        "Exalted Flamer"
      ],
      "factions": ["Legiones Daemonica"],
      "leads": {
        "units": ["Flamers"],
        "extra": ""
      }
    },
    {
      "id": "723bc56b-59c5-5507-8fcb-a507aa4b68d6",
      "name": "Exalted Seeker Chariot",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Exalted Seeker Chariot"],
      "loadout": "This model is equipped with: lashes of torment; Exalted Seeker tongues; slashing claws.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "115",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Infernal Engines of Torment",
            "description": "In the Fight phase, after this model has finished making its attacks, if one or more enemy units were destroyed as a result of those attacks, every enemy unit within 6\" of this model must take a Battle- shock test.",
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
          "m": "14\"",
          "t": "6",
          "sv": "5+",
          "w": "12",
          "ld": "7+",
          "oc": "5",
          "name": "Exalted Seeker Chariot",
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
              "name": "Lashes of torment",
              "keywords": ["anti-infantry 3+", "assault", "pistol"],
              "range": "6\"",
              "attacks": "6",
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
              "name": "Exalted Seeker tongues",
              "keywords": ["extra attacks", "lethal hits"],
              "range": "Melee",
              "attacks": "8",
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
              "name": "Slashing claws",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "14",
              "skill": "3+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Chaos",
        "Daemon",
        "Slaanesh",
        "Exalted Seeker Chariot"
      ],
      "factions": ["Legiones Daemonica"]
    },
    {
      "id": "2993a6d6-e151-5d09-96b5-2f1f8b90c5d8",
      "name": "Fateskimmer",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Screamers",
      "composition": ["1 Fateskimmer"],
      "loadout": "This model is equipped with: Arcane Fireball; Herald combat weapon; Screamer bites.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "105",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike", "Leader"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Fateskimmer",
            "description": "While this model is leading a unit, melee weapons equipped by models in that unit have the [LETHAL HITS] ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Rider of the Immaterial Winds",
            "description": "Once per battle, at the end of your opponent’s turn, if this model’s unit is not within Engagement Range of one or more enemy units, you can remove that unit from the battlefield and place it into Strategic Reserves.",
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
          "t": "7",
          "sv": "6+",
          "w": "9",
          "ld": "7+",
          "oc": "3",
          "name": "Fateskimmer",
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
              "name": "Arcane Fireball – witchfire",
              "keywords": ["psychic"],
              "range": "18\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "5",
              "ap": "-1",
              "damage": "D3"
            },
            {
              "active": true,
              "name": "Arcane Fireball – focused witchfire",
              "keywords": ["devastating wounds", "hazardous", "psychic"],
              "range": "18\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "6",
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
              "name": "Herald combat weapon",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
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
              "name": "Screamer bites",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "6",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Character",
        "Fly",
        "Psyker",
        "Chaos",
        "Daemon",
        "Tzeentch",
        "Fateskimmer"
      ],
      "factions": ["Legiones Daemonica"],
      "leads": {
        "units": ["Screamers"],
        "extra": ""
      }
    },
    {
      "id": "8b1e01e1-3fc5-514d-bdb6-96e69847b2e2",
      "name": "Feculent Gnarlmaw",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Feculent Gnarlmaw"],
      "loadout": "This model is equipped with: nothing. WARGEAR OPTIONS ■   None",
      "wargear": [],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "100",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Infiltrators"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Shroud of Flies (Aura)",
            "description": "While a friendly Nurgle Legiones Daemonica unit is within 6\" of this Fortification, models in that unit have the Stealth ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Diseased Cover",
            "description": "Each time a ranged attack is allocated to a model, if that model is not fully visible to every model in the attacking unit because of this Fortification, that model has the Benefit of Cover against that attack.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Fortification",
            "description": "While an enemy unit is only within Engagement Range of one or more Fortifications from your army: ■  That unit can still be selected as the target of ranged attacks, but each time such an attack is made, unless it is made with a Pistol, subtract 1 from the Hit roll. ■  Models in that unit so not need to take Desperate Escape tests due to Falling Back while Battle-shocked, except for those that will move over enemy models when doing so.",
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
          "t": "9",
          "sv": "4+",
          "w": "9",
          "ld": "7+",
          "oc": "0",
          "name": "Feculent Gnarlmaw",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [],
      "meleeWeapons": [],
      "keywords": [
        "Fortification",
        "Chaos",
        "Daemon",
        "Nurgle",
        "Feculent Gnarlmaw"
      ],
      "factions": ["Legiones Daemonica"]
    },
    {
      "id": "7c0b0ea9-e185-552d-83ff-7b249aac809e",
      "name": "Fiends",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Blissbringer", "2-5 Fiends"],
      "loadout": "Every model is equipped with: barbed tail and dissecting claws.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "150",
          "active": true
        },
        {
          "models": "6",
          "cost": "300",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Soporific Musk (Aura)",
            "description": "While an enemy unit (excluding Vehicle and Titanic units) is within 6\" of this unit, each time a model in that enemy unit makes a melee attack, subtract 1 from the Hit roll, and each time a model in that enemy unit takes a Desperate Escape test, subtract 1 from that test.",
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
          "t": "5",
          "sv": "7+",
          "w": "4",
          "ld": "7+",
          "oc": "2",
          "name": "Fiends",
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
              "name": "Barbed tail and dissecting claws",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "5",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Beast", "Chaos", "Daemon", "Slaanesh", "Fiends"],
      "factions": ["Legiones Daemonica"]
    },
    {
      "id": "5444e4f7-36eb-5783-bffb-689f33c5942a",
      "name": "Flamers",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Pyrocaster", "2-5 Flamers"],
      "loadout": "Every model is equipped with: Flickering Flames; Flamer mouths.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "65",
          "active": true
        },
        {
          "models": "6",
          "cost": "130",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Bounding Leaps",
            "description": "This unit is eligible to shoot in a turn in which it Fell Back.",
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
          "m": "9\"",
          "t": "4",
          "sv": "7+",
          "w": "3",
          "ld": "7+",
          "oc": "1",
          "name": "Flamers",
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
              "name": "Flickering Flames",
              "keywords": ["ignores cover", "psychic", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
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
              "name": "Flamer mouths",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Fly", "Chaos", "Daemon", "Tzeentch", "Flamers"],
      "factions": ["Legiones Daemonica"],
      "leadBy": ["Exalted Flamer"]
    },
    {
      "id": "60704431-7e62-56a6-beba-9c10ad2a1171",
      "name": "Flesh Hounds",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Gore Hound", "4-9 Flesh Hounds"],
      "loadout": "The Gore Hound is equipped with: burning roar; gore-drenched fangs; collar of Khorne. Every Flesh Hound is equipped with: gore-drenched fangs; collar of Khorne.",
      "wargear": ["None"],
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
        "wargear": [
          {
            "name": "Collar of Khorne",
            "description": "The bearer has the Feel No Pain 3+ ability against Psychic Attacks.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deep Strike"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Pouncing Hunters",
            "description": "You can target this unit with the Heroic Intervention Stratagem for 0CP, and can do so even if you have already used that Stratagem on a different unit this phase.",
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
          "sv": "7+",
          "w": "2",
          "ld": "7+",
          "oc": "1",
          "name": "Flesh Hounds",
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
              "name": "Burning roar",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
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
              "name": "Gore-drenched fangs",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Beast", "Chaos", "Daemon", "Khorne", "Flesh Hounds"],
      "factions": ["Legiones Daemonica"],
      "leadBy": ["Karanak"]
    },
    {
      "id": "6dbed53c-517a-5ddd-9f17-4078d05e6982",
      "name": "Fluxmaster",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Pink Horrors ■ Blue Horrors",
      "composition": ["1 Fluxmaster"],
      "loadout": "This model is equipped with: Arcane Fireball; Herald combat weapon.",
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
        "core": ["Deep Strike", "Leader"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Fluxmaster",
            "description": "While this model is leading a unit, each time an attack is made against that unit, subtract 1 form the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Altered Reality (Psychic)",
            "description": "Once per battle round, after a Hit roll, a Wound roll or a saving throw is made for this model, you can change the result of that roll to a 6.",
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
          "sv": "6+",
          "w": "4",
          "ld": "7+",
          "oc": "1",
          "name": "Fluxmaster",
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
              "name": "Arcane Fireball – witchfire",
              "keywords": ["psychic"],
              "range": "18\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "5",
              "ap": "-1",
              "damage": "D3"
            },
            {
              "active": true,
              "name": "Arcane Fireball – focused witchfire",
              "keywords": ["devastating wounds", "hazardous", "psychic"],
              "range": "18\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "6",
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
              "name": "Herald combat weapon",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "3",
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
        "Fly",
        "Psyker",
        "Chaos",
        "Daemon",
        "Tzeentch",
        "Fluxmaster"
      ],
      "factions": ["Legiones Daemonica"],
      "leads": {
        "units": ["Pink Horrors", "Blue Horrors"],
        "extra": ""
      }
    },
    {
      "id": "44e4f5b1-eb19-5194-ad83-f194badb7b71",
      "name": "Furies",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["5-10 Furies"],
      "loadout": "Every model is equipped with: daemonic claws.",
      "wargear": ["None"],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Prey on the Weak",
            "description": "Each time this model makes an attack that targets an enemy unit that is Battle-shocked, add 1 to the Wound roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "DAEMONIC ALLEGIANCE",
            "description": "When you select this model to include in your army, you must select one of the following keywords for it to gain: ■ Khorne ■ Tzeentch ■ Nurgle ■ Slaanesh",
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
          "t": "3",
          "sv": "7+",
          "w": "1",
          "ld": "8+",
          "oc": "1",
          "name": "Furies",
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
              "name": "Daemonic claws",
              "keywords": [],
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
      "keywords": ["Infantry", "Chaos", "Daemon", "Fly", "Furies"],
      "factions": ["Legiones Daemonica"]
    },
    {
      "id": "3e85453c-d5a0-5d23-aab8-f95791cb3ef2",
      "name": "Giant Chaos Spawn",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Giant Chaos Spawn"],
      "loadout": "This model is equipped with: churning fangs and claws.",
      "wargear": ["None"],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike", "Feel No Pain 5+"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [
          {
            "name": "DAEMONIC ALLEGIANCE",
            "showAbility": true,
            "abilities": [
              {
                "name": "Creature of Khorne",
                "description": "If this model has the Khorne keyword, add 2 to the Strength characteristic of this model's melee weapons.",
                "showAbility": true,
                "showDescription": true
              },
              {
                "name": "Creature of Tzeentch",
                "description": "If this model has the Tzeentch keyword, this model has a 4+ invulnerable save.",
                "showAbility": true,
                "showDescription": true
              },
              {
                "name": "Creature of Nurgle",
                "description": "If this model has the Nurgle keyword, add 1 to this model's Toughness characteristic.",
                "showAbility": true,
                "showDescription": true
              },
              {
                "name": "Creature of Slaanesh",
                "description": "If this model has the Slaanesh keyword, add 2\" to this model's Move characteristic.",
                "showAbility": true,
                "showDescription": true
              }
            ]
          }
        ],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Regenerating Monstrosity",
            "description": "At the start of each player’s Command phase, this model regains up to D3 lost wounds.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "DAEMONIC ALLEGIANCE",
            "description": "When you select this model to include in your army, you must select one of the following keywords for it to gain: ■ Khorne ■ Tzeentch ■ Nurgle ■ Slaanesh The keyword you select will also affect some of this model’s characteristics (see the Daemonic Allegiance section).",
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
          "m": "10\"",
          "t": "8",
          "sv": "4+",
          "w": "10",
          "ld": "7+",
          "oc": "3",
          "name": "Giant Chaos Spawn",
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
              "name": "Churning fangs and claws",
              "keywords": [],
              "range": "Melee",
              "attacks": "D6+6",
              "skill": "3+",
              "strength": "10",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Monster", "Chaos", "Giant Chaos Spawn"],
      "factions": ["Legiones Daemonica"]
    },
    {
      "id": "6b7fccf5-1fe5-51e5-a673-3196ce719cb2",
      "name": "Great Unclean One",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Great Unclean One"],
      "loadout": "This model is equipped with: plague flail; putrid vomit; bilesword.",
      "wargear": [
        "This model’s plague flail can be replaced with 1 bileblade.",
        "This model’s bilesword can be replaced with 1 doomsday bell."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "280",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6", "Deep Strike"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Daemon Lord of Nurgle (Aura)",
            "description": "While a friendly Nurgle Legiones Daemonica unit is within 6\" of this model, models in that unit have the Feel No Pain 6+ ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Nurgle’s Rot (Psychic)",
            "description": "At the end of your Movement phase, you can select one enemy unit within 12\" of this model. Until the start of your next Movement phase, subtract 1 from the Toughness characteristic of models in that unit.",
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
          "m": "7\"",
          "t": "12",
          "sv": "5+",
          "w": "20",
          "ld": "6+",
          "oc": "5",
          "name": "Great Unclean One",
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
              "name": "Plague flail",
              "keywords": [],
              "range": "6\"",
              "attacks": "D6+1",
              "skill": "3+",
              "strength": "7",
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
              "name": "Putrid vomit",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6+3",
              "skill": "N/A",
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
              "name": "Bileblade",
              "keywords": ["extra attacks", "lethal hits"],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Bilesword – strike",
              "keywords": ["lethal hits"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "8",
              "ap": "-2",
              "damage": "D6"
            },
            {
              "active": true,
              "name": "Bilesword – sweep",
              "keywords": ["lethal hits"],
              "range": "Melee",
              "attacks": "12",
              "skill": "2+",
              "strength": "6",
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
              "name": "Doomsday bell",
              "keywords": ["lethal hits", "reverberating summons"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "7",
              "ap": "-1",
              "damage": "2"
            }
          ],
          "abilities": [
            {
              "name": "Reverberating Summons",
              "description": "Each time a model is destroyed by this weapon, you can select one friendly Plaguebearers unit within 12\" of the bearer and return 1 destroyed Plaguebearer model to that unit.",
              "showAbility": true,
              "showDescription": true
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Character",
        "Psyker",
        "Chaos",
        "Daemon",
        "Nurgle",
        "Great Unclean One"
      ],
      "factions": ["Legiones Daemonica"]
    },
    {
      "id": "f26ee0ad-2bb8-50e2-a8d4-aa0b2dd84e90",
      "name": "Hellflayer",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1-2 Hellflayers"],
      "loadout": "Every model is equipped with: lashes of torment; bladed axle; Seeker tongues; slashing claws.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "110",
          "active": true
        },
        {
          "models": "2",
          "cost": "220",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Cutting Down the Foe",
            "description": "Each time this unit is selected to fight, you can select one enemy unit within Engagement Range of it and roll one D6, adding 2 to the result if that unit is an Infantry unit: on a 2-3, that enemy unit suffers D3 mortal wounds; on a 4-5, that enemy unit suffers 3 mortal wounds; on a 6+, that enemy unit suffers D3+3 mortal wounds.",
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
          "m": "14\"",
          "t": "6",
          "sv": "5+",
          "w": "7",
          "ld": "7+",
          "oc": "3",
          "name": "Hellflayer",
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
              "name": "Lashes of torment",
              "keywords": ["anti-infantry 3+", "assault", "pistol"],
              "range": "6\"",
              "attacks": "6",
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
              "name": "Bladed axle",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "6",
              "skill": "3+",
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
              "name": "Seeker tongues",
              "keywords": ["extra attacks", "lethal hits"],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Slashing claws",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "9",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Mounted", "Chaos", "Daemon", "Slaanesh", "Hellflayer"],
      "factions": ["Legiones Daemonica"]
    },
    {
      "id": "8df95bea-97c2-5f91-a670-1be51d2b0292",
      "name": "Herald Of Slaanesh On Steed Of Slaanesh",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Seekers",
      "composition": ["1 Herald of Slaanesh on Steed of Slaanesh"],
      "loadout": "This model is equipped with: lashing tongue; ravaging claws.",
      "wargear": ["None"],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike", "Leader", "Scouts 9\""],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Lethal Caress",
            "description": "While this model is leading a unit, improve the Armour Penetration characteristic of melee weapons equipped by models in that unit by 1.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Symphony of Pain (Psychic)",
            "description": "At the end of your Movement phase, you can select one enemy unit that is Battle-shocked and within 12\" of this model. Until the end of the turn, each time a Slaanesh Legiones Daemonica model from your army makes an attack that targets that enemy unit, you can re-roll the Hit roll and you can re-roll the Wound roll.",
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
          "m": "14\"",
          "t": "4",
          "sv": "7+",
          "w": "4",
          "ld": "7+",
          "oc": "2",
          "name": "Herald Of Slaanesh On Steed Of Slaanesh",
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
              "name": "Lashing tongue",
              "keywords": ["extra attacks", "lethal hits"],
              "range": "Melee",
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
              "name": "Ravaging claws",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
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
        "Psyker",
        "Chaos",
        "Daemon",
        "Slaanesh",
        "Herald of Slaanesh"
      ],
      "factions": ["Legiones Daemonica"],
      "leads": {
        "units": ["Seekers"],
        "extra": ""
      }
    },
    {
      "id": "95470695-033c-5ed4-b2b6-5c67636198e1",
      "name": "Horticulous Slimux",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Beasts of Nurgle",
      "composition": ["1 Horticulous Slimux – Epic Hero"],
      "loadout": "This model is equipped with: acidic maw; lopping shears.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "120",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike", "Leader"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Beast Handler",
            "description": "While this model is leading a unit, you can re-roll Charge rolls made for that unit. In addition, once per battle, you can target that unit with the Heroic Intervention Stratagem for 0CP, and can do so even if you have already used that Stratagem on a different unit this phase.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Seed the Garden of Nurgle",
            "description": "At the end of your Movement phase, if this model is within an Area Terrain feature, until the end of the battle, that Area Terrain feature is considered to be within your army’s Shadow of Chaos.",
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
          "t": "10",
          "sv": "3+",
          "w": "10",
          "ld": "7+",
          "oc": "2",
          "name": "Horticulous Slimux",
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
              "name": "Acidic maw",
              "keywords": ["devastating wounds", "extra attacks"],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "7",
              "ap": "-4",
              "damage": "3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Lopping shears",
              "keywords": ["lethal hits"],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "6",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Character",
        "Epic Hero",
        "Chaos",
        "Daemon",
        "Nurgle",
        "Horticulous Slimux"
      ],
      "factions": ["Legiones Daemonica"],
      "leads": {
        "units": ["Beasts of Nurgle"],
        "extra": ""
      }
    },
    {
      "id": "73ce7eb3-eba7-5b49-b445-2997882ce3b0",
      "name": "Infernal Enrapturess",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Daemonettes",
      "composition": ["1 Infernal Enrapturess"],
      "loadout": "This model is equipped with: heartstring lyre; ravaging claws.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "65",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike", "Leader"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Harmonic Alignment",
            "description": "While this model is leading a unit, in your Command phase, you can return D3 destroyed Bodyguard models to that unit.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Discordant Disruption (Aura)",
            "description": "While an enemy Psyker unit is within 12\" of this model, Psychic weapons equipped by models in that unit have the [HAZARDOUS] ability.",
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
          "m": "9\"",
          "t": "3",
          "sv": "7+",
          "w": "3",
          "ld": "7+",
          "oc": "1",
          "name": "Infernal Enrapturess",
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
              "name": "Heartstring lyre – cacophonous melody",
              "keywords": ["assault"],
              "range": "18\"",
              "attacks": "6",
              "skill": "3+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Heartstring lyre – euphonic blast",
              "keywords": ["assault"],
              "range": "24\"",
              "attacks": "1",
              "skill": "3+",
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
              "name": "Ravaging claws",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Chaos",
        "Daemon",
        "Slaanesh",
        "Infernal Enrapturess"
      ],
      "factions": ["Legiones Daemonica"],
      "leads": {
        "units": ["Daemonettes"],
        "extra": ""
      }
    },
    {
      "id": "b6121698-cc24-5d82-9131-60726b8b49e7",
      "name": "Kairos Fateweaver",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Kairos Fateweaver – Epic Hero"],
      "loadout": "This model is equipped with: Infernal Gateway; Staff of Tomorrow.",
      "wargear": ["None"],
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
        "core": ["Deadly Demise D6", "Deep Strike"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "One Head Looks Forward (Aura)",
            "description": "Each time you target a friendly Tzeentch Legiones Daemonica unit within 6\" of this model with a Stratagem, roll one D6: if the result is greater than the current battle round number, you gain 1CP.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "One Head Looks Back",
            "description": "Once per battle, after your opponent uses a Stratagem, this model can use this ability. If it does, until the end of the battle, each time your opponent uses that Stratagem, increase its cost to your opponent by 1CP.",
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
          "m": "12\"",
          "t": "10",
          "sv": "6+",
          "w": "20",
          "ld": "6+",
          "oc": "5",
          "name": "Kairos Fateweaver",
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
              "name": "Infernal Gateway – witchfire",
              "keywords": ["blast", "indirect fire", "psychic"],
              "range": "24\"",
              "attacks": "D6+3",
              "skill": "2+",
              "strength": "9",
              "ap": "-2",
              "damage": "D3"
            },
            {
              "active": true,
              "name": "Infernal Gateway – focused witchfire",
              "keywords": ["blast", "indirect fire", "hazardous", "psychic"],
              "range": "24\"",
              "attacks": "D3+6",
              "skill": "2+",
              "strength": "9",
              "ap": "-3",
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
              "name": "Staff of Tomorrow",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "8",
              "ap": "-2",
              "damage": "2D3"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Character",
        "Epic Hero",
        "Fly",
        "Psyker",
        "Chaos",
        "Daemon",
        "Tzeentch",
        "Kairos Fateweaver"
      ],
      "factions": ["Legiones Daemonica"]
    },
    {
      "id": "1d9dbbb2-e18b-532b-90c9-a14cd65892b0",
      "name": "Karanak",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Flesh Hounds",
      "composition": ["1 Karanak – Epic Hero"],
      "loadout": "This model is equipped with: soul-rending fangs; collar of Khorne.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "85",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Collar of Khorne",
            "description": "The bearer has the Feel No Pain 3+ ability against Psychic Attacks.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deep Strike", "Leader"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Pack Leader",
            "description": "While this model is leading a unit, you can re-roll Advance and Charge rolls made for that unit.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Prey of the Blood God",
            "description": "At the start of the first battle round, select one enemy unit to be this model’s prey. Weapons equipped by models in this model’s unit have the [LETHAL HITS] ability when targeting this model’s prey. Each time this model’s prey is destroyed, select one new enemy unit to be this model’s prey.",
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
          "sv": "7+",
          "w": "5",
          "ld": "7+",
          "oc": "1",
          "name": "Karanak",
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
              "name": "Soul-rending fangs",
              "keywords": ["precision"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "6",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Beast",
        "Character",
        "Epic Hero",
        "Chaos",
        "Daemon",
        "Khorne",
        "Karanak"
      ],
      "factions": ["Legiones Daemonica"],
      "leads": {
        "units": ["Flesh Hounds"],
        "extra": ""
      }
    },
    {
      "id": "5aaecdd2-4226-5150-aecb-fc3aaaae4e6b",
      "name": "Keeper Of Secrets",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Keeper of Secrets"],
      "loadout": "This model is equipped with: Phantasmagoria; snapping claws; witstealer sword.",
      "wargear": [
        "This model can be equipped with one of the following: ◦ Living whip ◦ Ritual knife ◦ Shining aegis"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "330",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Shining Aegis",
            "description": "The bearer has the Feel No Pain 5+ ability.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deadly Demise D6", "Deep Strike"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Daemon Lord of Slaanesh (Aura)",
            "description": "While a friendly Slaanesh Legiones Daemonica unit is within 6\" of this model, improve the Armour Penetration of melee weapons in that unit by 1.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Mesmerising Form",
            "description": "Each time an attack targets this model, subtract 1 from the Hit roll.",
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
          "m": "14\"",
          "t": "10",
          "sv": "5+",
          "w": "18",
          "ld": "6+",
          "oc": "5",
          "name": "Keeper Of Secrets",
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
              "name": "Living whip",
              "keywords": ["assault"],
              "range": "12\"",
              "attacks": "6",
              "skill": "2+",
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
              "name": "Phantasmagoria – witchfire",
              "keywords": ["devastating wounds", "psychic"],
              "range": "18\"",
              "attacks": "6",
              "skill": "2+",
              "strength": "6",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Phantasmagoria – focused witchfire",
              "keywords": ["devastating wounds", "hazardous", "psychic"],
              "range": "18\"",
              "attacks": "9",
              "skill": "2+",
              "strength": "6",
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
              "name": "Ritual knife",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Snapping claws",
              "keywords": ["devastating wounds", "extra attacks"],
              "range": "Melee",
              "attacks": "4",
              "skill": "2+",
              "strength": "6",
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
              "name": "Witstealer sword",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "8",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Character",
        "Psyker",
        "Chaos",
        "Daemon",
        "Slaanesh",
        "Keeper of Secrets"
      ],
      "factions": ["Legiones Daemonica"]
    },
    {
      "id": "3fa40a27-1150-5961-84dc-af14d253b7d5",
      "name": "Lord Of Change",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Lord of Change"],
      "loadout": "This model is equipped with: Bolt of Change; staff of Tzeentch.",
      "wargear": [
        "This model can be equipped with one of the following: ◦ 1 rod of sorcery ◦ 1 baleful sword"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "230",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6", "Deep Strike"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Daemon Lord of Tzeentch (Aura)",
            "description": "While a friendly Tzeentch Legiones Daemonica unit is within 6\" of this model, each time a model in that unit makes a ranged attack, add 1 to the Strength characteristic of that attack.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Master of Magicks (Psychic)",
            "description": "In your Shooting phase, select one of the following abilities: [IGNORES COVER]; [LETHAL HITS]; [SUSTAINED HITS D3]. Until the end of the phase, this model’s Bolt of Change has that ability.",
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
          "m": "12\"",
          "t": "10",
          "sv": "6+",
          "w": "18",
          "ld": "6+",
          "oc": "5",
          "name": "Lord Of Change",
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
              "name": "Rod of sorcery",
              "keywords": ["psychic"],
              "range": "12\"",
              "attacks": "6",
              "skill": "2+",
              "strength": "8",
              "ap": "-1",
              "damage": "D3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Bolt of Change – witchfire",
              "keywords": ["psychic"],
              "range": "18\"",
              "attacks": "9",
              "skill": "2+",
              "strength": "9",
              "ap": "-1",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Bolt of Change – focused witchfire",
              "keywords": ["hazardous", "psychic"],
              "range": "18\"",
              "attacks": "9",
              "skill": "2+",
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
              "name": "Baleful sword",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "7",
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
              "name": "Staff of Tzeentch",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "6",
              "ap": "-1",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Character",
        "Fly",
        "Psyker",
        "Chaos",
        "Daemon",
        "Tzeentch",
        "Lord of Change"
      ],
      "factions": ["Legiones Daemonica"]
    },
    {
      "id": "7b434980-9618-5566-b4e6-3c3f59bdcfd0",
      "name": "Nurglings",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["3-9 Nurgling Swarms"],
      "loadout": "Every model is equipped with: diseased claws and teeth.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "40",
          "active": true
        },
        {
          "models": "6",
          "cost": "80",
          "active": true
        },
        {
          "models": "9",
          "cost": "120",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike", "Infiltrators"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Mischief Makers (Aura)",
            "description": "While an enemy unit (excluding Monsters and Vehicles) is within 6\" of this unit, each time a model in that unit makes a melee attack, subtract 1 from the Hit roll.",
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
          "m": "5\"",
          "t": "3",
          "sv": "7+",
          "w": "4",
          "ld": "8+",
          "oc": "0",
          "name": "Nurglings",
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
              "name": "Diseased claws and teeth",
              "keywords": ["lethal hits"],
              "range": "Melee",
              "attacks": "4",
              "skill": "5+",
              "strength": "2",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Swarm",
        "Battleline",
        "Chaos",
        "Daemon",
        "Nurgle",
        "Nurglings"
      ],
      "factions": ["Legiones Daemonica"]
    },
    {
      "id": "d2443789-3dc2-5cfb-9e36-37e771610a42",
      "name": "Pink Horrors",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["10 Pink Horrors"],
      "loadout": "Every Pink Horror is equipped with: Coruscating Pink Flames; pink claws. Every Blue Horror added to this unit using the Split ability is equipped with: Coruscating Blue Flames; blue claws. Every Brimstone Horror added to this unit using the Split ability is equipped with: Coruscating Yellow Flames; yellow claws. HORRORS ARE PINK. HORRORS ARE BLUE. WHERE ONCE THERE WAS ONE, NOW THERE ARE TWO. If, at any point, this unit contains no Pink Horror models, use the Blue Horrors datasheet for this unit. Designer’s Note: While this unit contains one or more Pink Horror models, the Cackling Horrors and Exploding Horrors abilities from the Blue Horrors datasheet do not apply to this unit.",
      "wargear": [
        "1 Pink Horror that is not equipped with a daemonic icon can be equipped with 1 instrument of Chaos.",
        "1 Pink Horror that is not equipped with an instrument of Chaos can be equipped with 1 daemonic icon."
      ],
      "transport": "",
      "points": [
        {
          "models": "10",
          "cost": "140",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Daemonic Icon",
            "description": "Models in the bearer’s unit have a Leadership characteristic of 6+.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Instrument of Chaos",
            "description": "Add 1 to Charge rolls made for the bearer’s unit.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deep Strike"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Split",
            "description": "Each time a Pink Horror or Blue Horror model in this unit is destroyed, after the attacking unit has finished making its attacks, if this unit is not destroyed, roll one D6 for that model. On a 4+, if it was a Pink Horror, add two Blue Horror models to this unit, and if it was a Blue Horror, add one Brimstone Horror model to this unit.",
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
          "sv": "7+",
          "w": "1",
          "ld": "7+",
          "oc": "2",
          "name": "PINK HORROR",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "6\"",
          "t": "3",
          "sv": "7+",
          "w": "1",
          "ld": "8+",
          "oc": "1",
          "name": "BLUE HORROR/BRIMSTONE HORROR",
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
              "name": "Coruscating Pink Flames",
              "keywords": ["psychic"],
              "range": "18\"",
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
              "name": "Coruscating Blue Flames",
              "keywords": ["psychic"],
              "range": "18\"",
              "attacks": "2",
              "skill": "4+",
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
              "name": "Coruscating Yellow Flames",
              "keywords": ["psychic"],
              "range": "18\"",
              "attacks": "2",
              "skill": "5+",
              "strength": "2",
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
              "name": "Pink claws",
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
              "name": "Blue claws",
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
              "name": "Yellow claws",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
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
        "Battleline",
        "Chaos",
        "Daemon",
        "Tzeentch",
        "Horrors"
      ],
      "factions": ["Legiones Daemonica"],
      "leadBy": ["Changecaster", "Fluxmaster"]
    },
    {
      "id": "b214a7a1-f34e-5855-8c03-15953cef43bc",
      "name": "Plague Drones",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Plaguebringer", "2-5 Plague Drones"],
      "loadout": "Every model is equipped with: death’s heads; foul mouthparts; plaguesword.",
      "wargear": [
        "1 Plague Drone that is not equipped with a daemonic icon can be equipped with 1 instrument of Chaos.",
        "1 Plague Drone that is not equipped with an instrument of Chaos can be equipped with 1 daemonic icon."
      ],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "120",
          "active": true
        },
        {
          "models": "6",
          "cost": "240",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Daemonic Icon",
            "description": "Models in the bearer’s unit have a Leadership characteristic of 6+.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Instrument of Chaos",
            "description": "Add 1 to Charge rolls made for the bearer’s unit.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deep Strike"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Death’s Heads",
            "description": "In your Shooting phase, after this unit has shot, select one enemy unit hit by one or more of those attacks. Until the end of the turn, each time a friendly Nurgle Legiones Daemonica unit makes an attack that targets that unit, you can re-roll the Wound roll.",
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
          "t": "8",
          "sv": "6+",
          "w": "5",
          "ld": "7+",
          "oc": "2",
          "name": "Plague Drones",
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
              "name": "Death’s heads",
              "keywords": ["blast", "lethal hits"],
              "range": "12\"",
              "attacks": "D3",
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
              "name": "Foul mouthparts",
              "keywords": ["extra attacks", "lethal hits"],
              "range": "Melee",
              "attacks": "2",
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
              "name": "Plaguesword",
              "keywords": ["lethal hits"],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Fly",
        "Chaos",
        "Daemon",
        "Nurgle",
        "Plague Drones"
      ],
      "factions": ["Legiones Daemonica"]
    },
    {
      "id": "befc728d-a7a4-5208-8d03-f695350748d5",
      "name": "Plague Toads",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["3 Plague Toads"],
      "loadout": "Every model is equipped with: grasping tongue; yawning maw.",
      "wargear": ["None"],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Pouncing Leap",
            "description": "You can target this unit with the Heroic Intervention Stratagem for 0CP, and can do so even if you have already used that Stratagem on a different unit this phase.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "GRANDFATHER'S BLESSING",
            "description": "If a model from your army with the Leader ability can be attached to a Beasts of Nurgle unit, it can be attached to this unit instead.",
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
          "m": "7\"",
          "t": "8",
          "sv": "6+",
          "w": "4",
          "ld": "7+",
          "oc": "2",
          "name": "Plague Toads",
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
              "name": "Grasping tongue",
              "keywords": ["lethal hits"],
              "range": "9\"",
              "attacks": "D3",
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
              "name": "Yawning maw",
              "keywords": ["lethal hits"],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "6",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Beast", "Chaos", "Daemon", "Nurgle", "Plague Toads"],
      "factions": ["Legiones Daemonica"]
    },
    {
      "id": "1759402b-33ad-5750-804d-6262c560900f",
      "name": "Plaguebearers",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Plagueridden", "9 Plaguebearers"],
      "loadout": "Every model is equipped with: plaguesword.",
      "wargear": [
        "1 Plaguebearer that is not equipped with a daemonic icon can be equipped with 1 instrument of Chaos.",
        "1 Plaguebearer that is not equipped with an instrument of Chaos can be equipped with 1 daemonic icon."
      ],
      "transport": "",
      "points": [
        {
          "models": "10",
          "cost": "145",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Daemonic Icon",
            "description": "Models in the bearer’s unit have a Leadership characteristic of 6+.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Instrument of Chaos",
            "description": "Add 1 to Charge rolls made for the bearer’s unit.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deep Strike"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Infected Outbreak",
            "description": "If you control an objective marker at the end of your Command phase and this unit is within range of that objective marker, that objective marker remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of any turn.",
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
          "m": "5\"",
          "t": "5",
          "sv": "7+",
          "w": "2",
          "ld": "7+",
          "oc": "2",
          "name": "Plaguebearers",
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
              "name": "Plaguesword",
              "keywords": ["lethal hits"],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Battleline",
        "Chaos",
        "Daemon",
        "Nurgle",
        "Plaguebearers"
      ],
      "factions": ["Legiones Daemonica"],
      "leadBy": [
        "Epidemius",
        "Poxbringer",
        "Sloppity Bilepiper",
        "Spoilpox Scrivener"
      ]
    },
    {
      "id": "f711aef7-3de7-5caa-8b09-6cd42e6fc0ef",
      "name": "Pox Riders",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["3 Pox Riders"],
      "loadout": "Every model is equipped with: grasping tongue; Pox Rider plaguesword; yawning maw.",
      "wargear": [
        "1 Pox Rider that is not equipped with a daemonic icon can be equipped with 1 instrument of Chaos.",
        "1 Pox Rider that is not equipped with an instrument of Chaos can be equipped with 1 daemonic icon."
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [
          {
            "name": "Daemonic Icon",
            "description": "Models in the bearer’s unit have a Leadership characteristic of 6+.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Instrument of Chaos",
            "description": "Add 1 to Charge rolls made for the bearer’s unit.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deep Strike"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Bounding Assault",
            "description": "Each time this unit ends a Charge move, until the end of the turn, Pox Rider plagueswords equipped by models in this unit have the [LANCE] ability.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "GRANDFATHER'S BLESSING",
            "description": "If a model from your army with the Leader ability can be attached to a Beasts of Nurgle unit, it can be attached to this unit instead.",
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
          "m": "7\"",
          "t": "8",
          "sv": "6+",
          "w": "5",
          "ld": "7+",
          "oc": "2",
          "name": "Pox Riders",
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
              "name": "Grasping tongue",
              "keywords": ["lethal hits"],
              "range": "9\"",
              "attacks": "D3",
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
              "name": "Pox Rider plaguesword",
              "keywords": ["extra attacks", "lethal hits"],
              "range": "Melee",
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
              "name": "Yawning maw",
              "keywords": ["lethal hits"],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "6",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Mounted", "Chaos", "Daemon", "Nurgle", "Pox Riders"],
      "factions": ["Legiones Daemonica"]
    },
    {
      "id": "d7e24459-f599-51c7-b88a-a066b357cf69",
      "name": "Poxbringer",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Plaguebearers",
      "composition": ["1 Poxbringer"],
      "loadout": "This model is equipped with: foul balesword.",
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
        "core": ["Deep Strike", "Feel No Pain 5+", "Leader"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Poxbringer",
            "description": "While this model is leading a unit, each time a model in that unit makes an attack, a successful unmodified Hit roll of 5+ scores a Critical Hit.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Feculent Despair (Aura, Psychic)",
            "description": "While an enemy unit is within 6\" of this model, each time that unit takes a Battle-shock test, subtract 1 from that test.",
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
          "m": "5\"",
          "t": "5",
          "sv": "7+",
          "w": "5",
          "ld": "7+",
          "oc": "1",
          "name": "Poxbringer",
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
              "name": "Foul balesword",
              "keywords": ["lethal hits"],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "5",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Psyker",
        "Chaos",
        "Daemon",
        "Nurgle",
        "Poxbringer"
      ],
      "factions": ["Legiones Daemonica"],
      "leads": {
        "units": ["Plaguebearers"],
        "extra": ""
      }
    },
    {
      "id": "3cd09f82-fab8-5f13-9c09-940dffac6081",
      "name": "Rendmaster On Blood Throne",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Rendmaster on Blood Throne"],
      "loadout": "This model is equipped with: attendants’ hellblades; blade of blood.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "150",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Blood Throne",
            "description": "At the start of the Fight phase, select one enemy unit within 18\" of and visible to this model. Until the end of the phase, each time a friendly Khorne Legiones Daemonica unit makes an attack that targets that unit, improve the Strength, Armour Penetration and Damage characteristics of that attack by 1.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Champion Slayer",
            "description": "Each time this model makes a melee attack that targets a Character or Monster unit, you can re-roll the Wound roll. Each time this model destroys an enemy Character or Monster unit, this model regains up to D6 lost wounds.",
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
          "t": "9",
          "sv": "4+",
          "w": "9",
          "ld": "7+",
          "oc": "3",
          "name": "Rendmaster On Blood Throne",
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
              "name": "Attendants’ hellblades",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
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
              "name": "Blade of blood",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "6",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Character",
        "Chaos",
        "Daemon",
        "Khorne",
        "Rendmaster on Blood throne"
      ],
      "factions": ["Legiones Daemonica"]
    },
    {
      "id": "4dbec06c-b48b-54bd-8ad2-6992566644e8",
      "name": "Rotigus",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Rotigus – Epic Hero"],
      "loadout": "This model is equipped with: streams of brackish filth; gnarlrod.",
      "wargear": ["None"],
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
        "core": ["Deadly Demise D6", "Deep Strike"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Virulent Blessing (Psychic)",
            "description": "At the start of the Fight phase, you can select one enemy unit within 18\" and visible to this model. Until the end of the phase, each time an attack made by a Nurgle Legiones Daemonica model is allocated to a model in that unit, add 1 to the Damage characteristic of that attack.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Deluge of Nurgle (Aura)",
            "description": "While an enemy unit is within 6\" of this model, halve the Move and Objective Control characteristics of models in that unit.",
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
          "m": "7\"",
          "t": "12",
          "sv": "5+",
          "w": "22",
          "ld": "6+",
          "oc": "5",
          "name": "Rotigus",
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
              "name": "Streams of brackish filth",
              "keywords": ["devastating wounds", "ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "2D6",
              "skill": "N/A",
              "strength": "7",
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
              "name": "Gnarlrod – strike",
              "keywords": ["lethal hits", "psychic"],
              "range": "Melee",
              "attacks": "7",
              "skill": "2+",
              "strength": "8",
              "ap": "-3",
              "damage": "3"
            },
            {
              "active": true,
              "name": "Gnarlrod – sweep",
              "keywords": ["lethal hits", "psychic"],
              "range": "Melee",
              "attacks": "14",
              "skill": "2+",
              "strength": "7",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Character",
        "Epic Hero",
        "Psyker",
        "Chaos",
        "Daemon",
        "Nurgle",
        "Rotigus"
      ],
      "factions": ["Legiones Daemonica"]
    },
    {
      "id": "1aeab84f-6e01-52ec-b790-16bd45eb6035",
      "name": "Scabeiathrax The Bloated",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Scabeiathrax the Bloated – Epic Hero"],
      "loadout": "This model is equipped with: putrid vomit; blade of decay.",
      "wargear": ["None"],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6", "Deep Strike", "Feel No Pain 6+"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Emissary of the Plague God (Aura)",
            "description": "While a friendly Nurgle Legiones Daemonica unit is within 6\" of this model, you can re-roll Battle-shock tests taken for that unit.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Nurgle’s Rot (Psychic)",
            "description": "At the end of your Movement phase, you can select one enemy unit within 12\" of this model. Until the start of your next Movement phase, subtract 1 from the Toughness characteristic of models in that unit.",
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
          "m": "7\"",
          "t": "12",
          "sv": "5+",
          "w": "22",
          "ld": "6+",
          "oc": "5",
          "name": "Scabeiathrax The Bloated",
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
              "name": "Putrid vomit",
              "keywords": ["ignores cover", "torrent"],
              "range": "6\"",
              "attacks": "D6+3",
              "skill": "N/A",
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
              "name": "Blade of decay – Strike",
              "keywords": ["lethal hits"],
              "range": "Melee",
              "attacks": "7",
              "skill": "2+",
              "strength": "9",
              "ap": "-2",
              "damage": "D6"
            },
            {
              "active": true,
              "name": "Blade of decay – Sweep",
              "keywords": ["lethal hits"],
              "range": "Melee",
              "attacks": "14",
              "skill": "2+",
              "strength": "7",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Character",
        "Epic Hero",
        "Psyker",
        "Chaos",
        "Daemon",
        "Nurgle",
        "Scabeiathrax the Bloated"
      ],
      "factions": ["Legiones Daemonica"]
    },
    {
      "id": "81d73edc-6787-5524-88ec-16a2ee9b8b24",
      "name": "Screamers",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["3-6 Screamers"],
      "loadout": "Every model is equipped with: lamprey bite.",
      "wargear": ["None"],
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
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Slashing Dive",
            "description": "In your Movement phase, after this unit ends a Normal move, you can select one enemy unit it moved over during that move and roll one D6 for each model in this unit: for each 4+, that enemy unit suffers 1 mortal wound.",
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
          "m": "14\"",
          "t": "4",
          "sv": "6+",
          "w": "3",
          "ld": "7+",
          "oc": "1",
          "name": "Screamers",
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
              "name": "Lamprey bite",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Beast", "Fly", "Chaos", "Daemon", "Tzeentch", "Screamers"],
      "factions": ["Legiones Daemonica"],
      "leadBy": ["Fateskimmer"]
    },
    {
      "id": "63f69a3c-0e96-56a8-ace9-5de1ce1f3834",
      "name": "Seeker Chariot",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1-2 Seeker Chariots"],
      "loadout": "Every model is equipped with: lashes of torment; Seeker tongues; slashing claws.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "75",
          "active": true
        },
        {
          "models": "2",
          "cost": "150",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Scythed Impact",
            "description": "Each time this unit makes a Charge move, until the end of the phase, melee weapons equipped by models in this unit have the [ANTI-INFANTRY 4+] ability.",
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
          "m": "14\"",
          "t": "6",
          "sv": "5+",
          "w": "7",
          "ld": "7+",
          "oc": "3",
          "name": "Seeker Chariot",
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
              "name": "Lashes of torment",
              "keywords": ["anti-infantry 3+", "assault", "pistol"],
              "range": "6\"",
              "attacks": "6",
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
              "name": "Seeker tongues",
              "keywords": ["extra attacks", "lethal hits"],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Slashing claws",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "9",
              "skill": "3+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Mounted", "Chaos", "Daemon", "Slaanesh", "Seeker Chariot"],
      "factions": ["Legiones Daemonica"]
    },
    {
      "id": "1fa4c551-ad0e-5873-9f40-b851fe412f39",
      "name": "Seekers",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Heartseeker", "4-9 Seekers"],
      "loadout": "Every model is equipped with: lashing tongue; slashing claws.",
      "wargear": [
        "1 Seeker that is not equipped with a daemonic icon can be equipped with 1 instrument of Chaos.",
        "1 Seeker that is not equipped with an instrument of Chaos can be equipped with 1 daemonic icon."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "95",
          "active": true
        },
        {
          "models": "10",
          "cost": "190",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Daemonic Icon",
            "description": "Models in the bearer’s unit have a Leadership characteristic of 6+.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Instrument of Chaos",
            "description": "Add 1 to Charge rolls made for the bearer’s unit.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deep Strike", "Scouts 9\""],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Unholy Speed",
            "description": "You can re-roll Advance and Charge rolls made for this unit.",
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
          "m": "14\"",
          "t": "4",
          "sv": "7+",
          "w": "2",
          "ld": "7+",
          "oc": "1",
          "name": "Seekers",
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
              "name": "Lashing tongue",
              "keywords": ["extra attacks", "lethal hits"],
              "range": "Melee",
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
              "name": "Slashing claws",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Mounted", "Chaos", "Daemon", "Slaanesh", "Seekers"],
      "factions": ["Legiones Daemonica"],
      "leadBy": ["Herald Of Slaanesh On Steed Of Slaanesh"]
    },
    {
      "id": "aece117c-f387-5601-9bd7-9282c5d59b9c",
      "name": "Shalaxi Helbane",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Shalaxi Helbane – Epic Hero"],
      "loadout": "This model is equipped with: lash of Slaanesh; Pavane of Slaanesh; snapping claws; soulpiercer.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "400",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6", "Deep Strike", "Feel No Pain 5+"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Cloak of Constriction",
            "description": "At the start of the Fight phase, select one enemy unit within Engagement Range of this model. Until the end of the phase, subtract 1 from the Attacks characteristic of melee weapons equipped by that unit.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Monarch of the Hunt",
            "description": "Each time this model declares a charge that targets a Monster, Vehicle or Character unit, you can re-roll the Charge roll. Each time this model makes a melee attack that targets a Monster, Vehicle or Character unit, you can re-roll the Hit roll, the Wound roll and the Damage roll.",
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
          "m": "14\"",
          "t": "10",
          "sv": "5+",
          "w": "20",
          "ld": "6+",
          "oc": "5",
          "name": "Shalaxi Helbane",
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
              "name": "Lash of Slaanesh",
              "keywords": ["assault"],
              "range": "12\"",
              "attacks": "6",
              "skill": "2+",
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
              "name": "Pavane of Slaanesh – witchfire",
              "keywords": ["devastating wounds", "psychic"],
              "range": "18\"",
              "attacks": "D6",
              "skill": "2+",
              "strength": "9",
              "ap": "-1",
              "damage": "D3"
            },
            {
              "active": true,
              "name": "Pavane of Slaanesh – focused witchfire",
              "keywords": [
                "hazardous",
                "devastating wounds",
                "psychic",
                "sustained hits 3"
              ],
              "range": "18\"",
              "attacks": "D6",
              "skill": "2+",
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
              "name": "Snapping claws",
              "keywords": ["devastating wounds", "extra attacks"],
              "range": "Melee",
              "attacks": "4",
              "skill": "2+",
              "strength": "6",
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
              "name": "Soulpiercer",
              "keywords": ["precision"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6+2"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Character",
        "Epic Hero",
        "Psyker",
        "Chaos",
        "Daemon",
        "Slaanesh",
        "Shalaxi Helbane"
      ],
      "factions": ["Legiones Daemonica"]
    },
    {
      "id": "a1bce1fd-f1af-58a5-a64b-39e8813b3959",
      "name": "Skarbrand",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Skarbrand – Epic Hero"],
      "loadout": "This model is equipped with: bellow of endless fury; Slaughter and Carnage.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "365",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6", "Deep Strike"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Rage Embodied (Aura)",
            "description": "While a friendly Khorne Legiones Daemonica unit (excluding Monsters and Vehicles) is within 6\" of this model, add 1 to the Attacks characteristic of melee weapons equipped by models in that unit.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Murderlust (Aura)",
            "description": "While a unit is within 6\" of this model, each time that unit is selected to Fall Back, it must take a Leadership test. If that test is failed, that unit must Remain Stationary this phase instead.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-7 WOUNDS REMAINING",
          "description": "While this model has 1-7 wounds remaining, add 2 to the Attacks characteristic of this model’s Slaughter and Carnage."
        }
      },
      "stats": [
        {
          "m": "8\"",
          "t": "11",
          "sv": "4+",
          "w": "20",
          "ld": "6+",
          "oc": "5",
          "name": "Skarbrand",
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
              "name": "Bellow of endless fury",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "2D6",
              "skill": "N/A",
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
              "name": "Slaughter and Carnage – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "8",
              "skill": "2+",
              "strength": "16",
              "ap": "-4",
              "damage": "6"
            },
            {
              "active": true,
              "name": "Slaughter and Carnage – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "16",
              "skill": "2+",
              "strength": "8",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Character",
        "Epic Hero",
        "Chaos",
        "Daemon",
        "Khorne",
        "Skarbrand"
      ],
      "factions": ["Legiones Daemonica"]
    },
    {
      "id": "6477c669-2d71-50d3-a739-b8e8f932ecb8",
      "name": "Skull Altar",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Skull Altar"],
      "loadout": "This model is equipped with: nothing. WARGEAR OPTIONS ■   None",
      "wargear": [],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "105",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Infiltrators"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Shadow of Khorne (Aura)",
            "description": "The area of the battlefield within 6\" of this Fortification is considered to be within your army’s Shadow of Chaos. In addition, while a friendly Khorne Legiones Daemonica unit is within 6\" of this Fortification, each time you take a Battle-shock test for that unit, you can re-roll that test.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Cover",
            "description": "Each time a ranged attack is allocated to a model, if that model is not fully visible to every model in the attacking unit because of this Fortification, that model has the Benefit of Cover against that attack.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Fortification",
            "description": "While an enemy unit is only within Engagement Range of one or more Fortifications from your army: ■  That unit can still be selected as the target of ranged attacks, but each time such an attack is made, unless it is made with a Pistol, subtract 1 from the Hit roll. ■  Models in that unit so not need to take Desperate Escape tests due to Falling Back while Battle-shocked, except for those that will move over enemy models when doing so.",
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
          "t": "12",
          "sv": "3+",
          "w": "10",
          "ld": "7+",
          "oc": "0",
          "name": "Skull Altar",
          "showDamagedMarker": false,
          "showName": false,
          "active": true
        }
      ],
      "rangedWeapons": [],
      "meleeWeapons": [],
      "keywords": ["Fortification", "Chaos", "Daemon", "Khorne", "Skull Altar"],
      "factions": ["Legiones Daemonica"]
    },
    {
      "id": "d288fe4f-64b9-52a9-8c3e-28844f83d17c",
      "name": "Skull Cannon",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Skull Cannon"],
      "loadout": "This model is equipped with: skull cannon; attendants’ hellblades; biting maw.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "115",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Skulls of the Fallen",
            "description": "In your Shooting phase, after this model has shot, select one enemy unit that was hit by one or more of those attacks. That unit must take a Battle-shock test.",
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
          "t": "9",
          "sv": "4+",
          "w": "9",
          "ld": "7+",
          "oc": "3",
          "name": "Skull Cannon",
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
              "name": "Skull cannon",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6+2",
              "skill": "3+",
              "strength": "9",
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
              "name": "Attendants’ hellblades",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
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
              "name": "Biting maw",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Mounted", "Chaos", "Daemon", "Khorne", "Skull Cannon"],
      "factions": ["Legiones Daemonica"]
    },
    {
      "id": "e71974e0-7fff-55c6-8207-8e9d5ededfb1",
      "name": "Skullmaster",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Bloodcrushers",
      "composition": ["1 Skullmaster"],
      "loadout": "This model is equipped with: blade of blood; Juggernaut’s bladed horn.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "105",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike", "Leader"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Skullmaster’s Fury",
            "description": "While this model is leading a unit, each time that unit ends a Charge move, until the end of the turn, Juggernaut’s bladed horns equipped by models in that unit have the [DEVASTATING WOUNDS] ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Devastating Charge",
            "description": "Each time this model’s unit ends a Charge move, each enemy unit within Engagement Range of that unit must take a Battle-shock test.",
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
          "sv": "4+",
          "w": "6",
          "ld": "7+",
          "oc": "2",
          "name": "Skullmaster",
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
              "name": "Blade of blood",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "6",
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
              "name": "Juggernaut’s bladed horn",
              "keywords": ["extra attacks", "lance"],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
              "strength": "6",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Character",
        "Chaos",
        "Daemon",
        "Khorne",
        "Skullmaster"
      ],
      "factions": ["Legiones Daemonica"],
      "leads": {
        "units": ["Bloodcrushers"],
        "extra": ""
      }
    },
    {
      "id": "b4d5c7ca-e189-5eb3-a9b4-f7d875684a64",
      "name": "Skulltaker",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Bloodletters",
      "composition": ["1 Skulltaker – Epic Hero"],
      "loadout": "This model is equipped with: the Slayer Sword.",
      "wargear": ["None"],
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
        "core": ["Deep Strike", "Leader"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Lord of Decapitations",
            "description": "While this model is leading a unit, melee weapons equipped by models in that unit have the [DEVASTATING WOUNDS] ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Skulls for Khorne",
            "description": "Each time this model makes an attack that targets a Character unit, you can re-roll the Hit roll and you can re-roll the Wound roll. Each time this model destroys an enemy Character unit, you gain 1CP.",
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
          "w": "5",
          "ld": "7+",
          "oc": "1",
          "name": "Skulltaker",
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
              "name": "The Slayer Sword",
              "keywords": ["devastating wounds", "precision"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "6",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Epic Hero",
        "Chaos",
        "Daemon",
        "Khorne",
        "Skulltaker"
      ],
      "factions": ["Legiones Daemonica"],
      "leads": {
        "units": ["Bloodletters"],
        "extra": ""
      }
    },
    {
      "id": "b37ad4ff-c5b5-5030-85a9-6c37637459b5",
      "name": "Sloppity Bilepiper",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Plaguebearers",
      "composition": ["1 Sloppity Bilepiper"],
      "loadout": "This model is equipped with: marotter.",
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
        "core": ["Deep Strike", "Leader"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Jolly Gutpipes",
            "description": "While this model is leading a unit, add 1 to the Move characteristic of models in that unit and you can re-roll Advance rolls made for that unit.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Disease of Mirth (Aura)",
            "description": "At the start of the Fight phase, every enemy unit (excluding Monsters and Vehicles) within 6\" of this model must take a Battle-shock test.",
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
          "m": "5\"",
          "t": "5",
          "sv": "7+",
          "w": "5",
          "ld": "7+",
          "oc": "1",
          "name": "Sloppity Bilepiper",
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
              "name": "Marotter",
              "keywords": ["lethal hits"],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Chaos",
        "Daemon",
        "Nurgle",
        "Sloppity Bilepiper"
      ],
      "factions": ["Legiones Daemonica"],
      "leads": {
        "units": ["Plaguebearers"],
        "extra": ""
      }
    },
    {
      "id": "03ca041c-bfbd-5b28-a804-2f69d5238dcd",
      "name": "Soul Grinder",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Soul Grinder"],
      "loadout": "This model is equipped with: harvester cannon; iron",
      "wargear": ["This model’s warpsword can be replaced with 1 warpclaw."],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "215",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3", "Deep Strike"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [
          {
            "name": "DAEMONIC ALLEGIANCE",
            "showAbility": true,
            "abilities": [
              {
                "name": "DAEMONIC ALLEGIANCE",
                "description": " When you select this model to include in your army, you must select one of the keywords below. Until the end of the battle, this model has that keyword and the additional wargear stated for that keyword below."
              },
              {
                "name": "Khorne        This model is additionally equipped with",
                "description": "torrent of burning blood",
                "showAbility": true,
                "showDescription": true
              },
              {
                "name": "Tzeentch      This model is additionally equipped with",
                "description": "warp gaze",
                "showAbility": true,
                "showDescription": true
              },
              {
                "name": "Nurgle        This model is additionally equipped with",
                "description": "phlegm bombardment",
                "showAbility": true,
                "showDescription": true
              },
              {
                "name": "Slaanesh      This model is additionally equipped with",
                "description": "scream of despair",
                "showAbility": true,
                "showDescription": true
              }
            ]
          }
        ],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Scuttling Walker",
            "description": "Each time this model makes a Normal or Advance move, it can move over friendly Monster and Vehicle models and terrain features that are 4\" or less in height as if they were not there.",
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
          "m": "8\"",
          "t": "11",
          "sv": "3+",
          "w": "14",
          "ld": "7+",
          "oc": "5",
          "name": "Soul Grinder",
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
              "name": "Harvester cannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "3",
              "skill": "3+",
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
              "name": "Torrent of burning blood",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "2D6",
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
              "name": "Phlegm bombardment",
              "keywords": ["blast", "indirect fire", "lethal hits"],
              "range": "36\"",
              "attacks": "D6+1",
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
              "name": "Scream of despair",
              "keywords": ["devastating wounds", "sustained hits 1"],
              "range": "24\"",
              "attacks": "6",
              "skill": "3+",
              "strength": "9",
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
              "name": "Warp gaze",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D3",
              "skill": "3+",
              "strength": "12",
              "ap": "-2",
              "damage": "D6+2"
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
              "name": "Iron claw",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "16",
              "ap": "-3",
              "damage": "D6+2"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Warpclaw",
              "keywords": ["extra attacks"],
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
              "name": "Warpsword",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "8",
              "ap": "-2",
              "damage": "D6"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Walker", "Chaos", "Daemon", "Soul Grinder"],
      "factions": ["Legiones Daemonica"]
    },
    {
      "id": "644fced3-ecd8-57b0-98aa-30ec836d3da8",
      "name": "Spined Chaos Beast",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Spined Chaos Beast"],
      "loadout": "This model is equipped with: jagged claws and tusked maw.",
      "wargear": ["None"],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [
          {
            "name": "DAEMONIC ALLEGIANCE",
            "showAbility": true,
            "abilities": [
              {
                "name": "Creature of Khorne",
                "description": "If this model has the Khorne keyword, add 2 to the Strength characteristic of this model's melee weapons.",
                "showAbility": true,
                "showDescription": true
              },
              {
                "name": "Creature of Tzeentch",
                "description": "If this model has the Tzeentch keyword, this model has a 4+ invulnerable save.",
                "showAbility": true,
                "showDescription": true
              },
              {
                "name": "Creature of Nurgle",
                "description": "If this model has the Nurgle keyword, add 1 to this model's Toughness characteristic.",
                "showAbility": true,
                "showDescription": true
              },
              {
                "name": "Creature of Slaanesh",
                "description": "If this model has the Slaanesh keyword, add 2\" to this model's Move characteristic.",
                "showAbility": true,
                "showDescription": true
              }
            ]
          }
        ],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Warp Spines",
            "description": "Each time this model ends a Charge move, select one enemy unit within Engagement Range of it and roll one D6: on a 2-3, that enemy unit suffers D3 mortal wounds; on a 4-5, that enemy unit suffers 3 mortal wounds; on a 6, that enemy unit suffers D3+3 mortal wounds.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "DAEMONIC ALLEGIANCE",
            "description": "When you select this model to include in your army, you must select one of the following keywords for it to gain: ■ Khorne ■ Tzeentch ■ Nurgle ■ Slaanesh The keyword you select will also affect some of this model’s characteristics (see the Daemonic Allegiance section).",
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
          "t": "10",
          "sv": "4+",
          "w": "12",
          "ld": "7+",
          "oc": "4",
          "name": "Spined Chaos Beast",
          "showDamagedMarker": true,
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
              "name": "Jagged claws and tusked maw",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "3+",
              "strength": "12",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": ["Monster", "Chaos", "Spined Chaos Beast"],
      "factions": ["Legiones Daemonica"]
    },
    {
      "id": "dda65565-bf12-5680-81ab-1b9631937882",
      "name": "Spoilpox Scrivener",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Plaguebearers",
      "composition": ["1 Spoilpox Scrivener"],
      "loadout": "This model is equipped with: disgusting sneezes; plaguesword and distended maw.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "65",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike", "Leader"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Keep Counting!",
            "description": "While this model is leading a unit, melee weapons equipped by models in that unit have the [SUSTAINED HITS 1] ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Meet Your Quota!",
            "description": "While this model is leading a unit, add 1 to the Objective Control characteristic of models in that unit.",
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
          "m": "5\"",
          "t": "5",
          "sv": "7+",
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "Spoilpox Scrivener",
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
              "name": "Disgusting sneezes",
              "keywords": ["pistol", "torrent"],
              "range": "6\"",
              "attacks": "D6",
              "skill": "N/A",
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
              "name": "Plaguesword and distended maw",
              "keywords": ["lethal hits"],
              "range": "Melee",
              "attacks": "6",
              "skill": "3+",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Chaos",
        "Daemon",
        "Nurgle",
        "Spoilpox Scrivener"
      ],
      "factions": ["Legiones Daemonica"],
      "leads": {
        "units": ["Plaguebearers"],
        "extra": ""
      }
    },
    {
      "id": "1e8cc116-d5f4-5574-b069-865316656cb5",
      "name": "Syll’esske",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Daemonettes",
      "composition": ["1 Syll’Esske – Epic Hero"],
      "loadout": "This model is equipped with: Cacophonic Choir; scourging whip; Axe of Dominion.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "140",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike", "Leader"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Prince of Slaanesh",
            "description": "While this model is leading a unit, each time a model in that unit makes a melee attack, a successful unmodified Wound roll of 5+ scores a Critical Wound.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Delightful Agonies",
            "description": "The first time this model is destroyed, roll one D6 at the end of the phase. On a 2+, set this model back up on the battlefield, as close as possible to where it was destroyed and not within Engagement Range of any enemy units, with its full wounds remaining.",
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
          "m": "9\"",
          "t": "6",
          "sv": "6+",
          "w": "9",
          "ld": "6+",
          "oc": "2",
          "name": "Syll’esske",
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
              "name": "Cacophonic choir – witchfire",
              "keywords": [
                "devastating wounds",
                "ignores cover",
                "psychic",
                "torrent"
              ],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "6",
              "ap": "-1",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Cacophonic choir – focused witchfire",
              "keywords": [
                "psychic",
                "hazardous",
                "ignores cover",
                "devastating wounds",
                "torrent"
              ],
              "range": "12\"",
              "attacks": "2D6",
              "skill": "N/A",
              "strength": "6",
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
              "name": "Scourging whip",
              "keywords": ["assault"],
              "range": "9\"",
              "attacks": "6",
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
              "name": "Axe of Dominion",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "3+",
              "strength": "7",
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
              "name": "Scourging whip",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Character",
        "Epic Hero",
        "Psyker",
        "Chaos",
        "Daemon",
        "Slaanesh",
        "Syll’esske"
      ],
      "factions": ["Legiones Daemonica"],
      "leads": {
        "units": ["Daemonettes"],
        "extra": ""
      }
    },
    {
      "id": "2883a92d-8f1a-5847-8cb5-e7bc961fc5e3",
      "name": "The Blue Scribes",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 The Blue Scribes – Epic Hero"],
      "loadout": "This model is equipped with: sharp quills.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "65",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike", "Lone Operative"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "P’tarix’s Sorcerous Syphon (Aura)",
            "description": "While an enemy unit is within 12\" of this model, each time a model in that unit makes a Psychic Attack, subtract 1 from the Wound roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Xirat’p’s Sorcerous Barrages (Psychic)",
            "description": "At the end of your Movement phase, roll one D6 for each enemy unit within 6\" of this model: on a 2-3, that unit suffers 1 mortal wound; on a 4-5, that unit suffers D3 mortal wounds; on a 6, that unit suffers D6 mortal wounds.",
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
          "sv": "6+",
          "w": "6",
          "ld": "8+",
          "oc": "2",
          "name": "The Blue Scribes",
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
              "name": "Sharp quills",
              "keywords": ["anti-psyker 2+"],
              "range": "Melee",
              "attacks": "4",
              "skill": "5+",
              "strength": "2",
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
        "Fly",
        "Chaos",
        "Daemon",
        "Tzeentch",
        "The Blue Scribes"
      ],
      "factions": ["Legiones Daemonica"]
    },
    {
      "id": "6dedfdda-e85d-59b3-ade9-d5044c7e56e8",
      "name": "The Changeling",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 The Changeling – Epic Hero"],
      "loadout": "This model is equipped with: Infernal Flames; the Trickster’s Staff.",
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
        "core": ["Deep Strike", "Lone Operative", "Stealth"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Formless Horror",
            "description": "Each time an enemy unit wishes to select this model as the target of an attack, that unit must first take a Battle-shock test. If that test is failed, in addition to being Battle-shocked, that enemy unit cannot target this model this phase.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Mischief and Confusion",
            "description": "At the start of your opponent’s Shooting phase, select one enemy unit within 12\" of and visible to this model and roll one D6: on a 2-5, until the end of the phase, each time a model in that enemy unit makes an attack, subtract 1 from the Hit roll; on a 6, that enemy unit is not eligible to shoot this phase.",
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
          "sv": "7+",
          "w": "5",
          "ld": "7+",
          "oc": "1",
          "name": "The Changeling",
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
              "name": "Infernal Flames – witchfire",
              "keywords": ["ignores cover", "psychic", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "6",
              "ap": "-1",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Infernal Flames – focused witchfire",
              "keywords": ["ignores cover", "hazardous", "psychic", "torrent"],
              "range": "12\"",
              "attacks": "D6+3",
              "skill": "N/A",
              "strength": "6",
              "ap": "-1",
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
              "name": "The Trickster’s Staff",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "-1",
              "damage": "D3"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Epic Hero",
        "Psyker",
        "Chaos",
        "Daemon",
        "Tzeentch",
        "The Changeling"
      ],
      "factions": ["Legiones Daemonica"]
    },
    {
      "id": "472a16be-bfd5-5c86-b3da-4acbeeb96fc1",
      "name": "The Masque Of Slaanesh",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 The Masque of Slaanesh – Epic Hero"],
      "loadout": "This model is equipped with: serrated claws.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "105",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike", "Fights First", "Lone Operative"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "The Eternal Dance",
            "description": "At the start of the Fight phase, select one enemy unit within 6\" of this model. Until the end of the phase: ■  Each time a friendly Slaanesh Legiones Daemonica model makes a melee attack that targets that enemy unit, add 1 to the Wound roll. ■  Each time a model in that enemy unit makes a melee attack, subtract 1 from the Wound roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Dazzling Acrobatics",
            "description": "This model is eligible to declare a charge in a turn in which it Advanced or Fell Back.",
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
          "m": "9\"",
          "t": "3",
          "sv": "7+",
          "w": "4",
          "ld": "7+",
          "oc": "1",
          "name": "The Masque Of Slaanesh",
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
              "name": "Serrated claws",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "4",
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
        "Fly",
        "Chaos",
        "Daemon",
        "Slaanesh",
        "The Masque of Slaanesh"
      ],
      "factions": ["Legiones Daemonica"]
    },
    {
      "id": "6f4ab458-410d-511c-bf68-7a3f59c26a2b",
      "name": "Tormentbringer On Exalted Seeker Chariot",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Tormentbringer on Exalted Seeker Chariot"],
      "loadout": "This model is equipped with: lashes of torment; Exalted Seeker tongues; ravaging claws.",
      "wargear": ["None"],
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
        "core": ["Deep Strike"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Tormentbringer (Aura)",
            "description": "While a friendly Slaanesh Legiones Daemonica unit is within 6\" of this model, melee weapons in that unit have the [SUSTAINED HITS 1] ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Hysterical Frenzy (Psychic)",
            "description": "Once per Fight phase, just after an enemy unit selects a Slaanesh Legiones Daemonica unit from your army as a target, one friendly Psyker that is within 6\" of that Slaanesh unit and has this ability can use it. If it does, until the end of the phase, each time a model in that Slaanesh unit is destroyed, roll one D6: on a 4+, do not remove it from play. That model can fight after the attacking model’s unit has finished making its attacks, and is then removed from play.",
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
          "m": "14\"",
          "t": "6",
          "sv": "5+",
          "w": "12",
          "ld": "7+",
          "oc": "3",
          "name": "Tormentbringer On Exalted Seeker Chariot",
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
              "name": "Lashes of torment",
              "keywords": ["anti-infantry 3+", "assault", "pistol"],
              "range": "6\"",
              "attacks": "6",
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
              "name": "Exalted Seeker tongues",
              "keywords": ["extra attacks", "lethal hits"],
              "range": "Melee",
              "attacks": "8",
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
              "name": "Ravaging claws",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "15",
              "skill": "3+",
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
        "Psyker",
        "Chaos",
        "Daemon",
        "Slaanesh",
        "Tormentbringer on Exalted Seeker Chariot"
      ],
      "factions": ["Legiones Daemonica"]
    },
    {
      "id": "6ad89be2-0453-522d-92a7-03a3eac93456",
      "name": "Tranceweaver",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Daemonettes",
      "composition": ["1 Tranceweaver"],
      "loadout": "This model is equipped with: ravaging claws.",
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
        "core": ["Deep Strike", "Leader"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Tranceweaver",
            "description": "While this model is leading a unit, models in that unit have the Fights First ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Symphony of Pain (Psychic)",
            "description": "At the end of your Movement phase, you can select one enemy unit that is Battle-shocked and within 12\" of this model. Until the end of the turn, each time a Slaanesh Legiones Daemonica model from your army makes an attack that targets that enemy unit, you can re-roll the Hit roll and you can re-roll the Wound roll.",
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
          "m": "9\"",
          "t": "3",
          "sv": "7+",
          "w": "3",
          "ld": "7+",
          "oc": "1",
          "name": "Tranceweaver",
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
              "name": "Ravaging claws",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Psyker",
        "Chaos",
        "Daemon",
        "Slaanesh",
        "Tranceweaver"
      ],
      "factions": ["Legiones Daemonica"],
      "leads": {
        "units": ["Daemonettes"],
        "extra": ""
      }
    },
    {
      "id": "6505bcaf-9d75-5a89-bb57-5ea6270a7ac1",
      "name": "Zarakynel",
      "source": "40k-10e",
      "faction_id": "CD",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Zarakynel – Epic Hero"],
      "loadout": "This model is equipped with: Phantasmagoria; snapping claws; souleater blade.",
      "wargear": ["None"],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6", "Deep Strike"],
        "faction": ["The Shadow of Chaos"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Emissary of the Prince of Excess (Aura)",
            "description": "While a friendly Slaanesh Legiones Daemonica unit is within 6\" of this model, you can re-roll Battle-shock tests taken for that unit.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Mesmerising Form",
            "description": "Each time an attack targets this model, subtract 1 from the Hit roll.",
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
          "m": "14\"",
          "t": "10",
          "sv": "5+",
          "w": "20",
          "ld": "6+",
          "oc": "5",
          "name": "Zarakynel",
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
              "name": "Phantasmagoria – focused witchfire",
              "keywords": ["devastating wounds", "hazardous", "psychic"],
              "range": "18\"",
              "attacks": "9",
              "skill": "2+",
              "strength": "6",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Phantasmagoria – witchfire",
              "keywords": ["devastating wounds", "psychic"],
              "range": "18\"",
              "attacks": "6",
              "skill": "2+",
              "strength": "6",
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
              "name": "Snapping claws",
              "keywords": ["devastating wounds", "extra attacks"],
              "range": "Melee",
              "attacks": "4",
              "skill": "2+",
              "strength": "6",
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
              "name": "Souleater blade",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "9",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Character",
        "Epic Hero",
        "Psyker",
        "Chaos",
        "Daemon",
        "Slaanesh",
        "Zarakynel"
      ],
      "factions": ["Legiones Daemonica"]
    }
  ],
  "colours": {
    "banner": "#202224",
    "header": "#393940"
  }
}
