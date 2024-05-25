


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
  '../script_data/emperors_children.json',
  '../script_data/unaligned.json',
];
async function processFiles() {
  for (const file of fileList) {
    try {
      const response = await fetch(file);
      const data = await response.json();

      let datasheets = data.datasheets;

      console.log(datasheets);
      let rulebook = {
        revision: '10.10.0',
        name: data.name,
        game: 'Warhammer 40k',
        genre: 'sci-fi',
        publisher: 'Games Workshop',
        url: 'https://warhammer40000.com',
        notes: 'This rulebook is provided for the purposes of testing Rosterizer and is not intended for distribution. Data load provided by [Game-Datacards](' + data.link + ')',
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
      datasheets.forEach((datasheet,i,a) => {
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
                      x: {value: keyword.match(/[a-zA-z\s]* ([0-9])/i)[1]},
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
                keywords: {Tags: ['Multi-weapon']}
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
          let unitKey = unitClass+'§'+titleCase(datasheet.name.replace(/'/g,'’').replace(/^\s*(.*[^\s])*\s*$/,'$1'));
          let unit = rulebook.rulebook.assetCatalog[unitKey] = {};

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
              rulebook.rulebook.assetCatalog['Wargear§'+titleCase(ability.name)] = {
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
                    x: {value: ability.match(/Scouts ([0-9]")/i)[1].replace(/\"/g,'″')},
                  }
                }
              }else return'Ability§'+titleCase(ability)
            }) || []),
            ...(datasheet.abilities.faction.map(ability => 'Ability§'+titleCase(ability)) || []),
            ...(datasheet.abilities.other.map(ability => 'Ability§'+titleCase(ability.name)) || []),
            ...(datasheet.abilities.special.map(ability => 'Ability§'+titleCase(ability.name)) || []),
          ];
          if(Array.isArray(datasheet.abilities.wargear)){
            unit.assets.traits.push(...(datasheet.abilities.wargear.map(ability => 'Wargear§'+titleCase(ability.name)) || []));
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
          delete a[i].transport;

          // set keywords
          unit.keywords = {
            Faction: datasheet.factions,
            Source: datasheet.legends ? ['Legends'] : ['10th Edition Index'],
            Keywords: datasheet.keywords,
          }
          if(unit.keywords.Keywords.includes('Epic Hero')) unit.aspects = {Unique: true};
          delete a[i].factions;
          delete a[i].keywords;


          // determine model composition
          // console.log(datasheet.composition)
          let comp = (datasheet.composition ? datasheet.composition.map(el => el.split(/ (.*)/)) : [['1',datasheet.name]]).filter(el => el[0]);
          comp.forEach((el,i,a) => {
            if(el.length === 1) a[i] = ['1',el[0]];
          });
          delete a[i].composition;
          let modelItemKey;

          // determine stats for unit/model(s)
          let singleModelUnit = !comp.length || (comp.length === 1 && comp[0][0] == 1);
          if(!singleModelUnit){
            comp.forEach(modelType => {
              let [minQty,maxQty] = modelType[0].split('-').map(qty => Number(qty));
              let modelName = modelType[1]?.replace(/^\s*(.*[^\s])*\s*$/,'$1');
              modelItemKey = 'Model§'+modelName;
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
              if(minQty){
                if(minQty == 1){
                  if(!maxQty) unit.assets.traits.push(modelItemKey);
                  else{
                    unit.assets = unit.assets || {};
                    unit.assets.traits = unit.assets.traits || [];
                    unit.assets.traits.push(modelItemKey);
                  }
                }else{
                  let modelAsset = minQty > 1 ? {item: modelItemKey,quantity: Number(minQty)} : modelItemKey;
                  unit.assets.traits = unit.assets.traits || [];
                  unit.assets.traits.push(modelAsset);
                }
              }
              if(typeof minQty === 'number' && !isNaN(minQty) && (minQty != 1 || maxQty)){
                unit.allowed = unit.allowed || {};
                unit.allowed.items = unit.allowed.items || [];
                unit.allowed.items.push(modelItemKey);
                unit.stats = unit.stats || {};
                unit.stats[modelItemKey.split('§')[1]] = {
                  statType: 'numeric',
                  value: 0,
                  visibility: 'hidden',
                  tracked: true,
                  min: minQty || 0,
                }
                if(maxQty || typeof minQty === 'number') unit.stats[modelItemKey.split('§')[1]].max = maxQty || minQty;
              }
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
                  "value": Number(point.cost)
                }
                unit.stats.model2ndTally = {
                  "value": Number(point.models)
                }
              }
              if(i === 2){
                unit.stats.model3rdCost = {
                  "value": Number(point.cost)
                }
                unit.stats.model3rdTally = {
                  "value": Number(point.models)
                }
              }
              if(i === 3){
                unit.stats.model4thCost = {
                  "value": Number(point.cost)
                }
                unit.stats.model4thTally = {
                  "value": Number(point.models)
                }
              }
            });
            if(unit.stats.model1stTally){
              unit.stats.Models = {
                "max": unit.stats.model4thTally?.value || unit.stats.model3rdTally?.value || unit.stats.model2ndTally?.value || unit.stats.model1stTally?.value,
                "min": unit.stats.model1stTally?.value,
                "value": unit.stats.model1stTally.value,
              }
              if(unit.stats.model2ndTally){
                unit.stats.Models.visibility = "normal";
                unit.stats.Models.increment = {
                  "value": unit.stats.model2ndTally.value - unit.stats.model1stTally.value
                }
              }
              unit.stats.modelKey = { value: modelItemKey };
            }
          }

          let simpleSheet = singleModelUnit;
          if(
            (
              datasheet.wargear[0]?.indexOf('None') === 0
              || datasheet.wargear[0]?.indexOf('All models') === 0
              || datasheet.wargear[0]?.indexOf('All of the models') === 0
              || datasheet.wargear[0]?.indexOf('This model') === 0
            )
            && (
              datasheet.loadout.indexOf('This model is equipped') === 0
              || datasheet.loadout.indexOf('Every model is equipped') === 0
            )
          ) simpleSheet = true;
          let simpleWargear = simpleSheet && (!datasheet.wargear || datasheet.wargear[0]?.indexOf('None') === 0);
          // console.log(datasheet.name,simpleSheet,simpleWargear,datasheet.wargear[0],comp)
          let sampleLoadout = weaponList.length ? {
            statType: 'rank',
            value: weaponList[0].match(/.*—(.*)/)[1],
            ranks: {
            },
            group: 'Loadout',
            groupOrder: 2,
            visibility: 'active',
            dynamic: true
          } : null;
          weaponList.forEach((weaponKey,i) => {
            let weaponIndex = weaponKey.match(/.*—(.*)/)[1];
            if(sampleLoadout){
              sampleLoadout.ranks[weaponIndex] = {
                order: i,
                traits: [{trait: weaponKey}]
              }
            }
          });
          if(!simpleSheet || !simpleWargear){
            // console.log(datasheet.wargear)
            unit.text = 'ERROR: this unit’s wargear requires custom work. Please make a request for this unit to be completed in [the discord](https://discord.gg/F8AxGVMpxP).\n\n' + datasheet.loadout + '\n\n' + datasheet.wargear?.join('\n\n*') + (unit.text || '');
            if(sampleLoadout){
              if(singleModelUnit){
                unit.stats.sampleLoadout = sampleLoadout;
              }else{
                comp.forEach(modelType => {
                  let modelName = modelType[1]?.replace(/^\s*(.*[^\s])*\s*$/,'$1');
                  modelItemKey = 'Model§'+modelName;
                  if(modelName === undefined) console.log('@#%#$T^#$^%#$%^#$%^',datasheet.name)
                  rulebook.rulebook.assetCatalog[modelItemKey].stats.sampleLoadout = sampleLoadout;
                });
              }
            }
          }else{
            let wargearList = datasheet.loadout.replace(/(.*)\.$/,'$1').replace(/.*is equipped with: (.*)/,'$1').split('; ');
            wargearList.forEach(wargearName => {
              let wargearLower = wargearName.toLowerCase();
              let count = 1;
              if (!isNaN(wargearLower.charAt(0))) {
                // Multiple of the same weapon, assume single-digit number of them and final character is pluralisation
                count = parseInt(wargearLower.charAt(0), 10);
                wargearLower = wargearLower.substring(2, wargearLower.length - 1);
              }
              let wargearIndex = weaponList.findIndex(weapon => weapon.toLowerCase().includes('—'+wargearLower));
              if (wargearIndex >= 0) {
                for (i = 0; i < count; i++) {
                  if(singleModelUnit){
                    unit.assets = unit.assets || {};
                    unit.assets.traits = unit.assets.traits || [];
                    unit.assets.traits.push(weaponList[wargearIndex]);
                  }else{
                    comp.forEach(modelType => {
                      let modelName = modelType[1]?.replace(/^\s*(.*[^\s])*\s*$/,'$1');
                      modelItemKey = 'Model§'+modelName;
                      if(modelName === undefined) console.log('@#%#$T^#$^%#$%^#$%^',datasheet.name)
                      rulebook.rulebook.assetCatalog[modelItemKey].assets = rulebook.rulebook.assetCatalog[modelItemKey].assets || {};
                      rulebook.rulebook.assetCatalog[modelItemKey].assets.traits = rulebook.rulebook.assetCatalog[modelItemKey].assets.traits || [];
                      rulebook.rulebook.assetCatalog[modelItemKey].assets.traits.push(weaponList[wargearIndex]);
                    });
                  }
                }
              }
            });
          }
        }


        // console.log(weaponList)
        // console.log(comp,singleModelUnit,simpleSheet,simpleWargear)
        // console.log(datasheet.loadout)
        // console.log(datasheet.wargear)

        // console.log(datasheet)
      });

    console.log(data.name,JSON.stringify(rulebook).length,rulebook);
    } catch (error) {
      // Handle any error that occurs during loading
      console.error(error);
    }
  }
}

processFiles();
