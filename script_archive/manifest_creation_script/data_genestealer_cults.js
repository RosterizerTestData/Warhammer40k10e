window.data = window.data || {};
window.data.GSC = {
  "id": "GSC",
  "link": "https://game-datacards.eu",
  "name": "Genestealer Cults",
  "is_subfaction": false,
  "parent_id": "",
  "stratagems": [
    {
      "name": "UNQUESTIONING LOYALTY",
      "cost": 1,
      "type": "Epic Deed",
      "detachment": "Ascension Day",
      "turn": "either",
      "phase": ["shooting", "fight"],
      "fluff": "Broodkin are so fanatically loyal that they\ndo not hesitate to sacrifice themselves to\nprotect their leaders.",
      "when": "Your opponent’s Shooting phase or\nthe Fight phase, just after an enemy unit\nhas selected its targets.",
      "target": "One Genestealer Cults\nCharacter unit from your army that was\nselected as the target of one or more of\nthat enemy unit’s attacks.",
      "effect": "Until the end of the phase, each\ntime a Character model in your unit\nwould lose a wound, select one friendly\nGenestealer Cults unit within 3\" of it\n(excluding Vehicle units). Your Character\nmodel does not lost that wound and\nthat selected unit suffers one mortal\nwound instead.",
      "restrictions": "",
      "id": "99e99640-c567-5652-906e-9c5be922b911"
    },
    {
      "name": "COORDINATED TRAP",
      "cost": 2,
      "type": "Battle Tactic",
      "detachment": "Ascension Day",
      "turn": "either",
      "phase": ["shooting", "fight"],
      "fluff": "Flowing like a dark tide down hidden\ntunnels, along rubble-choked gulleys or\nthrough sagging and rusted vents, the\nfaithful utterly encircle their enemies.",
      "when": "The start of your Shooting phase or\nthe start of the Fight phase.",
      "target": "Two Genestealer Cults units\nfrom your army that have not been\nselected to shoot or fight this phase, and\none enemy unit.",
      "effect": "Until the end of the phase, each\ntime a model in either of your units makes\nan attack, it can only target that enemy\nunit (and only if it is an eligible target\nfor that attack), and when resolving that\nattack, add 1 to the Wound roll.",
      "restrictions": "",
      "id": "df8ecd87-b459-5ae4-8b9e-a224ce8bd22f"
    },
    {
      "name": "TUNNEL CRAWLERS",
      "cost": 1,
      "type": "Strategic Ploy",
      "detachment": "Ascension Day",
      "turn": "your",
      "phase": ["movement"],
      "fluff": "Squirming, crawling and scrabbling\nthrough confined spaces is second nature\nto many broodkin, and is a skill they\nuse to assail seemingly impregnable\nenemy positions.",
      "when": "Your Movement phase.",
      "target": "One Genestealer Cults unit\nfrom your army that is arriving using the\nDeep Strike ability this phase.",
      "effect": "Your unit can be set up anywhere\non the battlefield that is more than 3\"\nhorizontally away from all enemy models.",
      "restrictions": "A unit targeted by this\nStratagem is not eligible to declare a\ncharge in the same turn.",
      "id": "7aef6df0-4d37-5447-aa94-ef2b10634695"
    },
    {
      "name": "A PERFECT AMBUSH",
      "cost": 1,
      "type": "Battle Tactic",
      "detachment": "Ascension Day",
      "turn": "your",
      "phase": ["shooting"],
      "fluff": "These Cultists have tracked their enemies\ntirelessly, as predatory beasts stalk their\nprey. Only when their position is perfect do\nthey strike, engulfing their victims in a hail\nof unexpected firepower.",
      "when": "Your Shooting phase.",
      "target": "One Genestealer Cults unit\nfrom your army that arrived from Reserves\nthis turn and has not been selected to\nshoot this phase.",
      "effect": "Until the end of the phase,\nimprove the Ballistic Skill and Armour\nPenetration characteristics of ranged\nweapons equipped by models in your\nunit by 1.",
      "restrictions": "",
      "id": "55c30ce2-feae-57b7-8d71-c2e1646dfc63"
    },
    {
      "name": "ONE WITH THE DARKNESS",
      "cost": 1,
      "type": "Strategic Ploy",
      "detachment": "Ascension Day",
      "turn": "opponents",
      "phase": ["shooting"],
      "fluff": "In dark nooks and crevices the true\nbelievers of the cult whisper and skulk, all\nbut invisible to those who approach.",
      "when": "Your opponent’s Shooting phase,\njust after an enemy unit has selected\nits targets.",
      "target": "One Genestealer Cults\nInfantry unit from your army that was\nselected as the target of one or more of\nthat enemy unit’s attacks.",
      "effect": "Until the end of the phase, your\nunit has the Stealth ability and can only\nbe selected as the target of a ranged\nattack if the attacking model is within 12\"",
      "restrictions": "",
      "id": "2baa46ac-fda1-579b-ad96-9f07f20cc5b8"
    },
    {
      "name": "RETURN TO THE SHADOWS",
      "cost": 1,
      "type": "Strategic Ploy",
      "detachment": "Ascension Day",
      "turn": "opponents",
      "phase": ["endOfTurn"],
      "fluff": "Ever cunning and duplicitous, broods of\nthe faithful often vanish back into tunnels\nand vents after their initial strike, ready to\nregroup and attack again elsewhere.",
      "when": "End of your opponent’s turn.",
      "target": "Up to two Genestealer Cults\nBattleline units from your army, or one\nother Genestealer Cults Infantry unit\nfrom your army.",
      "effect": "Remove the targeted units\nfrom the battlefield and place them into\nStrategic Reserves.",
      "restrictions": "The targeted units must\nhave the Deep Strike ability and cannot be\nwithin Engagement Range of any enemy\nunits when targeted.",
      "id": "7fc42b72-fe85-55d0-b08e-432cb88402d6"
    }
  ],
  "enhancements": [
    {
      "name": "Prowling Agitant",
      "description": "Genestealer Cults model only. Once per turn, when an enemy unit ends a Normal, Advance or Fall Back move within 9\" of the bearer’s unit, if the bearer’s unit is not within Engagement Range of any enemy units, it can make a Normal move of up to D6\".",
      "keywords": ["Genestealer Cults"],
      "excludes": [],
      "cost": "15"
    },
    {
      "name": "Inscrutable Cunning",
      "description": "Genestealer Cults model only. While the bearer is leading a unit, models in that unit have the Infiltrators ability and each time you select that unit as the target of a Stratagem, roll one D6: on a 4+, you gain 1CP.",
      "keywords": ["Genestealer Cults"],
      "excludes": [],
      "cost": "30"
    },
    {
      "name": "Meticulous Planner",
      "description": "Genestealer Cults model only. Once per battle, just after your opponent uses a Stratagem, if the bearer is on the battlefield, it can use this ability. If it does, until the end of the battle, the CP cost your opponent must pay to use that Stratagem again is increased by 1CP.",
      "keywords": ["Genestealer Cults"],
      "excludes": [],
      "cost": "40"
    },
    {
      "name": "Focus of Adoration",
      "description": "Genestealer Cults model only. While the bearer is leading a unit, you can target that unit with the Heroic Intervention Stratagem for 0CP, and can do so even if you have already targeted a different unit with that Stratagem this phase.",
      "keywords": ["Genestealer Cults"],
      "excludes": [],
      "cost": "10"
    }
  ],
  "datasheets": [
    {
      "id": "f4c5f27a-5cb4-5868-a895-d8d6c1236708",
      "name": "Aberrants",
      "source": "40k-10e",
      "faction_id": "GSC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Aberrant Hypermorph", "4-9 Aberrants"],
      "loadout": "The Aberrant Hypermorph is equipped with: heavy power weapon; hypermorph tail. Every Aberrant is equipped with: heavy power weapon.",
      "wargear": [
        "The Aberrant Hypermorph’s heavy power weapon can be replaced with 1 heavy improvised weapon."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "165",
          "active": true
        },
        {
          "models": "10",
          "cost": "330",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike", "Feel No Pain 4+"],
        "faction": ["Cult Ambush"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Hulking Bodyguards",
            "description": "While a Character is leading this unit, each time an attack targets this unit, if the Strength characteristic of that attack is greater than the Toughness characteristic of this unit, subtract 1 from the Wound roll.",
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
          "name": "Aberrants",
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
              "name": "Heavy improvised weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "6",
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
              "name": "Heavy power weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Hypermorph tail",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "1",
              "skill": "3+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Great Devourer", "Aberrants"],
      "factions": ["Genestealer Cults"],
      "leadBy": ["Abominant", "Biophagus"]
    },
    {
      "id": "7513b7ed-5c02-570f-b1a3-974cd2526952",
      "name": "Abominant",
      "source": "40k-10e",
      "faction_id": "GSC",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Aberrants",
      "composition": ["1 Abominant"],
      "loadout": "This model is equipped with: power sledgehammer.",
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
        "core": ["Deep Strike", "Feel No Pain 4+", "Leader"],
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
            "name": "The Chosen One",
            "description": "While this model is leading a unit, melee weapons equipped by models in that unit have the [SUSTAINED HITS 1] ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Regenerating Gene-mass",
            "description": "The first time this model is destroyed, roll one D6 at the end of the phase. On a 2+, set this model back up on the battlefield as close as possible to where it was destroyed and not within Engagement Range of any enemy units, with its full wounds remaining.",
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
          "w": "5",
          "ld": "7+",
          "oc": "1",
          "name": "Abominant",
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
              "name": "Power sledgehammer",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "12",
              "ap": "-2",
              "damage": "D6+1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Great Devourer", "Abominant"],
      "factions": ["Genestealer Cults"],
      "leads": {
        "units": ["Aberrants"],
        "extra": ""
      }
    },
    {
      "id": "5d8d96bd-da91-5ee6-aad3-e9eea1a4c84e",
      "name": "Achilles Ridgerunners",
      "source": "40k-10e",
      "faction_id": "GSC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1-2 Achilles Ridgerunners"],
      "loadout": "Every model is equipped with: heavy mining laser; twin heavy stubbers; Ridgerunner wheels; flare launcher.",
      "wargear": [
        "Any number of models can each have their heavy mining laser replaced with one of the following: ◦ 1 achilles missile launcher ◦ 1 heavy mortar",
        "Any number of models can each have their flare launcher replaced with one of the following: ◦ 1 spotter ◦ 1 survey augur"
      ],
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
        "wargear": [
          {
            "name": "Flare Launcher",
            "description": "The bearer’s unit has the Smoke keyword.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Spotter",
            "description": "The bearer’s ranged weapons have a Ballistic Skill characteristic of 3+.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Survey Augur",
            "description": "Each time the bearer’s unit has shot, select one enemy unit that was hit by one or more attacks made by the bearer this phase. Until the end of the phase, each time a friendly Genestealer Cults model makes an attack against that unit, that attack has the [IGNORES COVER] ability.",
            "showAbility": true,
            "showDescription": true
          }
        ],
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
            "name": "Crossfire",
            "description": "Each time this unit has shot, select one enemy unit that was hit by one or more attacks made by this unit this phase. Until the end of the phase, each time a friendly Genestealer Cults unit makes an attack that targets that enemy unit, improve the Armour Penetration characteristic of that attack by 1. The same enemy unit can only be affected by this ability once per phase.",
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
          "sv": "3+",
          "w": "8",
          "ld": "7+",
          "oc": "3",
          "name": "Achilles Ridgerunners",
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
              "name": "Achilles missile launcher",
              "keywords": [],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "9",
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
              "name": "Heavy mining laser",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D3",
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
              "name": "Heavy mortar",
              "keywords": ["blast", "indirect fire"],
              "range": "48\"",
              "attacks": "D6+3",
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
              "name": "Twin heavy stubber",
              "keywords": ["twin-linked", "rapid fire 3"],
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
              "name": "Ridgerunner wheels",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Great Devourer", "Achilles Ridgerunners"],
      "factions": ["Genestealer Cults"]
    },
    {
      "id": "86ddd50f-f055-592b-807d-342f8b97960d",
      "name": "Acolyte Hybrids",
      "source": "40k-10e",
      "faction_id": "GSC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Acolyte Leader", "4-9 Acolyte Hybrids"],
      "loadout": "Every model is equipped with: autopistol; cult claws and knife.",
      "wargear": [
        "Any number of models can each have their autopistol replaced with 1 hand flamer.",
        "One Acolyte Hybrid’s autopistol can be replaced with 1 cult icon.",
        "For every 5 models in this unit, up to 2 Acolyte Hybrids can each have their autopistol and cult claws and knife replaced with one of the following: ◦  1 demolition charges and 1 cult claws and knife ◦ 1 heavy mining tool",
        "The Acolyte Leader’s cult claws and knife can be replaced with 1 Leader’s cult weapons."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "75",
          "active": true
        },
        {
          "models": "10",
          "cost": "150",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Cult Icon",
            "description": "In the Reinforcements step of your Movement phase, you can return up to D3 destroyed models to the bearer’s unit. If the bearer’s unit is within range of an objective marker you control, you can return up to 3 destroyed models to that unit instead. This ability cannot be used to return destroyed Character models in Attached units.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deep Strike"],
        "faction": ["Cult Ambush"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Vile Insurrectionists",
            "description": "Each time a model in this unit makes an attack, re-roll a Hit roll of 1. If the target of that attack is an enemy unit within range of an objective marker, re-roll a Wound roll of 1 as well.",
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
          "w": "1",
          "ld": "7+",
          "oc": "2",
          "name": "Acolyte Hybrids",
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
              "name": "Autopistol",
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
              "name": "Demolition charges",
              "keywords": ["assault", "blast", "hazardous", "one shot"],
              "range": "6\"",
              "attacks": "D6+3",
              "skill": "5+",
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
              "name": "Hand flamer",
              "keywords": ["ignores cover", "pistol", "torrent"],
              "range": "12\"",
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
              "name": "Cult claws and knife",
              "keywords": [],
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
              "name": "Heavy mining tool",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "10",
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
              "name": "Leader’s cult weapons",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "5",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Battleline",
        "Grenades",
        "Great Devourer",
        "Acolyte Hybrids"
      ],
      "factions": ["Genestealer Cults"],
      "leadBy": [
        "Acolyte Iconward",
        "Biophagus",
        "Clamavus",
        "Locus",
        "Magus",
        "Nexos",
        "Primus"
      ]
    },
    {
      "id": "b6026705-2477-5b43-9b8e-aeb99b014ecd",
      "name": "Acolyte Iconward",
      "source": "40k-10e",
      "faction_id": "GSC",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Acolyte Hybrids ■ Hybrid Metamorphs ■ Neophyte Hybrids",
      "composition": ["1 Acolyte Iconward"],
      "loadout": "This model is equipped with: autopistol; cult claws.",
      "wargear": ["None"],
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
            "name": "Nexus of Devotion",
            "description": "While this model is leading a unit, models in that unit have the Feel No Pain 5+ ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Summon the Cult",
            "description": "Once per battle, when you have to remove a Cult Ambush marker because your opponent has moved too close to it, if one or more models from your army with this ability are on the battlefield, you can use this ability. If you do, instead of removing that marker, you can place it anywhere on the battlefield that is within 12\" of a model from your army with this ability and more than 9\" horizontally away from all enemy units (if this is not possible, this ability is not considered to have been used and that marker is removed as normal).",
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
          "w": "3",
          "ld": "6+",
          "oc": "1",
          "name": "Acolyte Iconward",
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
              "name": "Autopistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Cult claws",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
        "Character",
        "Grenades",
        "Great Devourer",
        "Acolyte Iconward"
      ],
      "factions": ["Genestealer Cults"],
      "leads": {
        "units": ["Acolyte Hybrids", "Hybrid Metamorphs", "Neophyte Hybrids"],
        "extra": ""
      }
    },
    {
      "id": "8402f9e4-eda8-559e-96fb-6a64a44110a0",
      "name": "Atalan Jackals",
      "source": "40k-10e",
      "faction_id": "GSC",
      "cardType": "DataCard",
      "leader": "",
      "composition": [
        "4-8 Atalan Jackals",
        "1-2 Atalan Wolfquads* *  This unit can only contain 2 Atalan Wolfquads if it also contains 8 Atalan Jackals."
      ],
      "loadout": "Every Atalan Jackal is equipped with: Atalan small arms; close combat weapon. Every Atalan Wolfquad is equipped with: Atalan small arms; heavy stubber; close combat weapon.",
      "wargear": [
        "Any number of Atalan Jackals can each replace their close combat weapon with 1 Atalan power weapon.",
        "For every 4 Atalan Jackals in this unit, 1 Atalan Jackal’s Atalan small arms can be replaced with 1 grenade launcher.",
        "Any number of Atalan Wolfquads can each have their heavy stubber replaced with one of the following: ◦ 1 Atalan incinerator ◦ 1 mining laser"
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
        "core": ["Scouts 9\""],
        "faction": ["Cult Ambush"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Outrider Gangs",
            "description": "Each time you use the Cult Ambush ability to set this unit back up on the battlefield, in addition to the normal rules, all of its models must be set up wholly within 6\" of a battlefield edge and at least one of its models must be touching one of your Cult Ambush markers (that marker is then removed from the battlefield). If this cannot be done, this unit cannot be set back up.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Demolition Run",
            "description": "Once per battle round, after this unit ends a Normal move, you can select one enemy unit within 6\" of and visible to this unit and roll one D6 for each model in this unit: for each 4+, that enemy unit suffers 1 mortal wound.",
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
          "sv": "5+",
          "w": "2",
          "ld": "7+",
          "oc": "1",
          "name": "ATALAN JACKAL",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "12\"",
          "t": "4",
          "sv": "5+",
          "w": "4",
          "ld": "7+",
          "oc": "1",
          "name": "ATALAN WOLFQUAD",
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
              "name": "Atalan incinerator",
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
              "name": "Atalan small arms",
              "keywords": ["pistol"],
              "range": "12\"",
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
              "name": "Mining laser",
              "keywords": [],
              "range": "24\"",
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
              "name": "Atalan power weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
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
      "keywords": ["Mounted", "Grenades", "Great Devourer", "Atalan Jackals"],
      "factions": ["Genestealer Cults"],
      "leadBy": ["Jackal Alphus"]
    },
    {
      "id": "cfdb4aa9-ff45-5a9e-8a4e-ea6f50128ad3",
      "name": "Biophagus",
      "source": "40k-10e",
      "faction_id": "GSC",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Aberrants ■ Acolyte Hybrids ■ Hybrid Metamorphs ■ Neophyte Hybrids You can attach this model to a Genestealer Cults Battleline unit, even if a Primus, Magus or Acolyte Iconward model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": ["1 Biophagus"],
      "loadout": "This model is equipped with: autopistol; chemical vials; injector goad.",
      "wargear": ["This model can be equipped with 1 alchemicus familiar."],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "50",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Alchemicus Familiar",
            "description": "Once per battle, when the bearer’s unit is selected to fight, the bearer can use its alchemicus familiar. If it does, until the end of the phase, melee weapons equipped by models in that unit have the [ANTI-INFANTRY 2+] ability.",
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
            "name": "Twisted Science",
            "description": "While this model is leading a unit, melee weapons equipped by models in that unit have the [LETHAL HITS] ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Biological Warfare",
            "description": "Oncer per battle, when this model’s unit is selected to fight, this model can use this ability. If it does, until the end of the phase, improve the Attacks and Damage characteristics of its injector goad by 3.",
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
          "name": "Biophagus",
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
              "name": "Autopistol",
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
              "name": "Chemical vials",
              "keywords": ["anti-infantry 2+"],
              "range": "6\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "1",
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
              "name": "Injector goad",
              "keywords": ["anti-infantry 2+"],
              "range": "Melee",
              "attacks": "1",
              "skill": "3+",
              "strength": "2",
              "ap": "0",
              "damage": "D3"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Great Devourer", "Biophagus"],
      "factions": ["Genestealer Cults"],
      "leads": {
        "units": [
          "Aberrants",
          "Acolyte Hybrids",
          "Hybrid Metamorphs",
          "Neophyte Hybrids"
        ],
        "extra": "You can attach this model to a Genestealer Cults Battleline unit, even if a Primus, Magus or Acolyte Iconward model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths."
      }
    },
    {
      "id": "ea424452-a5a5-5a1c-a78d-54162f5267f4",
      "name": "Clamavus",
      "source": "40k-10e",
      "faction_id": "GSC",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Acolyte Hybrids ■ Hybrid Metamorphs ■ Neophyte Hybrids You can attach this model to a Genestealer Cults Battleline unit, even if a Primus, Magus or Acolyte Iconward model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": ["1 Clamavus"],
      "loadout": "This model is equipped with: autopistol; close combat weapon.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "40",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
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
            "name": "Voice of New Truths (Aura)",
            "description": "While an enemy unit is within 12\" of this model, subtract 1 from Battle-shock tests taken for that unit and, if that unit fails a Battle-shock test, it suffers 1 mortal wound.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Scrambler Array",
            "description": "Enemy units that are set up on the battlefield as Reinforcements cannot be set up within 12\" of this model.",
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
          "ld": "6+",
          "oc": "1",
          "name": "Clamavus",
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
              "name": "Autopistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Great Devourer", "Clamavus"],
      "factions": ["Genestealer Cults"],
      "leads": {
        "units": ["Acolyte Hybrids", "Hybrid Metamorphs", "Neophyte Hybrids"],
        "extra": "You can attach this model to a Genestealer Cults Battleline unit, even if a Primus, Magus or Acolyte Iconward model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths."
      }
    },
    {
      "id": "0e213523-9fb4-5f6f-9fa7-3c06a2d101a3",
      "name": "Goliath Rockgrinder",
      "source": "40k-10e",
      "faction_id": "GSC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Goliath Rockgrinder"],
      "loadout": "This model is equipped with: heavy mining laser; heavy stubber; drilldozer blade; demolition charge cache.",
      "wargear": [
        "This model’s heavy mining laser can be replaced with one of the following: ◦ 1 clearance incinerator ◦ 1 heavy seismic cannon"
      ],
      "transport": "This model has a transport capacity of 6 Genestealer Cults Infantry models. It cannot transport a Patriarch.",
      "points": [
        {
          "models": "1",
          "cost": "155",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3", "Firing Deck 6"],
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
            "name": "Grinding Clearance",
            "description": "Each time this model ends a Charge move, select one enemy unit within Engagement Range of it and roll six D6: for each 4+, that enemy unit suffers 1 mortal wound.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-3 WOUNDS REMAINING",
          "description": "While this model has 1-3 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "12\"",
          "t": "10",
          "sv": "3+",
          "w": "10",
          "ld": "7+",
          "oc": "3",
          "name": "Goliath Rockgrinder",
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
              "name": "Clearance incinerator",
              "keywords": ["ignores cover", "torrent"],
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
              "name": "Demolition charge cache",
              "keywords": ["assault", "blast", "hazardous"],
              "range": "6\"",
              "attacks": "D6+3",
              "skill": "5+",
              "strength": "12",
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
              "name": "Heavy mining laser",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D3",
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
              "name": "Heavy seismic cannon",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "4",
              "skill": "4+",
              "strength": "8",
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
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Drilldozer blade",
              "keywords": ["sustained hits 1"],
              "range": "Melee",
              "attacks": "6",
              "skill": "3+",
              "strength": "10",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Transport",
        "Great Devourer",
        "Goliath Rockgrinder"
      ],
      "factions": ["Genestealer Cults"]
    },
    {
      "id": "8ef21ea8-18fc-59ee-b096-146e535232fb",
      "name": "Goliath Truck",
      "source": "40k-10e",
      "faction_id": "GSC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Goliath Truck"],
      "loadout": "This model is equipped with: heavy stubber; twin autocannon; demolition charge cache; Goliath wheels.",
      "wargear": ["None"],
      "transport": "This model has a transport capacity of 12 Genestealer Cults Infantry models. It cannot transport a Patriarch.",
      "points": [
        {
          "models": "1",
          "cost": "110",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3", "Firing Deck 12"],
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
          "sv": "3+",
          "w": "10",
          "ld": "7+",
          "oc": "2",
          "name": "Goliath Truck",
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
              "name": "Demolition charge cache",
              "keywords": ["assault", "blast", "hazardous"],
              "range": "6\"",
              "attacks": "D6+3",
              "skill": "5+",
              "strength": "12",
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
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Goliath wheels",
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
        "Transport",
        "Dedicated Transport",
        "Great Devourer",
        "Goliath Truck"
      ],
      "factions": ["Genestealer Cults"]
    },
    {
      "id": "5e67b9d9-f2fb-5659-b6b6-29c78ea6f7cb",
      "name": "Hybrid Metamorphs",
      "source": "40k-10e",
      "faction_id": "GSC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Metamorph Leader", "4-9 Hybrid Metamorphs"],
      "loadout": "The Metamorph Leader is equipped with: autopistol; Leader’s cult weapons. Every Hybrid Metamorph is equipped with: autopistol; Metamorph mutations.",
      "wargear": [
        "Any number of models can each have their autopistol replaced with 1 hand flamer.",
        "One Hybrid Metamorph’s autopistol can be replaced with 1 cult icon."
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
        "wargear": [
          {
            "name": "Cult Icon",
            "description": "In the Reinforcements step of your Movement phase, you can return up to D3 destroyed models to the bearer’s unit. If the bearer’s unit is within range of an objective marker you control, you can return up to 3 destroyed models to that unit instead. This ability cannot be used to return destroyed Character models in Attached units.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deep Strike", "Scouts 6\""],
        "faction": ["Cult Ambush"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Savage Amalgam",
            "description": "Each time a model in this unit is destroyed by a melee attack, if that model has not fought this phase, roll one D6. On a 3+, do not remove it from play; that destroyed model can fight after the attacking model’s unit has finished making its attacks, and it is then removed from play.",
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
          "w": "1",
          "ld": "7+",
          "oc": "1",
          "name": "Hybrid Metamorphs",
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
              "name": "Autopistol",
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
              "name": "Hand flamer",
              "keywords": ["ignores cover", "pistol", "torrent"],
              "range": "12\"",
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
              "name": "Leader’s cult weapons",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
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
              "name": "Metamorph mutations – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            },
            {
              "active": true,
              "name": "Metamorph mutations – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
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
        "Grenades",
        "Great Devourer",
        "Hybrid Metamorphs"
      ],
      "factions": ["Genestealer Cults"],
      "leadBy": [
        "Acolyte Iconward",
        "Biophagus",
        "Clamavus",
        "Locus",
        "Magus",
        "Nexos",
        "Primus"
      ]
    },
    {
      "id": "9168e404-b555-505a-976a-22682fbb8f9b",
      "name": "Jackal Alphus",
      "source": "40k-10e",
      "faction_id": "GSC",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Atalan Jackals",
      "composition": ["1 Jackal Alphus"],
      "loadout": "This model is equipped with: autopistol; cult sniper rifle; close combat weapon.",
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
        "core": ["Leader", "Scouts 9\""],
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
            "name": "Priority Target",
            "description": "Each time this model makes an attack with its cult sniper rifle that targets an enemy unit, if it scores a hit, until the end of the phase, each time another Genestealer Cults model from your army makes a ranged attack that targets that enemy unit, re-roll a Hit roll of 1.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Master Outrider",
            "description": "In your Shooting phase, after this model’s unit has shot, if it is not within Engagement Range of any enemy units, that unit can make a Normal move of up to 6\" as if it were your Movement phase. If it does, until the end of the turn, that unit is not eligible to declare a charge.",
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
          "sv": "5",
          "w": "4",
          "ld": "7+",
          "oc": "1",
          "name": "Jackal Alphus",
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
              "name": "Autopistol",
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
              "name": "Cult sniper rifle",
              "keywords": ["heavy", "precision"],
              "range": "36\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "5",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Character",
        "Grenades",
        "Great Devourer",
        "Jackal Alphus"
      ],
      "factions": ["Genestealer Cults"],
      "leads": {
        "units": ["Atalan Jackals"],
        "extra": ""
      }
    },
    {
      "id": "dfedd2b9-1c09-5540-b1eb-4db139e1a860",
      "name": "Kelermorph",
      "source": "40k-10e",
      "faction_id": "GSC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Kelermorph"],
      "loadout": "This model is equipped with: liberator autostubs; close combat weapon.",
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
        "core": ["Deep Strike", "Lone Operative"],
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
            "name": "Cometh the Hour, Cometh the Hero",
            "description": "When this model is set up using the Deep Strike ability, if it is set up within 3\" horizontally of a friendly Genestealer Cults Battleline unit, it can be set up anywhere on the battlefield that is more than 3\" horizontally from all enemy models, but if it is set up within 9\" horizontally of an enemy unit it is not eligible to declare a charge this turn.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Gunslinger",
            "description": "Each time an enemy unit targets a friendly Genestealer Cults Battleline unit within 3\" of this model with ranged attacks, after that enemy unit has finished making its attacks, this model can shoot as if it were your Shooting phase.",
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
          "name": "Kelermorph",
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
              "name": "Liberator autostubs",
              "keywords": [
                "devastating wounds",
                "pistol",
                "precision",
                "sustained hits d3"
              ],
              "range": "12\"",
              "attacks": "6",
              "skill": "2+",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Great Devourer", "Kelermorph"],
      "factions": ["Genestealer Cults"]
    },
    {
      "id": "83a5765a-556e-5072-9035-2f972f434876",
      "name": "Locus",
      "source": "40k-10e",
      "faction_id": "GSC",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Acolyte Hybrids ■ Hybrid Metamorphs ■ Neophyte Hybrids You can attach this model to a Genestealer Cults Battleline unit, even if a Primus, Magus or Acolyte Iconward model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": ["1 Locus"],
      "loadout": "This model is equipped with: Locus blades.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "40",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike", "Fights First", "Leader"],
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
            "name": "Sudden Assault",
            "description": "While this model is leading a unit, models in that unit have the Fights First ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Bodyguard",
            "description": "While this model is leading a unit, other Character models attached to that unit have the Feel No Pain 4+ ability.",
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
          "w": "3",
          "ld": "7+",
          "oc": "1",
          "name": "Locus",
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
              "name": "Locus blades",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "5",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Great Devourer", "Locus"],
      "factions": ["Genestealer Cults"],
      "leads": {
        "units": ["Acolyte Hybrids", "Hybrid Metamorphs", "Neophyte Hybrids"],
        "extra": "You can attach this model to a Genestealer Cults Battleline unit, even if a Primus, Magus or Acolyte Iconward model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths."
      }
    },
    {
      "id": "ab65d861-6ce0-53d3-acc2-695be18ba436",
      "name": "Magus",
      "source": "40k-10e",
      "faction_id": "GSC",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Acolyte Hybrids ■ Hybrid Metamorphs ■ Neophyte Hybrids",
      "composition": ["1 Magus"],
      "loadout": "This model is equipped with: autopistol; Magus stave.",
      "wargear": ["None"],
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
            "name": "Spiritual Leader",
            "description": "While this model is leading a unit, models in that unit have the Feel No Pain 5+ ability against Psychic Attacks.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Mind Control (Psychic)",
            "description": "At the start of your opponent’s Shooting phase, one Psyker model from your army with this ability can use it. If used, select one enemy unit within 12\" of and visible to that Psyker model and roll one D6: on a 1, that Psyker model suffers D3 mortal wounds; on a 2-5, until the end of the phase, each time a model in that enemy unit makes an attack, subtract 1 from the Hit roll; on a 6, that enemy unit is not eligible to shoot this phase.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Psychic Familiar",
            "description": "Once per battle, at the start of any of your opponent’s Shooting phases, this model can use its psychic familiar. If it does, until the end of the phase, double the range of its Mind Control ability. Designer’s Note: Place a Psychic Familiar token next to the model, removing it once this ability has been used.",
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
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Magus",
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
              "name": "Autopistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Magus stave",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "5",
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
        "Great Devourer",
        "Magus"
      ],
      "factions": ["Genestealer Cults"],
      "leads": {
        "units": ["Acolyte Hybrids", "Hybrid Metamorphs", "Neophyte Hybrids"],
        "extra": ""
      }
    },
    {
      "id": "ec6bdc77-1eec-501e-be1a-1e4105102db9",
      "name": "Neophyte Hybrids",
      "source": "40k-10e",
      "faction_id": "GSC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Neophyte Leader", "9-19 Neophyte Hybrids"],
      "loadout": "Every model is equipped with: autopistol; Hybrid firearm; close combat weapon.",
      "wargear": [
        "One Neophyte Hybrid equipped with a Hybrid firearm can be equipped with 1 cult icon.",
        "For every 10 models in this unit, up to 2 Neophyte Hybrids can each have their Hybrid firearm replaced with one of the following: ◦ Heavy stubber ◦ Mining laser ◦ Seismic cannon",
        "For every 10 models in this unit, up to 2 Neophyte Hybrids can each have their Hybrid firearm replaced with one of the following: ◦ Flamer ◦ Grenade launcher ◦ Webber",
        "The Neophyte Leader’s Hybrid firearm and close combat weapon can be replaced with 1 of the following:  ◦ 1 Leader pistol and 1 chainsword ◦ 1 Leader pistol and 1 power weapon"
      ],
      "transport": "",
      "points": [
        {
          "models": "10",
          "cost": "80",
          "active": true
        },
        {
          "models": "20",
          "cost": "160",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Cult Icon",
            "description": "In the Reinforcements step of your Movement phase, you can return up to 3 destroyed models to the bearer’s unit. If the bearer’s unit is within range of an objective marker you control, you can return up to D3+3 destroyed models to that unit instead. This ability cannot be used to return destroyed Character models in Attached units.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deep Strike"],
        "faction": ["Cult Ambush"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "A Plan Generations in the Making",
            "description": "At the start of your Command phase, roll one D6 for each objective marker you control that has one or more units from your army with this ability within range of it. If one or more of the results is a 4+, you gain 1CP.",
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
          "name": "Neophyte Hybrids",
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
              "name": "Autopistol",
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
              "name": "Hybrid firearm",
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
              "name": "Leader pistol",
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
              "name": "Mining laser",
              "keywords": ["heavy"],
              "range": "24\"",
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
              "name": "Seismic cannon",
              "keywords": ["heavy", "rapid fire 2"],
              "range": "24\"",
              "attacks": "4",
              "skill": "5+",
              "strength": "6",
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
              "name": "Webber",
              "keywords": ["devastating wounds", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "2",
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
              "attacks": "1",
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
        "Grenades",
        "Great Devourer",
        "Neophyte Hybrids"
      ],
      "factions": ["Genestealer Cults"],
      "leadBy": [
        "Acolyte Iconward",
        "Biophagus",
        "Clamavus",
        "Locus",
        "Magus",
        "Nexos",
        "Primus"
      ]
    },
    {
      "id": "fcc4ee42-b0d2-5147-be51-c2280f9f7cea",
      "name": "Nexos",
      "source": "40k-10e",
      "faction_id": "GSC",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Acolyte Hybrids ■ Hybrid Metamorphs ■ Neophyte Hybrids You can attach this model to a Genestealer Cults Battleline unit, even if a Primus, Magus or Acolyte Iconward model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": ["1 Nexos"],
      "loadout": "This model is equipped with: autopistol; close combat weapon.",
      "wargear": ["None"],
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
            "name": "Battlefield Analysis",
            "description": "Once per turn, you can select one model or unit from your army with this ability as the target of a Stratagem for 0CP, even if you have already selected a model or unit from your army as the target of that Stratagem this phase.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Cult Infiltration",
            "description": "At the start of each player’s Command phase, if this model is on the battlefield, you can select one Cult Ambush marker that is on the battlefield and move it up to 6\".",
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
          "name": "Nexos",
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
              "name": "Autopistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Great Devourer", "Nexos"],
      "factions": ["Genestealer Cults"],
      "leads": {
        "units": ["Acolyte Hybrids", "Hybrid Metamorphs", "Neophyte Hybrids"],
        "extra": "You can attach this model to a Genestealer Cults Battleline unit, even if a Primus, Magus or Acolyte Iconward model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths."
      }
    },
    {
      "id": "c39cb3e9-b054-5588-ab06-e2b08ec6506e",
      "name": "Patriarch",
      "source": "40k-10e",
      "faction_id": "GSC",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Purestrain Genestealers",
      "composition": ["1 Patriarch – Epic Hero"],
      "loadout": "This model is equipped with: Patriarch’s claws.",
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
        "core": ["Deep Strike", "Infiltrators", "Leader"],
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
            "name": "Might From Beyond",
            "description": "While this model is leading a unit, melee weapons equipped by models in that unit have the [DEVASTATING WOUNDS] ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Cosmic Horror (Psychic)",
            "description": "At the start of the Fight phase, each enemy unit within 6\" of this model must take a Battle-shock test.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Psychic Familiar",
            "description": "Once per battle, at the start of the Fight phase, this model can use its psychic familiar. If it does, until the end of the phase, double the range of its Cosmic Horror ability. Designer’s Note: Place a Psychic Familiar token next to the model, removing it once this ability has been used.",
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
          "showDamagedAbility": false,
          "showDescription": true,
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "8\"",
          "t": "5",
          "sv": "4+",
          "w": "6",
          "ld": "6+",
          "oc": "1",
          "name": "Patriarch",
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
              "name": "Patriarch’s claws",
              "keywords": ["devastating wounds", "twin-linked"],
              "range": "Melee",
              "attacks": "5",
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
        "Psyker",
        "Great Devourer",
        "Epic Hero",
        "Patriarch"
      ],
      "factions": ["Genestealer Cults"],
      "leads": {
        "units": ["Purestrain Genestealers"],
        "extra": ""
      }
    },
    {
      "id": "6bc7aa70-cfae-5340-ad63-c7e925499136",
      "name": "Primus",
      "source": "40k-10e",
      "faction_id": "GSC",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Acolyte Hybrids ■ Hybrid Metamorphs ■ Neophyte Hybrids",
      "composition": ["1 Primus"],
      "loadout": "This model is equipped with: scoped needle pistol; cult bonesword; toxin injector claw.",
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
            "name": "Cult Demagogue",
            "description": "While this model is leading a unit, each time a model in that unit makes an attack, you can re-roll the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Decoys and Misdirection",
            "description": "If your army includes one or more models with this ability, after both players have deployed their armies, select up to three Genestealer Cults units from your army and redeploy them. When doing so, you can set those units up in Strategic Reserves if you wish, regardless of how many units are already in Strategic Reserves.",
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
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Primus",
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
              "name": "Scoped needle pistol",
              "keywords": ["anti-infantry 2+", "ignores cover", "pistol"],
              "range": "18\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "1",
              "ap": "0",
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
              "name": "Cult bonesword",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "5",
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
              "name": "Toxin injector claw",
              "keywords": ["anti-infantry 2+", "extra attacks"],
              "range": "Melee",
              "attacks": "2",
              "skill": "2+",
              "strength": "2",
              "ap": "0",
              "damage": "D3"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Great Devourer", "Primus"],
      "factions": ["Genestealer Cults"],
      "leads": {
        "units": ["Acolyte Hybrids", "Hybrid Metamorphs", "Neophyte Hybrids"],
        "extra": ""
      }
    },
    {
      "id": "a070396e-3f03-567d-984c-8f65dc57e5ea",
      "name": "Purestrain Genestealers",
      "source": "40k-10e",
      "faction_id": "GSC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["5-10 Purestrain Genestealers"],
      "loadout": "Every model is equipped with: cult claws and talons.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "90",
          "active": true
        },
        {
          "models": "10",
          "cost": "180",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike", "Infiltrators"],
        "faction": ["Cult Ambush"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Swift and Deadly",
            "description": "This unit is eligible to declare a charge in a turn in which it Advanced.",
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
          "t": "4",
          "sv": "5+",
          "w": "2",
          "ld": "7+",
          "oc": "1",
          "name": "Purestrain Genestealers",
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
              "name": "Cult claws and talons",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "2+",
              "strength": "4",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Great Devourer", "Purestrain Genestealers"],
      "factions": ["Genestealer Cults"],
      "leadBy": ["Patriarch"]
    },
    {
      "id": "0ad632db-93d0-5fd1-82ad-37461921747e",
      "name": "Reductus Saboteur",
      "source": "40k-10e",
      "faction_id": "GSC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Reductus Saboteur"],
      "loadout": "This model is equipped with: autopistol; demolition charges; remote explosives; close combat weapon.",
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
        "core": ["Deep Strike", "Infiltrators", "Lone Operative", "Stealth"],
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
            "description": "In your Shooting phase, you can select one model from your army with this ability as the target of the Grenade Stratagem for 0CP, provided that model has not already been the target of that Stratagem this phase. This can allow you to use the Grenade Stratagem for a second time this phase.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Planted Explosives",
            "description": "Once per battle, when an enemy unit ends a Normal, Advance or Fall Back move within 12\" of this model, this model can use its Reductus mine. If it does, roll one D6: on a 2+, that enemy unit suffers D3+3 mortal wounds. Only one model from your army with this ability can use it in the same battle round. Designer’s Note: Place a Reductus Mine token next to the model, removing it once this ability has been used.",
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
          "name": "Reductus Saboteur",
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
              "name": "Autopistol",
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
              "name": "Demolition charges",
              "keywords": ["assault", "blast", "one shot"],
              "range": "6\"",
              "attacks": "D6+3",
              "skill": "2+",
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
              "name": "Remote explosives",
              "keywords": ["blast", "indirect fire"],
              "range": "24\"",
              "attacks": "D6+3",
              "skill": "3+",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Grenades",
        "Great Devourer",
        "Reductus Saboteur"
      ],
      "factions": ["Genestealer Cults"]
    },
    {
      "id": "68761649-a23b-59dd-94a5-0ccaa4d13d85",
      "name": "Sanctus",
      "source": "40k-10e",
      "faction_id": "GSC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Sanctus"],
      "loadout": "This model is equipped with: Sanctus bio-dagger.",
      "wargear": [
        "This model’s Sanctus bio-dagger can be replaced with 1 cult sniper rifle and 1 close combat weapon."
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
        "core": ["Deep Strike", "Infiltrators", "Lone Operative", "Stealth"],
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
            "name": "Creeping Shadow",
            "description": "This unit is eligible to shoot and declare a charge in a turn in which it Advanced or Fell Back.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Psychic Spoor",
            "description": "At the start of the first battle round, select one enemy unit to be this model’s prey. Each time this model makes an attack that targets its prey, that attack has the [IGNORES COVER] and [DEVASTATING WOUNDS] abilities.",
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
          "name": "Sanctus",
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
              "name": "Cult sniper rifle",
              "keywords": ["anti-psyker 2+", "heavy", "precision"],
              "range": "36\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "5",
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
              "name": "Sanctus bio-dagger",
              "keywords": ["anti-infantry 3+", "precision"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "3",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Great Devourer", "Sanctus"],
      "factions": ["Genestealer Cults"]
    },
    {
      "id": "4914a84e-de69-5140-873c-41cd921093c9",
      "name": "Tectonic Fragdrill",
      "source": "40k-10e",
      "faction_id": "GSC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Tectonic Fragdrill"],
      "loadout": "This model is equipped with: fragdrill.",
      "wargear": ["None"],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
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
            "name": "Tectonic Fragdrill",
            "description": "Friendly Genestealer Cult Infantry models can be set up or end any type of move on top of the floor sections of this Fortification.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Underground Egress",
            "description": "Each time one of your Cult Ambush markers is removed as the result of an enemy unit ending any kind of move within 9\" of it, you can instead move that marker so that it is wholly within 9\" of this Fortification and more than 9\" horizontally away from all enemy units (if this is not possible, that marker is removed as normal).",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Manufactorum Cover",
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
          "t": "11",
          "sv": "3+",
          "w": "14",
          "ld": "7+",
          "oc": "0",
          "name": "Tectonic Fragdrill",
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
              "name": "Fragdrill",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "6+",
              "strength": "12",
              "ap": "-2",
              "damage": "D6"
            }
          ]
        }
      ],
      "keywords": ["Fortification", "Vehicle", "Tectonic Fragdrill"],
      "factions": ["Genestealer Cults"]
    }
  ],
  "colours": {
    "banner": "#291221",
    "header": "#391625"
  }
}