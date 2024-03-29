window.data = window.data || {};
window.data.NEC = {
  "id": "NEC",
  "link": "https://game-datacards.eu",
  "name": "Necrons",
  "is_subfaction": false,
  "parent_id": "",
  "stratagems": [
    {
      "name": "PROTOCOL OF THE ETERNAL GUARDIAN",
      "cost": 1,
      "type": "Epic Deed",
      "detachment": "Awakened Dynasty",
      "turn": "either",
      "phase": ["any"],
      "fluff": "Necron rulers possess sophisticated\nself-repair systems that can reknit their\ncorporeal forms so they can once more\ncommand their legions.",
      "when": "Any phase.",
      "target": "One Necrons Infantry\nCharacter model from your army that\nwas just destroyed.",
      "effect": "Set your model back up on the\nbattlefield as close as possible to where\nit was destroyed and more than 1\" away\nfrom all enemy models, with half of its\nstarting number of wounds remaining.",
      "restrictions": "Each model can only\nbe targeted with this Stratagem once\nper battle.",
      "id": "b7bfdae3-7060-5959-8cd4-bf3af9ee4417"
    },
    {
      "name": "PROTOCOL OF THE HUNGRY VOID",
      "cost": 1,
      "type": "Battle Tactic",
      "detachment": "Awakened Dynasty",
      "turn": "either",
      "phase": ["fight"],
      "fluff": "The Necrons strike with data-augmented\naccuracy, their murderous attacks as\ninescapable as the killing cold of space.",
      "when": "Fight phase.",
      "target": "One Necrons unit from your\narmy that has not been selected to fight\nthis phase.",
      "effect": "Until the end of the phase, add\n1 to the Strength characteristic of melee\nweapons equipped by models in your\nunit. In addition, If a Necrons Character\nis leading your unit, until the end of the\nphase, improve the Armour Penetration\ncharacteristic of melee weapons\nequipped by models in your unit by 1.",
      "restrictions": "",
      "id": "82107f4c-023d-5591-931d-02f38372cfd1"
    },
    {
      "name": "PROTOCOL OF THE CONQUERING TYRANT",
      "cost": 1,
      "type": "Battle Tactic",
      "detachment": "Awakened Dynasty",
      "turn": "your",
      "phase": ["shooting"],
      "fluff": "The legions employ the strategies of their\nmasters in perfect synchronicity, laying\ndown hails of mechanically coordinated fire.",
      "when": "Your Shooting phase.",
      "target": "One Necrons unit from your\narmy that has not been selected to shoot\nthis phase.",
      "effect": "Until the end of the phase, each\ntime a model in your unit makes an attack\nthat targets a unit within half of the firing\nweapon’s range, you can re-roll the Wound\nroll. If a Necrons Character is leading\nyour unit, until the end of the phase, this\neffect applies at the firing weapon’s full\nrange instead.",
      "restrictions": "",
      "id": "6d46a230-dfb3-5e62-9162-91b07201c6c5"
    },
    {
      "name": "PROTOCOL OF THE UNDYING LEGIONS",
      "cost": 1,
      "type": "Strategic Ploy",
      "detachment": "Awakened Dynasty",
      "turn": "either",
      "phase": ["shooting", "fight"],
      "fluff": "At a hissing static signal, nanoscarabs\nare released in boiling black clouds\nthat whirl about the legions and effect\nconstant repairs.",
      "when": "Your opponent’s Shooting phase or\nthe Fight phase, just after an enemy unit\nhas resolved its attacks.",
      "target": "One Necrons unit from your\narmy that had one or more of its models\ndestroyed as a result of the attacking\nunit’s attacks.",
      "effect": "Your unit activates its\nReanimation Protocols and reanimates\nD3 wounds. When doing so, if a Necrons\nCharacter is leading your unit, your unit\nreanimates D3+1 wounds instead.",
      "restrictions": "",
      "id": "c6035bd0-b959-530d-b384-3944189b8519"
    },
    {
      "name": "PROTOCOL OF THE SUDDEN STORM",
      "cost": 1,
      "type": "Strategic Ploy",
      "detachment": "Awakened Dynasty",
      "turn": "your",
      "phase": ["movement"],
      "fluff": "Arcing energies leap from one Necron unit\nto the next, lending speed to their limbs\nand causing their eye lenses to blaze.",
      "when": "Your Movement phase.",
      "target": "One Necrons unit from\nyour army.",
      "effect": "Until the end of the turn, ranged\nweapons equipped by models in your unit\nhave the [ASSAULT] ability. In addition, if a\nNecrons Character is leading your unit,\nuntil the end of the phase, you can re-roll\nAdvance rolls made for your unit.",
      "restrictions": "",
      "id": "f684acad-961a-5c0e-a379-7e7e3132f922"
    },
    {
      "name": "PROTOCOL OF THE VENGEFUL STARS",
      "cost": 1,
      "type": "Strategic Ploy",
      "detachment": "Awakened Dynasty",
      "turn": "opponents",
      "phase": ["shooting"],
      "fluff": "In response to enemy attack, criss-cross\nfire leaps from the Necron ranks, forming\na blazing corona of deadly energy from\nwhich there can be no escape.",
      "when": "Your opponent’s Shooting phase,\njust after an enemy unit has resolved\nits attacks.",
      "target": "One Necrons unit from your\narmy that had one or more of its models\ndestroyed as a result of the attacking\nunit’s attacks.",
      "effect": "Your unit can shoot as if it were\nyour Shooting phase, but it must target\nthe enemy unit that just attacked it, and\ncan only do so if that enemy unit is an\neligible target. In addition, if a Necrons\nCharacter is leading your unit, until\nthe end of the phase, ranged weapons\nequipped by models in your unit have the\n[IGNORES COVER] ability. ",
      "restrictions": "",
      "id": "45d7ea5a-a28f-5f67-ae49-182642f805a5"
    }
  ],
  "enhancements": [
    {
      "name": "VEIL OF DARKNESS",
      "description": "Necrons model only. Once per battle, at the end of your opponent’s turn, if the bearer’s unit is not within Engagement Range of any enemy units, the bearer can use this Enhancement. If it does, remove that unit from the battlefield. Then, in the Reinforcements step of your next Movement phase, set up that unit anywhere on the battlefield that is more than 9\" horizontally away from all enemy models.",
      "keywords": ["Necrons"],
      "excludes": [],
      "cost": "20"
    },
    {
      "name": "HYPERMATERIAL ABLATOR",
      "description": "Necrons model only. While the bearer is leading a unit, models in that unit have the Stealth ability. In addition, each time a ranged attack targets the bearer’s unit, if the attacker is not within 12\", models in that unit have the Benefit of Cover.",
      "keywords": ["Necrons"],
      "excludes": [],
      "cost": "25"
    },
    {
      "name": "THE SOVEREIGN CORONAL (AURA)",
      "description": "Necrons model only. While a friendly Necrons unit is within 6\" of the bearer, that unit counts as being led by a Necrons Character model.\n\nDesigner’s Note: This means that units within range of this Aura ability will benefit from the Command Protocols ability and will count as containing a Character for the purposes of any Awakened Dynasty Stratagems.",
      "keywords": ["Necrons"],
      "excludes": [],
      "cost": "30"
    },
    {
      "name": "SEMPITERNAL WEAVE",
      "description": "Necrons model only. The bearer has the Feel No Pain 4+ ability.",
      "keywords": ["Necrons"],
      "excludes": [],
      "cost": "10"
    }
  ],
  "datasheets": [
    {
      "id": "a80a9cb1-793f-59b4-b0e6-ec18824c6acc",
      "name": "Annihilation Barge",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Annihilation Barge"],
      "loadout": "This model is equipped with: gauss cannon; twin tesla destructor; armoured bulk.",
      "wargear": [
        "This model’s gauss cannon can be replaced with 1 tesla cannon."
      ],
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
        "core": ["Deadly Demise 1"],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Malevolent Arcing",
            "description": "In your Shooting phase, each time you select a target for this model’s twin tesla destructor, roll one D6 for the target unit and one D6 for every other enemy unit within 3\" of the target unit. On a 5+, the unit being rolled for is struck by arcing energies; after resolving all of this model’s attacks against the target unit, each unit struck by arcing energies suffers D3 mortal wounds.",
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
          "t": "8",
          "sv": "3+",
          "w": "9",
          "ld": "7+",
          "oc": "3",
          "name": "Annihilation Barge",
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
              "name": "Gauss cannon",
              "keywords": ["lethal hits"],
              "range": "24\"",
              "attacks": "3",
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
              "name": "Tesla cannon",
              "keywords": ["sustained hits 2"],
              "range": "24\"",
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
              "name": "Twin tesla destructor",
              "keywords": ["sustained hits 2", "twin-linked"],
              "range": "36\"",
              "attacks": "6",
              "skill": "3+",
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
              "name": "Armoured bulk",
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
      "keywords": ["Vehicle", "Fly", "Annihilation Barge"],
      "factions": ["Necrons"]
    },
    {
      "id": "88736a30-2818-553f-a25f-658aeef45a53",
      "name": "Anrakyr The Traveller",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Immortals",
      "composition": ["1 Anrakyr the Traveller – Epic Hero"],
      "loadout": "This model is equipped with: tachyon arrow; warscythe.",
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
        "core": ["Leader"],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Lord of the Pyrrhian Eternals",
            "description": "While this model is leading a unit, each time a model in that unit makes an attack, add 1 to the Wound roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Mind in the Machine",
            "description": "At the start of your opponent’s Shooting phase, select one enemy Vehicle unit within 12\" of and visible to this model. That unit must take a Leadership test. If that test is passed, until the end of the phase, each time a model in that unit makes an attack, subtract 1 from the Hit roll; if that test is failed, that unit is not eligible to shoot this phase.",
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
          "sv": "2+",
          "w": "6",
          "ld": "6+",
          "oc": "1",
          "name": "Anrakyr The Traveller",
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
              "name": "Tachyon arrow",
              "keywords": ["one shot"],
              "range": "72\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "16",
              "ap": "-5",
              "damage": "D6+2"
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
              "name": "Warscythe",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "4",
              "skill": "2+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Epic Hero",
        "Noble",
        "Anrakyr the Traveller"
      ],
      "factions": ["Necrons"],
      "leads": {
        "units": ["Immortals"],
        "extra": ""
      }
    },
    {
      "id": "3aa4c97e-e10e-5022-9b5e-1c03ab55e9be",
      "name": "C’tan Shard Of The Deceiver",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 C’tan Shard of the Deceiver – Epic Hero"],
      "loadout": "This model is equipped with: cosmic insanity; golden fists.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "265",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6", "Stealth"],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Grand Illusion",
            "description": "If your army includes this model, after both players have deployed their armies, select up to three Necrons units from your army and redeploy them. When doing so, you can set those units up in Strategic Reserves if you wish, regardless of how many units are already in Strategic Reserves.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Necrodermis",
            "description": "Each time an attack is allocated to this model, halve the Damage characteristic of that attack.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "ENSLAVED STAR GOD",
            "description": "This model cannot be your Warlord.",
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
          "t": "11",
          "sv": "4+",
          "w": "12",
          "ld": "6+",
          "oc": "6",
          "name": "C’tan Shard Of The Deceiver",
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
              "name": "Cosmic insanity",
              "keywords": [
                "anti-character 4+",
                "devastating wounds",
                "precision"
              ],
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
              "name": "Golden fists",
              "keywords": [],
              "range": "Melee",
              "attacks": "8",
              "skill": "2+",
              "strength": "8",
              "ap": "-3",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Character",
        "Epic Hero",
        "Fly",
        "C’tan Shard of the Deceiver"
      ],
      "factions": ["Necrons"]
    },
    {
      "id": "380b6d75-fffb-5746-9eee-42d7d9dbdabc",
      "name": "C’tan Shard Of The Nightbringer",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 C’tan Shard of the Nightbringer – Epic Hero"],
      "loadout": "This model is equipped with: gaze of death; Scythe of the Nightbringer.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "255",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Necrodermis",
            "description": "Each time an attack is allocated to this model, halve the Damage characteristic of that attack.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "ENSLAVED STAR GOD",
            "description": "This model cannot be your Warlord.",
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
          "t": "11",
          "sv": "4+",
          "w": "12",
          "ld": "6+",
          "oc": "4",
          "name": "C’tan Shard Of The Nightbringer",
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
              "name": "Gaze of death",
              "keywords": ["blast"],
              "range": "18\"",
              "attacks": "D3",
              "skill": "2+",
              "strength": "12",
              "ap": "-2",
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
              "name": "Scythe of the Nightbringer – strike",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "14",
              "ap": "-4",
              "damage": "D6"
            },
            {
              "active": true,
              "name": "Scythe of the Nightbringer – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "14",
              "skill": "2+",
              "strength": "8",
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
        "Fly",
        "C’tan Shard of the Nightbringer"
      ],
      "factions": ["Necrons"]
    },
    {
      "id": "248c90ab-ba41-548a-b6c5-b908d9a067c5",
      "name": "C’tan Shard Of The Void Dragon",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 C’tan Shard of the Void Dragon – Epic Hero"],
      "loadout": "This model is equipped with: Spear of the Void Dragon; voltaic storm; Canoptek tail blades.",
      "wargear": ["None"],
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
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Matter Absorption",
            "description": "At the start of your Shooting phase, select one enemy Vehicle unit within 12\" of this model and roll one D6: on a 2+, that enemy unit suffers D3 mortal wounds and this model regains up to that many lost wounds.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Necrodermis",
            "description": "Each time an attack is allocated to this model, halve the Damage characteristic of that attack.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "ENSLAVED STAR GOD",
            "description": "This model cannot be your Warlord.",
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
          "t": "11",
          "sv": "4+",
          "w": "12",
          "ld": "6+",
          "oc": "4",
          "name": "C’tan Shard Of The Void Dragon",
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
              "name": "Spear of the Void Dragon",
              "keywords": ["anti-vehicle 2+"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "4",
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
              "name": "Voltaic storm",
              "keywords": ["blast", "sustained hits 2"],
              "range": "18\"",
              "attacks": "D6+3",
              "skill": "2+",
              "strength": "7",
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
              "name": "Spear of the Void Dragon – strike",
              "keywords": ["anti-vehicle 2+"],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+2"
            },
            {
              "active": true,
              "name": "Spear of the Void Dragon – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "10",
              "skill": "2+",
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
              "name": "Canoptek tail blades",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "6",
              "ap": "-1",
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
        "C’tan Shard of the Void Dragon"
      ],
      "factions": ["Necrons"]
    },
    {
      "id": "0c18a5f3-364d-515a-b900-0674d9cbf1e7",
      "name": "Canoptek Acanthrites",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["3-6 Canoptek Acanthrites"],
      "loadout": "Every model is equipped with: cutting beam; voidblade.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "85",
          "active": true
        },
        {
          "models": "6",
          "cost": "170",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Infiltrators"],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Damaged Armour",
            "description": "In your Shooting phase, after this unit has shot, select one enemy unit hit by one or more of those attacks. Until the end of the phase, each time a friendly Necrons model makes an attack that targets that unit, on a Critical Wound, improve the Armour Penetration characteristic of that attack by 1.",
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
          "sv": "3+",
          "w": "2",
          "ld": "8+",
          "oc": "2",
          "name": "Canoptek Acanthrites",
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
              "name": "Cutting beam",
              "keywords": ["melta 2"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Voidblade",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Beasts", "Fly", "Canoptek", "Acanthrites"],
      "factions": ["Necrons"]
    },
    {
      "id": "7dfc54da-b57e-55f9-a991-8de1ccf802a0",
      "name": "Canoptek Doomstalker",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Canoptek Doomstalker"],
      "loadout": "This model is equipped with: doomsday blaster; twin gauss flayer; Doomstalker limbs.",
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
        "core": ["Deadly Demise D3"],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Sentinel Construct",
            "description": "Each time you target this unit with the Fire Overwatch Stratagem, while resolving that Stratagem, hits are scored on unmodified Hit rolls of 5+.",
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
          "m": "7\"",
          "t": "8",
          "sv": "3+",
          "w": "12",
          "ld": "8+",
          "oc": "4",
          "name": "Canoptek Doomstalker",
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
              "name": "Doomsday blaster",
              "keywords": ["blast", "heavy"],
              "range": "48\"",
              "attacks": "D6+1",
              "skill": "4+",
              "strength": "14",
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
              "name": "Twin gauss flayer",
              "keywords": ["lethal hits", "rapid fire 1", "twin-linked"],
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
              "name": "Doomstalker limbs",
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
      "keywords": ["Vehicle", "Walker", "Canoptek", "Doomstalker"],
      "factions": ["Necrons"]
    },
    {
      "id": "7b8c53c9-c127-5ada-9eab-20ef9850f9f8",
      "name": "Canoptek Reanimator",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Canoptek Reanimator"],
      "loadout": "This model is equipped with: 2 atomiser beams; Reanimator’s claws.",
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
        "core": ["Feel No Pain 4+"],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Nanoscarab Reanimation Beam (Aura)",
            "description": "While a friendly Necrons unit is within 12\" of this model, each time that unit’s Reanimation Protocols activate, that unit reanimates an additional D3 wounds.",
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
          "m": "7\"",
          "t": "6",
          "sv": "3+",
          "w": "6",
          "ld": "7+",
          "oc": "3",
          "name": "Canoptek Reanimator",
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
              "name": "Atomiser beam",
              "keywords": [],
              "range": "12\"",
              "attacks": "3",
              "skill": "4+",
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
              "name": "Reanimator’s claws",
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
      "keywords": ["Vehicle", "Walker", "Canoptek", "Reanimator"],
      "factions": ["Necrons"]
    },
    {
      "id": "44f4d714-cd8c-5925-a5aa-e201ca586e96",
      "name": "Canoptek Scarab Swarms",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["3-6 Canoptek Scarab Swarms"],
      "loadout": "Every model is equipped with: feeder mandibles.",
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
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1"],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Self-destruction",
            "description": "At the start of the Fight phase, if this unit is within Engagement Range of one or more enemy units, you can select one model in this unit to destroy. If you do, do not roll for that model’s Deadly Demise ability; instead, select one enemy unit within Engagement Range of that model and roll one D6, adding 1 to the result if that unit is a Vehicle. On a 2-5, that unit suffers D3 mortal wounds; on a 6+, that unit suffers D3+3 mortal wounds.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Swarm",
            "description": "While an enemy unit is within Engagement Range of this unit, subtract 1 from the Objective Control characteristic of models in that enemy unit (to a minimum of 1).",
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
          "t": "2",
          "sv": "6+",
          "w": "4",
          "ld": "8+",
          "oc": "0",
          "name": "Canoptek Scarab Swarms",
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
              "name": "Feeder mandibles",
              "keywords": ["lethal hits"],
              "range": "Melee",
              "attacks": "6",
              "skill": "5+",
              "strength": "2",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Swarm", "Fly", "Canoptek", "Scarab Swarms"],
      "factions": ["Necrons"]
    },
    {
      "id": "6dae1d03-f361-5929-8ef7-1c39901387f8",
      "name": "Canoptek Spyders",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1-2 Canoptek Spyders"],
      "loadout": "Every model is equipped with: automaton claws.",
      "wargear": [
        "Any number of models can each be equipped with 2 particle beamers.",
        "Any number of models can each be equipped with 1 fabricator claw array.",
        "Any number of models can each be equipped with 1 gloom prism."
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
            "name": "Fabricator Claw Array (Aura)",
            "description": "While a friendly Necrons Vehicle unit is within 6\" of the bearer, that unit has the Feel No Pain 6+ ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Gloom Prism (Aura)",
            "description": "While a friendly Necrons unit is within 6\" of the bearer, models in that unit have the Feel No Pain 4+ ability against Psychic Attacks.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deadly Demise 1"],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Canoptek Swarm",
            "description": "In your Command phase, select one friendly Canoptek Scarab Swarm unit within 6\" of this unit. One destroyed model is returned to that Canoptek Scarab Swarm unit for each Spyder model in this unit.",
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
          "t": "7",
          "sv": "3+",
          "w": "6",
          "ld": "8+",
          "oc": "2",
          "name": "Canoptek Spyders",
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
              "name": "Particle beamer",
              "keywords": ["blast", "devastating wounds"],
              "range": "18\"",
              "attacks": "D6",
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
              "name": "Automaton claws",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "4+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Fly", "Canoptek", "Spyders"],
      "factions": ["Necrons"]
    },
    {
      "id": "f7f79059-f88a-5fcc-bdb4-503e4332b6c9",
      "name": "Canoptek Tomb Sentinel",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Canoptek Tomb Sentinel"],
      "loadout": "This model is equipped with: exile cannon; Tomb Sentinel claws; gloom prism.",
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
        "wargear": [
          {
            "name": "Gloom Prism (Aura)",
            "description": "While a friendly Necrons unit is within 6\" of the bearer, models in that unit have the Feel No Pain 4+ ability against Psychic Attacks.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deep Strike"],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Aggressor Guardian",
            "description": "Each time an attack targets this model, if this model is within range of an objective marker, worsen the Armour Penetration characteristic of that attack by 1. In addition, each time this model makes an attack that targets a unit within range of an objective marker, improve the Armour Penetration characteristic of that attack by 1.",
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
          "w": "9",
          "ld": "8+",
          "oc": "3",
          "name": "Canoptek Tomb Sentinel",
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
              "name": "Exile cannon",
              "keywords": ["blast"],
              "range": "18\"",
              "attacks": "D6+1",
              "skill": "4+",
              "strength": "10",
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
              "name": "Tomb Sentinel claws",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Monster", "Canoptek", "Tomb Sentinel"],
      "factions": ["Necrons"]
    },
    {
      "id": "4b3e4c5d-9a26-55a6-984c-4a9b21df6a7a",
      "name": "Canoptek Tomb Stalker",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Canoptek Tomb Stalker"],
      "loadout": "This model is equipped with: gauss slicers; Tomb Stalker claws; gloom prism.",
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
        "wargear": [
          {
            "name": "Gloom Prism (Aura)",
            "description": "While a friendly Necrons unit is within 6\" of the bearer, models in that unit have the Feel No Pain 4+ ability against Psychic Attacks.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deep Strike"],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Snaking Ambush",
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
          "m": "10\"",
          "t": "9",
          "sv": "3+",
          "w": "9",
          "ld": "8+",
          "oc": "3",
          "name": "Canoptek Tomb Stalker",
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
              "name": "Gauss slicers",
              "keywords": ["lethal hits"],
              "range": "24\"",
              "attacks": "8",
              "skill": "4+",
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
              "name": "Tomb Stalker claws",
              "keywords": ["sustained hits 1"],
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
      "keywords": ["Monster", "Canoptek", "Tomb Stalker"],
      "factions": ["Necrons"]
    },
    {
      "id": "4793e7d8-15bd-5e65-81a8-9ab86598479f",
      "name": "Canoptek Wraiths",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["3-6 Canoptek Wraiths"],
      "loadout": "Every model is equipped with: vicious claws.",
      "wargear": [
        "Any number of models can each be equipped with one of the following: ◦ 1 particle caster ◦ 1 transdimensional beamer",
        "Any number of models can each have their vicious claws replaced with whip coils."
      ],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "110",
          "active": true
        },
        {
          "models": "6",
          "cost": "220",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Wraith Form",
            "description": "Each time this unit ends a Normal move, you can select one enemy unit it moved over during that move and roll one D6 for each model in this unit: for each 4+, that enemy unit suffers 1 mortal wound.",
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
          "sv": "3+",
          "w": "3",
          "ld": "8+",
          "oc": "2",
          "name": "Canoptek Wraiths",
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
              "name": "Particle caster",
              "keywords": ["devastating wounds", "pistol"],
              "range": "12\"",
              "attacks": "3",
              "skill": "2+",
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
              "name": "Transdimensional beamer",
              "keywords": [],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "4",
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
              "name": "Vicious claws",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Whip coils",
              "keywords": [],
              "range": "Melee",
              "attacks": "8",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Beasts", "Fly", "Canoptek", "Wraiths"],
      "factions": ["Necrons"]
    },
    {
      "id": "8cbe6f65-d230-53c3-b557-1515956cdf40",
      "name": "Catacomb Command Barge",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Catacomb Command Barge"],
      "loadout": "This model is equipped with: gauss cannon; staff of light.",
      "wargear": [
        "This model’s gauss cannon can be replaced with 1 tesla cannon.",
        "This model’s staff of light can be replaced with 1 Overlord’s blade.",
        "This model can be equipped with 1 resurrection orb."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "150",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Resurrection Orb",
            "description": "At the end of your opponent’s Command phase, select one friendly Necrons Infantry or Necrons Mounted unit within 6\" of this model; that unit’s Reanimation Protocols activate.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deadly Demise 1"],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Carrier Wave (Aura)",
            "description": "While a friendly Necrons unit is within 6\" of this model, add 1 to the Objective Control characteristic of models in that unit.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Advanced Quantum Shielding",
            "description": "Each time an attack targets this model, if the Strength characteristic of that attack is greater than this model’s Toughness characteristic, subtract 1 from the Wound roll.",
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
          "t": "8",
          "sv": "3+",
          "w": "9",
          "ld": "6+",
          "oc": "3",
          "name": "Catacomb Command Barge",
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
              "name": "Gauss cannon",
              "keywords": ["lethal hits"],
              "range": "24\"",
              "attacks": "3",
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
              "name": "Staff of light",
              "keywords": [],
              "range": "18\"",
              "attacks": "3",
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
              "name": "Tesla cannon",
              "keywords": ["sustained hits 2"],
              "range": "24\"",
              "attacks": "4",
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
              "name": "Overlord’s blade",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "4",
              "skill": "2+",
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
              "name": "Staff of light",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "5",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Character", "Fly", "Catacomb Command Barge"],
      "factions": ["Necrons"]
    },
    {
      "id": "faa0ece4-e8aa-531f-a556-193d430a23de",
      "name": "Chronomancer",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Lychguard ■ Immortals ■ Necron Warriors You can attach this model to one of the above units even if one Royal Warden or Noble model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": ["1 Chronomancer"],
      "loadout": "This model is equipped with: aeonstave.",
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
        "core": ["Leader"],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Timesplinter Mantle",
            "description": "While this model is leading a unit, each time an attack targets that unit, subtract 1 from the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Chronometron",
            "description": "In your Shooting phase, after this model’s unit has shot, if it is not within Engagement Range of any enemy units, that unit can make a Normal move of up to 5\" as if it were your Movement phase. If it does, until the end of the turn, that unit is not eligible to declare a charge.",
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
          "t": "4",
          "sv": "4+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Chronomancer",
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
              "name": "Aeonstave",
              "keywords": ["blast"],
              "range": "18\"",
              "attacks": "D6",
              "skill": "4+",
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
              "name": "Aeonstave",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Cryptek", "Chronomancer"],
      "factions": ["Necrons"],
      "leads": {
        "units": ["Lychguard", "Immortals", "Necron Warriors"],
        "extra": "You can attach this model to one of the above units even if one Royal Warden or Noble model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths."
      }
    },
    {
      "id": "1ec67138-9438-5b99-bf7b-cc59c9d1d16c",
      "name": "Convergence Of Dominion",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["3 Convergence of Dominion Starsteles"],
      "loadout": "Every model is equipped with: transdimensional abductor.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "255",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Reanimation Nodes (Aura)",
            "description": "While a friendly Necrons unit is within 6” of this Fortification, each time that unit’s Reanimation Protocols activate, you can re-roll the dice rolled to determine how many wounds are reanimated.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Ancient Cover",
            "description": "Each time a ranged attack is allocated to a model, if that model is not fully visible to every model in the attacking unit because of this Fortification, that model has the Benefit of Cover against that attack.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Fortification",
            "description": "While an enemy unit is only within Engagement Range of one or more Fortifications from your army: ■  That unit can still be selected as the target of ranged attacks, but each time such an attack is made, unless it is made with a Pistol, subtract 1 from the Hit roll. ■  Models in that unit do not need to take Desperate Escape tests due to Falling Back while Battle-shocked, except for those that will move over enemy models when doing so.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "DEPLOYMENT",
            "description": "When this unit is first set up on the battlefield, its models do not have to be set up in Unit Coherency. Instead, each model must be set up wholly within 12\" of one other model from its unit. From that point on, each model in this unit is treated as a separate unit.",
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
          "m": "-",
          "t": "11",
          "sv": "2+",
          "w": "10",
          "ld": "7+",
          "oc": "0",
          "name": "Convergence Of Dominion",
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
              "name": "Transdimensional abductor",
              "keywords": [],
              "range": "18\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "meleeWeapons": [],
      "keywords": ["Fortification", "Vehicle", "Convergence of Dominion"],
      "factions": ["Necrons"]
    },
    {
      "id": "2b6c7723-5a54-52f7-ba27-4b47ad968ea1",
      "name": "Cryptothralls",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["2 Cryptothralls"],
      "loadout": "Every model is equipped with: scouring eye; scythed limbs.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "2",
          "cost": "40",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Feel No Pain 4+"],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Bound Creation",
            "description": "While this unit is in the same unit as a Cryptek model, that Cryptek model has the Feel No Pain 4+ ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Systematic Vigour",
            "description": "Each time a Cryptothrall model in this unit is destroyed by a melee attack, if that model has not fought this phase, roll one D6: on a 3+, do not remove it from play. The destroyed model can fight after the attacking model’s unit has finished making its attacks, and it is then removed from play.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "CRYPTEK RETINUE",
            "description": "At the start of the Declare Battle Formations step, this unit can join one other unit from your army that is being led by a Cryptek Infantry model (a unit cannot have more than one Cryptothralls unit joined to it). If it does, until the end of the battle, every model in this unit counts as being part of that Bodyguard unit, and that Bodyguard unit’s Starting Strength is increased accordingly.",
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
          "m": "5\"",
          "t": "4",
          "sv": "3+",
          "w": "2",
          "ld": "8+",
          "oc": "1",
          "name": "Cryptothralls",
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
              "name": "Scouring eye",
              "keywords": [],
              "range": "6\"",
              "attacks": "2",
              "skill": "4+",
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
              "name": "Scythed limbs",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Cryptothralls"],
      "factions": ["Necrons"]
    },
    {
      "id": "3dbc5d26-50ae-5ed4-a9e6-974cf2e353ec",
      "name": "Deathmarks",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["5-10 Deathmarks"],
      "loadout": "Every model is equipped with: synaptic disintegrator; close combat weapon.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "65",
          "active": true
        },
        {
          "models": "10",
          "cost": "130",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Hyperspace Hunters",
            "description": "Once per turn, in the Reinforcements step of your opponent’s Movement phase, when an enemy unit is set up on the battlefield from Reserves within 18\" of and visible to this unit, this unit can shoot as if it were your Shooting phase, but must only target that enemy unit when doing so, and can only do so if that enemy unit is an eligible target.",
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
          "sv": "3+",
          "w": "1",
          "ld": "7+",
          "oc": "1",
          "name": "Deathmarks",
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
              "name": "Synaptic disintegrator",
              "keywords": ["heavy", "precision"],
              "range": "36\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "5",
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
              "attacks": "2",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Deathmarks"],
      "factions": ["Necrons"]
    },
    {
      "id": "e6efa570-5edd-5de2-9018-ec0d0673bd44",
      "name": "Doom Scythe",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Doom Scythe"],
      "loadout": "This model is equipped with: heavy death ray; twin tesla destructor; armoured bulk.",
      "wargear": ["None"],
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
        "core": ["Deadly Demise D3"],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Atavistic Instigation",
            "description": "Each time this model targets an enemy Infantry unit with its heavy death ray, your opponent must",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "declare if that unit will stand firm or duck for cover",
            "description": " ■  If it stands firm, when resolving attacks against that unit with that weapon this phase, a successful unmodified Hit roll of 5+ scores a Critical Hit. ■  If it ducks for cover, until the start of your next Shooting phase, each time a model in that unit makes an attack, subtract 1 from the Hit roll.",
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
          "name": "Doom Scythe",
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
              "name": "Heavy death ray",
              "keywords": ["sustained hits d3"],
              "range": "36\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "16",
              "ap": "-4",
              "damage": "D6+1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin tesla destructor",
              "keywords": ["sustained hits 2", "twin-linked"],
              "range": "36\"",
              "attacks": "6",
              "skill": "3+",
              "strength": "7",
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
              "name": "Armoured bulk",
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
      "keywords": ["Vehicle", "Aircraft", "Fly", "Doom Scythe"],
      "factions": ["Necrons"]
    },
    {
      "id": "ef8f605c-4b7d-575e-a1e6-c70fe7f573f7",
      "name": "Doomsday Ark",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Doomsday Ark"],
      "loadout": "This model is equipped with: doomsday cannon; 2 gauss flayer arrays; armoured bulk.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "185",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Overwhelming Obliteration",
            "description": "In your Movement phase, if this model Remains Stationary, until the end of the turn, its doomsday cannon has the [DEVASTATING WOUNDS] ability.",
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
          "m": "9\"",
          "t": "9",
          "sv": "3+",
          "w": "14",
          "ld": "6+",
          "oc": "5",
          "name": "Doomsday Ark",
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
              "name": "Doomsday cannon",
              "keywords": ["blast", "heavy"],
              "range": "72\"",
              "attacks": "D6+1",
              "skill": "3+",
              "strength": "15",
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
              "name": "Gauss flayer array",
              "keywords": ["lethal hits", "rapid fire 5"],
              "range": "24\"",
              "attacks": "5",
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
              "name": "Armoured bulk",
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
      "keywords": ["Vehicle", "Fly", "Doomsday Ark"],
      "factions": ["Necrons"]
    },
    {
      "id": "5d274edb-3e83-5f71-91f9-b5e3e9e135b7",
      "name": "Flayed Ones",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["5-10 Flayed Ones"],
      "loadout": "Every model is equipped with: flayer claws.",
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
        "wargear": [],
        "core": ["Infiltrators", "Stealth"],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Flesh Hunger",
            "description": "Each time a model in this unit makes a melee attack, if the target of that attack is Below Half-strength, a successful Hit roll scores a Critical Hit.",
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
          "t": "4",
          "sv": "4+",
          "w": "1",
          "ld": "7+",
          "oc": "1",
          "name": "Flayed Ones",
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
              "name": "Flayer claws",
              "keywords": ["sustained hits 1", "twin-linked"],
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
      "keywords": ["Infantry", "Flayed Ones"],
      "factions": ["Necrons"]
    },
    {
      "id": "8e449811-afda-56fc-920f-1c641d319680",
      "name": "Gauss Pylon",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Gauss Pylon"],
      "loadout": "This model is equipped with: gauss annihilator; tesla arc.",
      "wargear": ["None"],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+2"],
        "faction": ["Reanimation Protocols"],
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
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Phase Shift Generator (Aura)",
            "description": "While a friendly Necrons unit is within 3\" of this Fortification, models in that unit have a 5+ invulnerable save against ranged attacks.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Phase-shifted Cover",
            "description": "Each time a ranged attack is allocated to a model, if that model is not fully visible to every model in the attacking unit because of this Fortification, that model has the Benefit of Cover against that attack.",
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
          "m": "-",
          "t": "12",
          "sv": "3+",
          "w": "22",
          "ld": "7+",
          "oc": "0",
          "name": "Gauss Pylon",
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
              "name": "Gauss annihilator",
              "keywords": ["anti-fly 2+", "lethal hits"],
              "range": "120\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "16",
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
              "name": "Tesla arc",
              "keywords": ["sustained hits 2"],
              "range": "6\"",
              "attacks": "6",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [],
      "keywords": [
        "Fortification",
        "Vehicle",
        "Towering",
        "Titanic",
        "Gauss Pylon"
      ],
      "factions": ["Necrons"]
    },
    {
      "id": "a8d89da6-daf1-5add-9281-46d513b11f4f",
      "name": "Ghost Ark",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Ghost Ark"],
      "loadout": "This model is equipped with: 2 gauss flayer arrays; armoured bulk.",
      "wargear": ["None"],
      "transport": "This model has a transport capacity of 10 Necron Warrior models and 1 Necrons Infantry Character model.",
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
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Repair Barge",
            "description": "Once per phase, just after an enemy unit finishes making its attacks, if one or more friendly Necron Warriors units within 3\" of this model lost one or more wounds as a result of those attacks, this model can use this ability. If it does, select one of those Necron Warriors units; that unit’s Reanimation Protocols activate. The same Necron Warriors unit cannot be selected for this ability more than once per phase.",
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
          "w": "14",
          "ld": "7+",
          "oc": "3",
          "name": "Ghost Ark",
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
              "name": "Gauss flayer array",
              "keywords": ["lethal hits", "rapid fire 5"],
              "range": "24\"",
              "attacks": "5",
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
              "name": "Armoured bulk",
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
        "Transport",
        "Dedicated Transport",
        "Ghost Ark"
      ],
      "factions": ["Necrons"]
    },
    {
      "id": "7f1eb736-4929-509a-aac5-5aae1241b66e",
      "name": "Hexmark Destroyer",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Hexmark Destroyer"],
      "loadout": "Every model is equipped with: enmitic disintegrator pistols; close combat weapon.",
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
        "core": ["Deep Strike", "Lone Operative"],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Inescapable Death",
            "description": "Once per turn, one unit from your army with this ability can be targeted with the Fire Overwatch Stratagem for 0CP, even if you have already used that Stratagem on a different unit this phase. In addition, each time you target this unit with the Fire Overwatch Stratagem, while resolving that Stratagem, hits are scored on unmodified Hit rolls of 2+.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Multi-threat Eliminator",
            "description": "Each time an enemy unit targets a friendly Necrons unit within 3\" of this model with ranged attacks, after that enemy unit has shot, this model can shoot as if it were your Shooting phase.",
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
          "m": "7\"",
          "t": "5",
          "sv": "3+",
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "Hexmark Destroyer",
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
              "name": "Enmitic disintegrator pistols",
              "keywords": ["pistol", "precision"],
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
              "name": "Close combat weapon",
              "keywords": [],
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
      "keywords": ["Infantry", "Character", "Hexmark Destroyer"],
      "factions": ["Necrons"]
    },
    {
      "id": "9127c007-d192-57d9-905b-7f517f825569",
      "name": "Illuminor Szeras",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Illuminor Szeras – Epic Hero"],
      "loadout": "This model is equipped with: eldritch lance; impaling legs.",
      "wargear": ["None"],
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
        "core": ["Feel No Pain 4+"],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Illuminor",
            "description": "While this model is within 3\" of one or more other friendly Necrons units, this model has the Lone Operative ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Mechanical Augmentation (Aura)",
            "description": "While a friendly Necrons Battleline unit is within 6\" of this model, each time a model in that unit makes an attack, improve the Armour Penetration characteristic of that attack by 1, and each time an attack targets that unit, worsen the Armour Penetration characteristic of that attack by 1.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Atomic Energy Manipulator",
            "description": "At the end of the Fight phase, if this model destroyed one of more models this phase, until the end of the battle, add 3\" to the range of its Mechanical Augmentation ability.",
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
          "m": "7\"",
          "t": "8",
          "sv": "2+",
          "w": "9",
          "ld": "6+",
          "oc": "3",
          "name": "Illuminor Szeras",
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
              "name": "Eldritch lance",
              "keywords": [],
              "range": "36\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "9",
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
              "name": "Eldritch lance",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
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
              "name": "Impaling legs",
              "keywords": ["extra attacks"],
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
      "keywords": [
        "Infantry",
        "Character",
        "Epic Hero",
        "Cryptek",
        "Illuminor Szeras"
      ],
      "factions": ["Necrons"]
    },
    {
      "id": "4b64f825-bb29-57d8-8fce-58444942ba38",
      "name": "Immortals",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["5-10 Immortals"],
      "loadout": "Every model is equipped with: gauss blaster; close combat weapon.",
      "wargear": [
        "All models in this unit can each have their gauss blaster replaced with 1 tesla carbine."
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
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Implacable Eradication",
            "description": "Each time a model in this unit makes an attack, re-roll a Wound roll of 1. If the target of that attack is an enemy unit within range of an objective marker, you can re-roll the Wound roll instead.",
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
          "sv": "3+",
          "w": "1",
          "ld": "7+",
          "oc": "2",
          "name": "Immortals",
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
              "name": "Gauss blaster",
              "keywords": ["lethal hits"],
              "range": "24\"",
              "attacks": "2",
              "skill": "3+",
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
              "name": "Tesla carbine",
              "keywords": ["assault", "sustained hits 2"],
              "range": "18\"",
              "attacks": "2",
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
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Battleline", "Immortals"],
      "factions": ["Necrons"],
      "leadBy": [
        "Anrakyr The Traveller",
        "Chronomancer",
        "Imotekh The Stormlord",
        "Lord",
        "Nemesor Zahndrekh",
        "Orikan The Diviner",
        "Overlord",
        "Plasmancer",
        "Psychomancer",
        "Royal Warden",
        "Technomancer",
        "Trazyn The Infinite",
        "Vargard Obyron"
      ]
    },
    {
      "id": "f816b5e2-127c-50cc-808d-a8534db0d7b8",
      "name": "Imotekh The Stormlord",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Immortals ■ Lychguard ■ Necron Warriors",
      "composition": ["1 Imotekh the Stormlord – Epic Hero"],
      "loadout": "This model is equipped with: Gauntlet of Fire; Staff of the Destroyer.",
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
        "core": ["Leader"],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Grand Strategist",
            "description": "At the start of your Command phase, if this model is on the battlefield, you gain 1CP.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Lord of the Storm",
            "description": "Once per battle, at the end of your Command phase, this model can use this ability. If it does, roll one D6 for each enemy unit within 12\" of this model: on a 2-5, that enemy unit suffers D3 mortal wounds; on a 6, that enemy unit suffers D3+3 mortal wounds.",
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
          "sv": "2+",
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "Imotekh The Stormlord",
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
              "name": "Gauntlet of Fire",
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
              "name": "Staff of the Destroyer",
              "keywords": [],
              "range": "18\"",
              "attacks": "3",
              "skill": "2+",
              "strength": "6",
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
              "name": "Staff of the Destroyer",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "4",
              "skill": "2+",
              "strength": "6",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Epic Hero",
        "Noble",
        "Imotekh the Stormlord"
      ],
      "factions": ["Necrons"],
      "leads": {
        "units": ["Immortals", "Lychguard", "Necron Warriors"],
        "extra": ""
      }
    },
    {
      "id": "2bbffcec-ad3b-5277-802d-1c9e486a0666",
      "name": "Lokhust Destroyers",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1-6 Lokhust Destroyers"],
      "loadout": "Every model is equipped with: gauss cannon; close combat weapon.",
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
        },
        {
          "models": "6",
          "cost": "180",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Hard-wired for Destruction",
            "description": "Each time a model in this unit makes an attack that targets the closest eligible enemy unit, re-roll a Hit roll of 1.",
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
          "m": "7\"",
          "t": "6",
          "sv": "3+",
          "w": "3",
          "ld": "7+",
          "oc": "2",
          "name": "Lokhust Destroyers",
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
              "name": "Gauss cannon",
              "keywords": ["lethal hits"],
              "range": "24\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "5",
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
              "attacks": "2",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Mounted", "Fly", "Lokhust Destroyers"],
      "factions": ["Necrons"],
      "leadBy": ["Lokhust Lord"]
    },
    {
      "id": "deb1c9d5-feb2-56fe-b925-b3fc37add660",
      "name": "Lokhust Heavy Destroyers",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1-3 Lokhust Heavy Destroyers"],
      "loadout": "Every model is equipped with: gauss destructor; close combat weapon.",
      "wargear": [
        "Any number of models can each have their gauss destructor replaced with 1 enmitic exterminator."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "45",
          "active": true
        },
        {
          "models": "2",
          "cost": "90",
          "active": true
        },
        {
          "models": "3",
          "cost": "135",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Optimised for Slaughter",
            "description": "Each time a model in this unit makes an attack with an enmitic exterminator against an Infantry unit, re-roll a Wound roll of 1. Each time a model in this unit makes an attack with a gauss destructor against a Monster or Vehicle unit, re-roll a Wound roll of 1.",
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
          "m": "7\"",
          "t": "6",
          "sv": "3+",
          "w": "4",
          "ld": "7+",
          "oc": "2",
          "name": "Lokhust Heavy Destroyers",
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
              "name": "Enmitic exterminator",
              "keywords": ["heavy", "rapid fire 6", "sustained hits 1"],
              "range": "36\"",
              "attacks": "6",
              "skill": "3+",
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
              "name": "Gauss destructor",
              "keywords": ["heavy", "lethal hits"],
              "range": "48\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "14",
              "ap": "-4",
              "damage": "6"
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
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Mounted", "Fly", "Lokhust Heavy Destroyers"],
      "factions": ["Necrons"],
      "leadBy": ["Lokhust Lord"]
    },
    {
      "id": "c2de5f45-5c43-5f22-9160-fee26a35b5a5",
      "name": "Lokhust Lord",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Lokhust Destroyers ■ Lokhust Heavy Destroyers",
      "composition": ["1 Lokhust Lord"],
      "loadout": "This model is equipped with: staff of light.",
      "wargear": [
        "This model’s staff of light can be replaced with 1 Lord’s blade.",
        "This model can be equipped with one of the following: ◦ 1 phylactery ◦ 1 resurrection orb"
      ],
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
            "name": "Phylactery",
            "description": "The bearer has the Feel No Pain 5+ ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Resurrection Orb",
            "description": "While the bearer is leading a unit, that unit’s Reanimation Protocols activate at the end of your opponent’s Command phase in addition to at the end of yours.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Leader"],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Destroyer Cult",
            "description": "While this model is leading a unit, each time a model in that unit makes a ranged attack, a successful unmodifed Hit roll of 5+ scores a Critical Hit.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Driven by Hatred",
            "description": "Each time this model makes an attack that targets an enemy unit that is Below Half-strength, you can re-roll the Hit roll and you can re-roll the Wound roll.",
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
          "m": "7\"",
          "t": "6",
          "sv": "3+",
          "w": "6",
          "ld": "6+",
          "oc": "2",
          "name": "Lokhust Lord",
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
              "name": "Staff of light",
              "keywords": [],
              "range": "18\"",
              "attacks": "3",
              "skill": "2+",
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
              "name": "Lord’s blade",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "4",
              "skill": "2+",
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
              "name": "Staff of light",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "2+",
              "strength": "5",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Mounted", "Character", "Fly", "Lokhust Lord"],
      "factions": ["Necrons"],
      "leads": {
        "units": ["Lokhust Destroyers", "Lokhust Heavy Destroyers"],
        "extra": ""
      }
    },
    {
      "id": "8224d3d2-388b-5bde-8afc-8c1cc74f7572",
      "name": "Lord",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Immortals ■ Lychguard ■ Necron Warriors",
      "composition": ["1 Lord"],
      "loadout": "This model is equipped with: staff of light.",
      "wargear": [
        "This model’s staff of light can be replaced with 1 Lord’s blade.",
        "This model can be equipped with 1 resurrection orb."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "65",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Resurrection Orb",
            "description": "While the bearer is leading a unit, that unit’s Reanimation Protocols activate at the end of your opponent’s Command phase in addition to at the end of yours.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Leader"],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Relentless March",
            "description": "While this model is leading a unit, add 1\" to the Move characteristic of models in that unit.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "The Lord’s Will",
            "description": "While this model is leading a unit, you can target that unit with Stratagems even when it is Battle-shocked.",
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
          "sv": "3+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Lord",
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
              "name": "Staff of light",
              "keywords": [],
              "range": "18\"",
              "attacks": "3",
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
              "name": "Staff of light",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
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
              "name": "Lord’s blade",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Noble", "Lord"],
      "factions": ["Necrons"],
      "leads": {
        "units": ["Immortals", "Lychguard", "Necron Warriors"],
        "extra": ""
      }
    },
    {
      "id": "ec70c87c-6091-5671-81a8-403c0bf283f7",
      "name": "Lychguard",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["5-10 Lychguard"],
      "loadout": "Every model is equipped with: warscythe.",
      "wargear": [
        "All models in this unit can each have their warscythe replaced with 1 hyperphase sword and 1 dispersion shield."
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
            "name": "Dispersion Shield",
            "description": "The bearer has a 4+ invulnerable save.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": [],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Guardian Protocols",
            "description": "While a Noble model is leading this unit, each time an attack targets this unit, subtract 1 from the Wound roll.",
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
          "sv": "3+",
          "w": "2",
          "ld": "7+",
          "oc": "1",
          "name": "Lychguard",
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
              "name": "Hyperphase sword",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
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
              "name": "Warscythe",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Lychguard"],
      "factions": ["Necrons"],
      "leadBy": [
        "Chronomancer",
        "Imotekh The Stormlord",
        "Lord",
        "Nemesor Zahndrekh",
        "Orikan The Diviner",
        "Overlord",
        "Plasmancer",
        "Psychomancer",
        "Technomancer",
        "Trazyn The Infinite",
        "Vargard Obyron"
      ]
    },
    {
      "id": "73c29a81-5e70-55e8-b659-e64f8f8d1350",
      "name": "Monolith",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Monolith"],
      "loadout": "This model is equipped with: 4 gauss flux arcs; particle whip; portal of exile.",
      "wargear": [
        "This model’s 4 gauss flux arcs can be replaced with 4 death rays."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "385",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6", "Deep Strike"],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Eternity Gate",
            "description": "In the Reinforcements step of your Movement phase, you can select one Necrons Infantry unit from your army that is either in Reserves or on the battlefield (if you select the latter, remove that unit from the battlefield and place it into Reserves). That unit is then set up anywhere on the battlefield that is wholly within 6\" of this model and not within Engagement Range of any enemy models. That unit cannot declare a charge this turn.",
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
          "m": "7\"",
          "t": "14",
          "sv": "2+",
          "w": "20",
          "ld": "7+",
          "oc": "8",
          "name": "Monolith",
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
              "name": "Death ray",
              "keywords": ["sustained hits d3"],
              "range": "24\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "12",
              "ap": "-4",
              "damage": "D6+1"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Gauss flux arc",
              "keywords": ["lethal hits", "rapid fire 3"],
              "range": "24\"",
              "attacks": "3",
              "skill": "3+",
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
              "name": "Particle whip",
              "keywords": ["blast", "devastating wounds"],
              "range": "24\"",
              "attacks": "3D6",
              "skill": "3+",
              "strength": "8",
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
              "name": "Portal of exile",
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
      "keywords": ["Vehicle", "Titanic", "Fly", "Towering", "Monolith"],
      "factions": ["Necrons"]
    },
    {
      "id": "82668436-e355-57ef-9312-3c5cafe0cff4",
      "name": "Necron Warriors",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["10-20 Necron Warriors"],
      "loadout": "Every model is equipped with: gauss flayer; close combat weapon.",
      "wargear": [
        "Any number of models can each have their gauss flayer replaced with 1 gauss reaper."
      ],
      "transport": "",
      "points": [
        {
          "models": "10",
          "cost": "120",
          "active": true
        },
        {
          "models": "20",
          "cost": "240",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Their Number is Legion",
            "description": "Each time this unit’s Reanimation Protocols activate, it reanimates D6 wounds instead of D3 wounds, unless it is within range of an objective marker you control, in which case it reanimates D3+3 wounds instead.",
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
          "t": "4",
          "sv": "4+",
          "w": "1",
          "ld": "7+",
          "oc": "2",
          "name": "Necron Warriors",
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
              "name": "Gauss flayer",
              "keywords": ["lethal hits", "rapid fire 1"],
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
              "name": "Gauss reaper",
              "keywords": ["lethal hits"],
              "range": "12\"",
              "attacks": "2",
              "skill": "4+",
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
      "keywords": ["Infantry", "Battleline", "Necron Warriors"],
      "factions": ["Necrons"],
      "leadBy": [
        "Chronomancer",
        "Imotekh The Stormlord",
        "Lord",
        "Nemesor Zahndrekh",
        "Orikan The Diviner",
        "Overlord",
        "Plasmancer",
        "Psychomancer",
        "Royal Warden",
        "Technomancer",
        "Trazyn The Infinite",
        "Vargard Obyron"
      ]
    },
    {
      "id": "651307c1-cb80-5515-9fb5-daf847a0aa0e",
      "name": "Nemesor Zahndrekh",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Immortals ■ Lychguard ■ Necron Warriors",
      "composition": ["1 Nemesor Zahndrekh – Epic Hero"],
      "loadout": "This model is equipped with: staff of light.",
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
        "core": ["Leader"],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Transient Madness",
            "description": "While this model is leading a unit, at the start of your Command phase, roll one D6: until the start of your next Command phase, weapons equipped by models in",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "that unit gain the ability below that corresponds with that roll",
            "description": " ■ 1-2: [SUSTAINED HITS 1] ■ 3-4: [LETHAL HITS] ■ 5-6: [DEVASTATING WOUNDS]",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Counter-tactics",
            "description": "Once per battle, after your opponent uses a Stratagem, if this model is on the battlefield, it can use this ability. If it does, until the end of the battle, the CP cost your opponent must pay to use that Stratagem again is increased by 1CP.",
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
          "sv": "2+",
          "w": "6",
          "ld": "7+",
          "oc": "1",
          "name": "Nemesor Zahndrekh",
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
              "name": "Staff of light",
              "keywords": [],
              "range": "18\"",
              "attacks": "3",
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
              "name": "Staff of light",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
        "Character",
        "Epic Hero",
        "Noble",
        "Nemesor Zahndrekh"
      ],
      "factions": ["Necrons"],
      "leads": {
        "units": ["Immortals", "Lychguard", "Necron Warriors"],
        "extra": ""
      }
    },
    {
      "id": "b48568f8-e4b8-5bf4-9d88-d688768bcf52",
      "name": "Night Scythe",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Night Scythe"],
      "loadout": "This model is equipped with: twin tesla destructor; armoured bulk.",
      "wargear": ["None"],
      "transport": "This model has a transport capacity of 1 Necrons Infantry unit.",
      "points": [
        {
          "models": "1",
          "cost": "145",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Translocation Beams",
            "description": "At the end of the Fight phase, if there are no models currently embarked within this Transport, you can select one friendly Necrons Infantry unit wholly within 6\" of this Transport. Unless that unit is within Engagement Range of one or more enemy units, it can embark within this Transport.",
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
          "name": "Night Scythe",
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
              "name": "Twin tesla destructor",
              "keywords": ["sustained hits 2", "twin-linked"],
              "range": "36\"",
              "attacks": "6",
              "skill": "3+",
              "strength": "7",
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
              "name": "Armoured bulk",
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
      "keywords": ["Vehicle", "Aircraft", "Fly", "Transport", "Night Scythe"],
      "factions": ["Necrons"]
    },
    {
      "id": "66b3e287-a241-5f70-ab0d-8060b3804ea3",
      "name": "Night Shroud",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Night Shroud"],
      "loadout": "This model is equipped with: twin tesla destructor; armoured bulk",
      "wargear": ["None"],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Death Sphere Bombardment",
            "description": "Each time this model ends a Normal move, you can select one enemy unit it moved over during that move and roll six D6: for each 3+, that unit suffers 1 mortal wound.",
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
          "name": "Night Shroud",
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
              "name": "Twin tesla destructor",
              "keywords": ["sustained hits 2", "twin-linked"],
              "range": "36\"",
              "attacks": "6",
              "skill": "3+",
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
              "name": "Armoured bulk",
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
      "keywords": ["Vehicle", "Aircraft", "Fly", "Night Shroud"],
      "factions": ["Necrons"]
    },
    {
      "id": "e63764d8-2928-51f1-b48b-6399c027c282",
      "name": "Obelisk",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Obelisk"],
      "loadout": "This model is equipped with: 4 tesla spheres; armoured bulk.",
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
        "core": ["Deadly Demise D6", "Deep Strike"],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Gravitic Pulse",
            "description": "At the start of your opponent’s Movement phase, you can select one enemy unit within 18\" of and visible to this model. Until the end of the turn, subtract 2\" from the Move characteristic of models in that unit and subtract 2 from Advance and Charge rolls made for that unit. In addition, if that unit can Fly, until the start of your next Movement phase, roll one D6 each time that unit ends any type of move: on a 4+, that unit suffers D3 mortal wounds.",
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
          "m": "7\"",
          "t": "14",
          "sv": "2+",
          "w": "22",
          "ld": "7+",
          "oc": "8",
          "name": "Obelisk",
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
              "name": "Tesla sphere",
              "keywords": ["anti-fly 4+", "sustained hits 2"],
              "range": "24\"",
              "attacks": "6",
              "skill": "3+",
              "strength": "7",
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
              "name": "Armoured bulk",
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
      "keywords": ["Vehicle", "Titanic", "Fly", "Towering", "Obelisk"],
      "factions": ["Necrons"]
    },
    {
      "id": "c6c09fa6-5cc1-5dad-ade1-126b27279748",
      "name": "Ophydian Destroyers",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["3-6 Ophydian Destroyers"],
      "loadout": "Every model is equipped with: Ophydian hyperphase weapons.",
      "wargear": [
        "For every 3 models in this unit, this unit can have 1 Plasmacyte."
      ],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "110",
          "active": true
        },
        {
          "models": "6",
          "cost": "220",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Plasmacyte",
            "description": "Once per battle for each Plasmacyte this unit has, when this unit is selected to fight, you can use this ability. If you do, until the end of the phase, melee weapons equipped by models in this unit have the [DEVASTATING WOUNDS] ability.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deep Strike"],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Tunnelling Horrors",
            "description": "At the end of your opponent’s turn, if this unit is not within Engagement Range of one or more enemy units, you can remove this unit from the battlefield. In the Reinforcements step of your next Movement phase, set it up anywhere on the battlefield that is more than 9\" horizontally away from all enemy models.",
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
          "t": "5",
          "sv": "4+",
          "w": "3",
          "ld": "7+",
          "oc": "2",
          "name": "Ophydian Destroyers",
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
              "name": "Ophydian hyperphase weapons",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "4",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Ophydian Destroyers"],
      "factions": ["Necrons"]
    },
    {
      "id": "39ce6f7f-bda6-5d3f-a085-b6a98abb4bba",
      "name": "Orikan The Diviner",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Immortals ■ Lychguard ■ Necron Warriors You can attach this model to one of the above units even if one Royal Warden or Noble model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": ["1 Orikan the Diviner – Epic Hero"],
      "loadout": "This model is equipped with: Staff of Tomorrow.",
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
        "core": ["Leader"],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Master Chronomancer",
            "description": "While this model is leading a unit, models in that unit have a 4+ invulnerable save.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "The Stars Are Right",
            "description": "Once per battle, at the start of the Fight phase, this model can use this ability. If it does, until the end of the phase, triple the Attacks and Strength characteristics of this model’s Staff of Tomorrow and every successful Wound roll made for this model’s attacks scores a Critical Wound.",
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
          "t": "4",
          "sv": "4+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Orikan The Diviner",
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
              "name": "Staff of Tomorrow",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "4",
              "ap": "-3",
              "damage": "D3"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Epic Hero",
        "Cryptek",
        "Chronomancer",
        "Orikan the Diviner"
      ],
      "factions": ["Necrons"],
      "leads": {
        "units": ["Immortals", "Lychguard", "Necron Warriors"],
        "extra": "You can attach this model to one of the above units even if one Royal Warden or Noble model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths."
      }
    },
    {
      "id": "b277b119-cbc7-54a1-9069-c004e2b4f977",
      "name": "Overlord",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Immortals ■ Lychguard ■ Necron Warriors",
      "composition": ["1 Overlord"],
      "loadout": "This model is equipped with: tachyon arrow; Overlord’s blade.",
      "wargear": [
        "This model’s tachyon arrow and Overlord’s blade can be replaced with one of the following: ◦ 1 Overlord’s blade ◦ 1 staff of light ◦ 1 voidscythe",
        "If this model is not equipped with a tachyon arrow, it can be equipped with 1 resurrection orb."
      ],
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
            "name": "Resurrection Orb",
            "description": "While the bearer is leading a unit, that unit’s Reanimation Protocols activate at the end of your opponent’s Command phase in addition to at the end of yours.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Leader"],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "My Will Be Done",
            "description": "Once per battle round, one unit from your army with this ability can be targeted with a Stratagem for 0CP, even if you have already targeted a different unit with that Stratagem this phase.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Implacable Resilience",
            "description": "Each time an attack is allocated to this model, subtract 1 from that attack’s Damage characteristic.",
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
          "sv": "2+",
          "w": "6",
          "ld": "6+",
          "oc": "1",
          "name": "Overlord",
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
              "name": "Staff of light",
              "keywords": [],
              "range": "18\"",
              "attacks": "3",
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
              "name": "Tachyon arrow",
              "keywords": ["one shot"],
              "range": "72\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "16",
              "ap": "-5",
              "damage": "D6+2"
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
              "name": "Overlord’s blade",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "4",
              "skill": "2+",
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
              "name": "Staff of light",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Voidscythe",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "12",
              "ap": "-3",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Noble", "Overlord"],
      "factions": ["Necrons"],
      "leads": {
        "units": ["Immortals", "Lychguard", "Necron Warriors"],
        "extra": ""
      }
    },
    {
      "id": "b6d6c4a7-4a8c-562e-a839-3fd476ce08a0",
      "name": "Plasmancer",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Immortals ■ Lychguard ■ Necron Warriors You can attach this model to one of the above units even if one Royal Warden or Noble model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": ["1 Plasmancer"],
      "loadout": "This model is equipped with: plasmic lance.",
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
        "core": ["Leader"],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Harbinger of Destruction",
            "description": "While this model is leading a unit, each time a model in that unit makes a ranged attack, a successful unmodifed Hit roll of 5+ scores a Critical Hit.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Living Lightning",
            "description": "In your Shooting phase, select one enemy unit within 18\" of and visible to this model and roll one D6 for each model in that enemy unit: for each 6, that unit suffers 1 mortal wound.",
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
          "t": "4",
          "sv": "4+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Plasmancer",
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
              "name": "Plasmic lance",
              "keywords": [],
              "range": "18\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "7",
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
              "name": "Plasmic lance",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "7",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Cryptek", "Plasmancer"],
      "factions": ["Necrons"],
      "leads": {
        "units": ["Immortals", "Lychguard", "Necron Warriors"],
        "extra": "You can attach this model to one of the above units even if one Royal Warden or Noble model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths."
      }
    },
    {
      "id": "3ebad3d7-fc84-58a4-87fc-160adfda7708",
      "name": "Psychomancer",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Immortals ■ Lychguard ■ Necron Warriors You can attach this model to one of the above units even if one Royal Warden or Noble model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": ["1 Psychomancer"],
      "loadout": "This model is equipped with: abyssal lance.",
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
        "core": ["Leader"],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Nightmare Shroud (Aura)",
            "description": "While an enemy unit is within 9\" of this model, subtract 1 from the Leadership characteristic of models in that unit.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Harbinger of Despair",
            "description": "At the start of your Shooting phase, select one enemy unit within 18\" of this unit. That unit must take a Battle-shock test.",
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
          "t": "4",
          "sv": "4+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Psychomancer",
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
              "name": "Abyssal lance",
              "keywords": [],
              "range": "18\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "6",
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
              "name": "Abyssal lance",
              "keywords": [],
              "range": "Melee",
              "attacks": "1",
              "skill": "4+",
              "strength": "6",
              "ap": "-3",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Cryptek", "Psychomancer"],
      "factions": ["Necrons"],
      "leads": {
        "units": ["Immortals", "Lychguard", "Necron Warriors"],
        "extra": "You can attach this model to one of the above units even if one Royal Warden or Noble model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths."
      }
    },
    {
      "id": "57ac88bc-bc0f-5865-8bcb-663f9c6126e1",
      "name": "Royal Warden",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Immortals ■ Necron Warriors",
      "composition": ["1 Royal Warden"],
      "loadout": "This model is equipped with: relic gauss blaster; close combat weapon.",
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
        "core": ["Leader"],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Adaptive Strategy",
            "description": "While this model is leading a unit, ranged weapons equipped by models in that unit have the [HEAVY] and [ASSAULT] abilities.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Engrammatic Logic",
            "description": "Once per battle, at the start of any phase, you can select one friendly Necrons unit that is Battle-shocked and within 12\" of this model. That unit is no longer Battle-shocked.",
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
          "sv": "3+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Royal Warden",
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
              "name": "Relic gauss blaster",
              "keywords": ["lethal hits", "rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
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
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Royal Warden"],
      "factions": ["Necrons"],
      "leads": {
        "units": ["Immortals", "Necron Warriors"],
        "extra": ""
      }
    },
    {
      "id": "8b7b8184-20b7-509b-8780-c5f95ae39681",
      "name": "Sentry Pylon",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Sentry Pylon"],
      "loadout": "This model is equipped with: gauss exterminator.",
      "wargear": [
        "This model’s gauss exterminator can be replaced with one of the following: ◦ 1 focused death ray ◦ 1 heat cannon"
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["Reanimation Protocols"],
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
            "name": "Teleportation Matrix",
            "description": "Once per battle, at the end of your opponent’s turn, if this Fortification is not within Engagement Range of one or more enemy units, you can remove it from the battlefield. In the Reinforcements step of your next Movement phase, set it up anywhere on the battlefield that is more than 9\" horizontally away from all enemy models. If the battle ends and this Fortification is not on the battlefield, it is destroyed.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Phase-shifted Cover",
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
          "w": "10",
          "ld": "7+",
          "oc": "0",
          "name": "Sentry Pylon",
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
              "name": "Focused death ray",
              "keywords": ["sustained hits 2"],
              "range": "36\"",
              "attacks": "6",
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
              "name": "Gauss exterminator",
              "keywords": ["lethal hits"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Heat cannon",
              "keywords": ["melta 4"],
              "range": "36\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "9",
              "ap": "-4",
              "damage": "D6"
            }
          ]
        }
      ],
      "meleeWeapons": [],
      "keywords": ["Fortification", "Vehicle", "Sentry Pylon"],
      "factions": ["Necrons"]
    },
    {
      "id": "9e73708e-63b1-5a21-8c87-734ae7a9c16d",
      "name": "Seraptek Heavy Construct",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Seraptek Heavy Construct"],
      "loadout": "This model is equipped with: 2 singularity generators; titanic forelimbs.",
      "wargear": [
        "This model’s 2 singularity generators can be replaced with 2 synaptic obliterators and 2 transdimensional projectors."
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
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Terrifying Monstrosity",
            "description": "At the start of the Fight phase, each enemy unit within Engagement Range of one or more units with this ability must take a Battle-shock test.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Titanic Walker",
            "description": "Each time this model makes a Normal, Advance or Fall Back move, it can move over models (excluding Titanic models) and terrain features that are 4\" or less in height as if they were not there.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-9 WOUNDS REMAINING",
          "description": "While this model has 1-9 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "12",
          "sv": "3+",
          "w": "24",
          "ld": "7+",
          "oc": "10",
          "name": "Seraptek Heavy Construct",
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
              "name": "Singularity generator",
              "keywords": ["blast", "devastating wounds"],
              "range": "36\"",
              "attacks": "2D6",
              "skill": "3+",
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
              "name": "Synaptic obliterator",
              "keywords": ["sustained hits 2"],
              "range": "48\"",
              "attacks": "8",
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
              "name": "Transdimensional projector",
              "keywords": [],
              "range": "48\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "24",
              "ap": "-4",
              "damage": "D6+4"
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
              "name": "Titanic forelimbs – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "3+",
              "strength": "14",
              "ap": "-3",
              "damage": "5"
            },
            {
              "active": true,
              "name": "Titanic forelimbs – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "12",
              "skill": "3+",
              "strength": "8",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Titanic",
        "Towering",
        "Seraptek Heavy Construct"
      ],
      "factions": ["Necrons"]
    },
    {
      "id": "575dd16a-9a30-54d4-8c21-c7e3a5f2bce5",
      "name": "Skorpekh Destroyers",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["3-6 Skorpekh Destroyers"],
      "loadout": "Every model is equipped with: Skorpekh hyperphase weapons.",
      "wargear": [
        "For every 3 models in this unit, this unit can have 1 Plasmacyte."
      ],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "110",
          "active": true
        },
        {
          "models": "6",
          "cost": "220",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Plasmacyte",
            "description": "Once per battle for each Plasmacyte this unit has, when this unit is selected to fight, you can use this ability. If you do, until the end of the phase, melee weapons equipped by models in this unit have the [DEVASTATING WOUNDS] ability.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": [],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Whirling Onslaught",
            "description": "Each time a model in this unit makes a melee attack, you can ignore any or all modifiers to that attack’s Weapon Skill characteristic and/or that attack’s Hit roll.",
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
          "m": "7\"",
          "t": "6",
          "sv": "3+",
          "w": "3",
          "ld": "7+",
          "oc": "2",
          "name": "Skorpekh Destroyers",
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
              "name": "Skorpekh hyperphase weapons",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "7",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Skorpekh Destroyers"],
      "factions": ["Necrons"],
      "leadBy": ["Skorpekh Lord"]
    },
    {
      "id": "dc0545fd-6c44-55ac-8f68-c4be42cd29bf",
      "name": "Skorpekh Lord",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Skorpekh Destroyers",
      "composition": ["1 Skorpekh Lord"],
      "loadout": "This model is equipped with: enmitic annihilator; flensing claw; hyperphase harvester.",
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
        "core": ["Leader"],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "United In Destruction",
            "description": "While this model is leading a unit, melee weapons equipped by models in that unit have the [LETHAL HITS] ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Crimson Harvest",
            "description": "Each time this model ends a Charge move, select one enemy unit within Engagement Range of this model and roll one D6: on a 2-5, that unit suffers D3 mortal wounds; on a 6, that unit suffers D3+3 mortal wounds.",
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
          "m": "7\"",
          "t": "7",
          "sv": "3+",
          "w": "6",
          "ld": "6+",
          "oc": "2",
          "name": "Skorpekh Lord",
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
              "name": "Enmitic annihilator",
              "keywords": ["rapid fire 2"],
              "range": "18\"",
              "attacks": "2",
              "skill": "2+",
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
              "name": "Flensing claw",
              "keywords": [],
              "range": "Melee",
              "attacks": "8",
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
              "name": "Hyperphase harvester",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "2+",
              "strength": "10",
              "ap": "-3",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Skorpekh Lord"],
      "factions": ["Necrons"],
      "leads": {
        "units": ["Skorpekh Destroyers"],
        "extra": ""
      }
    },
    {
      "id": "c802633b-69bf-578d-bcd0-d6fe7f8df65b",
      "name": "Technomancer",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Immortals ■ Lychguard ■ Necron Warriors You can attach this model to one of the above units even if one Royal Warden or Noble model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": ["1 Technomancer"],
      "loadout": "This model is equipped with: staff of light; Canoptek cloak.",
      "wargear": [
        "This model’s Canoptek cloak can be replaced with 1 Canoptek control node."
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
        "wargear": [
          {
            "name": "Canoptek Cloak",
            "description": "The bearer has the Fly keyword, the Lone Operative ability and a Move characteristic of 10\".",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Canoptek Control Node (Aura)",
            "description": "While a friendly Canoptek unit is within 6\" of the bearer, each time a Canoptek model in that unit makes an attack, add 1 to the Hit roll.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Leader"],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Rites of Reanimation",
            "description": "While this model is leading a unit, models in that unit have the Feel No Pain 5+ ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Technomancer",
            "description": "At the end of your Movement phase, you can select one friendly Necrons model within 3\" of the bearer. That model regains up to D3 lost wounds. Each model can only be selected for this ability once per turn.",
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
          "t": "4",
          "sv": "4+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Technomancer",
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
              "name": "Staff of light",
              "keywords": [],
              "range": "18\"",
              "attacks": "3",
              "skill": "4+",
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
              "name": "Staff of light",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "5",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Cryptek", "Technomancer"],
      "factions": ["Necrons"],
      "leads": {
        "units": ["Immortals", "Lychguard", "Necron Warriors"],
        "extra": "You can attach this model to one of the above units even if one Royal Warden or Noble model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths."
      }
    },
    {
      "id": "277cba7f-1bcd-5e66-bf12-3c3305219cab",
      "name": "Tesseract Ark",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Tesseract Ark"],
      "loadout": "This model is equipped with: tesseract singularity chamber; 2 tesla cannons; armoured bulk.",
      "wargear": [
        "This model’s 2 tesla cannons can be replaced with one of the following: ◦ 2 gauss cannons ◦  2 particle beamers"
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
        "core": ["Deadly Demise 1"],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Gravitational Field",
            "description": "Each time an enemy unit selects this model as the target of a charge, subtract 2 from the Charge roll (this is not cumulative with any other reductions to that Charge roll).",
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
          "t": "9",
          "sv": "3+",
          "w": "10",
          "ld": "6+",
          "oc": "3",
          "name": "Tesseract Ark",
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
              "name": "Gauss cannon",
              "keywords": ["lethal hits"],
              "range": "24\"",
              "attacks": "3",
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
              "name": "Particle beamer",
              "keywords": ["blast", "devastating wounds"],
              "range": "18\"",
              "attacks": "D6",
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
              "name": "Tesla cannon",
              "keywords": ["sustained hits 2"],
              "range": "24\"",
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
              "name": "Tesseract singularity chamber – particle",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6+3",
              "skill": "N/A",
              "strength": "6",
              "ap": "-1",
              "damage": "2"
            },
            {
              "active": true,
              "name": "Tesseract singularity chamber – seismic lash",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "3+",
              "strength": "9",
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
              "name": "Armoured bulk",
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
      "keywords": ["Vehicle", "Fly", "Tesseract Ark"],
      "factions": ["Necrons"]
    },
    {
      "id": "aaf70701-a3e2-5308-994f-7310ec7d0018",
      "name": "Tesseract Vault",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Tesseract Vault"],
      "loadout": "This model is equipped with: 4 tesla spheres; armoured bulk.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "425",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+3"],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Powers of the C’tan",
            "description": "In your Shooting phase, when this model is selected to shoot, first select one of the C’tan Powers weapons (see left). Until the end of the phase, this model is equipped with that weapon in addition to its other weapons (this model cannot make attacks with any other C’tan Powers weapons you did not select in this way this phase).",
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
          "m": "7\"",
          "t": "12",
          "sv": "2+",
          "w": "24",
          "ld": "7+",
          "oc": "8",
          "name": "Tesseract Vault",
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
              "name": "Tesla spheres",
              "keywords": ["sustained hits 2"],
              "range": "24\"",
              "attacks": "6",
              "skill": "3+",
              "strength": "7",
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
              "name": "C’TAN POWERS",
              "keywords": [],
              "range": "RANGE",
              "attacks": "A",
              "skill": "BS",
              "strength": "S",
              "ap": "AP",
              "damage": "D"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Antimatter Meteor",
              "keywords": ["blast", "devastating wounds", "indirect fire"],
              "range": "24\"",
              "attacks": "D6+3",
              "skill": "3+",
              "strength": "10",
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
              "name": "Cosmic Fire",
              "keywords": ["ignores cover", "devastating wounds", "torrent"],
              "range": "18\"",
              "attacks": "3D6",
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
              "name": "Time’s Arrow",
              "keywords": [
                "anti-character 4+",
                "devastating wounds",
                "precision"
              ],
              "range": "24\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "3",
              "ap": "-2",
              "damage": "6"
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
              "name": "Armoured bulk",
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
      "keywords": ["Vehicle", "Titanic", "Fly", "Towering", "Tesseract Vault"],
      "factions": ["Necrons"]
    },
    {
      "id": "ed8cc019-30d5-504d-9fea-e4fb09e74646",
      "name": "The Silent King",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Szarekh – Epic Hero", "2 Triarchal Menhirs"],
      "loadout": "Szarekh is equipped with: Sceptre of Eternal Glory; Staff of Stars; Scythe of Dust. Every Triarchal Menhir is equipped with: annihilator beam; close combat weapon.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "470",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+3 (Szarekh model only)"],
        "faction": ["Reanimation Protocols"],
        "primarch": [
          {
            "name": "TRIARCH ABILITIES",
            "showAbility": true,
            "abilities": [
              {
                "name": "Phaeron of the Stars (Aura)",
                "description": "While a friendly Necrons unit is within 6\" of this unit’s Szarekh model, each time a model in that unit makes a ranged attack, re-roll a Hit roll of 1 and re-roll a Wound roll of 1.",
                "showAbility": true,
                "showDescription": true
              },
              {
                "name": "Phaeron of the Blades (Aura)",
                "description": "While a friendly Necrons unit is within 6\" of this unit’s Szarekh model, you can re-roll Charge rolls made for that unit.",
                "showAbility": true,
                "showDescription": true
              },
              {
                "name": "Bringer of Unity (Aura)",
                "description": "While a friendly Necrons unit is within 6\" of this unit’s Szarekh model, you can ignore any or all modifiers to the characteristics of models in that unit and to any roll or test made for models in that unit (excluding modifiers to saving throws).",
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
            "name": "Voice of the Triarch",
            "description": "At the start of the battle round, select one Triarch ability (see left). Until the start of the next battle round, this unit has that ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "The Silent King",
            "description": "Once per turn, at the end of your Command phase, you can select one friendly Battle-shocked Necrons unit within 12\" of this unit’s Szarekh model. That unit is no longer Battle-shocked.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "SUPREME COMMANDER",
            "description": "If this unit is in your army, it must be your Warlord.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "TRIARCHAL MENHIRS",
            "description": "If this unit’s Szarekh model is destroyed, all of this unit’s remaining Triarchal Menhir models are also destroyed.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-6 WOUNDS REMAINING",
          "description": "While this unit’s Szarekh model has 1-6 wounds remaining, halve the Attacks characteristic of that model’s weapons, and each time this unit makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "7\"",
          "t": "10",
          "sv": "2+",
          "w": "16",
          "ld": "5+",
          "oc": "6",
          "name": "SZAREKH",
          "showDamagedMarker": true,
          "showName": true,
          "active": true
        },
        {
          "m": "7\"",
          "t": "10",
          "sv": "2+",
          "w": "5",
          "ld": "5+",
          "oc": "1",
          "name": "TRIARCHAL MENHIR",
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
              "name": "Annihilator beam",
              "keywords": [],
              "range": "24\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "14",
              "ap": "-4",
              "damage": "6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Sceptre of Eternal Glory",
              "keywords": ["devastating wounds"],
              "range": "24\"",
              "attacks": "2",
              "skill": "2+",
              "strength": "10",
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
              "name": "Staff of Stars",
              "keywords": ["indirect fire"],
              "range": "24\"",
              "attacks": "12",
              "skill": "2+",
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
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Scythe of Dust",
              "keywords": ["lethal hits"],
              "range": "Melee",
              "attacks": "12",
              "skill": "2+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Character",
        "Epic Hero",
        "Fly",
        "The Silent King"
      ],
      "factions": ["Necrons"]
    },
    {
      "id": "ce716b5c-68fc-5063-944b-e022b7ab9c63",
      "name": "Tomb Blades",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["3-6 Tomb Blades"],
      "loadout": "Every model is equipped with: twin gauss blaster; close combat weapon.",
      "wargear": [
        "Any number of models can each have their twin gauss blaster replaced with one of the following: ◦ 1 particle beamer ◦ 1 twin tesla carbine",
        "Any number of models can each be equipped with 1 shieldvanes.",
        "Any number of models can each be equipped with one of the following: ◦ 1 nebuloscope ◦ 1 shadowloom"
      ],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "80",
          "active": true
        },
        {
          "models": "6",
          "cost": "160",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Nebuloscope",
            "description": "Ranged weapons equipped by the bearer have the [IGNORES COVER] ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Shadowloom",
            "description": "The bearer has a 5+ invulnerable save.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Shieldvanes",
            "description": "The bearer has a 3+ Save characteristic.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Scouts 9\""],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Evasion Engrams",
            "description": "Each time an attack targets this unit, subtract 1 from the Hit roll.",
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
          "sv": "4+",
          "w": "2",
          "ld": "7+",
          "oc": "2",
          "name": "Tomb Blades",
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
              "name": "Particle beamer",
              "keywords": ["blast", "devastating wounds"],
              "range": "18\"",
              "attacks": "D6",
              "skill": "2+",
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
              "name": "Twin gauss blaster",
              "keywords": ["lethal hits", "twin-linked"],
              "range": "24\"",
              "attacks": "2",
              "skill": "3+",
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
              "name": "Twin tesla carbine",
              "keywords": ["assault", "sustained hits 2", "twin-linked"],
              "range": "18\"",
              "attacks": "2",
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
              "attacks": "1",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Mounted", "Fly", "Tomb Blades"],
      "factions": ["Necrons"]
    },
    {
      "id": "35a2044e-1371-543c-983e-29f85e099745",
      "name": "Tomb Citadel Walls",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Tomb Citadel"],
      "loadout": "This unit is equipped with: nothing.",
      "wargear": [
        "This unit can be equipped with one of the following: ◦ 1 gauss exterminator and 1 twin tesla destructor ◦ 2 gauss exterminators ◦ 2 twin tesla destructors"
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 3D6"],
        "faction": ["Reanimation Protocols"],
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
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Ziggurat Dock",
            "description": "One friendly Monolith, Obelisk, Tesseract Vault or Sentry Pylon model can start the battle on top of this Fortification’s ziggurat platform. While such a model is on this platform, that model's ranged weapons have the [HEAVY] ability. Any friendly model can be set up or end any type of move on the ramps or platform sections of this Fortification.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Phased Cover",
            "description": "Each time a ranged attack is allocated to a model, if that model is not fully visible to every model in the attacking unit because of this Fortification, that model has the Benefit of Cover against that attack.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-15 WOUNDS REMAINING",
          "description": "While this model has 1-15 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "-",
          "t": "13",
          "sv": "2+",
          "w": "50",
          "ld": "7+",
          "oc": "0",
          "name": "Tomb Citadel Walls",
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
              "name": "Gauss exterminator",
              "keywords": ["lethal hits"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "6"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Twin tesla destructor",
              "keywords": ["sustained hits 2", "twin-linked"],
              "range": "36\"",
              "attacks": "6",
              "skill": "3+",
              "strength": "8",
              "ap": "0",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [],
      "keywords": ["Fortification", "Titanic", "Vehicle", "Tomb Citadel"],
      "factions": ["Necrons"]
    },
    {
      "id": "b5df5f0e-d689-5cae-ac2b-7cf92a0b7bde",
      "name": "Transcendent C’tan",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Transcendent C’tan"],
      "loadout": "This model is equipped with: seismic assault; crackling tendrils.",
      "wargear": ["None"],
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
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Transdimensional Displacement",
            "description": "Each time this model is selected to Advance, you can remove it from the battlefield and set it up again anywhere on the battlefield that is more than 9\" horizontally away from all enemy models.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Necrodermis",
            "description": "Each time an attack is allocated to this model, halve the Damage characteristic of that attack.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "ENSLAVED STAR GOD",
            "description": "This model cannot be your Warlord.",
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
          "t": "11",
          "sv": "4+",
          "w": "12",
          "ld": "6+",
          "oc": "4",
          "name": "Transcendent C’tan",
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
              "name": "Seismic assault",
              "keywords": ["assault", "sustained hits 1"],
              "range": "12\"",
              "attacks": "6",
              "skill": "2+",
              "strength": "8",
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
              "name": "Crackling tendrils",
              "keywords": ["sustained hits 1"],
              "range": "Melee",
              "attacks": "8",
              "skill": "2+",
              "strength": "9",
              "ap": "-3",
              "damage": "D6"
            }
          ]
        }
      ],
      "keywords": ["Monster", "Character", "Fly", "Transcendent C’tan"],
      "factions": ["Necrons"]
    },
    {
      "id": "4a3408a8-f4aa-50cb-908c-b6717b1a6a75",
      "name": "Trazyn The Infinite",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Immortals ■ Lychguard ■ Necron Warriors",
      "composition": ["1 Trazyn the Infinite – Epic Hero"],
      "loadout": "This model is equipped with: Empathic Obliterator.",
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
        "core": ["Leader"],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Ancient Collector",
            "description": "While this model is leading a unit, at the end of your Command phase, if that unit is within range of an objective marker you control, it remains under your control, even if you have no models within range of it, until your opponent controls it at start or end of any turn.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Surrogate Hosts",
            "description": "At the start of your Command phase, if this model is on the battlefield, you can select one other friendly Necrons Infantry Character model on the battlefield (excluding Skorpekh Lord or Epic Hero models). The selected model is destroyed (ignoring any rules that are triggered when a model is destroyed) and this model is put in its place, with all of its wounds remaining (if the selected model was leading a unit, this model now attaches to that unit as its Leader).",
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
          "sv": "2+",
          "w": "6",
          "ld": "6+",
          "oc": "1",
          "name": "Trazyn The Infinite",
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
              "name": "Empathic Obliterator",
              "keywords": ["sustained hits d3"],
              "range": "Melee",
              "attacks": "4",
              "skill": "2+",
              "strength": "7",
              "ap": "0",
              "damage": "D3"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Epic Hero",
        "Noble",
        "Trazyn the Infinite"
      ],
      "factions": ["Necrons"],
      "leads": {
        "units": ["Immortals", "Lychguard", "Necron Warriors"],
        "extra": ""
      }
    },
    {
      "id": "9a78c91e-bc1a-5f50-ac1b-d36016a80465",
      "name": "Triarch Praetorians",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["5-10 Triarch Praetorians"],
      "loadout": "Every model is equipped with: rod of covenant.",
      "wargear": [
        "All models in this unit can each have their rod of covenant replaced with 1 particle caster and 1 voidblade."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "135",
          "active": true
        },
        {
          "models": "10",
          "cost": "270",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Relentless Combatants",
            "description": "You can re-roll Charge rolls made for this unit, and this unit is eligible to declare a charge in a turn in which it Fell Back.",
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
          "t": "5",
          "sv": "3+",
          "w": "2",
          "ld": "7+",
          "oc": "1",
          "name": "Triarch Praetorians",
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
              "name": "Particle caster",
              "keywords": ["devastating wounds", "pistol"],
              "range": "12\"",
              "attacks": "3",
              "skill": "2+",
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
              "name": "Rod of covenant",
              "keywords": [],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "5",
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
              "name": "Rod of covenant",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Voidblade",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "5",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Fly", "Triarch Praetorians"],
      "factions": ["Necrons"]
    },
    {
      "id": "83a47f9c-54be-527b-a12a-1d057ce9b871",
      "name": "Triarch Stalker",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Triarch Stalker"],
      "loadout": "This model is equipped with: heat ray; Stalker’s forelimbs.",
      "wargear": [
        "This model’s heat ray can be replaced with one of the following: ◦ 1 particle shredder ◦ 1 twin heavy gauss cannon"
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
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Targeting Relay",
            "description": "In your Shooting phase, each time this model is selected to shoot, after resolving its attacks, select one enemy unit that was hit by one or more of those attacks. Until the end of the phase, that unit cannot have the Benefit of Cover.",
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
          "t": "8",
          "sv": "3+",
          "w": "12",
          "ld": "7+",
          "oc": "4",
          "name": "Triarch Stalker",
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
              "name": "Heat ray – dispersed",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "2D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Heat ray – focused",
              "keywords": ["melta 4"],
              "range": "18\"",
              "attacks": "2",
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
              "name": "Particle shredder",
              "keywords": ["blast", "devastating wounds"],
              "range": "18\"",
              "attacks": "D6+6",
              "skill": "2+",
              "strength": "7",
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
              "name": "Twin heavy gauss cannon",
              "keywords": ["lethal hits", "twin-linked"],
              "range": "24\"",
              "attacks": "3",
              "skill": "3+",
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
              "name": "Stalker’s forelimbs",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "7",
              "ap": "-1",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Walker", "Triarch Stalker"],
      "factions": ["Necrons"]
    },
    {
      "id": "06a4f5cc-ddf7-5e79-89b4-1c7d9913d7aa",
      "name": "Vargard Obyron",
      "source": "40k-10e",
      "faction_id": "NEC",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Immortals ■ Lychguard ■ Necron Warriors This model can be attached to a unit even if Nemesor Zahndrekh has already been attached to it. If it is, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": ["1 Vargard Obyron – Epic Hero"],
      "loadout": "This model is equipped with: warscythe.",
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
        "core": ["Leader"],
        "faction": ["Reanimation Protocols"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Ghostwalk Mantle",
            "description": "While this model is leading a unit, models in that unit have the Fights First ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "The Vargard’s Duty",
            "description": "While this model is in the same unit as Nemesor Zahndrekh, Character models in that unit have the Feel No Pain 4+ ability.",
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
          "sv": "2+",
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "Vargard Obyron",
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
              "name": "Warscythe",
              "keywords": ["devastating wounds", "precision"],
              "range": "Melee",
              "attacks": "4",
              "skill": "2+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Epic Hero", "Vargard Obyron"],
      "factions": ["Necrons"],
      "leads": {
        "units": ["Immortals", "Lychguard", "Necron Warriors"],
        "extra": "This model can be attached to a unit even if Nemesor Zahndrekh has already been attached to it. If it is, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths."
      }
    }
  ],
  "colours": {
    "banner": "#032b16",
    "header": "#04532a"
  }
}