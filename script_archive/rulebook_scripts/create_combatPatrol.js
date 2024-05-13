/*
script:
coherency fix
base size predictions
new tau patrol

bundled model weapon fix
Stratagem rules
combatpatrol ranked stat selection limiter rules
tts model nickname modifier meta field
tts model assignment script for full models
model exports
rosterizer model code process
rosterizer swapper defects
*/


let formatText = (text) => {
  return text?.replace(/"/g,'″').replace(/'/g,'’').replace(/■ /g,'\n* ').replace(/\.\.\./g,'…').replace(/\n/g,'\n\n');
}
let numberr = function(input){
  if(typeof input === 'number') return input
  let inputnum = Number(input);
  if(inputnum == input) return inputnum
  return null
}
let titleCase = function(sentence){
  return sentence.replace(/^\s*(.*[^\s])*\s*$/,'$1').replace(/\s+/g,' ').toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ').replace(/ Of /g,' of ').replace(/ The /g,' the ').replace(/ With /g,' with ').replace(/ In /g,' in ').replace(/ On /g,' on ')
}
const coreAbilityList = ['Damaged:','Deadly Demise','Deep Strike','Feel No Pain',
                        'Fights First','Firing Deck','Hover','Infiltrators',
                        'Invulnerable','Leader','Lone Operative','Scouts','Stealth',
                        'Transport','Anti-','Assault','Blast','Devastating Wounds',
                        'Extra Attacks','Hazardous','Heavy','Ignores Cover',
                        'Indirect Fire','Lance','Lethal Hits','Melta','One Shot',
                        'Pistol','Precision','Psychic','Rapid Fire','Sustained Hits',
                        'Torrent','Twin-linked',];

const fileList = [
  '../script_data/sudden_dawn_cadre.json',
];

let ranks = {
  "-": {order: 0}
};
let stratRules = {};
async function processFiles() {
  fileList.forEach(async(file,i) => {
    try {
      const response = await fetch(file);
      const data = await response.json();

      // console.log(JSON.parse(JSON.stringify(data.name)));
      let rulebook = {
        revision: '10.11.0',
        name: 'Combat Patrol',
        game: 'Warhammer 40k',
        genre: 'sci-fi',
        publisher: 'Games Workshop',
        url: 'https://warhammer40000.com',
        notes: 'This rulebook is provided for the purposes of testing Rosterizer and is not intended for distribution. Data load provided by Game-Datacards](http://www.game-datacards.eu/)',
        wip: true,
        dependencies: [
          {
            slug: '123456',
            name: '40k10e',
            game: 'Warhammer 40k',
            source: 'https://raw.githubusercontent.com/RosterizerTestData/Warhammer40k10e/main/Warhammer_40k_10e.rulebook'
          }
        ],
        rulebook: {
          assetTaxonomy: {},
          assetCatalog: {
          },
          gameModes: {},
          theme: {}
        }
      };
      let patrolName = data.detachments[0];
      let rank = {
        order: i + 1,
        traits: [],
      }
      let rule = {
        evals: [
          {
            paths: [
              [
                '{roster}',
                'stats',
                'Combat Patrol',
                'value'
              ]
            ],
            value: data.detachments[0],
            operator: 'AND',
            not: false,
            actionable: true
          }
        ],
        failState: 'pass',
        evaluate: 'AND',
        actions: [
        ]
      }
      data.stratagems.forEach((stratagem,i,a) => {
        let strat = {
          keywords: {
          }
        }
        if(stratagem.when.includes('Your')) strat.keywords.Turn = ['Yours'];
        else if(stratagem.when.includes('Opponent')) strat.keywords.Turn = ['Opponent’s'];
        else strat.keywords.Turn = ['Yours','Opponent’s'];
        strat.keywords.Category = [stratagem.type];
        strat.keywords.Phase = stratagem.phase;
        strat.keywords.Keywords = [...data.datasheets[0].factions,stratagem.detachment];

        strat.text = `WHEN: ${formatText(stratagem.when)}\n\nTARGET: ${formatText(stratagem.target)}\n\nEFFECT: ${formatText(stratagem.effect)}`;
        if(stratagem.restrictions) strat.text += `\n\nRESTRICTIONS: ${formatText(stratagem.restrictions)}`;

        if(stratagem.cost > 1) strat.stats = { 'Command Cost': { Value: stratagem.cost} };

        rulebook.rulebook.assetCatalog['Stratagem§' + stratagem.name] = strat;
        rule.actions.push(
          {
            paths: [  [    '{self}',    'traits'  ]],
            actionType: 'add',
            value: 'Stratagem§' + stratagem.name,
            iterations: 1
          })
        delete data.stratagems[i];
      });
      stratRules['strats' + data.detachments[0]] = rule;
      data.datasheets.forEach((datasheet,i,a) => {
        // console.log(datasheet.name)
        // console.log(JSON.parse(JSON.stringify(datasheet)))
        delete a[i].cardType;
        delete a[i].faction_id;
        delete a[i].id;
        delete a[i].source;

        // weapons
        let weaponList = [];
        [['ranged','Ranged','BS'],['melee','Melee','WS']].forEach(range => {
          datasheet[range[0] + 'Weapons'].forEach(weapon => {
            weapon.profiles.forEach(profile => {
              let weaponKey = range[1] + ' Weapon§'+titleCase(datasheet.name.replace(/'/g,'’').replace(/^\s*(.*[^\s])*\s*$/,'$1'))+'—'+(profile.name.replace(/^\s*(.*[^\s])*\s*$/,'$1'));
              rulebook.rulebook.assetCatalog[weaponKey] = {
                stats: {
                  Range: {
                    value: numberr(profile.range?.replace(/\"/g,'')) !== null ? numberr(profile.range?.replace(/\"/g,'')) : profile.range?.replace(/\"/g,'')
                  },
                  A: {
                    value: numberr(profile.attacks) !== null ? numberr(profile.attacks) : profile.attacks
                  },
                  [range[2]]: {
                    value: numberr(profile.skill?.replace(/\+/g,'')) !== null ? numberr(profile.skill?.replace(/\+/g,'')) : profile.skill?.replace(/\+/g,'')
                  },
                  S: {
                    value: numberr(profile.strength) !== null ? numberr(profile.strength) : profile.strength
                  },
                  AP: {
                    value: numberr(profile.ap) !== null ? numberr(profile.ap) : profile.ap
                  },
                  D: {
                    value: numberr(profile.damage) !== null ? numberr(profile.damage) : profile.damage
                  }
                },
              };
              Object.keys(rulebook.rulebook.assetCatalog[weaponKey].stats).forEach(statKey => {
                if(typeof rulebook.rulebook.assetCatalog[weaponKey].stats[statKey].value === 'string') rulebook.rulebook.assetCatalog[weaponKey].stats[statKey].statType = 'term';
              });
              if(weapon.profiles.length === 1){
                rulebook.rulebook.assetCatalog[weaponKey].aspects = {Label: profile.name.replace(/^\s*(.*[^\s])*\s*$/,'$1')};
              }else{
                rulebook.rulebook.assetCatalog[weaponKey].aspects = {Label: profile.name.replace(/^\s*(.*[^\s])*\s*$/,'$1').replace(/^.* – (.*)/,'$1')};
              }
              profile.keywords.forEach(keyword => {
                let abilityName = keyword;
                let abilityItemKey;
                let abilityItem = {};
                let abilityAsset;
                if(abilityName.toLowerCase().includes('anti-')){
                  abilityName = 'Anti-';
                  abilityItemKey = 'Ability§'+abilityName;
                  abilityAsset = {
                    item: abilityItemKey,
                    stats: {
                      keyword: {value: keyword.match(/anti-(.*) [0-9]\+/i)[1]},
                      x: {value: keyword.match(/anti-.* ([0-9]\+)/i)[1]},
                    }
                  };
                }else if(new RegExp('[a-zA-z\s]* [0-9]').test(abilityName)){
                  abilityName = abilityName.replace(/([a-zA-z\s]*) [0-9]/,'$1');
                  abilityItemKey = 'Ability§' + titleCase(keyword.match(/([a-zA-z\s]*) [0-9]/i)[1]);
                  abilityAsset = {
                    item: abilityItemKey,
                    stats: {
                      x: {value: keyword.match(/[a-zA-z\s]* ([0-9]+)/i)[1]},
                    }
                  };
                }else if(abilityName.includes('*')){
                  abilityItemKey = abilityAsset = 'Ability§'+titleCase(abilityName).replace('*','');
                  abilityItem = {keywords:{Tags:['non-USR']}};
                }else{
                  abilityItemKey = abilityAsset = 'Ability§' + titleCase(abilityName);
                }
                rulebook.rulebook.assetCatalog[weaponKey].assets = rulebook.rulebook.assetCatalog[weaponKey].assets || {};
                rulebook.rulebook.assetCatalog[weaponKey].assets.traits = rulebook.rulebook.assetCatalog[weaponKey].assets.traits || [];
                rulebook.rulebook.assetCatalog[weaponKey].assets.traits.push(abilityAsset);
                if(!coreAbilityList.includes(titleCase(abilityName))) rulebook.rulebook.assetCatalog[abilityItemKey] = rulebook.rulebook.assetCatalog[abilityItemKey] || abilityItem;
              });
            });
            if(weapon.profiles.length === 1){
              weaponList.push(range[1] + ' Weapon§'+titleCase(datasheet.name.replace(/'/g,'’').replace(/^\s*(.*[^\s])*\s*$/,'$1'))+'—'+(weapon.profiles[0].name.replace(/^\s*(.*[^\s])*\s*$/,'$1')))
            }else{
              let wargearKey = range[1] + ' Weapon§'+titleCase(datasheet.name.replace(/'/g,'’').replace(/^\s*(.*[^\s])*\s*$/,'$1'))+'—'+((weapon.profiles[0].name.replace(/^\s*(.*[^\s])*\s*$/,'$1')).replace(/^(.*) – .*/,'$1'));
              weaponList.push(wargearKey);
              rulebook.rulebook.assetCatalog[wargearKey] = {
                assets: {
                  traits: weapon.profiles.map(profile => range[1] + ' Weapon§'+titleCase(datasheet.name.replace(/'/g,'’').replace(/^\s*(.*[^\s])*\s*$/,'$1'))+'—'+(profile.name.replace(/^\s*(.*[^\s])*\s*$/,'$1')))
                },
                aspects: {Label: {value: (weapon.profiles[0].name.replace(/^\s*(.*[^\s])*\s*$/,'$1')).replace(/^(.*) – .*/,'$1')}},
              }
            }
          });
          delete a[i][range[0] + 'Weapons'];
        });

        if(datasheet.stats.length){

          // create blank unit
          let unitClass = 'Unit';
          if(datasheet.keywords.includes('Character')) unitClass = 'Character';
          if(datasheet.factions.includes('Adeptus Astartes')){
            if(datasheet.keywords.includes('Character')) unitClass = 'Character';
            else if(datasheet.keywords.includes('Infantry') || datasheet.keywords.includes('Mounted')) unitClass = 'Infantry/Mounted';
            else unitClass = 'Vehicle';
          }
          let unitKey = unitClass+'§'+data.detachments[0]+'—'+titleCase(datasheet.name.replace(/'/g,'’').replace(/^\s*(.*[^\s])*\s*$/,'$1'));
          rank.traits.push({trait: unitKey});
          let unit = rulebook.rulebook.assetCatalog[unitKey] = {
            aspects: {Label: {value: titleCase(datasheet.name.replace(/'/g,'’').replace(/^\s*(.*[^\s])*\s*$/,'$1'))}},
          };

          // create all abilities
          datasheet.abilities.core.forEach(ability => {
            let abilityDesignation = (ability.replace(/^\s*(.*[^\s])*\s*$/,'$1'));
            if(abilityDesignation.indexOf('Deadly Demise') === 0) abilityDesignation = 'Deadly Demise';
            if(abilityDesignation.indexOf('Feel No Pain') === 0) abilityDesignation = 'Feel No Pain';
            if(abilityDesignation.indexOf('Firing Deck') === 0) abilityDesignation = 'Firing Deck';
            if(abilityDesignation.indexOf('Scouts') === 0) abilityDesignation = 'Scouts';
            if(!coreAbilityList.includes(abilityDesignation)) rulebook.rulebook.assetCatalog['Ability§'+abilityDesignation] = {
              keywords: {Keywords: ['Core']}
            }
          });
          datasheet.abilities.faction.forEach(ability => {
            rulebook.rulebook.assetCatalog['Ability§'+titleCase(ability)] = {
              keywords: {Keywords: ['Faction']}
            }
          });
          datasheet.abilities.primarch.forEach(ability => {
            unit.text = 'ERROR: this unit had some special abilities related to “' + ability.name + '” that must be added to the appropriate ability: \n\n' + ability.abilities.map(prAb => '* ' + prAb.name).join('\n');
            ability.abilities.forEach(primarchAbility => {
              rulebook.rulebook.assetCatalog['Ability§'+primarchAbility.name] = {
                text: formatText(primarchAbility.description),
                keywords: {Keywords: ['Primarch',titleCase(ability.name)]}
              }
            });
          });
          datasheet.abilities.other.forEach(ability => {
            rulebook.rulebook.assetCatalog['Ability§'+titleCase(ability.name)] = {
              text: formatText(ability.description),
              keywords: {Keywords: ['Other']}
            }
          });
          datasheet.abilities.special.forEach(ability => {
            rulebook.rulebook.assetCatalog['Ability§'+titleCase(ability.name)] = {
              text: formatText(ability.description),
              keywords: {Keywords: ['Special']}
            }
          });
          if(Array.isArray(datasheet.abilities.wargear)){
            datasheet.abilities.wargear.forEach(ability => {
              let wargearKey = 'Wargear§'+titleCase(ability.name);
              weaponList.push(wargearKey);
              // console.log(wargearKey,weaponList);
              rulebook.rulebook.assetCatalog[wargearKey] = {
                text: formatText(ability.description)
              }
            });
          }
          // assign traits to units
          unit.assets = {}
          unit.assets.traits = [
            ...(datasheet.abilities.core.map(ability => {
              if(ability.indexOf('Deadly Demise') === 0){
                return {
                  item: 'Ability§Deadly Demise',
                  stats: {
                    x: {value: ability.match(/Deadly Demise (D*[0-9])/i)[1]},
                  }
                }
              }else if(ability.indexOf('Feel No Pain') === 0){
                return {
                  item: 'Ability§Feel No Pain',
                  stats: {
                    x: {value: ability.match(/Feel No Pain ([0-9]\+)/i)[1]},
                  }
                }
              }else if(ability.indexOf('Firing Deck') === 0){
                return {
                  item: 'Ability§Firing Deck',
                  stats: {
                    x: {value: ability.match(/Firing Deck ([0-9])/i)[1]},
                  }
                }
              }else if(ability.indexOf('Scouts') === 0){
                return {
                  item: 'Ability§Scouts',
                  stats: {
                    x: {value: ability.match(/Scouts ([0-9]″)/i)[1].replace(/\″/g,'″')},
                  }
                }
              }else return'Ability§'+titleCase(ability)
            }) || []),
            ...(datasheet.abilities.faction.map(ability => 'Ability§'+titleCase(ability)) || []),
            ...(datasheet.abilities.other.map(ability => 'Ability§'+titleCase(ability.name)) || []),
            ...(datasheet.abilities.special.map(ability => 'Ability§'+titleCase(ability.name)) || []),
          ];
          // console.log(datasheet.name,JSON.parse(JSON.stringify(unit.assets.traits)));
          if(Array.isArray(datasheet.abilities.wargear)){
            datasheet.abilities.wargear.forEach(ability => {
              let wargearKey = 'Wargear§'+titleCase(ability.name);
              weaponList.push(wargearKey);
              // console.log(wargearKey,weaponList);
            });
          }
          delete a[i].abilities.core;
          delete a[i].abilities.faction;
          delete a[i].abilities.primarch;
          delete a[i].abilities.other;
          delete a[i].abilities.wargear;
          delete a[i].abilities.special;
          // create damaged trait
          if(datasheet.abilities.damaged.range){
            unit.assets.traits.push({
              item: 'Ability§Damaged:',
              stats: {
                x: {value: datasheet.abilities.damaged.range.toLowerCase()}
              }
            })
          }
          // console.log(datasheet.name,JSON.parse(JSON.stringify(unit.assets.traits)));
          delete a[i].abilities.damaged;
          // create invulnerable save trait
          if(datasheet.abilities.invul.value){
            let trait = {
              item: 'Ability§Invulnerable',
              stats: {
                x: {value: datasheet.abilities.invul.value}
              }
            }
            if(datasheet.abilities.invul.info){
              trait.stats.keyword = {value: titleCase(datasheet.abilities.invul.info.replace(/.*save against (.*) attacks.*/,'$1'))};
            }
            unit.assets.traits.push(trait)
          }
          // console.log(datasheet.name,JSON.parse(JSON.stringify(unit.assets.traits)));
          delete a[i].abilities.invul;
          delete a[i].abilities;

          // create leader trait
          if(datasheet.leader){
            unit.assets = unit.assets || {};
            unit.assets.traits = unit.assets.traits || [];
            let leaderIndex = unit.assets.traits.findIndex(el => el === 'Ability§Leader' || el.item === 'Ability§Leader');
            leaderIndex = leaderIndex === -1 ? unit.assets.traits.length : leaderIndex;
            unit.assets.traits[leaderIndex] = {
              item: 'Ability§Leader',
              text: formatText(datasheet.leader.replace(/ ■/g,'\n\n*')),
            };
          }
          // console.log(datasheet.name,JSON.parse(JSON.stringify(unit.assets.traits)));
          delete a[i].leader;

          // create transport trait
          if(datasheet.transport){
            unit.assets = unit.assets || {};
            unit.assets.traits = unit.assets.traits || [];
            unit.assets.traits.push({
              item: 'Ability§Transport',
              text: formatText(datasheet.transport.replace(/ ■/g,'\n\n*')),
            });
          }
          // console.log(datasheet.name,JSON.parse(JSON.stringify(unit.assets.traits)));
          delete a[i].transport;

          // set keywords
          unit.keywords = {
            Faction: datasheet.factions,
            Source: ['10th Edition Combat Patrol'],
            Keywords: [...datasheet.keywords,datasheet.name],
          }
          if(unit.keywords.Keywords.includes('Epic Hero')) unit.aspects = {Unique: true};
          delete a[i].factions;
          delete a[i].keywords;


          function splitLoadout(input) {
            const regex = /^(\d+) (.+?):[\s]?(.+?)[\.]?[\s]?$/;
            const match = input.match(regex);
          
            if (match) {
              const quantity = match[1];
              const name = match[2].trim();
              const weapons = match[3].split(';').map(weapon => {
                weapon = weapon.trim();
                // if weapon doesn't start with a number, add 1
                if (!weapon.match(/^\d/)) weapon = '1 ' + weapon;
                // Extract the quantity and weapon name
                const weaponMatch = weapon.match(/^(\d+)\s(.+)$/);
                if (weaponMatch) {
                  const weaponQuantity = weaponMatch[1];
                  const weaponName = weaponMatch[2].charAt(0).toUpperCase() + weaponMatch[2].slice(1);
                  return [weaponQuantity, weaponName];
                }
                return null;
              }).filter(weapon => weapon !== null);
          
              return [quantity, name, weapons];
            }
            // console.log(input)
          
            return null;
          }
          // determine model composition
          // console.log(datasheet)
          // console.log(datasheet.composition)
          let loadout = datasheet.loadout
            .replace(/This model/,`1 ${datasheet.stats[0].name}`)
            .replace(/Every model/,`${datasheet.composition[0].replace(/[A-Za-z\s]+\(([0-9]+)+ model[^\s]?\)/g,'$1')} ${datasheet.stats[0].name.replace(/([A-Za-z\s])s?$/,'$1')}`)
            .replace(/ model/g,` ${datasheet.stats[0].name.replace(/([A-Za-z\s]+)s$/,'$1')}`)
            .replace(/This unit/g,'0 {unit}')
          // if the first character of loadout isn't a number, make it a 1
          if(!loadout.match(/^\d/)) loadout = '1 '+loadout
          let comp = loadout.split('\n■ ').map(load => splitLoadout(load));
          // console.log(datasheet.loadout)
          // console.log(loadout)
          // console.log(comp)
          delete a[i].composition;

          // determine stats for unit/model(s)
          let singleModelUnit = !comp.length || (comp.length === 1 && comp[0][0] == 1);
          if(!singleModelUnit){
            comp.forEach(modelType => {
              let [minQty,maxQty] = modelType[0].split('-').map(qty => Number(qty));
              let modelName = modelType[1]?.replace(/^\s*(.*[^\s])*\s*$/,'$1');
              let modelItemKey = 'Model§'+modelName;
              if(modelName === undefined) console.log('123456789@#%#$T^#$^%#$%^#$%^',datasheet.name)
              let statProfileIndex = datasheet.stats.findIndex(profile => profile.name.toLowerCase() === modelName?.toLowerCase());
              statProfileIndex = statProfileIndex < 0 ? 0 : statProfileIndex;
              let modelObject = {
                stats: {
                  M: {
                    value: numberr(datasheet.stats[statProfileIndex].m?.replace(/\"/g,'')) !== null ? numberr(datasheet.stats[statProfileIndex].m?.replace(/\"/g,'')) : datasheet.stats[statProfileIndex].m?.replace(/\"/g,'')
                  },
                  T: {
                    value: numberr(datasheet.stats[statProfileIndex].t) !== null ? numberr(datasheet.stats[statProfileIndex].t) : datasheet.stats[statProfileIndex].t
                  },
                  Sv: {
                    value: numberr(datasheet.stats[statProfileIndex].sv?.replace(/\+/g,'')) !== null ? numberr(datasheet.stats[statProfileIndex].sv?.replace(/\+/g,'')) : datasheet.stats[statProfileIndex].sv?.replace(/\+/g,'')
                  },
                  W: {
                    value: numberr(datasheet.stats[statProfileIndex].w) !== null ? numberr(datasheet.stats[statProfileIndex].w) : datasheet.stats[statProfileIndex].w
                  },
                  Ld: {
                    value: numberr(datasheet.stats[statProfileIndex].ld?.replace(/\+/g,'')) !== null ? numberr(datasheet.stats[statProfileIndex].ld?.replace(/\+/g,'')) : datasheet.stats[statProfileIndex].ld?.replace(/\+/g,'')
                  },
                  OC: {
                    value: numberr(datasheet.stats[statProfileIndex].oc) !== null ? numberr(datasheet.stats[statProfileIndex].oc) : datasheet.stats[statProfileIndex].oc
                  }
                }
              }
              rulebook.rulebook.assetCatalog[modelItemKey] = modelObject;

              let modelAsset = {
                item: modelItemKey,
              };
              if(modelType[0] > 1) modelAsset.quantity = modelType[0];
              modelType[2].forEach(loadoutItem => {
                for(let i = 0; i < loadoutItem[0]; i++){
                  modelAsset.assets = modelAsset.assets || {};
                  modelAsset.assets.traits = modelAsset.assets.traits || [];

                  // console.log(loadoutItem,weaponList,JSON.parse(JSON.stringify(rulebook.rulebook.assetCatalog)))
                  let loadoutIndex = weaponList.findIndex(weapon => weapon.toLowerCase().includes('—'+loadoutItem[1].toLowerCase()) || weapon.toLowerCase().includes('§'+loadoutItem[1].toLowerCase()));
                  if (loadoutIndex >= 0) {
                    modelAsset.assets.traits.push(weaponList[loadoutIndex]);
                  }else{
                    console.warn(`Wargear not found: ${loadoutItem[1]} for ${datasheet.name}`);
                  }
                };
              });

              // console.log(datasheet.name,JSON.parse(JSON.stringify(unit.assets.traits)));
              unit.assets.traits.push(modelAsset);
              // console.log(datasheet.name,JSON.parse(JSON.stringify(unit.assets.traits)));
              // if(typeof minQty === 'number' && !isNaN(minQty) && (minQty != 1 || maxQty)){
              //   // unit.allowed = unit.allowed || {};
              //   // unit.allowed.items = unit.allowed.items || [];
              //   // unit.allowed.items.push(modelItemKey);
              //   unit.stats = unit.stats || {};
              //   unit.stats[modelItemKey.split('§')[1]] = {
              //     statType: 'numeric',
              //     value: 0,
              //     visibility: 'hidden',
              //     tracked: true,
              //     min: minQty || 0,
              //   }
              //   if(maxQty || typeof minQty === 'number') unit.stats[modelItemKey.split('§')[1]].max = maxQty || minQty;
              // }
            });
          }else{
            // stats
            unit.stats = {
              M: {
                value: numberr(datasheet.stats[0].m?.replace(/\"/g,'')) !== null ? numberr(datasheet.stats[0].m?.replace(/\"/g,'')) : datasheet.stats[0].m?.replace(/\"/g,'')
              },
              T: {
                value: numberr(datasheet.stats[0].t) !== null ? numberr(datasheet.stats[0].t) : datasheet.stats[0].t
              },
              Sv: {
                value: numberr(datasheet.stats[0].sv?.replace(/\+/g,'')) !== null ? numberr(datasheet.stats[0].sv?.replace(/\+/g,'')) : datasheet.stats[0].sv?.replace(/\+/g,'')
              },
              W: {
                value: numberr(datasheet.stats[0].w) !== null ? numberr(datasheet.stats[0].w) : datasheet.stats[0].w
              },
              Ld: {
                value: numberr(datasheet.stats[0].ld?.replace(/\+/g,'')) !== null ? numberr(datasheet.stats[0].ld?.replace(/\+/g,'')) : datasheet.stats[0].ld?.replace(/\+/g,'')
              },
              OC: {
                value: numberr(datasheet.stats[0].oc) !== null ? numberr(datasheet.stats[0].oc) : datasheet.stats[0].oc
              }
            }
            Object.keys(unit.stats).forEach(statKey => {
              if(typeof unit.stats[statKey].value === 'string') unit.stats[statKey].statType = 'term';
            });
            comp[0][2].forEach(loadoutItem => {
              for(let i = 0; i < loadoutItem[0]; i++){
                unit.assets = unit.assets || {};
                unit.assets.traits = unit.assets.traits || [];

                // console.log(loadoutItem,weaponList)
                let loadoutIndex = weaponList.findIndex(weapon => weapon.toLowerCase().includes('—'+loadoutItem[1].toLowerCase()) || weapon.toLowerCase().includes('§'+loadoutItem[1].toLowerCase()));
                if (loadoutIndex >= 0) {
                  unit.assets.traits.push(weaponList[loadoutIndex]);
                }else{
                  console.warn(`Wargear not found: ${loadoutItem[1]} for ${datasheet.name}`);
                }
              };
            });
          }
          delete a[i].stats;

          // set points
          if(datasheet.points){
            datasheet.points.forEach((point,i) => {
              unit.stats = unit.stats || {};
              if(!i){
                unit.stats.Points = {
                  "value": Number(point.cost)
                }
                unit.stats.model1stTally = {
                  "value": Number(point.models)
                }
              }
              if(i === 1){
                unit.stats.model2ndCost = {
                  "value": Number(point.cost - datasheet.points[0].cost)
                }
                unit.stats.model2ndTally = {
                  "value": Number(point.models)
                }
              }
              if(i === 2){
                unit.stats.model3rdCost = {
                  "value": Number(point.cost - datasheet.points[1].cost)
                }
                unit.stats.model3rdTally = {
                  "value": Number(point.models)
                }
              }
            });
          }

          // let simpleSheet = singleModelUnit;
          // if(
          //   (
          //     datasheet.wargear[0]?.indexOf('None') === 0
          //     || datasheet.wargear[0]?.indexOf('All models') === 0
          //     || datasheet.wargear[0]?.indexOf('All of the models') === 0
          //     || datasheet.wargear[0]?.indexOf('This model') === 0
          //   )
          //   && (
          //     datasheet.loadout?.indexOf('This model is equipped') === 0
          //     || datasheet.loadout?.indexOf('Every model is equipped') === 0
          //   )
          // ) simpleSheet = true;
          // let simpleWargear = simpleSheet && (!datasheet.wargear || datasheet.wargear[0]?.indexOf('None') === 0);
          // console.log(datasheet.name,simpleSheet,simpleWargear,datasheet.wargear[0],comp)
          // let sampleLoadout = weaponList.length ? {
          //   statType: 'rank',
          //   value: weaponList[0].match(/.*—(.*)/)[1],
          //   ranks: {
          //   },
          //   group: 'Loadout',
          //   groupOrder: 2,
          //   visibility: 'active',
          //   dynamic: true
          // } : null;
          // weaponList.forEach((weaponKey,i) => {
          //   let weaponIndex = weaponKey.match(/.*—(.*)/)[1];
          //   if(sampleLoadout){
          //     sampleLoadout.ranks[weaponIndex] = {
          //       order: i,
          //       traits: [{trait: weaponKey}]
          //     }
          //   }
          // });
          // if(!simpleSheet || !simpleWargear){
          //   // console.log(datasheet.wargear)
          //   unit.text = 'ERROR: this unit’s wargear couldn’t be automatically applied and requires custom work.\n\n' + datasheet.loadout + '\n\n' + datasheet.wargear?.join('\n\n*') + (unit.text || '');
          //   if(sampleLoadout){
          //     if(singleModelUnit){
          //       unit.stats.sampleLoadout = sampleLoadout;
          //     }else{
          //       comp.forEach(modelType => {
          //         let modelName = modelType[1]?.replace(/^\s*(.*[^\s])*\s*$/,'$1');
          //         let modelItemKey = 'Model§'+modelName;
          //         if(modelName === undefined) console.log('@#%#$T^#$^%#$%^#$%^',datasheet.name)
          //         rulebook.rulebook.assetCatalog[modelItemKey].stats.sampleLoadout = sampleLoadout;
          //       });
          //     }
          //   }
          // }else{
          //   let wargearList = datasheet.loadout.replace(/(.*)\.$/,'$1').replace(/.*is equipped with: (.*)/,'$1').split('; ');
          //   wargearList.forEach(wargearName => {
          //     let wargearLower = wargearName.toLowerCase();
          //     let count = 1;
          //     if (!isNaN(wargearLower.charAt(0))) {
          //       // Multiple of the same weapon, assume single-digit number of them and final character is pluralisation
          //       count = parseInt(wargearLower.charAt(0), 10);
          //       wargearLower = wargearLower.substring(2, wargearLower.length - 1);
          //     }
          //     if (wargearIndex >= 0) {
          //       for (i = 0; i < count; i++) {
          //         if(singleModelUnit){
          //           unit.assets = unit.assets || {};
          //           unit.assets.traits = unit.assets.traits || [];
          //           unit.assets.traits.push(weaponList[wargearIndex]);
          //         }else{
          //           comp.forEach(modelType => {
          //             let modelName = modelType[1]?.replace(/^\s*(.*[^\s])*\s*$/,'$1');
          //             let modelItemKey = 'Model§'+modelName;
          //             if(modelName === undefined) console.log('@#%#$T^#$^%#$%^#$%^',datasheet.name)
          //             rulebook.rulebook.assetCatalog[modelItemKey].assets = rulebook.rulebook.assetCatalog[modelItemKey].assets || {};
          //             rulebook.rulebook.assetCatalog[modelItemKey].assets.traits = rulebook.rulebook.assetCatalog[modelItemKey].assets.traits || [];
          //             rulebook.rulebook.assetCatalog[modelItemKey].assets.traits.push(weaponList[wargearIndex]);
          //           });
          //         }
          //       }
          //     }
          //   });
          // }
        }


        // console.log(weaponList)
        // console.log(comp,singleModelUnit,simpleSheet,simpleWargear)
        // console.log(datasheet.loadout)
        // console.log(datasheet.wargear)

        // console.log(datasheet)
      });
      let primaryCharacter = titleCase(data.datasheets[0].name);
      data.datasheets.forEach(datasheet => {
        if(datasheet.leads){
          datasheet.leads.units.forEach(ledUnitName => {
            ledUnitName = titleCase(ledUnitName);
            // console.log(datasheet.name,ledUnitName,datasheet,rulebook.rulebook.assetCatalog)
            let ledUnit = rulebook.rulebook.assetCatalog['Unit§'+data.detachments[0]+'—'+ledUnitName] || rulebook.rulebook.assetCatalog['Infantry/Mounted§'+data.detachments[0]+'—'+ledUnitName];
            ledUnit.stats = ledUnit.stats || {};
            if(!ledUnit.stats.Leader){
              ledUnit.stats.Leader = {
                statType: "rank",
                value: '-',
                ranks: {
                  '-': {
                    order: 0,
                  },
                  [titleCase(datasheet.name)]: {
                    order: 1,
                    term: `Character§${titleCase(datasheet.name)}`
                  }
                },
                group: 'Loadout',
                groupOrder: 7,
                statOrder: 1,
                visibility: 'normal',
                dynamic: true
              };
            }else{
              rankLen = Object.keys(ledUnit.stats.Leader.ranks).length;
              ledUnit.stats.Leader.ranks[titleCase(datasheet.name)] = {
                order: rankLen,
                term: `Character§${titleCase(datasheet.name)}`
              };
            }
            ledUnit.text = ledUnit.text || '';
            ledUnit.text += '\n\nWARNING: This unit needs rules to apply its leaders.';
          });
        }
      });
      let firstEnhancement = titleCase(data.enhancements[0].name);
      let secondEnhancement = titleCase(data.enhancements[1].name);
      rulebook.rulebook.assetCatalog['Character§'+data.detachments[0]+'—' + primaryCharacter].stats = rulebook.rulebook.assetCatalog['Character§'+data.detachments[0]+'—' + primaryCharacter].stats || {}
      rulebook.rulebook.assetCatalog['Character§'+data.detachments[0]+'—' + primaryCharacter].stats.Enhancement = {
        statType: "rank",
        value: firstEnhancement,
        ranks: {
          [firstEnhancement]: {
            order: 0,
            traits: [
              {
                trait: `Enhancement§${firstEnhancement}`,
              }
            ]
          },
          [secondEnhancement]: {
            order: 1,
            traits: [
              {
                trait: `Enhancement§${secondEnhancement}`,
              }
            ]
          }
        },
        group: 'Loadout',
        groupOrder: 7,
        visibility: 'normal',
        dynamic: true
      }
      data.enhancements.forEach((enhancement,i,a) => {
        // console.log(enhancement.name)
        // console.log(JSON.parse(JSON.stringify(enhancement)))
        rulebook.rulebook.assetCatalog['Enhancement§' + enhancement.name] = {
          text: formatText(enhancement.description)
        }
        delete data.enhancements[i];
      });
      let cat = rulebook.rulebook.assetCatalog
      Object.keys(cat).forEach(itemKey => {
        if(cat[itemKey].assets?.traits?.includes('Ability§Patrol Squads')){
          cat[itemKey].stats = cat[itemKey].stats || {};
          cat[itemKey].stats.Split = {
            statType: "rank",
            value: '-',
            ranks: {
              '-': {
                order: 0,
              },
              '✓': {
                order: 1,
              }
            },
            group: 'Loadout',
            groupOrder: 7,
            visibility: 'normal',
            dynamic: true
          }
          cat[itemKey].text = cat[itemKey].text || '';
          cat[itemKey].text += '\n\nWARNING: This unit needs a rule to split it into two units by Patrol Squads.'
        }
      });
      ranks[patrolName] = rank;
      console.log(ranks);
      console.log(stratRules);
      console.log(data.name,JSON.stringify(rulebook).length,rulebook);
    } catch (error) {
      // Handle any error that occurs during loading
      console.error(error);
    }
  });
}

processFiles();
