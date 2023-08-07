window.data = window.data || {};
window.data.CSM = {
  "id": "CSM",
  "link": "https://game-datacards.eu",
  "name": "Chaos Space Marines",
  "is_subfaction": false,
  "parent_id": "",
  "allied_factions": ["CD", "QT"],
  "stratagems": [
    {
      "name": "INFERNAL RITES",
      "cost": 2,
      "type": "Battle Tactic",
      "detachment": "Slaves to Darkness",
      "turn": "either",
      "phase": ["shooting", "fight"],
      "fluff": "With gruesome offerings and ritualised\npromises, the Chaos Space Marines seek\nthe protection of their infernal masters.",
      "when": "Your opponent’s Shooting phase or\nthe Fight phase, just after an enemy unit\nhas selected its targets.",
      "target": "One Heretic Astartes unit\nfrom your army that was selected as the\ntarget of one or more of the attacking\nunit’s attacks.",
      "effect": "Until the end of the phase, each\ntime an attack targets your unit, worsen\nthe Armour Penetration characteristic of\nthat attack by 1.",
      "restrictions": "",
      "id": "665953f0-e68d-5897-b134-ff128b3a1732"
    },
    {
      "name": "PROFANE ZEAL",
      "cost": 1,
      "type": "Battle Tactic",
      "detachment": "Slaves to Darkness",
      "turn": "either",
      "phase": ["shooting", "fight"],
      "fluff": "Fervent mortal followers flock to the\nchampions of Chaos, damning their souls\nseeking promises of dark power.",
      "when": "Your Shooting phase or the\nFight phase.",
      "target": "One Heretic Astartes unit from\nyour army that has not been selected to\nshoot or fight this phase.",
      "effect": "Until the end of the phase, each\ntime a model in your unit makes an\nattack, re-roll a Hit roll of 1 and re-roll a\nWound roll of 1. If your unit is a Chaos\nUndivided unit, you can instead re-roll\nthe Hit roll and you can re-roll the Wound\nroll for that attack.",
      "restrictions": "",
      "id": "bc6d01ce-ba45-5019-980e-3708bfa30290"
    },
    {
      "name": "ETERNAL HATE",
      "cost": 1,
      "type": "Strategic Ploy",
      "detachment": "Slaves to Darkness",
      "turn": "either",
      "phase": ["fight"],
      "fluff": "Heretic Astartes are fuelled by hate, a searing\nspite that burns fiercely within them unto the\nvery moment of death. Even as their life force\npours from terrible wounds, this loathing can\ndrive them to fight on in a second wind of\nwrath. Those Heretic Astartes in thrall to the\nBlood God feel this enmity to an even greater\nextent than others, exploding with violence\njust as the enemy think they have finally\nended them.",
      "when": "Fight phase, just after an enemy unit\nhas selected its targets.",
      "target": "One Heretic Astartes unit from\nyour army that was selected as the target of\none or more of the attacking unit’s attacks.",
      "effect": "Until the end of the phase, each\ntime a model in your unit is destroyed, if that\nmodel has not fought this phase, roll one\nD6, adding 1 to the result if it is a Khorne\nunit: on a 4+, do not remove it from play. That\ndestroyed model can fight after the attacking\nmodel’s unit has finished making its attacks,\nand is then removed from play.",
      "restrictions": "",
      "id": "5b2f0b98-27e9-5ab8-a578-2f07a447e8c6"
    },
    {
      "name": "SKINSHIFT",
      "cost": 1,
      "type": "Epic Deed",
      "detachment": "Slaves to Darkness",
      "turn": "your",
      "phase": ["command"],
      "fluff": "With the Dark Gods and the powers of the\nwarp on their side, Chaos Space Marines\ncan cheat death altogether. Their foes\nlook on in horror as killing wounds knit\nthemselves together in a cacophony\nof hideous cracks and squelches and\nshattered armour reforms. After such a\nblessing, the Heretic Astartes are both\nsomething far greater, and far less, than\nwhat they once were.",
      "when": "Your Command phase.",
      "target": "One Heretic Astartes unit from\nyour army.",
      "effect": "One model in your unit regains\nup to 3 lost wounds. In addition, if your\nunit is a Tzeentch unit below its Starting\nStrength, one destroyed model (excluding\nCharacter models) is returned to your\nunit with its full wounds remaining.",
      "restrictions": "",
      "id": "0b913179-d5b8-5691-99ba-f793fe8a704b"
    },
    {
      "name": "UNNATURAL SWIFTNESS",
      "cost": 1,
      "type": "Strategic Ploy",
      "detachment": "Slaves to Darkness",
      "turn": "your",
      "phase": ["movement"],
      "fluff": "\nSome Heretic Astartes appear to move\nwith a speed that should be impossible,\nweapons and bodies seemingly moving\nfrom one place to another in the blink of\nan eye.",
      "when": "Your Movement phase.",
      "target": "One Heretic Astartes unit from\nyour army.",
      "effect": "Until the end of the turn, your unit\nis eligible to shoot and declare a charge in\na turn in which it Fell Back. In addition, if\nyour unit is a Slaanesh unit, until the end\nof the turn, your unit is eligible to shoot\nand declare a charge in a turn in which\nit Advanced.",
      "restrictions": "",
      "id": "52e1e451-431c-506b-b0c0-afcfc4c2ed31"
    },
    {
      "name": "DARK OBSCURATION",
      "cost": 1,
      "type": "Strategic Ploy",
      "detachment": "Slaves to Darkness",
      "turn": "opponents",
      "phase": ["shooting"],
      "fluff": "Choking fogs echoing with the screams\nof tortured souls; dense clouds of bloated\nflies; deluges of bloody rain; whirlwinds of\ncoruscating flames blazing in a thousand\nhues. Such warp-born phenomena can\nappear on the battlefield in an instant,\nand disappear just as quickly. All serve\nto obscure the Heretic Astartes from their\nterrified foes.",
      "when": "Your opponent’s Shooting phase,\njust after an enemy unit has selected\nits targets.",
      "target": "One Heretic Astartes unit\nfrom your army that was selected as the\ntarget of one or more of the attacking\nunit’s attacks.",
      "effect": "Until the end of the phase, your\nunit has the Stealth ability. In addition, if\nyour unit is a Nurgle unit, until the end of\nthe phase, your unit can only be selected\nas the target of a ranged attack if the\nattacking model is within 12\".",
      "restrictions": "",
      "id": "c7ca8d7d-0b13-5749-b896-610f1ddd0793"
    }
  ],
  "enhancements": [
    {
      "name": "Eye of Tzeentch",
      "description": "Heretic Astartes Tzeentch model only. Each time the bearer’s unit makes a Dark Pact, take a Leadership test for the bearer: if that test is passed, you gain 1CP.",
      "keywords": ["Heretic Astartes", "Tzeentch"],
      "excludes": [],
      "cost": "30"
    },
    {
      "name": "Intoxicating Elixir",
      "description": "Heretic Astartes Slaanesh model only. The bearer has the Feel No Pain 5+ ability. Each time the bearer shoots or fights, if the bearer’s unit made a Dark Pact this phase, after the bearer has resolved those attacks, select one enemy unit that was hit by one or more of those attacks; that enemy unit must take a Battle-shock test.",
      "keywords": ["Heretic Astartes", "Slaanesh"],
      "excludes": [],
      "cost": "15"
    },
    {
      "name": "Liber Hereticus",
      "description": "Heretic Astartes Chaos Undivided model only. Each time the bearer’s unit makes a Dark Pact, that unit’s weapons gain the [LETHAL HITS] and [SUSTAINED HITS 1] ability until the end of the phase, instead of just gaining one of those abilities.",
      "keywords": ["Heretic Astartes", "Chaos Undivided"],
      "excludes": [],
      "cost": "40"
    },
    {
      "name": "Orbs of Unlife",
      "description": "Heretic Astartes Nurgle model only. At the end of the Fight phase, roll one D6 for every enemy unit within 6\" of the bearer, adding 1 to the result if the bearer’s unit made a Dark Pact that phase: on a 4+, that enemy unit suffers D3 mortal wounds.",
      "keywords": ["Heretic Astartes", "Nurgle"],
      "excludes": [],
      "cost": "25"
    },
    {
      "name": "Talisman of Burning Blood",
      "description": "Heretic Astartes Khorne model only. Add 1 to the Attacks and Strength characteristics of the bearer’s melee weapons. Each time the bearer’s unit makes a Dark Pact, until the end of the phase, add D3 to the Attacks and Strength characteristics of the bearer’s melee weapons instead.",
      "keywords": ["Heretic Astartes", "Khorne"],
      "excludes": [],
      "cost": "20"
    }
  ],
  "datasheets": [
    {
      "id": "f951b549-32e0-5523-9152-337fd8b5f9f4",
      "name": "Abaddon The Despoiler",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Chaos Terminator Squad ■ Legionaries",
      "composition": ["1 Abaddon the Despoiler – Epic Hero"],
      "loadout": "This model is equipped with: Talon of Horus; Drach’nyen.",
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
        "core": ["Deep Strike", "Leader"],
        "faction": ["Dark Pacts"],
        "primarch": [
          {
            "name": "WARMASTER",
            "showAbility": true,
            "abilities": [
              {
                "name": "Paragon of Hatred (Aura)",
                "description": "While a friendly Heretic Astartes unit is within 6\" of this model, each time a model in that unit makes an attack, you can re-roll the Hit roll.",
                "showAbility": true,
                "showDescription": true
              },
              {
                "name": "Mark of Chaos Ascendant (Aura)",
                "description": "While a friendly Heretic Astartes Infantry or Heretic Astartes Mounted unit is within 6\" of this model, models in that unit have a 4+ invulnerable save.",
                "showAbility": true,
                "showDescription": true
              },
              {
                "name": "Lord of the Traitor Legions (Aura)",
                "description": "While a friendly Heretic Astartes unit is within 6\" of this model, you can re-roll Leadership and Battle-shock tests taken for that unit.",
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
            "name": "The Warmaster",
            "description": "In your Command phase, select one Warmaster ability (see left). Until the start of your next Command phase, this model has that ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Dark Destiny",
            "description": "Each time this model makes a Dark Pact and does not fail the resulting Leadership test, roll one D6: on a 2+, you gain 1CP.",
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
          "m": "5\"",
          "t": "5",
          "sv": "2+",
          "w": "9",
          "ld": "5+",
          "oc": "4",
          "name": "Abaddon The Despoiler",
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
              "name": "Talon of Horus",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
              "attacks": "4",
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
              "name": "Drach’nyen",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "8",
              "skill": "2+",
              "strength": "14",
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
              "name": "Talon of Horus",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "14",
              "skill": "2+",
              "strength": "7",
              "ap": "-3",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Epic Hero",
        "Terminator",
        "Chaos Undivided",
        "Chaos",
        "Khorne",
        "Slaanesh",
        "Nurgle",
        "Tzeentch",
        "Abaddon the Despoiler"
      ],
      "factions": ["Heretic Astartes"],
      "leads": {
        "units": ["Chaos Terminator Squad", "Legionaries"],
        "extra": ""
      }
    },
    {
      "id": "0aebcd54-01be-5b23-8581-92df7041b89e",
      "name": "Accursed Cultists",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["3-6 Torments", "5-10 Mutants"],
      "loadout": "Every Torment is equipped with: hideous mutations. Every Mutant is equipped with: blasphemous appendages.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "8",
          "cost": "95",
          "active": true
        },
        {
          "models": "16",
          "cost": "190",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Feel No Pain 6+"],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Accursed Horde",
            "description": "At the start of each player’s Command phase, you can return either 1 destroyed Torment model or up to 3 destroyed Mutant models to this unit.",
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
          "sv": "6+",
          "w": "1",
          "ld": "7+",
          "oc": "2",
          "name": "MUTANT",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "6\"",
          "t": "4",
          "sv": "6+",
          "w": "3",
          "ld": "7+",
          "oc": "2",
          "name": "TORMENT",
          "showDamagedMarker": false,
          "showName": true,
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
              "name": "Blasphemous appendages",
              "keywords": [],
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
              "name": "Hideous mutations",
              "keywords": [],
              "range": "Melee",
              "attacks": "D6+2",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Chaos", "Accursed Cultists"],
      "factions": ["Heretic Astartes"],
      "leadBy": ["Dark Apostle", "Dark Commune", "Rogue Psyker"]
    },
    {
      "id": "c0db4193-98c8-558e-8f34-175fb03c0981",
      "name": "Blood Slaughterer",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Blood Slaughterer"],
      "loadout": "This model is equipped with: impaler harpoon; slaughter blade.",
      "wargear": [
        "This model’s impaler harpoon and slaughter blade can be replaced with 1 twin slaughter blad"
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["Dark Pact"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Scuttling Gait",
            "description": "Each time this unit Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 6\" to the Move characteristic of models in this unit.",
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
          "ld": "6+",
          "oc": "3",
          "name": "Blood Slaughterer",
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
              "name": "Impaler harpoon",
              "keywords": ["anti-monster 2+", "anti-vehicle 2+", "impaled"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "12",
              "ap": "-2",
              "damage": "3"
            }
          ],
          "abilities": [
            {
              "name": "Impaled",
              "description": "Each time this weapon scores a hit against an enemy Monster or Vehicle unit, until the end of the turn, if the bearer selects that unit as a target of a charge, add 2 to Charge rolls made for the bearer",
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
              "name": "Slaughter blade",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "12",
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
              "name": "Twin slaughter blade",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "12",
              "ap": "-3",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Chaos",
        "Khorne",
        "Daemon",
        "Blood Slaughterer"
      ],
      "factions": ["Heretic Astartes"]
    },
    {
      "id": "db58b3d7-f885-5481-9390-a02d1e435051",
      "name": "Chaos Bikers",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Biker Champion", "2-5 Chaos Bikers"],
      "loadout": "Every model is equipped with: bolt pistol; combi-bolter; close combat weapon.",
      "wargear": [
        "The Biker Champion’s bolt pistol can be replaced with one of the following: ◦ 1 plasma pistol ◦ 1 accursed weapon ◦ 1 Astartes chainsword ◦ 1 power fist",
        "Any number of Chaos Bikers can each have their bolt pistol replaced with 1 Astartes chainsword.",
        "Up to 2 Chaos Bikers can each have their combi-bolter replaced with 1 combi-weapon, or can be equipped with one of the following: ◦ 1 flamer ◦ 1 meltagun ◦ 1 plasma gun",
        "1 model can be equipped with 1 Chaos icon."
      ],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "95",
          "active": true
        },
        {
          "models": "6",
          "cost": "190",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Chaos Icon",
            "description": "Each time the bearer’s unit takes a Leadership test for the Dark Pacts ability, you can re-roll that test.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": [],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Outmanoeuvre",
            "description": "At the end of your opponent’s turn, if this unit is wholly within 6\" of one or more battlefield edge and not within Engagement Range of one or more enemy units, you can remove it from the battlefield and place it into Strategic Reserves.",
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
          "w": "3",
          "ld": "6+",
          "oc": "2",
          "name": "Chaos Bikers",
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
              "name": "Combi-bolter",
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
              "name": "Combi-weapon",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
                "rapid fire 1"
              ],
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
              "attacks": "3",
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
              "name": "Accursed weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Astartes chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Power fist",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Mounted", "Grenades", "Chaos", "Chaos Bikers"],
      "factions": ["Heretic Astartes"],
      "leadBy": [
        "Chaos Lord On Bike",
        "Chaos Lord On Juggernaut",
        "Chaos Lord On Steed Of Slaanesh",
        "Sorcerer On Bike",
        "Sorcerer On Steed Of Slaanesh"
      ]
    },
    {
      "id": "faabb539-df8f-56a5-9f1a-4df59003184d",
      "name": "Chaos Deimos Predator",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Chaos Deimos Predator"],
      "loadout": "This model is equipped with: plasma destroyer; armoured tracks.",
      "wargear": [
        "This model’s plasma destroyer can be replaced with one of the following: ◦ 1 conversion beam cannon ◦ 1 infernus cannon ◦ 1 magna-melta cannon",
        "This model can be equipped with one of the following: ◦ 2 heavy bolters ◦ 2 heavy flamers ◦ 2 lascannons",
        "This model can be equipped with 1 combi-bolter.",
        "This model can be equipped with 1 hunter-killer missile."
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["Dark Pacts"],
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
          "t": "10",
          "sv": "3+",
          "w": "11",
          "ld": "6+",
          "oc": "3",
          "name": "Chaos Deimos Predator",
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
              "name": "Combi-bolter",
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
              "name": "Conversion beam cannon",
              "keywords": ["conversion", "sustained hits d3"],
              "range": "24\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "7",
              "ap": "-1",
              "damage": "3"
            }
          ],
          "abilities": [
            {
              "name": "Conversion",
              "description": "Each time an attack made with this weapon targets a unit more than 12\" from the bearer, an unmodified successful Hit roll of 4+ scores a Critical Hit.",
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
              "range": "3",
              "attacks": "3+",
              "skill": "5",
              "strength": "-1",
              "ap": "2"
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
              "skill": "2+",
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
              "name": "Infernus cannon",
              "keywords": ["torrent", "ignores cover"],
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
              "name": "Lascannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "3+",
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
              "name": "Magna-melta cannon",
              "keywords": ["melta 4"],
              "range": "18\"",
              "attacks": "2",
              "skill": "3+",
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
              "name": "Plasma destroyer – standard",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "3+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            },
            {
              "active": true,
              "name": "Plasma destroyer – supercharge",
              "keywords": ["blast", "hazardous"],
              "range": "36\"",
              "attacks": "D3",
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
      "keywords": ["Vehicle", "Smoke", "Chaos", "Deimos Predator"],
      "factions": ["Heretic Astartes"]
    },
    {
      "id": "5f021401-11a5-573d-b8e4-43e911156975",
      "name": "Chaos Land Raider",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Chaos Land Raider"],
      "loadout": "This model is equipped with: 2 soulshatter lascannons; twin heavy bolter; armoured tracks.",
      "wargear": [
        "This model can be equipped with one of the following: ◦ 1 combi-bolter ◦ 1 combi-weapon",
        "This model can be equipped with 1 havoc launcher."
      ],
      "transport": "This model has a transport capacity of 12 Heretic Astartes Infantry models (excluding Obliterator and Jump Pack models). Each Possessed and Terminator model takes up the space of 2 models.",
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
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Assault Ramp",
            "description": "Each time a unit disembarks from this model after it has made a Normal move, that unit is still eligible to declare a charge this turn.",
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
          "m": "10\"",
          "t": "12",
          "sv": "2+",
          "w": "16",
          "ld": "6+",
          "oc": "5",
          "name": "Chaos Land Raider",
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
              "name": "Combi-bolter",
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
              "name": "Combi-weapon",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
                "rapid fire 1"
              ],
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
              "name": "Havoc launcher",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "3+",
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
              "name": "Soulshatter lascannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "2",
              "skill": "3+",
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
      "keywords": ["Vehicle", "Transport", "Smoke", "Chaos", "Land Raider"],
      "factions": ["Heretic Astartes"]
    },
    {
      "id": "0297de19-1885-5028-ac78-760043515dc4",
      "name": "Chaos Lord",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Chosen ■ Legionaries",
      "composition": ["1 Chaos Lord"],
      "loadout": "This model is equipped with: plasma pistol; daemon hammer.",
      "wargear": [
        "This model’s daemon hammer can be replaced with one of the following: ◦ 1 accursed weapon ◦ 1 Astartes chainsword ◦ 1 power fist",
        "This model’s plasma pistol can be replaced with one of the following: ◦ 1 bolt pistol ◦ 1 accursed weapon ◦ 1 Astartes chainsword ◦ 1 daemon hammer ◦ 1 power fist"
      ],
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
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Lord of Chaos",
            "description": "Once per battle round, one unit from your army with this ability can be targeted with a Stratagem for 0CP, even if another unit from your army has already been targeted with that Stratagem this phase.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Chance for Glory",
            "description": "Once per battle, at the start of the Fight phase, this model can use this ability. If it does, until the end of the phase, improve the Strength, Attacks, Armour Penetration and Damage characteristics of melee weapons equipped by this model by 1.",
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
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "Chaos Lord",
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
              "name": "Plasma pistol – standard",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Plasma pistol – supercharge",
              "keywords": ["pistol", "hazardous"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
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
              "name": "Accursed weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
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
              "name": "Astartes chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "7",
              "skill": "2+",
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
              "name": "Daemon hammer",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
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
              "name": "Power fist",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Grenades", "Chaos", "Chaos Lord"],
      "factions": ["Heretic Astartes"],
      "leads": {
        "units": ["Chosen", "Legionaries"],
        "extra": ""
      }
    },
    {
      "id": "696bc104-92ae-5efc-a2d5-860f6b09cd80",
      "name": "Chaos Lord In Terminator Armour",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Chaos Terminator Squad",
      "composition": ["1 Chaos Lord in Terminator Armour"],
      "loadout": "This model is equipped with: combi-bolter; exalted weapon.",
      "wargear": [
        "This model’s combi-bolter can be replaced with 1 combi-weapon.",
        "This model’s exalted weapon can be replaced with one of the following: ◦ 1 chainfist ◦ 1 power fist",
        "This model’s combi-bolter and exalted weapon can be replaced with 1 paired accursed weapons."
      ],
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
        "core": ["Deep Strike", "Leader"],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Lord of Chaos",
            "description": "Once per battle round, one unit from your army with this ability can be targeted with a Stratagem for 0CP, even if another unit from your army has already been targeted with that Stratagem this phase.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Formidably Resilient",
            "description": "Each time an attack is allocated to this model, halve the Damage characteristic of that attack.",
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
          "name": "Chaos Lord In Terminator Armour",
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
              "name": "Combi-bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
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
              "name": "Combi-weapon",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
                "rapid fire 1"
              ],
              "range": "24\"",
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
              "name": "Chainfist",
              "keywords": ["anti-vehicle 3+"],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
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
              "name": "Exalted weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
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
              "name": "Paired accursed weapons",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "7",
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
              "name": "Power fist",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Chaos",
        "Terminator",
        "Chaos Lord in Terminator Armour"
      ],
      "factions": ["Heretic Astartes"],
      "leads": {
        "units": ["Chaos Terminator Squad"],
        "extra": ""
      }
    },
    {
      "id": "36631384-bcf3-5217-87ca-418e1a4cccf9",
      "name": "Chaos Lord On Bike",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Chaos Bikers",
      "composition": ["1 Chaos Lord on Bike"],
      "loadout": "This model is equipped with: bolt pistol; combi-bolter; Astartes chainsword; close combat weapon.",
      "wargear": [
        "This model’s bolt pistol can be replaced with one of the following: ◦ 1 plasma pistol ◦ 1 combi-weapon ◦ 1 accursed weapon ◦ 1 power fist",
        "This model’s Astartes chainsword can be replaced with one of the following: ◦ 1 bolt pistol ◦ 1 plasma pistol ◦ 1 accursed weapon ◦ 1 power fist",
        "This model’s bolt pistol and Astartes chainsword can be replaced with 1 paired accursed weapons."
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Lord of Chaos",
            "description": "Once per battle round, one unit from your army with this ability can be targeted with a Stratagem for 0CP, even if another unit from your army has already been targeted with that Stratagem this phase.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Swift Assault",
            "description": "While this model is leading a unit, ranged weapons equipped by models in that unit have the [ASSAULT] ability.",
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
          "w": "6",
          "ld": "6+",
          "oc": "2",
          "name": "Chaos Lord On Bike",
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
              "name": "Combi-bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
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
              "name": "Combi-weapon",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
                "rapid fire 1"
              ],
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
              "name": "Plasma pistol – standard",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
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
              "skill": "2+",
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
              "name": "Accursed weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
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
              "name": "Astartes chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "7",
              "skill": "2+",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
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
              "name": "Paired accursed weapons",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "7",
              "skill": "2+",
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
              "name": "Power fist",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Character",
        "Grenades",
        "Chaos",
        "Chaos Lord on Bike"
      ],
      "factions": ["Heretic Astartes"],
      "leads": {
        "units": ["Chaos Bikers"],
        "extra": ""
      }
    },
    {
      "id": "db3c908a-dd5b-5b4c-b253-9f68546d10c6",
      "name": "Chaos Lord On Disc Of Tzeentch",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Chosen ■ Legionaries ■ Rubric Marines",
      "composition": ["1 Chaos Lord on Disc of Tzeentch"],
      "loadout": "This model is equipped with: bolt pistol; Astartes chainsword; close combat weapon.",
      "wargear": [
        "This model’s bolt pistol can be replaced with one of the following: ◦ 1 plasma pistol ◦ 1 combi-bolter ◦ 1 combi-weapon ◦ 1 accursed weapon ◦ 1 power fist",
        "This model’s Astartes chainsword can be replaced with one of the following: ◦ 1 bolt pistol ◦ 1 plasma pistol ◦ 1 accursed weapon ◦ 1 power fist",
        "This model’s bolt pistol and Astartes chainsword can be replaced with 1 paired accursed weapons."
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Lord of Chaos",
            "description": "Once per battle round, one unit from your army with this ability can be targeted with a Stratagem for 0CP, even if another unit from your army has already been targeted with that Stratagem this phase.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Lord of Fate",
            "description": "While this model is leading a unit, models in that unit have the Feel No Pain 5+ ability against mortal wounds.",
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
          "sv": "3+",
          "w": "6",
          "ld": "6+",
          "oc": "1",
          "name": "Chaos Lord On Disc Of Tzeentch",
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
              "name": "Combi-bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
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
              "name": "Combi-weapon",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
                "rapid fire 1"
              ],
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
              "name": "Plasma pistol – standard",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
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
              "skill": "2+",
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
              "name": "Accursed weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
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
              "name": "Astartes chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "7",
              "skill": "2+",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
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
              "name": "Paired accursed weapons",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "7",
              "skill": "2+",
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
              "name": "Power fist",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Grenades",
        "Chaos",
        "Tzeentch",
        "Fly",
        "Chaos Lord",
        "Disc of Tzeentch"
      ],
      "factions": ["Heretic Astartes"],
      "leads": {
        "units": ["Chosen", "Legionaries", "Rubric Marines"],
        "extra": ""
      }
    },
    {
      "id": "541f891e-a5ba-5e02-af12-174f0a3bd0e7",
      "name": "Chaos Lord On Juggernaut",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Chaos Bikers ■ Khorne Berzerkers",
      "composition": ["1 Chaos Lord on Juggernaut"],
      "loadout": "This model is equipped with: bolt pistol; Astartes chainsword; bladed horn; close combat weapon.",
      "wargear": [
        "This model’s bolt pistol can be replaced with one of the following: ◦ 1 plasma pistol ◦ 1 combi-bolter ◦ 1 combi-weapon ◦ 1 accursed weapon ◦ 1 power fist",
        "This model’s Astartes chainsword can be replaced with one of the following: ◦ 1 bolt pistol ◦ 1 plasma pistol ◦ 1 accursed weapon ◦ 1 power fist",
        "This model’s bolt pistol and Astartes chainsword can be replaced with 1 paired accursed weapons."
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Lord of Chaos",
            "description": "Once per battle round, one unit from your army with this ability can be targeted with a Stratagem for 0CP, even if another unit from your army has already been targeted with that Stratagem this phase.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Bloody Stampede",
            "description": "Each time this model’s unit ends a Charge move, select one enemy unit within Engagement Range of this model and roll one D6: on a 2-3, that enemy unit suffers 1 mortal wound; on a 4-5, that enemy unit suffers D3 mortal wounds; on a 6, that enemy unit suffers D3+3 mortal wounds.",
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
          "sv": "2+",
          "w": "7",
          "ld": "6+",
          "oc": "2",
          "name": "Chaos Lord On Juggernaut",
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
              "name": "Combi-bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
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
              "name": "Combi-weapon",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
                "rapid fire 1"
              ],
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
              "name": "Plasma pistol – standard",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
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
              "skill": "2+",
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
              "name": "Accursed weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
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
              "name": "Astartes chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "7",
              "skill": "2+",
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
              "name": "Bladed horn",
              "keywords": ["extra attacks", "lance"],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
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
              "name": "Paired accursed weapons",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "7",
              "skill": "2+",
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
              "name": "Power fist",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Character",
        "Grenades",
        "Chaos",
        "Khorne",
        "Chaos Lord",
        "Juggernaut"
      ],
      "factions": ["Heretic Astartes"],
      "leads": {
        "units": ["Chaos Bikers", "Khorne Berzerkers"],
        "extra": ""
      }
    },
    {
      "id": "6eff422f-792d-5ef3-8f09-bd4dcfdb80e3",
      "name": "Chaos Lord On Palanquin Of Nurgle",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Chosen ■ Legionaries ■ Plague Marines",
      "composition": ["1 Chaos Lord on Palanquin of Nurgle"],
      "loadout": "This model is equipped with: bolt pistol; Astartes chainsword; close combat weapon; Nurgling's claws and teeth.",
      "wargear": [
        "This model’s bolt pistol can be replaced with one of the following: ◦ 1 plasma pistol ◦ 1 combi-bolter ◦ 1 combi-weapon ◦ 1 accursed weapon ◦ 1 power fist",
        "This model’s Astartes chainsword can be replaced with one of the following: ◦ 1 bolt pistol ◦ 1 plasma pistol ◦ 1 accursed weapon ◦ 1 power fist",
        "This model’s bolt pistol and Astartes chainsword can be replaced with 1 paired accursed weapons."
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Lord of Chaos",
            "description": "Once per battle round, one unit from your army with this ability can be targeted with a Stratagem for 0CP, even if another unit from your army has already been targeted with that Stratagem this phase.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Revolting Regeneration",
            "description": "At the start of your Command phase, this model regains up to D3 lost wounds.",
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
          "w": "8",
          "ld": "6+",
          "oc": "2",
          "name": "Chaos Lord On Palanquin Of Nurgle",
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
              "name": "Combi-bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
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
              "name": "Combi-weapon",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
                "rapid fire 1"
              ],
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
              "name": "Plasma pistol – standard",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
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
              "skill": "2+",
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
              "name": "Accursed weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
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
              "name": "Astartes chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "7",
              "skill": "2+",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
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
              "name": "Nurgling’s claws and teeth",
              "keywords": ["extra attacks", "lethal hits"],
              "range": "Melee",
              "attacks": "4",
              "skill": "5+",
              "strength": "2",
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
              "name": "Paired accursed weapons",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "7",
              "skill": "2+",
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
              "name": "Power fist",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Grenades",
        "Chaos",
        "Nurgle",
        "Chaos Lord",
        "Palanquin of Nurgle"
      ],
      "factions": ["Heretic Astartes"],
      "leads": {
        "units": ["Chosen", "Legionaries", "Plague Marines"],
        "extra": ""
      }
    },
    {
      "id": "672f6533-0ae2-5402-9932-4bbdbce826c2",
      "name": "Chaos Lord On Steed Of Slaanesh",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Chaos Bikers",
      "composition": ["1 Chaos Lord on Steed of Slaanesh"],
      "loadout": "This model is equipped with: bolt pistol; Astartes chainsword; close combat weapon; lashing tongue.",
      "wargear": [
        "This model’s bolt pistol can be replaced with one of the following: ◦ 1 plasma pistol ◦ 1 combi-bolter ◦ 1 combi-weapon ◦ 1 accursed weapon ◦ 1 power fist",
        "This model’s Astartes chainsword can be replaced with one of the following: ◦ 1 bolt pistol ◦ 1 plasma pistol ◦ 1 accursed weapon ◦ 1 power fist",
        "This model’s bolt pistol and Astartes chainsword can be replaced with 1 paired accursed weapons."
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Lord of Chaos",
            "description": "Once per battle round, one unit from your army with this ability can be targeted with a Stratagem for 0CP, even if another unit from your army has already been targeted with that Stratagem this phase.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Cut Off Their Escape",
            "description": "Each time an enemy unit (excluding Monsters and Vehicles) within Engagement Range of this model’s unit is selected to Fall Back, models in that enemy unit must take Desperate Escape tests as if their unit was Battle-shocked. When doing so, if that enemy unit is also Battle-shocked by other means, subtract 1 from each of those Desperate Escape tests.",
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
          "t": "5",
          "sv": "3+",
          "w": "6",
          "ld": "6+",
          "oc": "2",
          "name": "Chaos Lord On Steed Of Slaanesh",
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
              "name": "Combi-bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
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
              "name": "Combi-weapon",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
                "rapid fire 1"
              ],
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
              "name": "Plasma pistol – standard",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
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
              "skill": "2+",
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
              "name": "Accursed weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
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
              "name": "Astartes chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "7",
              "skill": "2+",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
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
              "name": "Paired accursed weapons",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "7",
              "skill": "2+",
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
              "name": "Power fist",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Character",
        "Grenades",
        "Chaos",
        "Slaanesh",
        "Chaos Lord",
        "Steed of Slaanesh"
      ],
      "factions": ["Heretic Astartes"],
      "leads": {
        "units": ["Chaos Bikers"],
        "extra": ""
      }
    },
    {
      "id": "3773dc53-7315-5caf-9abd-01d88825732c",
      "name": "Chaos Predator Annihilator",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Chaos Predator Annihilator"],
      "loadout": "This model is equipped with: Predator twin lascannon; armoured tracks.",
      "wargear": [
        "This model can be equipped with one of the following: ◦ 2 heavy bolters ◦ 2 lascannons",
        "This model can be equipped with one of the following: ◦ 1 combi-bolter ◦ 1 combi-weapon",
        "This model can be equipped with 1 Havoc launcher."
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
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Annihilator",
            "description": "Each time a ranged attack made by this model is allocated to a Monster or Vehicle model, re-roll a Damage roll of 1.",
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
          "ld": "6+",
          "oc": "4",
          "name": "Chaos Predator Annihilator",
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
              "name": "Combi-bolter",
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
              "name": "Combi-weapon",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
                "rapid fire 1"
              ],
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
              "name": "Havoc launcher",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "3+",
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
              "name": "Lascannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "3+",
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
              "name": "Predator twin lascannon",
              "keywords": ["twin-linked"],
              "range": "48\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "14",
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
      "keywords": ["Vehicle", "Smoke", "Chaos", "Predator Annihilator"],
      "factions": ["Heretic Astartes"]
    },
    {
      "id": "998a9530-9e8f-594a-9f8d-02a2031d54aa",
      "name": "Chaos Predator Destructor",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Chaos Predator Destructor"],
      "loadout": "This model is equipped with: Predator autocannon; armoured tracks.",
      "wargear": [
        "This model can be equipped with one of the following: ◦ 2 heavy bolters ◦ 2 lascannons",
        "This model can be equipped with one of the following: ◦ 1 combi-bolter ◦ 1 combi-weapon",
        "This model can be equipped with 1 Havoc launcher."
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
        "core": ["Deadly Demise D3"],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Destructor",
            "description": "Each time a ranged attack made by this model targets an enemy Infantry unit, improve the Armour Penetration characteristic of that attack by 1.",
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
          "ld": "6+",
          "oc": "4",
          "name": "Chaos Predator Destructor",
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
              "name": "Combi-bolter",
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
              "name": "Combi-weapon",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
                "rapid fire 1"
              ],
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
              "name": "Havoc launcher",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "3+",
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
              "name": "Lascannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "3+",
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
              "name": "Predator autocannon",
              "keywords": ["rapid fire 2"],
              "range": "48\"",
              "attacks": "4",
              "skill": "3+",
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
              "skill": "6+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Smoke", "Chaos", "Predator Destructor"],
      "factions": ["Heretic Astartes"]
    },
    {
      "id": "95ddee3b-53cb-5683-9b41-4fc6eb6fc61c",
      "name": "Chaos Rhino",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Chaos Rhino"],
      "loadout": "This model is equipped with: combi-bolter; armoured tracks.",
      "wargear": [
        "This model can be equipped with one of the following: ◦ 1 combi-bolter ◦ 1 combi-weapon",
        "This model can be equipped with 1 havoc launcher."
      ],
      "transport": "This model has a transport capacity of 12 Heretic Astartes Infantry models. It cannot transport Terminator, Jump Pack, Obliterator or Possessed models.",
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
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Self Repair",
            "description": "At the start of your Command phase, this model regains 1 lost wound.",
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
          "ld": "6+",
          "oc": "2",
          "name": "Chaos Rhino",
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
              "name": "Combi-bolter",
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
              "name": "Combi-weapon",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
                "rapid fire 1"
              ],
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
              "name": "Havoc launcher",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6",
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
        "Transport",
        "Dedicated Transport",
        "Smoke",
        "Chaos",
        "Rhino"
      ],
      "factions": ["Heretic Astartes"]
    },
    {
      "id": "bafeb65b-91d6-5b9d-b071-115160122588",
      "name": "Chaos Spawn",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["2 Chaos Spawn"],
      "loadout": "Every model is equipped with: hideous mutations.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "2",
          "cost": "80",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Feel No Pain 5+"],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Regenerating Monstrosities",
            "description": "At the start of each player’s Command phase, one model in this unit regains up to D3 lost wounds.",
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
          "t": "5",
          "sv": "4+",
          "w": "4",
          "ld": "7+",
          "oc": "1",
          "name": "Chaos Spawn",
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
              "name": "Hideous mutations",
              "keywords": [],
              "range": "Melee",
              "attacks": "D6+2",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Beast", "Chaos", "Chaos Spawn"],
      "factions": ["Heretic Astartes"]
    },
    {
      "id": "030f33e9-7bca-59a5-9e5f-64f5804d93c1",
      "name": "Chaos Terminator Squad",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Terminator Champion", "4-9 Chaos Terminators"],
      "loadout": "Every model is equipped with: combi-bolter; accursed weapon.",
      "wargear": [
        "For every 5 models in this unit, 1 Terminator’s combi-bolter can be replaced with one of the following: ◦ 1 heavy flamer ◦ 1 reaper autocannon",
        "Any number of models can each have their combi-bolter replaced with 1 combi-weapon.",
        "For every 5 models in this unit, 1 model’s combi-bolter and accursed weapon can be replaced with 1 paired accursed weapons.",
        "For every 5 models in this unit, up to 3 models can each have their accursed weapon replaced with 1 power fist.",
        "For every 5 models in this unit, 1 model’s accursed weapon can be replaced with 1 chainfist."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "195",
          "active": true
        },
        {
          "models": "10",
          "cost": "390",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Despoilers",
            "description": "Each time this unit makes a Dark Pact, until the end of the phase, each time a model in this unit makes an attack, you can re-roll the Hit roll.",
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
          "w": "3",
          "ld": "6+",
          "oc": "1",
          "name": "Chaos Terminator Squad",
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
              "name": "Combi-bolter",
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
              "name": "Combi-weapon",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
                "rapid fire 1"
              ],
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
              "name": "Reaper autocannon",
              "keywords": ["devastating wounds", "sustained hits 1"],
              "range": "36\"",
              "attacks": "4",
              "skill": "3+",
              "strength": "7",
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
              "name": "Accursed weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Chainfist",
              "keywords": ["anti-vehicle 3+"],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Paired accursed weapons",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "5",
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
              "name": "Power fist",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Chaos", "Terminator", "Chaos Terminator Squad"],
      "factions": ["Heretic Astartes"],
      "leadBy": [
        "Abaddon The Despoiler",
        "Chaos Lord In Terminator Armour",
        "Sorcerer In Terminator Armour"
      ]
    },
    {
      "id": "04d1df97-f938-51b8-a22c-3cdcf90cb969",
      "name": "Chaos Thunderhawk",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Chaos Thunderhawk"],
      "loadout": "This model is equipped with: 2 lascannons; Thunderhawk heavy cannon; 4 twin heavy bolters; armoured hull; Thunderhawk cluster bombs.",
      "wargear": [
        "This model’s Thunderhawk heavy cannon can be replaced with 1 turbo-laser destructor.",
        "This model’s Thunderhawk cluster bombs can be replaced with 1 hellstrike missile battery"
      ],
      "transport": "This model has a transport capacity of 30 Heretic Astartes Infantry or Heretic Astartes Mounted models. Each Jump Pack, Possessed and Terminator model takes up the space of 2 models. Each Obliterator model takes up the space of 3 models. Each Mounted model takes up the space of 4 models.",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [
          {
            "name": "Thunderhawk Cluster Bombs",
            "description": "Each time the bearer ends a Normal move, you can select one enemy unit it moved over during that move and roll six D6: for each 3+, that unit suffers 1 mortal wound.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deadly Demise D6+2", "Hover"],
        "faction": ["Dark Pact"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Aerial Assault",
            "description": "Each time a unit with the Deep Strike ability disembarks from this model after it has made a Normal move, that unit is still eligible to declare a charge this turn.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-10 WOUNDS REMAINING",
          "description": "While this model has 1-10 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "20+\"",
          "t": "12",
          "sv": "2+",
          "w": "30",
          "ld": "6+",
          "oc": "0",
          "name": "Chaos Thunderhawk",
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
              "name": "Hellstrike missile battery",
              "keywords": ["anti-fly 4+"],
              "range": "72\"",
              "attacks": "4",
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
              "name": "Lascannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "3+",
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
              "name": "Thunderhawk heavy cannon",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6+6",
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
              "name": "Turbo-laser destructor",
              "keywords": ["blast"],
              "range": "96\"",
              "attacks": "D3+1",
              "skill": "3+",
              "strength": "20",
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
              "name": "Twin heavy bolter",
              "keywords": ["sustained hits 1", "twin-linked"],
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
        "Transport",
        "Chaos",
        "Thunderhawk"
      ],
      "factions": ["Heretic Astartes"]
    },
    {
      "id": "690c3a5a-148a-53a2-a43a-194068045ddb",
      "name": "Chaos Vindicator",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Chaos Vindicator"],
      "loadout": "This model is equipped with: demolisher cannon; armoured tracks.",
      "wargear": [
        "This model can be equipped with one of the following: ◦ 1 combi-bolter ◦ 1 combi-weapon",
        "This model can be equipped with 1 Havoc launcher."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "210",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Siege Shield",
            "description": "When making ranged attacks with its demolisher cannon, this model can target enemy units within Engagement Range of it (provided no other friendly units are also within Engagement Range of that enemy unit). In addition, when making ranged attacks, this model does not suffer the penalty to its Hit rolls for being within Engagement Range of one or more enemy units.",
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
          "m": "9\"",
          "t": "11",
          "sv": "2+",
          "w": "11",
          "ld": "6+",
          "oc": "3",
          "name": "Chaos Vindicator",
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
              "name": "Combi-bolter",
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
              "name": "Combi-weapon",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
                "rapid fire 1"
              ],
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
              "name": "Demolisher cannon",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D6+3",
              "skill": "3+",
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
              "name": "Havoc launcher",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6",
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
      "keywords": ["Vehicle", "Smoke", "Chaos", "Vindicator"],
      "factions": ["Heretic Astartes"]
    },
    {
      "id": "6e6e68fd-931a-5685-876e-1f28359e02fb",
      "name": "Chosen",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Chosen Champion", "4-9 Chosen"],
      "loadout": "Every model is equipped with: boltgun; bolt pistol; accursed weapon.",
      "wargear": [
        "For every 5 models in this unit, up to 2 models can each have their bolt pistol replaced with 1 plasma pistol.",
        "For every 5 models in this unit, up to 2 models can each have their boltgun replaced with 1 combi-weapon.",
        "For every 5 models in this unit, 1 model’s boltgun and accursed weapon can be replaced with 1 paired accursed weapons.",
        "For every 5 models in this unit, 1 model equipped with a boltgun can have its accursed weapon replaced with 1 power fist. That model’s boltgun cannot be replaced.",
        "1 model can be equipped with 1 Chaos icon."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "115",
          "active": true
        },
        {
          "models": "10",
          "cost": "230",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Chaos Icon",
            "description": "Each time the bearer’s unit takes a Leadership test for the Dark Pacts ability, you can re-roll that test.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": [],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Chosen Marauders",
            "description": "This unit is eligible to shoot and declare a charge in a turn in which it Advanced or Fell Back.",
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
          "ld": "6+",
          "oc": "1",
          "name": "Chosen",
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
              "keywords": [],
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
              "name": "Combi-weapon",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
                "rapid fire 1"
              ],
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
              "name": "Accursed weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Paired accursed weapons",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "5",
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
              "name": "Power fist",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Grenades", "Chaos", "Chosen"],
      "factions": ["Heretic Astartes"],
      "leadBy": [
        "Chaos Lord",
        "Chaos Lord On Disc Of Tzeentch",
        "Chaos Lord On Palanquin Of Nurgle",
        "Dark Apostle",
        "Exalted Champion",
        "Fabius Bile",
        "Huron Blackheart",
        "Master Of Executions",
        "Master Of Possession",
        "Sorcerer",
        "Sorcerer On Disc Of Tzeentch",
        "Sorcerer On Palanquin Of Nurgle",
        "Warpsmith"
      ]
    },
    {
      "id": "9874542a-5bc4-527a-839a-e6e611c05bd8",
      "name": "Cultist Mob",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Cultist Champion", "9-19 Chaos Cultists"],
      "loadout": "Every model is equipped with: autopistol; brutal assault weapon.",
      "wargear": [
        "The Cultist Champion’s autopistol can be replaced with 1 bolt pistol.",
        "Any number of models can each have their autopistol and brutal assault weapon replaced with 1 Cultist firearm and 1 close combat weapon.",
        "For every 10 models in this unit, 1 Chaos Cultist’s autopistol and brutal assault weapon can be replaced with 1 flamer and 1 close combat weapon.",
        "For every 10 models in this unit, 1 Chaos Cultist’s autopistol and brutal assault weapon can be replaced with 1 heavy stubber and 1 close combat weapon.",
        "For every 10 models in this unit, 1 Chaos Cultist’s autopistol and brutal assault weapon can be replaced with 1 Cultist grenade launcher and 1 close combat weapon."
      ],
      "transport": "",
      "points": [
        {
          "models": "10",
          "cost": "55",
          "active": true
        },
        {
          "models": "20",
          "cost": "110",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "For the Dark Gods",
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
          "sv": "6+",
          "w": "1",
          "ld": "7+",
          "oc": "1",
          "name": "Cultist Mob",
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
              "name": "Cultist firearm",
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
              "name": "Cultist grenade launcher – frag",
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
              "name": "Cultist grenade launcher – krak",
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
              "name": "Heavy stubber",
              "keywords": ["heavy", "rapid fire 3"],
              "range": "36\"",
              "attacks": "4",
              "skill": "5+",
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
              "name": "Brutal assault weapon",
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
        "Chaos",
        "Cultist Mob"
      ],
      "factions": ["Heretic Astartes"],
      "leadBy": ["Dark Apostle", "Dark Commune", "Rogue Psyker"]
    },
    {
      "id": "c9b83cec-f13d-5c5b-92fb-d374ee5696d7",
      "name": "Cypher",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Cypher – Epic Hero"],
      "loadout": "This model is equipped with: Cypher’s bolt pistol; Cypher’s plasma pistol; close combat weapon.",
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
        "core": ["Lone Operative"],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Agent of Discord",
            "description": "Once per battle, after your opponent uses a Stratagem, if this model is on the battlefield, it can use this ability. If it does, until the end of the battle, increase that Stratagem’s cost to your opponent by 1CP.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Guns Blazing",
            "description": "Each time an enemy unit is selected to shoot, if one or more of those attacks target a friendly Heretic Astartes unit within 3\" of this model, after that enemy unit has finished making its attacks, this model can shoot as if it were your Shooting phase, but when doing so it must target only that enemy unit (and only if it is an eligible target).",
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
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "Cypher",
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
              "name": "Cypher’s bolt pistol",
              "keywords": ["assault", "pistol", "sustained hits 1"],
              "range": "12\"",
              "attacks": "6",
              "skill": "2+",
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
              "name": "Cypher’s plasma pistol",
              "keywords": ["assault", "pistol", "sustained hits 1"],
              "range": "12\"",
              "attacks": "3",
              "skill": "2+",
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
              "attacks": "6",
              "skill": "2+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Epic Hero", "Chaos", "Cypher"],
      "factions": ["Heretic Astartes"]
    },
    {
      "id": "64c0d358-e337-5443-9377-8ac880dd10c7",
      "name": "Dark Apostle",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Accursed Cultists ■ Chosen ■ Cultist Mob ■ Legionaries",
      "composition": ["1 Dark Apostle", "2 Dark Disciples"],
      "loadout": "The Dark Apostle is equipped with: bolt pistol; accursed crozius. Every Dark Disciple is equipped with: close combat weapon.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "85",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Dark Zealotry",
            "description": "While this unit is leading a unit and contains a Dark Apostle model, each time a model in that unit makes a melee attack, add 1 to the Wound roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Demagogue",
            "description": "Once per battle, at the start of any phase, you can select one friendly Heretic Astartes unit that is Battle-shocked and within 9\" of this unit’s Dark Apostle model. That unit is no longer Battle-shocked.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Malign Sacrifice",
            "description": "At the start of the Fight phase, if this unit contains one or more Dark Disciple models, you can select one of those models and one enemy unit within Engagement Range of this unit, then roll one D6: on a 2-5, that enemy unit suffers 1 mortal wound; on a 6, that enemy unit suffers D3 mortal wounds. That Dark Disciple model is then destroyed.",
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
          "w": "4",
          "ld": "5+",
          "oc": "1",
          "name": "DARK APOSTLE",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "6\"",
          "t": "4",
          "sv": "6+",
          "w": "1",
          "ld": "7+",
          "oc": "1",
          "name": "DARK DISCIPLE",
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
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Accursed crozius",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
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
      "keywords": ["Infantry", "Grenades", "Chaos"],
      "factions": ["Heretic Astartes"],
      "leads": {
        "units": ["Accursed Cultists", "Chosen", "Cultist Mob", "Legionaries"],
        "extra": ""
      }
    },
    {
      "id": "5d2476fb-2e9f-5491-b9d2-e32a25fdc3ab",
      "name": "Dark Commune",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "This unit can be attached to the following units: ■ Accursed Cultists ■ Cultist Mob",
      "composition": [
        "1 Cult Demagogue",
        "1 Mindwitch",
        "1 Iconarch",
        "2 Blessed Blades"
      ],
      "loadout": "The Cult Demagogue is equipped with: autopistol; Commune stave. The Mindwitch is equipped with: Warp Curse; close combat weapon. The Iconarch is equipped with: autopistol; close combat weapon; Chaos icon. Every Blessed Blade is equipped with: Commune blade.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "55",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Chaos Icon",
            "description": "Each time the bearer’s unit takes a Leadership test for the Dark Pacts ability, you can re-roll that test.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Leader"],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Faithful Flock",
            "description": "While this unit is leading a unit and contains a Cult Demagogue model, models in that unit have a 5+ invulnerable save.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Dark Ritual",
            "description": "Once per battle, in your Command phase, if this unit contains a Cult Demagogue model, it can use this ability. If it does, until the end of the turn, this unit can declare a charge in a turn in which it Advanced and each time a model in this unit makes an attack, add 1 to the Hit roll and add 1 to the Wound roll.",
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
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "CULT DEMAGOGUE",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "6\"",
          "t": "3",
          "sv": "6+",
          "w": "1",
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
              "name": "Warp Curse – witchfire",
              "keywords": ["psychic"],
              "range": "18\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "4",
              "ap": "-1",
              "damage": "2"
            },
            {
              "active": true,
              "name": "Warp Curse – focused witchfire",
              "keywords": ["hazardous", "psychic", "sustained hits 2"],
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
              "name": "Commune blade",
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
              "name": "Commune stave",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "D3"
            }
          ]
        }
      ],
      "keywords": [
        "ALL MODELS:",
        "Infantry",
        "Grenades",
        "Chaos",
        "Dark Commune",
        "MINDWITCH ONLY:",
        "Psyker",
        "CULT DEMAGOGUE ONLY:",
        "Character",
        "Cult Demagogue"
      ],
      "factions": ["Heretic Astartes"],
      "leads": {
        "units": ["Accursed Cultists", "Cultist Mob"],
        "extra": ""
      }
    },
    {
      "id": "598c379d-ebbb-53bd-9431-aeba9b98bf5b",
      "name": "Decimator",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Decimator"],
      "loadout": "This model is equipped with: 2 Decimator butcher cannons; armoured feet.",
      "wargear": [
        "Each of this model’s Decimator butcher cannons can be replaced with one of the following: ◦ 1 Decimator conversion beamer ◦ 1 soulburner petard ◦ 1 storm laser ◦ 1 hellflamer and 1 Decimator claw",
        "Both of this model’s Decimator butcher cannons can be replaced with 1 twin Decimator claw an 2 hellflamers."
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["Dark Pact"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Infernal Regeneration",
            "description": "The first time this model is destroyed, remove it from play without resolving its Deadly Demise ability. Then, at the end of the phase, roll one D6: on a 2+, set this model back up on the battlefield as close as possible to where it was destroyed and not within Engagement Range of any enemy units, with D6 wounds remaining.",
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
          "w": "12",
          "ld": "6+",
          "oc": "4",
          "name": "Decimator",
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
              "name": "Decimator butcher cannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "4",
              "skill": "3+",
              "strength": "9",
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
              "name": "Decimator conversion beamer",
              "keywords": ["conversion", "sustained hits d3"],
              "range": "24\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "7",
              "ap": "-1",
              "damage": "3"
            }
          ],
          "abilities": [
            {
              "name": "Conversion",
              "description": "Each time an attack made with this weapon targets a unit more than 12\" from the bearer, an unmodified successful Hit roll of 4+ scores a Critical Hit.",
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
              "name": "",
              "keywords": ["conversion"],
              "range": "argets",
              "attacks": "a",
              "skill": "unit",
              "strength": "more",
              "ap": "than",
              "damage": "12\""
            }
          ],
          "abilities": [
            {
              "name": "Conversion",
              "description": "Each time an attack made with this weapon targets a unit more than 12\" from the bearer, an unmodified successful Hit roll of 4+ scores a Critical Hit.",
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
              "name": "unmodified successful Hit roll of 4+ scores a Critical Hi",
              "keywords": [],
              "range": "t."
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Hellflamer",
              "keywords": ["anti-infantry 4+", "ignores cover", "torrent"],
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
              "name": "Soulburner petard",
              "keywords": [
                "anti-infantry 3+",
                "devastating wounds",
                "hazardous"
              ],
              "range": "24\"",
              "attacks": "4",
              "skill": "3+",
              "strength": "2",
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
              "name": "Storm laser",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "8",
              "skill": "3+",
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
              "name": "Decimator claw",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
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
              "name": "Twin Decimator claws",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "14",
              "ap": "-3",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Walker", "Chaos", "Daemon", "Decimator"],
      "factions": ["Heretic Astartes"]
    },
    {
      "id": "fa9a5ed6-8820-5755-9090-c577692e8e2e",
      "name": "Defiler",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Defiler"],
      "loadout": "This model is equipped with: Defiler cannon; reaper autocannon; twin heavy flamer; Defiler claws.",
      "wargear": [
        "This model’s twin heavy flamer can be replaced with one of the following: ◦ 1 Defiler scourge ◦ 1 havoc launcher",
        "This model’s reaper autocannon can be replaced with one of the following: ◦ 1 twin heavy bolter ◦ 1 twin lascannon",
        "This model can be equipped with one of the following: ◦ 1 combi-bolter ◦ 1 combi-weapon"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "210",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Scuttling Walker",
            "description": "Each time this model makes a Normal or Advance move, it can be moved over friendly Monster and Vehicle models as if they were not there. This model can move over terrain features that are 4\" or less in height as if they were not there.",
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
          "t": "10",
          "sv": "3+",
          "w": "14",
          "ld": "6+",
          "oc": "5",
          "name": "Defiler",
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
              "name": "Combi-bolter",
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
              "name": "Combi-weapon",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
                "rapid fire 1"
              ],
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
              "name": "Defiler cannon",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6+3",
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
              "name": "Havoc launcher",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "3+",
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
              "name": "Reaper autocannon",
              "keywords": ["devastating wounds", "sustained hits 1"],
              "range": "36\"",
              "attacks": "4",
              "skill": "3+",
              "strength": "7",
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
              "name": "Twin heavy bolter",
              "keywords": ["sustained hits 1", "twin-linked"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Twin lascannon",
              "keywords": ["twin-linked"],
              "range": "48\"",
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
              "name": "Defiler claws",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
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
              "name": "Defiler scourge",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "12",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Walker", "Smoke", "Chaos", "Daemon", "Defiler"],
      "factions": ["Heretic Astartes"]
    },
    {
      "id": "be41e11a-0921-5639-8a16-634b07988733",
      "name": "Dreadclaw Drop Pod",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Dreadclaw Drop Pod"],
      "loadout": "This model is equipped with: blade struts.",
      "wargear": ["None"],
      "transport": "This model has a transport capacity of 12 Heretic Astartes Infantry models. Each Jump Pack, Possessed and Terminator model takes up the space of 2 models. Each Obliterator model takes up the space of 3 models. This model can instead transport 1 Helbrute or Dreadnought model.",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1", "Deep Strike"],
        "faction": ["Dark Pact"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Dreadclaw Assault",
            "description": "This model must start the battle in Reserves, but neither it nor any units embarked within it are counted towards any limits placed on the maximum number of Reserves units you can start the battle with. This model can be set up in the Reinforcements step of your first, second or third Movement phase, regardless of any mission rules. Any units embarked within this model can disembark after it has been set up on the battlefield, and if they do they must be set up more than 9\" away from all enemy models.",
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
          "w": "9",
          "ld": "6+",
          "oc": "2",
          "name": "Dreadclaw Drop Pod",
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
              "name": "Blade struts",
              "keywords": [],
              "range": "Melee",
              "attacks": "8",
              "skill": "4+",
              "strength": "6",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Chaos",
        "Transport",
        "Fly",
        "Dreadclaw Drop Pod"
      ],
      "factions": ["Heretic Astartes"]
    },
    {
      "id": "00ee7435-cd67-5bac-a9e9-078343c3741e",
      "name": "Exalted Champion",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Chosen ■ Legionaries You can attach this model to one of the above units even if one other Character model has already been attached to it (a unit cannot have two Exalted Champions attached to it). If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": ["1 Exalted Champion"],
      "loadout": "This model is equipped with: bolt pistol; combi-weapon; exalted weapon.",
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
        "core": ["Leader"],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Dark Champion",
            "description": "While this model is leading a unit, each time a model in that unit makes an attack, add 1 to the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Aspire to Glory",
            "description": "Each time this model’s unit makes a Dark Pact, until the end of the phase, add D3 to the Strength characteristic of weapons equipped by this model.",
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
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Exalted Champion",
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
              "name": "Combi-weapon",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
                "rapid fire 1"
              ],
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
              "name": "Exalted weapon",
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
      "keywords": [
        "Infantry",
        "Character",
        "Grenades",
        "Chaos",
        "Exalted Champion"
      ],
      "factions": ["Heretic Astartes"],
      "leads": {
        "units": ["Chosen", "Legionaries"],
        "extra": "You can attach this model to one of the above units even if one other Character model has already been attached to it (a unit cannot have two Exalted Champions attached to it). If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths."
      }
    },
    {
      "id": "b868b873-5795-5118-9e85-b13e135ca800",
      "name": "Fabius Bile",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "This unit can be attached to the following units: ■ Chosen ■ Legionaries",
      "composition": ["1 Fabius Bile – Epic Hero", "1 Surgeon Acolyte"],
      "loadout": "Fabius Bile is equipped with: Xyclos Needler; Chirurgeon; Rod of Torment. The Surgeon Acolyte is equipped with: Surgeon Acolyte’s tools.",
      "wargear": ["None"],
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
        "core": ["Feel No Pain 5+", "Leader"],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Enhanced Warriors",
            "description": "If this unit is attached to a unit at the start of the battle, until the end of the battle, add 1 to the Strength characteristic of melee weapons equipped by Bodyguard models in that unit and add 1 to the Toughness characteristic of Bodyguard models in that unit.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Surgeon Acolyte",
            "description": "Once per turn, when an attack is allocated to a model in this unit, if this unit contains Fabius Bile, you can change the Damage characteristic of that attack to 0.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Chirurgeon",
            "description": "The first time this unit’s Fabius Bile model is destroyed, roll one D6: on a 2+, set it back up on the battlefield, as close as possible to where it was destroyed and not within Engagement Range of any enemy models, with its full wounds remaining. If that model was attached to a unit when it was destroyed, it must be set up attached to that unit.",
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
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "FABIUS BILE",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "6\"",
          "t": "4",
          "sv": "6+",
          "w": "1",
          "ld": "7+",
          "oc": "1",
          "name": "SURGEON ACOLYTE",
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
              "name": "Xyclos Needler",
              "keywords": ["anti-infantry 2+", "pistol"],
              "range": "18\"",
              "attacks": "3",
              "skill": "2+",
              "strength": "2",
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
              "name": "Chirurgeon",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "2",
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
              "name": "Rod of Torment",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "5",
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
              "name": "Surgeon Acolyte’s tools",
              "keywords": [],
              "range": "Melee",
              "attacks": "1",
              "skill": "5+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "ALL MODELS:",
        "Infantry",
        "Chaos",
        "Chaos Undivided",
        "FABIUS BILE ONLY:",
        "Character",
        "Epic Hero",
        "Fabius Bile"
      ],
      "factions": ["Heretic Astartes"],
      "leads": {
        "units": ["Chosen", "Legionaries"],
        "extra": ""
      }
    },
    {
      "id": "f4a92fc2-8727-56b7-b3cd-473f9d962f90",
      "name": "Fellgor Beastmen",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Fellgor Champion", "9 Fellgor Beastmen"],
      "loadout": "The Fellgor Champion is equipped with: bolt pistol; chainsword. Every Fellgor Beastman is equipped with: autopistol; close combat weapon.",
      "wargear": [
        "The Fellgor Champion’s bolt pistol can be replaced with 1 plasma pistol.",
        "1 Fellgor Beastman’s close combat weapon can be replaced with 1 great weapon.",
        "1 Fellgor Beastman’s close combat weapon can be replaced with 1 corrupted stave."
      ],
      "transport": "",
      "points": [
        {
          "models": "10",
          "cost": "95",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Scouts 6\""],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Bestial Raiders",
            "description": "Each time this unit declares a charge, if one or more of the targets of that charge are within range of an objective marker, add 2 to the Charge roll made for that charge.",
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
          "name": "Fellgor Beastmen",
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
              "name": "Corrupted stave",
              "keywords": ["devastating wounds", "psychic"],
              "range": "18\"",
              "attacks": "D3",
              "skill": "4+",
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
              "name": "Chainsword",
              "keywords": [],
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
              "name": "Close combat weapon",
              "keywords": [],
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
              "name": "Corrupted stave",
              "keywords": ["devastating wounds", "psychic"],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "4",
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
              "name": "Great weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "5+",
              "strength": "8",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Grenades", "Chaos", "Fellgor Beastmen"],
      "factions": ["Heretic Astartes"]
    },
    {
      "id": "d654c6b1-4542-5b8d-ae19-ce281858841d",
      "name": "Forgefiend",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Forgefiend"],
      "loadout": "This model is equipped with: 2 Hades autocannons; Forgefiend jaws.",
      "wargear": [
        "This model’s 2 Hades autocannons can be replaced with 2 ectoplasma cannons.",
        "This model’s Forgefiend jaws can be replaced with 1 ectoplasma cannon and 1 armoured limbs."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "165",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Daemonic Ordnance",
            "description": "Each time this model is selected to shoot, it can use this ability. If it does, until the end of the phase, its ranged weapons have the [DEVASTATING WOUNDS] and [HAZARDOUS] abilities.",
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
          "m": "8\"",
          "t": "10",
          "sv": "3+",
          "w": "12",
          "ld": "6+",
          "oc": "3",
          "name": "Forgefiend",
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
              "name": "Ectoplasma cannon",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D3",
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
              "name": "Hades autocannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "6",
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
              "name": "Armoured limbs",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
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
              "name": "Forgefiend jaws",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "7",
              "ap": "0",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Walker", "Chaos", "Daemon", "Forgefiend"],
      "factions": ["Heretic Astartes"]
    },
    {
      "id": "511e358e-25bb-527b-89be-927cd6ce5bc3",
      "name": "Gellerpox Infected",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["4 Nightmare Hulks", "3 Gellerpox Mutants"],
      "loadout": "Every Gellerpox Mutant is equipped with: brutal weapons. ne Nightmare Hulk is equipped with: belly-flamer; O hideous mutations. Every other Nightmare Hulk is equipped with: hideous mutations.",
      "wargear": ["None"],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Feel No Pain 5+"],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Fearsome (Aura)",
            "description": "While an enemy unit is within 6\" of this unit, each time that enemy unit takes a Battle-shock or Leadership test, subtract 1 from the result.",
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
          "w": "4",
          "ld": "7+",
          "oc": "1",
          "name": "NIGHTMARE HULK",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "5\"",
          "t": "5",
          "sv": "6+",
          "w": "1",
          "ld": "7+",
          "oc": "1",
          "name": "GELLERPOX MUTANTS",
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
              "name": "Belly-flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
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
              "name": "Brutal weapons",
              "keywords": [],
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
              "name": "Hideous mutations",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
              "strength": "6",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Chaos", "Nurgle", "Gellerpox Infected"],
      "factions": ["Heretic Astartes"]
    },
    {
      "id": "60b12bfe-4587-5f45-a641-51224a4c52f3",
      "name": "Greater Blight Drone",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Greater Blight Drone"],
      "loadout": "This model is equipped with: bile maw; blightreaper cannon; greater plague probe.",
      "wargear": ["None"],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1", "Deep Strike"],
        "faction": ["Dark Pact"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Hovering Death",
            "description": "This model is eligible to shoot and declare a charge in a turn in which it Fell Back.",
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
          "ld": "6+",
          "oc": "3",
          "name": "Greater Blight Drone",
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
              "name": "Bile maw",
              "keywords": ["lethal hits"],
              "range": "12\"",
              "attacks": "3",
              "skill": "3+",
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
              "name": "Blightreaper cannon",
              "keywords": ["lethal hits"],
              "range": "36\"",
              "attacks": "6",
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
              "name": "Greater plague probe",
              "keywords": ["lethal hits"],
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
        "Vehicle",
        "Fly",
        "Chaos",
        "Nurgle",
        "Daemon",
        "Greater Blight Drone"
      ],
      "factions": ["Heretic Astartes"]
    },
    {
      "id": "23f0bd06-3be5-5592-b947-7e88393ae12d",
      "name": "Greater Brass Scorpion",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Greater Brass Scorpion"],
      "loadout": "This model is equipped with: demolisher cannon; Scorpion cannon; hellmaw flame cannons; hellcrusher claws.",
      "wargear": ["None"],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+2"],
        "faction": ["Dark Pact"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Super-heavy Walker",
            "description": "Each time a model with this ability makes a Normal, Advance or Fall Back move, it can move over models (excluding Titanic models) and terrain features that are 4\" or less in height as if they were not there.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Runes of the Blood God",
            "description": "This model has the Feel No Pain 4+ ability against mortal wounds and Psychic Attacks.",
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
          "m": "12\"",
          "t": "12",
          "sv": "3+",
          "w": "26",
          "ld": "6+",
          "oc": "10",
          "name": "Greater Brass Scorpion",
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
              "name": "Demolisher cannon",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D6+3",
              "skill": "3+",
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
              "name": "Hellmaw flame cannons",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "2D6",
              "skill": "N/A",
              "strength": "8",
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
              "name": "Scorpion cannon",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "15",
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
              "name": "Hellcrusher claws – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "3+",
              "strength": "14",
              "ap": "-3",
              "damage": "6"
            },
            {
              "active": true,
              "name": "Hellcrusher claws – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "18",
              "skill": "3+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Titanic",
        "Walker",
        "Chaos",
        "Khorne",
        "Daemon",
        "Greater Brass Scorpion"
      ],
      "factions": ["Heretic Astartes"]
    },
    {
      "id": "16538213-e690-5bb2-97a4-a0dcbf30726a",
      "name": "Haarken Worldclaimer",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Raptors",
      "composition": ["1 Haarken Worldclaimer – Epic Hero"],
      "loadout": "This model is equipped with: Helspear; Herald’s Talon.",
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
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Head Taker",
            "description": "While this model is leading a unit, each time this model’s unit ends a Charge move, select one enemy unit within Engagement Range of this model’s unit and roll one D6 for each model in this model’s unit: for each 4+, that enemy unit suffers 1 mortal wound.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Herald of the Apocalypse (Aura)",
            "description": "While an enemy unit is within 6\" of this model, in the Battle-shock step of your opponent’s Command phase, if that enemy unit is below its Starting Strength, it must take a Battle-shock test. This ability cannot cause a unit to take two Battle-shock tests in the same phase.",
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
          "sv": "3+",
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "Haarken Worldclaimer",
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
              "name": "Helspear",
              "keywords": ["assault", "sustained hits d3"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "8",
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
              "name": "Herald’s Talon",
              "keywords": ["precision"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
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
              "name": "Helspear",
              "keywords": ["extra attacks", "lance", "sustained hits d3"],
              "range": "Melee",
              "attacks": "1",
              "skill": "2+",
              "strength": "8",
              "ap": "-3",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Epic Hero",
        "Fly",
        "Jump Pack",
        "Chaos",
        "Chaos Undivided",
        "Haarken Worldclaimer"
      ],
      "factions": ["Heretic Astartes"],
      "leads": {
        "units": ["Raptors"],
        "extra": ""
      }
    },
    {
      "id": "8ac4b6f6-8adb-5f06-b9f5-51e4c1e4ed0d",
      "name": "Havocs",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Havoc Champion", "4 Havocs"],
      "loadout": "The Havoc Champion is equipped with: flamer; Astartes chainsword. 2 Havocs are equipped with: Havoc autocannon; close combat weapon. 2 Havocs are equipped with: Havoc lascannon; close combat weapon.",
      "wargear": [
        "The Havoc Champion’s Astartes chainsword can be replaced with one of the following: ◦ 1 accursed weapon ◦ 1 power fist",
        "The Havoc Champion’s flamer can be replaced with one of the following: ◦ 1 boltgun*  ◦ 1 meltagun* ◦ 1 plasma gun* ◦ 1 plasma pistol* ◦ 1 accursed weapon ◦ 1 power fist *  This weapon’s profile can be found on the Heretic Astartes Armoury card.",
        "Any number of Havocs can each have their Havoc autocannon or Havoc lascannon replaced with one of the following: ◦ 1 Havoc autocannon ◦ 1 Havoc heavy bolter  ◦ 1 Havoc lascannon ◦ 1 Havoc missile launcher ◦ 1 Havoc reaper chaincannon"
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "135",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Stabilisation Talons",
            "description": "Each time a model in this unit makes an attack with a ranged weapon, you can ignore any or all modifiers to the Hit roll and any or all modifiers to the Ballistic Skill characteristic of that weapon.",
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
          "ld": "6+",
          "oc": "1",
          "name": "Havocs",
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
              "name": "Havoc autocannon",
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
              "name": "Havoc heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Havoc lascannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "3+",
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
              "name": "Havoc missile launcher – frag",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Havoc missile launcher – krak",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
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
              "name": "Havoc reaper chaincannon",
              "keywords": [],
              "range": "24\"",
              "attacks": "8",
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
              "name": "Accursed weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Astartes chainsword",
              "keywords": [],
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Power fist",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Chaos", "Havocs"],
      "factions": ["Heretic Astartes"],
      "leadBy": ["Warpsmith"]
    },
    {
      "id": "0b020c25-102b-5feb-93f5-5eda796bd1d5",
      "name": "Helbrute",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Helbrute"],
      "loadout": "This model is equipped with: missile launcher; multi-melta; close combat weapon",
      "wargear": [
        "This model’s multi-melta can be replaced with one of the following: ◦ 1 Helbrute plasma cannon ◦ 1 twin autocannon ◦ 1 twin heavy bolter ◦ 1 twin lascannon ◦ 1 Helbrute fist",
        "This model’s missile launcher can be replaced with one of the following: ◦ 1 Helbrute fist ◦ 1 Helbrute hammer ◦ 1 power scourge",
        "For each Helbrute fist this model is equipped with, it can be equipped with one of the following: ◦ 1 combi-bolter ◦ 1 heavy flamer"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "155",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1"],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Dark Ascension (Aura)",
            "description": "While a friendly Heretic Astartes unit is within 6\" of this model, each time that unit makes a Dark Pact, until the end of the phase, its weapons gain both abilities conferred by that pact (instead of only one).",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Helbrute Fists",
            "description": "If this model is equipped with two Helbrute fists, those weapons have the [TWIN-LINKED] ability.",
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
          "sv": "2+",
          "w": "8",
          "ld": "6+",
          "oc": "3",
          "name": "Helbrute",
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
              "name": "Combi-bolter",
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
              "name": "Helbrute plasma cannon",
              "keywords": ["blast", "hazardous"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "3+",
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
              "name": "Missile launcher – frag",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Missile launcher – krak",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
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
              "name": "Multi-melta",
              "keywords": ["melta 2"],
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
              "name": "Twin heavy bolter",
              "keywords": ["sustained hits 1", "twin-linked"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Twin lascannon",
              "keywords": ["twin-linked"],
              "range": "48\"",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
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
              "name": "Helbrute fist",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
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
              "name": "Helbrute hammer",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
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
              "name": "Power scourge",
              "keywords": [],
              "range": "Melee",
              "attacks": "8",
              "skill": "3+",
              "strength": "7",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Walker", "Chaos", "Helbrute"],
      "factions": ["Heretic Astartes"]
    },
    {
      "id": "c2cc1787-cd42-5d41-bc82-bcdcd6c3b61f",
      "name": "Heldrake",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Heldrake"],
      "loadout": "This model is equipped with: Hades autocannon; Heldrake claws.",
      "wargear": [
        "This model’s Hades autocannon can be replaced with 1 baleflamer."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "205",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3", "Hover"],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Airborne Predator",
            "description": "Each time this model makes an attack that targets a unit that can Fly, add 1 to the Hit roll.",
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
          "ld": "6+",
          "oc": "0",
          "name": "Heldrake",
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
              "name": "Baleflamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6+3",
              "skill": "N/A",
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
              "name": "Hades autocannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "6",
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
              "name": "Heldrake claws",
              "keywords": ["anti-fly 2+", "devastating wounds"],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "7",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Fly", "Aircraft", "Chaos", "Daemon", "Heldrake"],
      "factions": ["Heretic Astartes"]
    },
    {
      "id": "70c359fb-d604-5bed-b17b-cb28bc2e381d",
      "name": "Hell Blade",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Hell Blade"],
      "loadout": "This model is equipped with: 2 twin autocannons; armoured hull.",
      "wargear": [
        "This model’s 2 twin autocannons can be replaced with 2 twin lascannons."
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Interceptor",
            "description": "Each time this model makes a ranged attack that targets a unit that can Fly, add 1 to the Hit roll.",
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
          "w": "10",
          "ld": "6+",
          "oc": "0",
          "name": "Hell Blade",
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
              "name": "Twin lascannon",
              "keywords": ["twin-linked"],
              "range": "48\"",
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
      "keywords": ["Vehicle", "Chaos", "Aircraft", "Fly", "Hell Blade"],
      "factions": ["Heretic Astartes"]
    },
    {
      "id": "18d0fb57-c8e1-58ee-9de5-d84b32bd92df",
      "name": "Hell Talon",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Hell Talon"],
      "loadout": "This model is equipped with: autocannon; twin lascannon; armoured hull.",
      "wargear": [
        "This model’s autocannon can be replaced with 1 havoc launcher."
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Bomb Rack",
            "description": "Each time this model ends a Normal move, you can select one enemy unit it moved across during that move and roll six D6: for each 3+, that unit suffers 1 mortal wound.",
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
          "ld": "6+",
          "oc": "0",
          "name": "Hell Talon",
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
              "name": "Havoc launcher",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "3+",
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
              "name": "Twin lascannon",
              "keywords": ["twin-linked"],
              "range": "48\"",
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
              "name": "Armoured hull",
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
      "keywords": ["Vehicle", "Chaos", "Aircraft", "Fly", "Hell Talon"],
      "factions": ["Heretic Astartes"]
    },
    {
      "id": "8b94c535-1785-57b7-a931-1c45dad69eeb",
      "name": "Heretic Astartes Armoury",
      "source": "40k-10e",
      "faction_id": "CSM",
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
              "name": "Boltgun",
              "keywords": [],
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
              "name": "Heavy bolter",
              "keywords": ["heavy", "sustained hits 1"],
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
              "keywords": ["heavy"],
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
      "meleeWeapons": [],
      "keywords": [],
      "factions": [""]
    },
    {
      "id": "c96ebf97-424c-50df-be08-428cfd764a80",
      "name": "Heretic Astartes Daemon Prince",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Heretic Astartes Daemon Prince"],
      "loadout": "This model is equipped with: infernal cannon; hellforged weapons.",
      "wargear": ["None"],
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
        "faction": ["Dark Pacts"],
        "primarch": [
          {
            "name": "DAEMONIC ALLEGIANCE",
            "showAbility": true,
            "abilities": [
              {
                "name": "Daemon Prince of Khorne",
                "description": "If this model has the Khorne keyword, add 2 to the Strength characteristic of its hellforged weapons.",
                "showAbility": true,
                "showDescription": true
              },
              {
                "name": "Daemon Prince of Tzeentch",
                "description": "If this model has the Tzeentch keyword, add 3 to the Attacks characteristic of its infernal cannon.",
                "showAbility": true,
                "showDescription": true
              },
              {
                "name": "Daemon Prince of Nurgle",
                "description": "If this model has the Nurgle keyword, add 1 to its Toughness characteristic.",
                "showAbility": true,
                "showDescription": true
              },
              {
                "name": "Daemon Prince of Slaanesh",
                "description": "If this model has the Slaanesh keyword, add 2\" to its Move characteristic.",
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
            "name": "Dark Blessing (Aura)",
            "description": "While a friendly Heretic Astartes Infantry unit is within 6\" of this model, each time a ranged attack is allocated to a model in that unit, that model has the Benefit of Cover against that attack.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Ascended Daemon",
            "description": "Each time this model shoot or fights, while resolving those attacks, you can re-roll one Hit roll and you can re-roll one Wound roll.",
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
          "t": "10",
          "sv": "2+",
          "w": "10",
          "ld": "6+",
          "oc": "3",
          "name": "Heretic Astartes Daemon Prince",
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
      "keywords": ["Monster", "Character", "Chaos", "Daemon", "Daemon Prince"],
      "factions": ["Heretic Astartes"]
    },
    {
      "id": "472eb026-33ac-5eb8-b52e-b109a26e5caf",
      "name": "Heretic Astartes Daemon Prince With Wings",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Heretic Astartes Daemon Prince with Wings"],
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
        "faction": ["Dark Pacts"],
        "primarch": [
          {
            "name": "DAEMONIC ALLEGIANCE",
            "showAbility": true,
            "abilities": [
              {
                "name": "Daemon Prince of Khorne",
                "description": "If this model has the Khorne keyword, add 2 to the Strength characteristic of its hellforged weapons.",
                "showAbility": true,
                "showDescription": true
              },
              {
                "name": "Daemon Prince of Tzeentch",
                "description": "If this model has the Tzeentch keyword, add 3 to the Attacks characteristic of its infernal cannon.",
                "showAbility": true,
                "showDescription": true
              },
              {
                "name": "Daemon Prince of Nurgle",
                "description": "If this model has the Nurgle keyword, add 1 to its Toughness characteristic.",
                "showAbility": true,
                "showDescription": true
              },
              {
                "name": "Daemon Prince of Slaanesh",
                "description": "If this model has the Slaanesh keyword, add 2\" to its Move characteristic.",
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
            "name": "Daemonic Destruction",
            "description": "Each time this model ends a Charge move, select one enemy unit within Engagement Range of it and roll one D6 for each of this model’s remaining wounds: for each 4+, that enemy unit suffers 1 mortal wound (to a maximum of 6 mortal wounds).",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Flying Horror",
            "description": "Each time this model ends a Normal or Advance move, select one enemy unit it moved over during that move. That unit must take a Battle-shock test.",
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
          "sv": "2+",
          "w": "10",
          "ld": "6+",
          "oc": "3",
          "name": "Heretic Astartes Daemon Prince With Wings",
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
        "Fly",
        "Character",
        "Chaos",
        "Daemon",
        "Daemon Prince with Wings"
      ],
      "factions": ["Heretic Astartes"]
    },
    {
      "id": "5ef737f4-746a-5943-9c85-d1117fb78aba",
      "name": "Huron Blackheart",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Chosen ■ Legionaries",
      "composition": ["1 Huron Blackheart – Epic Hero"],
      "loadout": "This model is equipped with: Tyrant’s Claw; exalted weapon.",
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
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "The Tyrant of Badab",
            "description": "While this model is leading a unit, add 1 to the Objective Control characteristic of models in that unit.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Red Corsairs",
            "description": "After both players have deployed their armies, you can select up to three Heretic Astartes Infantry units from your army and redeploy them. When doing so, those units can be placed into Strategic Reserves, regardless of how many units are already in Strategic Reserves.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Hamadrya’s Knowledge (Psychic)",
            "description": "Once per battle, when an enemy unit ends a Normal, Advance or Fall Back move within 9\" of this model’s unit, if this model’s unit is not within Engagement Range of one or more enemy units, it can make a Normal move of up to D6\".",
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
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "Huron Blackheart",
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
              "name": "Tyrant’s Claw",
              "keywords": ["ignores cover", "torrent"],
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
              "name": "Exalted weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
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
              "name": "Tyrant’s Claw",
              "keywords": [],
              "range": "Melee",
              "attacks": "10",
              "skill": "2+",
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
        "Chaos",
        "Chaos Undivided",
        "Huron Blackheart"
      ],
      "factions": ["Heretic Astartes"],
      "leads": {
        "units": ["Chosen", "Legionaries"],
        "extra": ""
      }
    },
    {
      "id": "a119f777-ff36-5c05-8e09-7f92e31daa82",
      "name": "Kharybdis Assault Claw",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Kharybdis Assault Claw"],
      "loadout": "This model is equipped with: 5 Kharybdis storm launchers; blade struts; melta array.",
      "wargear": ["None"],
      "transport": "This model has a transport capacity of 22 Heretic Astartes Infantry models. Each Jump Pack, Possessed and Terminator model takes up the space of 2 models. Each Obliterator model takes up the space of 3 models. This model can instead transport 1 Helbrute or Dreadnought model.",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Strike", "Deadly Demise D6+2"],
        "faction": ["Dark Pact"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Kharybdis Assault",
            "description": "This model must start the battle in Reserves, but neither it nor any units embarked within it are counted towards any limits placed on the maximum number of Reserves units you can start the battle with. This model can be set up in the Reinforcements step of your first, second or third Movement phase, regardless of any mission rules. Any units embarked within this model can disembark after it has been set up on the battlefield, and if they do they must be set up more than 9\" away from all enemy models.",
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
          "t": "11",
          "sv": "3+",
          "w": "20",
          "ld": "6+",
          "oc": "4",
          "name": "Kharybdis Assault Claw",
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
              "name": "Kharybdis storm launcher – frag",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "2D6",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Kharybdis storm launcher – krak",
              "keywords": [],
              "range": "36\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "9",
              "ap": "-2",
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
              "name": "Blade struts",
              "keywords": [],
              "range": "Melee",
              "attacks": "12",
              "skill": "4+",
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
              "name": "Melta array",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "1",
              "skill": "4+",
              "strength": "12",
              "ap": "-4",
              "damage": "D6+2"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Titanic",
        "Chaos",
        "Transport",
        "Fly",
        "Kharybdis Assault Claw"
      ],
      "factions": ["Heretic Astartes"]
    },
    {
      "id": "76e4a353-b80c-5294-a3aa-df5a9c382696",
      "name": "Khorne Lord Of Skulls",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Khorne Lord of Skulls"],
      "loadout": "This model is equipped with: gorestorm cannon; Hades gatling cannon; great cleaver of Khorne.",
      "wargear": [
        "This model’s gorestorm cannon can be replaced with one of the following: ◦ 1 daemongore cannon ◦ 1 ichor cannon",
        "This model’s Hades gatling cannon can be replaced with 1 skullhurler."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "480",
          "active": true
        },
        {
          "models": "1",
          "cost": "525",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+2"],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Plough Through the Enemy",
            "description": "In the Fight phase, after this model has finished making its attacks, if this model destroyed one or more enemy units this phase, each enemy unit within 6\" of this model must take a Battle-shock test.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-8 WOUNDS REMAINING",
          "description": "While this model has 1-8 wounds remaining, subtract 4 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "8\"",
          "t": "13",
          "sv": "3+",
          "w": "24",
          "ld": "6+",
          "oc": "8",
          "name": "Khorne Lord Of Skulls",
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
              "name": "Daemongore cannon",
              "keywords": ["blast"],
              "range": "18\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "14",
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
              "name": "Gorestorm cannon",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D6+3",
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
              "name": "Hades gatling cannon",
              "keywords": ["sustained hits 1"],
              "range": "48\"",
              "attacks": "12",
              "skill": "3+",
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
              "name": "Ichor cannon",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "2D6",
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
              "name": "Skullhurler",
              "keywords": [],
              "range": "60\"",
              "attacks": "2D6",
              "skill": "3+",
              "strength": "14",
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
              "name": "Great cleaver of Khorne – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "16",
              "ap": "-4",
              "damage": "8"
            },
            {
              "active": true,
              "name": "Great cleaver of Khorne – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "15",
              "skill": "3+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Titanic",
        "Towering",
        "Chaos",
        "Khorne",
        "Daemon",
        "Lord of Skulls"
      ],
      "factions": ["Heretic Astartes"]
    },
    {
      "id": "2aff14a6-8e3b-5e15-bb90-133b73406c80",
      "name": "Kytan Ravager",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Kytan Ravager"],
      "loadout": "This model is equipped with: Kytan gatling cannon; Kytan cleaver.",
      "wargear": ["None"],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+2"],
        "faction": ["Dark Pact"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Super-heavy Walker",
            "description": "Each time a model with this ability makes a Normal, Advance or Fall Back move, it can move over models (excluding Titanic models) and terrain features that are 4\" or less in height as if they were not there.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Bloodlust",
            "description": "Each time this model makes a Charge move, until the end of the turn, its melee weapons have the [SUSTAINED HITS 1] ability. In addition, once per battle, this model is eligible to declare a charge in a turn in which it Advanced.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [],
        "damaged": {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": "1-8 WOUNDS REMAINING",
          "description": "While this model has 1-8 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "12",
          "sv": "3+",
          "w": "24",
          "ld": "6+",
          "oc": "10",
          "name": "Kytan Ravager",
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
              "name": "Kytan gatling cannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "18",
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
              "name": "Kytan cleaver – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "14",
              "ap": "-4",
              "damage": "6"
            },
            {
              "active": true,
              "name": "Kytan cleaver – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "12",
              "skill": "3+",
              "strength": "9",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Titanic",
        "Walker",
        "Chaos",
        "Khorne",
        "Daemon",
        "Kytan Ravager"
      ],
      "factions": ["Heretic Astartes"]
    },
    {
      "id": "25074d9b-39cf-598a-bd2a-c018e975b3f5",
      "name": "Legionaries",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Aspiring Champion", "4-9 Legionaries"],
      "loadout": "Every model is equipped with: bolt pistol; boltgun; close combat weapon.",
      "wargear": [
        "The Aspiring Champion’s boltgun can be replaced with one of the following: ◦ 1 plasma pistol and 1 Astartes chainsword* ◦ 1 accursed weapon ◦ 1 Astartes chainsword ◦ 1 heavy melee weapon",
        "The Aspiring Champion’s bolt pistol can be replaced with one of the following: ◦ 1 plasma pistol* ◦ 1 accursed weapon ◦ 1 Astartes chainsword ◦ 1 heavy melee weapon",
        "1 model can be equipped with 1 Chaos icon.",
        "Any number of Legionaries can each have their boltgun replaced with 1 Astartes chainsword.",
        "One Legionary’s boltgun can be replaced with 1 heavy melee weapon.",
        "One Legionary’s boltgun can be replaced with 1 balefire tome.",
        "For every 5 models in this unit, 1 Legionary’s boltgun can be replaced with one of the following (duplicates are not allowed): ◦ 1 plasma pistol ◦ 1 flamer ◦ 1 havoc autocannon ◦ 1 heavy bolter** ◦ 1 lascannon** ◦ 1 meltagun ◦ 1 missile launcher** ◦ 1 plasma gun**  ◦ 1 reaper chaincannon  * Maximum 1 per model. **  This weapon’s profile can be found on the Heretic Astartes Armoury card."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "100",
          "active": true
        },
        {
          "models": "10",
          "cost": "200",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Chaos Icon",
            "description": "Each time the bearer’s unit takes a Leadership test for the Dark Pacts ability, you can re-roll that test.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": [],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Veterans of the Long War",
            "description": "Each time a model in this unit targets an enemy unit with a melee attack, re-roll a Wound roll of 1. If that enemy unit is within range of an objective marker, you can re-roll the Wound roll instead.",
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
          "w": "2",
          "ld": "6+",
          "oc": "2",
          "name": "Legionaries",
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
              "name": "Balefire tome",
              "keywords": ["psychic"],
              "range": "18\"",
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
              "keywords": [],
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
              "name": "Havoc autocannon",
              "keywords": ["heavy"],
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
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Reaper chaincannon",
              "keywords": ["heavy"],
              "range": "24\"",
              "attacks": "8",
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
              "name": "Accursed weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Astartes chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Heavy melee weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "8",
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
        "Grenades",
        "Legionaries"
      ],
      "factions": ["Heretic Astartes"],
      "leadBy": [
        "Abaddon The Despoiler",
        "Chaos Lord",
        "Chaos Lord On Disc Of Tzeentch",
        "Chaos Lord On Palanquin Of Nurgle",
        "Dark Apostle",
        "Exalted Champion",
        "Fabius Bile",
        "Huron Blackheart",
        "Lucius The Eternal",
        "Master Of Executions",
        "Master Of Possession",
        "Sorcerer",
        "Sorcerer On Disc Of Tzeentch",
        "Sorcerer On Palanquin Of Nurgle",
        "Warpsmith"
      ]
    },
    {
      "id": "14630397-bd73-5b18-bb2f-3ac523ff5a83",
      "name": "Lord Discordant On Helstalker",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Lord Discordant on Helstalker"],
      "loadout": "This model is equipped with: bolt pistol; Helstalker autocannon; techno-virus injector; bladed limbs; impaler chainglaive.",
      "wargear": [
        "This model’s Helstalker autocannon can be replaced with 1 baleflamer.",
        "This model’s techno-virus injector can be replaced with 1 magma cutter."
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
        "core": [],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Corrupt Machine Spirits",
            "description": "Once per turn, at the start of your opponent’s Shooting phase, select one enemy Vehicle unit within 12\" of and visible to one or more models from your army with this ability. That unit must take a Leadership test: if that test is passed, until the end of the phase, each time a model in that unit makes an attack, subtract 1 from the Hit roll; if that test is failed, that unit is not eligible to shoot this phase.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Spirit Thief",
            "description": "At the start of your Shooting phase, select one enemy Vehicle unit within 12\" of this model. Until the end of the phase, each time a friendly Heretic Astartes model makes an attack that targets that unit, re-roll a Wound roll of 1.",
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
          "sv": "2+",
          "w": "10",
          "ld": "6+",
          "oc": "4",
          "name": "Lord Discordant On Helstalker",
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
              "name": "Baleflamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6+3",
              "skill": "N/A",
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
              "name": "Helstalker autocannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "3",
              "skill": "2+",
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
              "name": "Magma cutter",
              "keywords": ["melta 2"],
              "range": "6\"",
              "attacks": "2",
              "skill": "3+",
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
              "name": "Bladed limbs",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Impaler chainglaive",
              "keywords": ["lance"],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Techno-virus injector",
              "keywords": ["anti-vehicle 2+", "extra attacks"],
              "range": "Melee",
              "attacks": "1",
              "skill": "3+",
              "strength": "3",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Character",
        "Chaos",
        "Daemon",
        "Lord Discordant"
      ],
      "factions": ["Heretic Astartes"]
    },
    {
      "id": "b67889cb-2995-59ed-be31-2c84590e3694",
      "name": "Lucius The Eternal",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Legionaries ■ Noise Marines",
      "composition": ["1 Lucius the Eternal – Epic Hero"],
      "loadout": "This model is equipped with: doom siren; duellist’s sword and Lash of Torment.",
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
        "core": ["Fights First", "Leader"],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Duellist’s Pride",
            "description": "While this model is leading a unit, models in that unit have the Fights First ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Armour of Shrieking Souls",
            "description": "Each time this model is destroyed by an attack made by an enemy unit, that unit must take a Leadership test: if that test is passed, that enemy unit suffers D3 mortal wounds; if that test is failed, that enemy unit suffers D6 mortal wounds. If mortal wounds inflicted in this way destroy that enemy unit, set this model back up on the battlefield, as close as possible to where it was destroyed and not within Engagement Range of any enemy models, with D3 wounds remaining. If this model was attached to a unit when it was destroyed, it must be set back up attached to that unit.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "EMPEROR’S CHILDREN",
            "description": "If this model is your Warlord, Noise Marine units in your army have the Battleline keyword.",
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
          "sv": "3+",
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "Lucius The Eternal",
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
              "name": "Doom siren",
              "keywords": ["torrent"],
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
              "name": "Duellist’s sword and Lash of Torment",
              "keywords": ["precision"],
              "range": "Melee",
              "attacks": "8",
              "skill": "2+",
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
        "Epic Hero",
        "Chaos",
        "Slaanesh",
        "Lucius the Eternal"
      ],
      "factions": ["Heretic Astartes"],
      "leads": {
        "units": ["Legionaries", "Noise Marines"],
        "extra": ""
      }
    },
    {
      "id": "3bd99d34-0e1f-5f4d-a0c1-67838dd7a8b3",
      "name": "Master Of Executions",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Chosen ■ Legionaries You can attach this model to one of the above units even if one other Character model has already been attached to it (a unit cannot have two Masters of Executions attached to it). If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": ["1 Master of Executions"],
      "loadout": "This model is equipped with: bolt pistol; axe of dismemberment.",
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
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Warp-sighted Butcher",
            "description": "While this model is leading a unit, each time a model in that unit makes a melee attack that targets a unit that is below its Starting Strength, you can re-roll the Hit roll. If that unit is Below Half-strength, you can re-roll the Wound roll as well.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Trophy Taker",
            "description": "Each time this model destroys an enemy Character model, you gain 1CP.",
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
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Master Of Executions",
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
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Axe of dismemberment",
              "keywords": ["devastating wounds", "precision"],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "7",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Grenades",
        "Chaos",
        "Master of Executions"
      ],
      "factions": ["Heretic Astartes"],
      "leads": {
        "units": ["Chosen", "Legionaries"],
        "extra": "You can attach this model to one of the above units even if one other Character model has already been attached to it (a unit cannot have two Masters of Executions attached to it). If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths."
      }
    },
    {
      "id": "d4d2f0c5-3988-5eb7-a688-ea19abd859cf",
      "name": "Master Of Possession",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Chosen ■ Legionaries ■ Possessed",
      "composition": ["1 Master of Possession"],
      "loadout": "This model is equipped with: bolt pistol; Rite of Possession; staff of possession.",
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
        "core": ["Leader"],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Daemonkin (Psychic)",
            "description": "While this model is leading a unit, add 1 to Advance and Charge rolls made for that unit, and models in that unit have the Feel No Pain 6+ ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Sacrificial Dagger",
            "description": "Once per phase, when this model is selected to shoot or fight, it can use this ability. If it does, this model’s unit suffers 1 mortal wound and, until the end of the phase, each time this model makes a Psychic Attack, add 1 to the Hit roll and add 1 to the Wound roll.",
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
          "sv": "3+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Master Of Possession",
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
              "name": "Rite of Possession – witchfire",
              "keywords": ["anti-psyker 2+", "pistol", "precision", "psychic"],
              "range": "18\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "4",
              "ap": "-3",
              "damage": "2"
            },
            {
              "active": true,
              "name": "Rite of Possession – focused witchfire",
              "keywords": [
                "anti-psyker 2+",
                "hazardous",
                "pistol",
                "precision",
                "psychic"
              ],
              "range": "18\"",
              "attacks": "2",
              "skill": "3+",
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
              "name": "Staff of possession",
              "keywords": ["anti-psyker 2+", "psychic"],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
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
        "Chaos",
        "Master of Possession"
      ],
      "factions": ["Heretic Astartes"],
      "leads": {
        "units": ["Chosen", "Legionaries", "Possessed"],
        "extra": ""
      }
    },
    {
      "id": "90f24438-6cf8-523c-969d-a952f329016a",
      "name": "Maulerfiend",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Maulerfiend"],
      "loadout": "This model is equipped with: lasher tendrils; Maulerfiend fists.",
      "wargear": [
        "This model’s lasher tendrils can be replaced with 2 magma cutters."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "155",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Siege Crawler",
            "description": "You can re-roll Advance and Charge rolls made for this model, and you can ignore any or all modifiers to its Move characteristic and to Advance and Charge rolls made for it.",
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
          "w": "12",
          "ld": "6+",
          "oc": "3",
          "name": "Maulerfiend",
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
              "name": "Magma cutters",
              "keywords": ["melta 2"],
              "range": "6\"",
              "attacks": "2",
              "skill": "3+",
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
              "name": "Lasher tendrils",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "6",
              "skill": "3+",
              "strength": "7",
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
              "name": "Maulerfiend fists",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "3+",
              "strength": "14",
              "ap": "-2",
              "damage": "D6+1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Walker", "Chaos", "Daemon", "Maulerfiend"],
      "factions": ["Heretic Astartes"]
    },
    {
      "id": "d449e9ae-3bf2-5bd0-9f25-685ef5206b92",
      "name": "Mutilators",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["3 Mutilators"],
      "loadout": "Every model is equipped with: fleshmetal weapons.",
      "wargear": ["None"],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Death Frenzy",
            "description": "Each time a model in this unit is destroyed by a melee attack, if that model has not fought this phase, roll one D6. On a 4+, do not remove it from play; that destroyed model can fight after the attacking model’s unit has finished making its attacks, and is then removed from play.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "CULT OF DESTRUCTION",
            "description": "For the purposes of embarking within Transports, each Mutilator model counts as one Obliterator model.",
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
          "t": "7",
          "sv": "2+",
          "w": "4",
          "ld": "6+",
          "oc": "2",
          "name": "Mutilators",
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
              "name": "Fleshmetal weapons – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "6",
              "ap": "-2",
              "damage": "2"
            },
            {
              "active": true,
              "name": "Fleshmetal weapons – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "8",
              "skill": "3+",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Chaos", "Daemon", "Mutilators"],
      "factions": ["Heretic Astartes"]
    },
    {
      "id": "2a06fbbf-2216-5056-a8e5-8c730a1d0954",
      "name": "Mutoid Vermin",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["16 Mutoid Vermin"],
      "loadout": "Every model is equipped with: diseased claws and fangs.",
      "wargear": ["None"],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Feel No Pain 6+"],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
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
          "m": "8\"",
          "t": "2",
          "sv": "7+",
          "w": "1",
          "ld": "8+",
          "oc": "0",
          "name": "Mutoid Vermin",
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
              "name": "Diseased claws and fangs",
              "keywords": ["lethal hits"],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "2",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Swarm", "Chaos", "Nurgle", "Mutoid Vermin"],
      "factions": ["Heretic Astartes"]
    },
    {
      "id": "56fa9aab-ac8b-5e72-9250-b5c6e76683a2",
      "name": "Negavolt Cultists",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["4 Negavolt Cultists"],
      "loadout": "Every model is equipped with: electro-goads.",
      "wargear": ["None"],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Feel No Pain 5+"],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Voltagheist Field",
            "description": "Each time this unit ends a Charge move, select one enemy unit within Engagement Range of it and roll one D6 for each model in this unit: for each 4+, that enemy unit suffers 1 mortal wound.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "SERVANTS OF THE ABYSS",
            "description": "If a unit from your army with the Leader ability can be attached to a Cultist Mob, it can be attached to this unit instead.",
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
          "sv": "7+",
          "w": "1",
          "ld": "7+",
          "oc": "1",
          "name": "Negavolt Cultists",
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
              "name": "Electro-goads",
              "keywords": ["sustained hits 2"],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Chaos", "Negavolt Cultists"],
      "factions": ["Heretic Astartes"],
      "leadBy": ["Rogue Psyker"]
    },
    {
      "id": "1207b676-a91c-5c14-9524-c646f2225d04",
      "name": "Noctilith Crown",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Noctilith Crown"],
      "loadout": "This model is equipped with: lashing warp energies.",
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
        "core": ["Deadly Demise D6"],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Malevolent Locus (Aura)",
            "description": "While a friendly Heretic Astartes model is wholly within 9\" of this Fortification, that model has a 4+ invulnerable save.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Malign Cover",
            "description": "Each time a ranged attack is allocated to a model, if that model is not fully visible to every model in the attacking unit because of this Fortification, that model has the Benefit of Cover against that attack.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Fortification",
            "description": "While an enemy unit is only within Engagement Range of one or more Fortifications from your army: ■  That unit can still be selected as the target of ranged attacks, but each time such an attack is made, unless it is made with a Pistol weapon, subtract 1 from the Hit roll. ■  Models in that unit do not need to take Desperate Escape tests due to Falling Back while Battle-shocked, except for those that will move over enemy models when doing so.",
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
          "ld": "6+",
          "oc": "0",
          "name": "Noctilith Crown",
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
              "name": "Lashing warp energies",
              "keywords": [],
              "range": "6\"",
              "attacks": "8",
              "skill": "4+",
              "strength": "8",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [],
      "keywords": ["Fortification", "Chaos", "Noctilith Crown"],
      "factions": ["Heretic Astartes"]
    },
    {
      "id": "34dad49c-8b17-5d06-9458-e5c1010c2743",
      "name": "Noise Marines",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Noise Champion", "4-9 Noise Marines"],
      "loadout": "Every model is equipped with: bolt pistol; boltgun; close combat weapon.",
      "wargear": [
        "Any number of Noise Marines can each have their boltgun replaced with one of the following: ◦ 1 Astartes chainsword ◦ 1 sonic blaster",
        "1 Noise Marine’s boltgun can be replaced with 1 blastmaster.",
        "The Noise Champion’s bolt pistol can be replaced with one of the following: ◦ 1 plasma pistol* ◦ 1 accursed weapon ◦ 1 Astartes chainsword ◦ 1 power fist",
        "The Noise Champion’s boltgun can be replaced with one of the following: ◦ 1 plasma pistol* ◦ 1 accursed weapon ◦ 1 Astartes chainsword ◦ 1 power fist ◦ 1 sonic blaster",
        "The Noise Champion can be equipped with 1 doom siren.",
        "1 model can be equipped with 1 Chaos icon. * Maximum 1 per model."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "85",
          "active": true
        },
        {
          "models": "10",
          "cost": "170",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Chaos Icon",
            "description": "Each time the bearer’s unit takes a Leadership test for the Dark Pacts ability, you can re-roll that test.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": [],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Riotous Cacophony",
            "description": "In your Shooting phase, after this unit has shot, select one enemy unit that was hit by one or more of those attacks. That unit must take a Battle-shock test.",
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
          "w": "2",
          "ld": "6+",
          "oc": "1",
          "name": "Noise Marines",
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
              "name": "Blastmaster – single frequency",
              "keywords": ["heavy"],
              "range": "48\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "9",
              "ap": "-2",
              "damage": "3"
            },
            {
              "active": true,
              "name": "Blastmaster – varied frequency",
              "keywords": [],
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
              "keywords": [],
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
              "name": "Doom siren",
              "keywords": ["torrent"],
              "range": "12\"",
              "attacks": "D6",
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
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Sonic blaster",
              "keywords": ["assault"],
              "range": "24\"",
              "attacks": "3",
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
              "name": "Accursed weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Astartes chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Power fist",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Grenades",
        "Chaos",
        "Slaanesh",
        "Noise Marines"
      ],
      "factions": ["Heretic Astartes"],
      "leadBy": ["Lucius The Eternal"]
    },
    {
      "id": "b9136516-2614-531c-83da-dead15dc5000",
      "name": "Obliterators",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["2-4 Obliterators"],
      "loadout": "Every model is equipped with: fleshmetal guns; crushing fists.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "2",
          "cost": "160",
          "active": true
        },
        {
          "models": "4",
          "cost": "320",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Warp Rift Firepower",
            "description": "Once per battle, when this unit makes a Dark Pact, it can use this ability. If it does, until the end of the phase, ranged weapons models in this unit are equipped with have the [INDIRECT FIRE] ability.",
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
          "sv": "2+",
          "w": "5",
          "ld": "6+",
          "oc": "2",
          "name": "Obliterators",
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
              "name": "Fleshmetal guns – focused malice",
              "keywords": ["melta 2"],
              "range": "24\"",
              "attacks": "D3",
              "skill": "3+",
              "strength": "12",
              "ap": "-3",
              "damage": "4"
            },
            {
              "active": true,
              "name": "Fleshmetal guns – ruinous salvo",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            },
            {
              "active": true,
              "name": "Fleshmetal guns – warp hail",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
              "attacks": "D6+3",
              "skill": "3+",
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
              "name": "Crushing fists",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "9",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Chaos", "Daemon", "Obliterators"],
      "factions": ["Heretic Astartes"]
    },
    {
      "id": "7d802306-cefc-5a53-8922-9956d90744c9",
      "name": "Possessed",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Possessed Champion", "4-9 Possessed"],
      "loadout": "Every model is equipped with: hideous mutations.",
      "wargear": ["1 model can be equipped with 1 Chaos icon."],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "145",
          "active": true
        },
        {
          "models": "10",
          "cost": "290",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Chaos Icon",
            "description": "Each time the bearer’s unit takes a Leadership test for the Dark Pacts ability, you can re-roll that test.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": [],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Unholy Bloodshed",
            "description": "Each time this unit makes a Dark Pact, until the end of the phase, weapons equipped by models in this unit have the [DEVASTATING WOUNDS] ability.",
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
          "ld": "6+",
          "oc": "1",
          "name": "Possessed",
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
              "name": "Hideous mutations",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Chaos", "Daemon", "Possessed"],
      "factions": ["Heretic Astartes"],
      "leadBy": ["Master Of Possession"]
    },
    {
      "id": "1968abec-d0d8-53c5-8897-ae74b9cf80f1",
      "name": "Raptors",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Raptor Champion", "4-9 Raptors"],
      "loadout": "Every model is equipped with: bolt pistol; Astartes chainsword.",
      "wargear": [
        "The Raptor Champion’s bolt pistol can be replaced with 1 plasma pistol.",
        "The Raptor Champion’s Astartes chainsword can be replaced with one of the following: ◦ 1 accursed weapon ◦ 1 power fist",
        "For every 5 models in this unit, up to 2 Raptors can each have their bolt pistol replaced with 1 plasma pistol, or have theirbolt pistol and Astartes chainsword replaced with one of the following: ◦ 1 flamer and 1 close combat weapon ◦ 1 meltagun and 1 close combat weapon ◦ 1 plasma gun and 1 close combat weapon"
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
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Fearsome (Aura)",
            "description": "While an enemy unit is within 6\" of this unit, each time that enemy unit takes a Battle-shock or Leadership test, subtract 1 from the result.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Terrifying Assault",
            "description": "At the start of the Fight phase, each enemy unit within Engagement Range of one or more units with this ability must take a Battle-shock test.",
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
          "sv": "3+",
          "w": "2",
          "ld": "6+",
          "oc": "1",
          "name": "Raptors",
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
              "name": "Accursed weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Astartes chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Power fist",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Fly", "Jump Pack", "Chaos", "Raptors"],
      "factions": ["Heretic Astartes"],
      "leadBy": ["Haarken Worldclaimer"]
    },
    {
      "id": "446165b7-1ea0-528c-86a2-120622f9dd99",
      "name": "Renegade Enforcer",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Traitor Guardsmen Squad ■ Renegade Heavy Weapons Squad",
      "composition": ["1 Renegade Enforcer"],
      "loadout": "This model is equipped with: Enforcer pistol; Enforcer melee weapon.",
      "wargear": [
        "This model’s Enforcer pistol can be replaced with one of the following: ◦ 1 autogun ◦ 1 lasgun ◦ 1 shotgun",
        "This model’s Enforcer melee weapon can be replaced with one of the following: ◦ 1 power fist ◦ 1 power weapon"
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Brutal Example",
            "description": "While this model is leading a unit, you can target that unit with the Insane Bravery Stratagem for 0CP, and can do so even if another unit from your army has already been targeted with that Stratagem this phase. Each time you use this ability, one Bodyguard model in that unit is destroyed.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Enforcer",
            "description": "This model's unit is eligible to declare a charge in a turn in which it Fell Back.",
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
          "name": "Renegade Enforcer",
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
              "name": "Enforcer pistol",
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
              "name": "Lasgun",
              "keywords": ["rapid fire 1"],
              "range": "24\"",
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
              "name": "Shotgun",
              "keywords": ["assault"],
              "range": "12\"",
              "attacks": "2",
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
              "name": "Enforcer melee weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "attacks": "3",
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
        "Chaos",
        "Grenades",
        "Character",
        "Renegade Enforcer"
      ],
      "factions": ["Heretic Astartes"],
      "leads": {
        "units": ["Traitor Guardsmen Squad", "Renegade Heavy Weapons Squad"],
        "extra": ""
      }
    },
    {
      "id": "e57e2cd2-bd45-52ec-ad0b-5389a8a718b5",
      "name": "Renegade Heavy Weapons Squad",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["3 Renegade Heavy Weapons Teams"],
      "loadout": "Every model is equipped with: renegade firearm; heavy stubber; close combat weapons.",
      "wargear": [
        "Any numbers of models’ heavy stubbers can each be replaced with one of the following: ◦ 1 autocannon ◦ 1 heavy bolter ◦ 1 lascannon ◦ 1 missile launcher ◦ 1 mortar"
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Dark Pacts"],
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
            "description": "Each time you target this unit with the Fire Overwatch Stratagem, while resolving that Stratagem, hits are scored on unmodified Hit rolls of 5+.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "HEAVY WEAPONS TEAM",
            "description": "For the purposes of embarking within Transports, each Renegade Heavy Weapons Team model counts as two models.",
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
          "w": "2",
          "ld": "7+",
          "oc": "2",
          "name": "Renegade Heavy Weapons Squad",
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
              "name": "Heavy stubber",
              "keywords": ["heavy", "rapid fire 3"],
              "range": "36\"",
              "attacks": "4",
              "skill": "5+",
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
              "ap": "2",
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
              "name": "Renegade firearm",
              "keywords": ["rapid fire 1"],
              "range": "24\"",
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
              "name": "Close combat weapons",
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
        "Chaos",
        "Grenades",
        "Renegade Heavy Weapons Squad"
      ],
      "factions": ["Heretic Astartes"],
      "leadBy": ["Renegade Enforcer"]
    },
    {
      "id": "ad3af7b4-7069-573f-983e-5a70f3e2d8e4",
      "name": "Renegade Ogryn Beast Handler",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Ogryn Pack Master", "3 Chaos Mauler Hounds"],
      "loadout": "T  he Ogryn Pack Master is equipped with: mauler goad and ripper claw. Every Chaos Mauler Hound is equipped with: befouled claws and fangs.",
      "wargear": ["None"],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Beastmaster",
            "description": "While this unit contains an Ogryn Pack Master model, you can re-roll Charge rolls made for this unit, and each time a Chaos Mauler Hound model in this unit makes an attack, re-roll a Hit roll of 1.",
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
          "w": "4",
          "ld": "7+",
          "oc": "1",
          "name": "OGRYN PACK MASTER",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "6\"",
          "t": "4",
          "sv": "6+",
          "w": "1",
          "ld": "7+",
          "oc": "1",
          "name": "CHAOS MAULER HOUND",
          "showDamagedMarker": false,
          "showName": true,
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
              "name": "Befouled claws and fangs",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
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
              "name": "Mauler goad and ripper claw",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "6",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Beasts", "Chaos", "Renegade Ogryn Beast Handler"],
      "factions": ["Heretic Astartes"]
    },
    {
      "id": "0c07ad96-507a-54c4-b317-1619a739d0cd",
      "name": "Renegade Ogryn Brutes",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["3 Renegade Ogryn Brutes"],
      "loadout": "Every model is equipped with: Ogryn weapon.",
      "wargear": [
        "One model’s Ogryn weapon can be replaced with 1 Ogryn power drill."
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Ogryn Combat Stimms",
            "description": "Each time a model in this unit is destroyed by a melee attack, if that model has not fought this phase, roll one D6. On a 4+, do not remove it from play; that destroyed model can fight after the attacking model’s unit has finished making its attacks, and is then removed from play.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "OGRYNS",
            "description": "For the purposes of embarking within Transports, each Renegade Ogryn Brute model counts as one Terminator model.",
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
          "w": "3",
          "ld": "7+",
          "oc": "1",
          "name": "Renegade Ogryn Brutes",
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
              "name": "Ogryn power drill",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "10",
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
              "name": "Ogryn weapon",
              "keywords": [],
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
      "keywords": ["Infantry", "Chaos", "Renegade Ogryn Brutes"],
      "factions": ["Heretic Astartes"]
    },
    {
      "id": "4f4bdbeb-d783-5133-825a-9b34510002f3",
      "name": "Renegade Plague Ogryns",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["3 Renegade Plague Ogryns"],
      "loadout": "Every model is equipped with: Ogryn plague claws.",
      "wargear": ["None"],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Feel No Pain 6+"],
        "faction": ["Dark Pacts"],
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
            "description": "Each time an attack is allocated to a model in this unit, subtract 1 from the Damage characteristic of that attack.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "special": [
          {
            "name": "OGRYNS",
            "description": "For the purposes of embarking within Transports, each Renegade Plague Ogryn model counts as one Terminator model.",
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
          "t": "7",
          "sv": "5+",
          "w": "3",
          "ld": "7+",
          "oc": "1",
          "name": "Renegade Plague Ogryns",
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
              "name": "Ogryn plague claws",
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
      "keywords": ["Infantry", "Chaos", "Nurgle", "Renegade Plague Ogryns"],
      "factions": ["Heretic Astartes"]
    },
    {
      "id": "bd8700c4-2db5-590f-931a-5d6f1ba83b62",
      "name": "Rogue Psyker",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Accursed Cultists ■ Cultist Mob ■ Negavolt Cultists",
      "composition": ["1 Rogue Psyker"],
      "loadout": "This model is equipped with: laspistol; Psychic Strike; Chaos stave.",
      "wargear": ["None"],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Cursed Wardings (Psychic)",
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
          "name": "Rogue Psyker",
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
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Psychic Strike – focused witchfire",
              "keywords": [
                "blast",
                "devastating wounds",
                "hazardous",
                "psychic"
              ],
              "range": "12\"",
              "attacks": "D6+3",
              "skill": "3+",
              "strength": "6",
              "ap": "-2",
              "damage": "2"
            },
            {
              "active": true,
              "name": "Psychic Strike – witchfire",
              "keywords": ["blast", "devastating wounds", "psychic"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "3+",
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
              "name": "Chaos stave",
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
      "keywords": ["Infantry", "Chaos", "Character", "Psyker", "Rogue Psyker"],
      "factions": ["Heretic Astartes"],
      "leads": {
        "units": ["Accursed Cultists", "Cultist Mob", "Negavolt Cultists"],
        "extra": ""
      }
    },
    {
      "id": "7ae1d3cd-10ba-53c7-85bb-e6b388b02db6",
      "name": "Sorcerer",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Chosen ■ Legionaries",
      "composition": ["1 Sorcerer"],
      "loadout": "This model is equipped with: bolt pistol; Infernal Gaze; force weapon.",
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
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Prescience (Psychic)",
            "description": "While this model is leading a unit, each time an attack targets that unit, subtract 1 from the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Gift of Chaos (Psychic)",
            "description": "Each time this model is selected to shoot or fight, after resolving its attacks, select one enemy unit hit by one or more of those attacks that had the [PSYCHIC] ability. That unit must take a Leadership test: if that test is failed, that unit suffers D3 mortal wounds.",
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
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Sorcerer",
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
              "name": "Infernal Gaze – witchfire",
              "keywords": ["psychic"],
              "range": "24\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "5",
              "ap": "-1",
              "damage": "D3"
            },
            {
              "active": true,
              "name": "Infernal Gaze – focused witchfire",
              "keywords": ["devastating wounds", "hazardous", "psychic"],
              "range": "24\"",
              "attacks": "D6",
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
              "name": "Force weapon",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
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
        "Grenades",
        "Chaos",
        "Sorcerer"
      ],
      "factions": ["Heretic Astartes"],
      "leads": {
        "units": ["Chosen", "Legionaries"],
        "extra": ""
      }
    },
    {
      "id": "aaaf08fa-e45a-533c-98b2-ef488d3aec69",
      "name": "Sorcerer In Terminator Armour",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Chaos Terminator Squad",
      "composition": ["1 Sorcerer in Terminator Armour"],
      "loadout": "This model is equipped with: combi-bolter; Infernal Gaze; force weapon.",
      "wargear": [
        "This model’s combi-bolter can be replaced with 1 combi-weapon.",
        "This model can be equipped with 1 Chaos familiar."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "90",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Chaos Familiar",
            "description": "Once per battle, when an attack is allocated to the bearer, you can change the Damage characteristic to 0.",
            "showAbility": true,
            "showDescription": true
          }
        ],
        "core": ["Deep Strike", "Leader"],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Warptime (Psychic)",
            "description": "While this model is leading a unit, you can re-roll Advance and Charge rolls made for that unit.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Death Hex (Psychic)",
            "description": "At the start of your Shooting phase, one Psyker with this ability can use it. If it does, select one enemy unit within 12\" of and visible to that Psyker and roll one D6: on a 1, that Psyker’s unit suffers D3 mortal wounds; on a 2+, until the start of your next Movement phase, each time an attack targets that enemy unit, improve the Armour Penetration characteristic of that attack by 1.",
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
          "name": "Sorcerer In Terminator Armour",
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
              "name": "Combi-bolter",
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
              "name": "Combi-weapon",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
                "rapid fire 1"
              ],
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
              "name": "Infernal Gaze – witchfire",
              "keywords": ["psychic"],
              "range": "24\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "5",
              "ap": "-1",
              "damage": "D3"
            },
            {
              "active": true,
              "name": "Infernal Gaze – focused witchfire",
              "keywords": ["devastating wounds", "hazardous", "psychic"],
              "range": "24\"",
              "attacks": "D6",
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
              "name": "Force weapon",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
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
        "Chaos",
        "Terminator",
        "Sorcerer in Terminator Armour"
      ],
      "factions": ["Heretic Astartes"],
      "leads": {
        "units": ["Chaos Terminator Squad"],
        "extra": ""
      }
    },
    {
      "id": "29e8e63b-a0c7-5287-b1a0-0e729a8f6f0c",
      "name": "Sorcerer On Bike",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Chaos Bikers",
      "composition": ["1 Sorcerer on Bike"],
      "loadout": "This model is equipped with: bolt pistol; combi-bolter; Infernal Gaze; force weapon.",
      "wargear": [
        "This model’s bolt pistol can be replaced with one of the following: ◦ 1 plasma pistol ◦ 1 combi-bolter ◦ 1 combi-weapon ◦ 1 accursed weapon ◦ 1 Astartes chainsword ◦ 1 power fist"
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Prescience (Psychic)",
            "description": "While this model is leading a unit, each time an attack targets that unit, subtract 1 from the Hit roll.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Unholy Power",
            "description": "Each time this model's unit makes a Dark Pact, until the end of the phase, each time this model makes a Psychic Attack, add 1 to the Wound roll.",
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
          "w": "5",
          "ld": "6+",
          "oc": "2",
          "name": "Sorcerer On Bike",
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
              "name": "Combi-bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
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
              "name": "Combi-weapon",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
                "rapid fire 1"
              ],
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
              "name": "Infernal Gaze – focused witchfire",
              "keywords": ["devastating wounds", "hazardous", "psychic"],
              "range": "24\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "6",
              "ap": "-2",
              "damage": "D3"
            },
            {
              "active": true,
              "name": "Infernal Gaze – witchfire",
              "keywords": ["psychic"],
              "range": "24\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "5",
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
              "name": "Plasma pistol – standard",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
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
              "skill": "2+",
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
              "name": "Accursed weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Astartes chainsword",
              "keywords": [],
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
              "name": "Force weapon",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
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
              "name": "Power fist",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Character",
        "Grenades",
        "Chaos",
        "Psyker",
        "Sorcerer on Bike"
      ],
      "factions": ["Heretic Astartes"],
      "leads": {
        "units": ["Chaos Bikers"],
        "extra": ""
      }
    },
    {
      "id": "2a2315fb-573f-5b44-a365-f442c3111a90",
      "name": "Sorcerer On Disc Of Tzeentch",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Chosen ■ Legionaries ■ Rubric Marines",
      "composition": ["1 Sorcerer on Disc of Tzeentch"],
      "loadout": "This model is equipped with: bolt pistol; Infernal Gaze; force weapon.",
      "wargear": [
        "This model’s bolt pistol can be replaced with one of the following: ◦ 1 plasma pistol ◦ 1 combi-bolter ◦ 1 combi-weapon ◦ 1 accursed weapon ◦ 1 Astartes chainsword ◦ 1 power fist"
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Flames of Change (Psychic)",
            "description": "While this model is leading a unit, ranged weapons equipped by models in that unit have the [IGNORES COVER] ability.",
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
          "sv": "3+",
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "Sorcerer On Disc Of Tzeentch",
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
              "name": "Combi-bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
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
              "name": "Combi-weapon",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
                "rapid fire 1"
              ],
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
              "name": "Infernal Gaze – focused witchfire",
              "keywords": ["devastating wounds", "hazardous", "psychic"],
              "range": "24\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "6",
              "ap": "-2",
              "damage": "D3"
            },
            {
              "active": true,
              "name": "Infernal Gaze – witchfire",
              "keywords": ["psychic"],
              "range": "24\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "5",
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
              "name": "Plasma pistol – standard",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
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
              "skill": "2+",
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
              "name": "Accursed weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Astartes chainsword",
              "keywords": [],
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
              "name": "Force weapon",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
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
              "name": "Power fist",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Grenades",
        "Chaos",
        "Psyker",
        "Tzeentch",
        "Fly",
        "Sorcerer",
        "Disc of Tzeentch"
      ],
      "factions": ["Heretic Astartes"],
      "leads": {
        "units": ["Chosen", "Legionaries", "Rubric Marines"],
        "extra": ""
      }
    },
    {
      "id": "538eb02a-0e15-532a-a804-18e50f7423cb",
      "name": "Sorcerer On Palanquin Of Nurgle",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Chosen ■ Legionaries ■ Plague Marines",
      "composition": ["1 Sorcerer on Palanquin of Nurgle"],
      "loadout": "This model is equipped with: bolt pistol; Infernal Gaze; force weapon; Nurgling's claws and teeth.",
      "wargear": [
        "This model’s bolt pistol can be replaced with one of the following: ◦ 1 plasma pistol ◦ 1 combi-bolter ◦ 1 combi-weapon ◦ 1 accursed weapon ◦ 1 Astartes chainsword ◦ 1 power fist"
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Gift of Poxes (Psychic)",
            "description": "While this model is leading a unit, weapons equipped by models in that unit have the [SUSTAINED HITS 1] ability.",
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
          "sv": "3+",
          "w": "7",
          "ld": "6+",
          "oc": "2",
          "name": "Sorcerer On Palanquin Of Nurgle",
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
              "name": "Combi-bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
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
              "name": "Combi-weapon",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
                "rapid fire 1"
              ],
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
              "name": "Infernal Gaze – focused witchfire",
              "keywords": ["devastating wounds", "hazardous", "psychic"],
              "range": "24\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "6",
              "ap": "-2",
              "damage": "D3"
            },
            {
              "active": true,
              "name": "Infernal Gaze – witchfire",
              "keywords": ["psychic"],
              "range": "24\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "5",
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
              "name": "Plasma pistol – standard",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
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
              "skill": "2+",
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
              "name": "Accursed weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Astartes chainsword",
              "keywords": [],
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
              "name": "Force weapon",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
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
              "name": "Nurgling’s claws and teeth",
              "keywords": ["extra attacks", "lethal hits"],
              "range": "Melee",
              "attacks": "4",
              "skill": "5+",
              "strength": "2",
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
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Grenades",
        "Chaos",
        "Psyker",
        "Nurgle",
        "Sorcerer",
        "Palanquin of Nurgle"
      ],
      "factions": ["Heretic Astartes"],
      "leads": {
        "units": ["Chosen", "Legionaries", "Plague Marines"],
        "extra": ""
      }
    },
    {
      "id": "3eff79ed-3a30-5389-bc25-dcfb7137333e",
      "name": "Sorcerer On Steed Of Slaanesh",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following unit: ■ Chaos Bikers",
      "composition": ["1 Sorcerer on Steed of Slaanesh"],
      "loadout": "This model is equipped with: bolt pistol; Infernal Gaze; force weapon; lashing tongue.",
      "wargear": [
        "This model’s bolt pistol can be replaced with one of the following: ◦ 1 plasma pistol ◦ 1 combi-bolter ◦ 1 combi-weapon ◦ 1 accursed weapon ◦ 1 Astartes chainsword ◦ 1 power fist"
      ],
      "transport": "",
      "legends": "true",
      "points": [],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Dark Favour (Psychic)",
            "description": "While this model is leading a unit, models in that unit have a 4+ invulnerable save.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Infernal Speed",
            "description": "While this model is leading a unit, change the Move characteristic of models in that unit to 14\".",
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
          "t": "5",
          "sv": "3+",
          "w": "5",
          "ld": "6+",
          "oc": "2",
          "name": "Sorcerer On Steed Of Slaanesh",
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
              "name": "Combi-bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
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
              "name": "Combi-weapon",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
                "rapid fire 1"
              ],
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
              "name": "Infernal Gaze – focused witchfire",
              "keywords": ["devastating wounds", "hazardous", "psychic"],
              "range": "24\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "6",
              "ap": "-2",
              "damage": "D3"
            },
            {
              "active": true,
              "name": "Infernal Gaze – witchfire",
              "keywords": ["psychic"],
              "range": "24\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "5",
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
              "name": "Plasma pistol – standard",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
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
              "skill": "2+",
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
              "name": "Accursed weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Astartes chainsword",
              "keywords": [],
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
              "name": "Force weapon",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
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
              "name": "Lashing tongue",
              "keywords": ["extra attacks", "lethal hits"],
              "range": "Melee",
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
              "name": "Power fist",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Character",
        "Grenades",
        "Chaos",
        "Slaanesh",
        "Sorcerer",
        "Steed of Slaanesh"
      ],
      "factions": ["Heretic Astartes"],
      "leads": {
        "units": ["Chaos Bikers"],
        "extra": ""
      }
    },
    {
      "id": "56c7b2e3-0c94-5072-a260-5aa929ff98aa",
      "name": "Traitor Enforcer",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "This unit can be attached to the following unit: ■ Traitor Guardsmen Squad",
      "composition": ["1 Traitor Enforcer", "1 Traitor Ogryn"],
      "loadout": "The Traitor Enforcer is equipped with: bolt pistol; power fist. The Traitor Ogryn is equipped with: Ogryn weapons.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "2",
          "cost": "65",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "* Traitor Enforcer model only.",
          "showInvulnerableSave": true,
          "showInfo": true
        },
        "other": [
          {
            "name": "Brutal Example",
            "description": "While this unit is leading a unit and contains a Traitor Enforcer model, that unit can be targeted with the Insane Bravery Stratagem for 0CP, even if another unit from your army has already been targeted with that Stratagem this phase. Each time you use this ability, one Bodyguard model in that unit is destroyed.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Mutated Bodyguard",
            "description": "While this unit contains a Traitor Ogryn model, Character models in this unit have the Feel No Pain 4+ ability.",
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
          "name": "TRAITOR ENFORCER",
          "showDamagedMarker": false,
          "showName": true,
          "active": true
        },
        {
          "m": "6\"",
          "t": "6",
          "sv": "5+",
          "w": "4",
          "ld": "7+",
          "oc": "1",
          "name": "TRAITOR OGRYN",
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
        }
      ],
      "meleeWeapons": [
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Ogryn weapons",
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
        }
      ],
      "keywords": ["Infantry", "Chaos", "Grenades"],
      "factions": ["Heretic Astartes"],
      "leads": {
        "units": ["Traitor Guardsmen Squad"],
        "extra": ""
      }
    },
    {
      "id": "6bff0798-d546-575d-beb2-75d752372f8f",
      "name": "Traitor Guardsmen Squad",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Traitor Sergeant", "9 Traitor Guardsmen"],
      "loadout": "The Traitor Sergeant is equipped with: corrupted pistol; close combat weapon. Every Traitor Guardsman is equipped with: lasgun; close combat weapon.",
      "wargear": [
        "Up to 3 Traitor Guardsmen can each have their lasgun replaced with one of the following (to a maximum of 2 of each per unit): ◦ 1 Cultist grenade launcher ◦ 1 flamer ◦ 1 meltagun ◦ 1 plasma gun ◦ 1 Cultist sniper rifle",
        "The Traitor Sergeant’s close combat weapon can be replaced with one of the following: ◦ 1 chainsword ◦ 1 power weapon",
        "The Traitor Sergeant’s corrupted pistol can be replaced with 1 boltgun."
      ],
      "transport": "",
      "points": [
        {
          "models": "10",
          "cost": "70",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Twisted Defence Force",
            "description": "While this unit is within range of an objective marker, each time a ranged attack targets this unit, models in this unit have the Benefit of Cover against that attack.",
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
          "name": "Traitor Guardsmen Squad",
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
              "name": "Corrupted pistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Cultist grenade launcher – frag",
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
              "name": "Cultist grenade launcher – krak",
              "keywords": [],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "9",
              "ap": "2",
              "damage": "D3"
            }
          ]
        },
        {
          "active": true,
          "profiles": [
            {
              "active": true,
              "name": "Cultist sniper rifle",
              "keywords": ["heavy", "precision"],
              "range": "36\"",
              "attacks": "1",
              "skill": "4+",
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
      "keywords": ["Infantry", "Grenades", "Chaos", "Traitor Guardsmen Squad"],
      "factions": ["Heretic Astartes"],
      "leadBy": ["Renegade Enforcer", "Traitor Enforcer"]
    },
    {
      "id": "9bb81b71-c313-51bc-addf-437609998d97",
      "name": "Vashtorr The Arkifane",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Vashtorr the Arkifane – Epic Hero"],
      "loadout": "This model is equipped with: Vashtorr’s claw; Vashtorr’s hammer.",
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
        "core": ["Deadly Demise D3", "Deep Strike"],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Unholy Mechanisms (Aura)",
            "description": "While a friendly Daemon Vehicle unit is within 6\" of this model, add 1 to the Strength characteristic of weapons equipped by models in that unit.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Agonise Machine Spirits",
            "description": "At the end of your Movement phase, select one enemy Vehicle unit within 18\" of and visible to this model. Until the start of your next Movement phase, halve the Move characteristic of models in that unit and subtract 1 from the Attacks characteristic of melee weapons equipped by models in that unit.",
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
          "t": "9",
          "sv": "2+",
          "w": "14",
          "ld": "6+",
          "oc": "3",
          "name": "Vashtorr The Arkifane",
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
              "name": "Vashtorr’s claw",
              "keywords": ["torrent"],
              "range": "12\"",
              "attacks": "D6",
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
              "name": "Vashtorr’s hammer – strike",
              "keywords": ["anti-vehicle 4+", "devastating wounds"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "9",
              "ap": "-1",
              "damage": "3"
            },
            {
              "active": true,
              "name": "Vashtorr’s hammer – sweep",
              "keywords": ["anti-vehicle 4+"],
              "range": "Melee",
              "attacks": "14",
              "skill": "2+",
              "strength": "7",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Character",
        "Epic Hero",
        "Fly",
        "Chaos",
        "Daemon",
        "Vashtorr the Arkifane"
      ],
      "factions": ["Heretic Astartes"]
    },
    {
      "id": "60ba86eb-82a3-5e0d-b29f-ab0b09f0de67",
      "name": "Venomcrawler",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Venomcrawler"],
      "loadout": "This model is equipped with: 2 excruciator cannons; soulflayer tendrils and claws.",
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
        "core": ["Deadly Demise D3"],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Soul Eater",
            "description": "At the end of any phase, if one or more attacks made by this model that phase destroyed one or more enemy units, until the end of the battle, add 1 to the Attacks characteristic of this model’s weapons.",
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
          "w": "9",
          "ld": "6+",
          "oc": "3",
          "name": "Venomcrawler",
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
              "name": "Excruciator cannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "6",
              "skill": "3+",
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
              "name": "Soulflayer tendrils and claws",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "3+",
              "strength": "6",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Walker", "Chaos", "Daemon", "Venomcrawler"],
      "factions": ["Heretic Astartes"]
    },
    {
      "id": "03dd37e5-b1cc-573b-8660-3bf964254426",
      "name": "Warp Talons",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "",
      "composition": ["1 Warp Talon Champion", "4-9 Warp Talons"],
      "loadout": "Every model is equipped with: warp claws.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "130",
          "active": true
        },
        {
          "models": "10",
          "cost": "260",
          "active": true
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "",
          "showInvulnerableSave": true,
          "showInfo": false
        },
        "other": [
          {
            "name": "Warpflames",
            "description": "Each time an enemy unit within Engagement Range of this unit is selected to Fall Back, if that enemy unit is not Battle-shocked, your opponent must take Desperate Escape tests for each model in that unit before any are moved. If that enemy unit is Battle-shocked, until the end of the phase, each time a Desperate Escape test is taken for a model in that unit, subtract 1 from the result.",
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
          "sv": "3+",
          "w": "2",
          "ld": "6+",
          "oc": "1",
          "name": "Warp Talons",
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
              "name": "Warp claws",
              "keywords": ["twin-linked"],
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
        "Fly",
        "Jump Pack",
        "Chaos",
        "Daemon",
        "Warp Talons"
      ],
      "factions": ["Heretic Astartes"]
    },
    {
      "id": "cd95a873-3476-5389-9f71-5830888c2d11",
      "name": "Warpsmith",
      "source": "40k-10e",
      "faction_id": "CSM",
      "cardType": "DataCard",
      "leader": "This model can be attached to the following units: ■ Chosen ■ Havocs ■ Legionaries",
      "composition": ["1 Warpsmith"],
      "loadout": "This model is equipped with: flamer tendril; melta tendril; plasma pistol; exalted weapon.",
      "wargear": [
        "This model’s exalted weapon can be replaced with 1 warp hammer."
      ],
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
        "core": ["Leader"],
        "faction": ["Dark Pacts"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": "",
          "showInvulnerableSave": false,
          "showInfo": false
        },
        "other": [
          {
            "name": "Warpsmith",
            "description": "While this model is within 3\" of one or more friendly Heretic Astartes Vehicle units, this model has the Lone Operative ability.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Master of Mechanisms",
            "description": "In your Command phase, select one friendly Heretic Astartes Vehicle model within 3\" of this model. That Vehicle model regains up to D3 lost wounds and, until the start of your next Command phase, each time that Vehicle makes an attack, add 1 to the Hit roll. Each model can only be selected for this ability once per Command phase.",
            "showAbility": true,
            "showDescription": true
          },
          {
            "name": "Enrage Machine Spirits",
            "description": "At the end of your Movement phase, select one enemy Vehicle unit within 12\" of this model. That unit must take a Battle-shock test.",
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
          "sv": "2+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Warpsmith",
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
              "name": "Flamer tendril",
              "keywords": ["pistol", "torrent", "ignores cover"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
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
              "name": "Melta tendril",
              "keywords": ["pistol", "melta 2"],
              "range": "6\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "8",
              "ap": "-4",
              "damage": "D3"
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
              "skill": "2+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "active": true,
              "name": "Plasma pistol – supercharge",
              "keywords": ["pistol", "hazardous"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
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
              "name": "Exalted weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Warp hammer",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Chaos", "Warpsmith"],
      "factions": ["Heretic Astartes"],
      "leads": {
        "units": ["Chosen", "Havocs", "Legionaries"],
        "extra": ""
      }
    }
  ],
  "colours": {
    "banner": "#320b0d",
    "header": "#222a2f"
  }
}