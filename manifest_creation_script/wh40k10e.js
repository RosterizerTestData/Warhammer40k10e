
let formatText = (text) => {
  return text.replace(/"/g,'″').replace(/'/g,'’').replace(/■ /g,'\n* ').replace(/\.\.\./g,'…').replace(/\n/g,'\n\n');
}
let numberr = function(input){
  if(typeof input === 'number') return input
  let inputnum = Number(input);
  if(inputnum == input) return inputnum
  return null
}
let titleCase = function(sentence){
  return sentence.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
}

let datasheets = window.data.datasheets;
let manifest = {
  name: window.data.name,
  revision: '10.1.1',
  game: 'Warhammer 40k',
  genre: 'sci-fi',
  publisher: 'Games Workshop',
  url: 'https://warhammer40000.com',
  notes: 'This manifest is provided for the purposes of testing Rosterizer and is not intended for distribution.',
  wip: true,
  dependencies: [
    {
      slug: '123456',
      name: '40k10e',
      game: 'Warhammer 40,000'
    }
  ],
  manifest: {
    assetTaxonomy: {},
    assetCatalog: {
      'Roster§Army': {},
    },
    gameModes: {},
    theme: {}
  }
};
// console.log(datasheets);
datasheets.forEach((datasheet,i,a) => {
  console.log(datasheet.name)
  delete a[i].cardType;
  delete a[i].faction_id;
  delete a[i].id;
  delete a[i].source;

  // create blank unit
  let unitKey = 'Unit§'+(datasheet.name.replace(/^\s*(.*[^\s])*\s*$/,'$1'));
  let unit = manifest.manifest.assetCatalog[unitKey] = {};

  // create all abilities
  datasheet.abilities.core.forEach(ability => {
    manifest.manifest.assetCatalog['Ability§'+(ability.replace(/^\s*(.*[^\s])*\s*$/,'$1'))] = {
      keywords: {Keywords: ['Core']}
    }
  });
  datasheet.abilities.faction.forEach(ability => {
    manifest.manifest.assetCatalog['Ability§'+(ability.replace(/^\s*(.*[^\s])*\s*$/,'$1'))] = {
      keywords: {Keywords: ['Faction']}
    }
  });
  datasheet.abilities.primarch.forEach(ability => {
    manifest.manifest.assetCatalog['Ability§'+(ability.name.replace(/^\s*(.*[^\s])*\s*$/,'$1'))] = {
      text: formatText(ability.description),
      keywords: {Keywords: ['Primarch']}
    }
  });
  datasheet.abilities.other.forEach(ability => {
    manifest.manifest.assetCatalog['Ability§'+(ability.name.replace(/^\s*(.*[^\s])*\s*$/,'$1'))] = {
      text: formatText(ability.description),
      keywords: {Keywords: ['Other']}
    }
  });
  datasheet.abilities.special.forEach(ability => {
    manifest.manifest.assetCatalog['Ability§'+titleCase(ability.name.replace(/^\s*(.*[^\s])*\s*$/,'$1'))] = {
      text: formatText(ability.description),
      keywords: {Keywords: ['Special']}
    }
  });
  datasheet.abilities.wargear.forEach(ability => {
    manifest.manifest.assetCatalog['Wargear§'+(ability.name.replace(/^\s*(.*[^\s])*\s*$/,'$1'))] = {
      text: formatText(ability.description)
    }
  });
  // assign traits to units
  unit.assets = {}
  unit.assets.traits = [
    ...(datasheet.abilities.core.map(ability => 'Ability§'+ability) || []),
    ...(datasheet.abilities.faction.map(ability => 'Ability§'+ability) || []),
    ...(datasheet.abilities.primarch.map(ability => 'Ability§'+ability.name) || []),
    ...(datasheet.abilities.other.map(ability => 'Ability§'+ability.name) || []),
    ...(datasheet.abilities.special.map(ability => 'Ability§'+titleCase(ability.name)) || []),
    ...(datasheet.abilities.wargear.map(ability => 'Wargear§'+ability.name) || []),
  ]
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
        keyword: {value: datasheet.abilities.damaged.range.toLowerCase()}
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
    Source: ['10th Edition Index'],
    Keywords: datasheet.keywords,
  }
  if(unit.keywords.Keywords.includes('Epic Hero')) unit.aspects = {Unique: true};
  delete a[i].factions;
  delete a[i].keywords;

  // weapons
  let weaponList = [];
  [['ranged','Ranged','BS'],['melee','Melee','WS']].forEach(range => {
    datasheet[range[0] + 'Weapons'].forEach(weapon => {
      weapon.profiles.forEach(profile => {
        let weaponKey = range[1] + ' Weapon§'+(datasheet.name.replace(/^\s*(.*[^\s])*\s*$/,'$1'))+'—'+(profile.name.replace(/^\s*(.*[^\s])*\s*$/,'$1'));
        manifest.manifest.assetCatalog[weaponKey] = {
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
        Object.keys(manifest.manifest.assetCatalog[weaponKey].stats).forEach(statKey => {
          if(typeof manifest.manifest.assetCatalog[weaponKey].stats[statKey].value === 'string') manifest.manifest.assetCatalog[weaponKey].stats[statKey].statType = 'term';
        });
        if(weapon.profiles.length === 1){
          manifest.manifest.assetCatalog[weaponKey].stats.weaponName = {value: profile.name.replace(/^\s*(.*[^\s])*\s*$/,'$1')};
        }else{
          manifest.manifest.assetCatalog[weaponKey].stats.weaponName = {value: profile.name.replace(/^\s*(.*[^\s])*\s*$/,'$1').replace(/^.* – (.*)/,'$1')};
        }
        profile.keywords.forEach(keyword => {
          let abilityName = keyword;
          let abilityItemKey;
          let abilityItem = {};
          let abilityAsset;
          if(abilityName.toLowerCase().includes('anti-')){
            abilityItemKey = 'Ability§Anti-';
            abilityAsset = {
              item: abilityItemKey,
              stats: {
                keyword: {value: keyword.match(/anti-(.*) [0-9]\+/i)[1]},
                x: {value: keyword.match(/anti-.* ([0-9]\+)/i)[1]},
              }
            };
          }else if(new RegExp('[a-zA-z\s]* [0-9]').test(abilityName)){
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
          manifest.manifest.assetCatalog[weaponKey].assets = manifest.manifest.assetCatalog[weaponKey].assets || {};
          manifest.manifest.assetCatalog[weaponKey].assets.traits = manifest.manifest.assetCatalog[weaponKey].assets.traits || [];
          manifest.manifest.assetCatalog[weaponKey].assets.traits.push(abilityAsset);
          manifest.manifest.assetCatalog[abilityItemKey] = manifest.manifest.assetCatalog[abilityItemKey] || abilityItem;
        });
      });
      if(weapon.profiles.length === 1){
        weaponList.push(range[1] + ' Weapon§'+(datasheet.name.replace(/^\s*(.*[^\s])*\s*$/,'$1'))+'—'+(weapon.profiles[0].name.replace(/^\s*(.*[^\s])*\s*$/,'$1')))
      }else{
        let wargearKey = 'Wargear§'+(datasheet.name.replace(/^\s*(.*[^\s])*\s*$/,'$1'))+'—'+((weapon.profiles[0].name.replace(/^\s*(.*[^\s])*\s*$/,'$1')).replace(/^(.*) – .*/,'$1'));
        weaponList.push(wargearKey);
        manifest.manifest.assetCatalog[wargearKey] = {
          assets: {
            traits: weapon.profiles.map(profile => range[1] + ' Weapon§'+(datasheet.name.replace(/^\s*(.*[^\s])*\s*$/,'$1'))+'—'+(profile.name.replace(/^\s*(.*[^\s])*\s*$/,'$1')))
          },
          stats: {wargearName: {value: (weapon.profiles[0].name.replace(/^\s*(.*[^\s])*\s*$/,'$1')).replace(/^(.*) – .*/,'$1')}},
          keywords: {Tags: ['Multi-weapon']}
        }
      }
    });
    delete a[i][range[0] + 'Weapons'];
  });

  // determine model composition
  let comp = (datasheet.composition ? datasheet.composition.split('■ ').map(el => el.split(/ (.*)/)) : [['1',datasheet.name]]).filter(el => el[0]);
  comp.forEach((el,i,a) => {
    if(el.length === 1) a[i] = ['1',el[0]];
  });
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
      manifest.manifest.assetCatalog[modelItemKey] = modelObject;
      if(minQty){
        if(minQty == 1){
          if(!maxQty) unit.assets.traits.push(modelItemKey);
          else{
            unit.assets = unit.assets || {};
            unit.assets.included = unit.assets.included || [];
            unit.assets.included.push(modelItemKey);
          }
        }else{
          let modelAsset = minQty > 1 ? {item: modelItemKey,quantity: Number(minQty)} : modelItemKey;
          unit.assets.included = unit.assets.included || [];
          unit.assets.included.push(modelAsset);
        }
      }
      if(minQty != 1 || maxQty){
        unit.allowed = unit.allowed || {};
        unit.allowed.items = unit.allowed.items || [];
        unit.allowed.items.push(modelItemKey);
        unit.stats = unit.stats || {};
        console.log(modelItemKey)
        unit.stats[modelItemKey.split('§')[1]] = {
          statType: 'numeric',
          value: 0,
          visibility: 'hidden',
          tracked: true,
          min: minQty || 0,
        }
        if(maxQty) unit.stats[modelItemKey.split('§')[1]].max = maxQty;
      }
    })
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

  let simpleSheet = singleModelUnit;
  if(
    (
      datasheet.wargear.indexOf('■ None') === 0
      || datasheet.wargear.indexOf('■ All models') === 0
      || datasheet.wargear.indexOf('■ All of the models') === 0
      || datasheet.wargear.indexOf('■ This model') === 0
    )
    && datasheet.wargear.split('■ ').length === 2
    && (
      datasheet.loadout.indexOf('This model is equipped') === 0
      || datasheet.loadout.indexOf('Every model is equipped') === 0
    )
  ) simpleSheet = true;
  let simpleWargear = simpleSheet && datasheet.wargear.indexOf('■ None') === 0;
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
    unit.text = 'ERROR: this unit’s wargear couldn’t be automatically applied and requires custom work.\n\n' + datasheet.loadout + '\n\n' + datasheet.wargear + unit.text;
    if(sampleLoadout){
      if(singleModelUnit){
        unit.stats.sampleLoadout = sampleLoadout;
      }else{
        comp.forEach(modelType => {
          let modelName = modelType[1]?.replace(/^\s*(.*[^\s])*\s*$/,'$1');
          let modelItemKey = 'Model§'+modelName;
          if(modelName === undefined) console.log('@#%#$T^#$^%#$%^#$%^',datasheet.name)
          manifest.manifest.assetCatalog[modelItemKey].stats.sampleLoadout = sampleLoadout;
        });
      }
    }
  }else{
    if(singleModelUnit){
      let wargearList = datasheet.loadout.replace(/(.*)\.$/,'$1').replace(/.*is equipped with: (.*)/,'$1').split('; ');
      wargearList.forEach(wargearName => {
        let wargearIndex = weaponList.findIndex(weapon => weapon.toLowerCase().includes('—'+wargearName.toLowerCase()));
        if(wargearIndex >= 0) unit.assets.traits.push(weaponList[wargearIndex])
      });
    }
  }


  console.log(weaponList)
  console.log(comp,singleModelUnit,simpleSheet,simpleWargear)
  console.log(datasheet.loadout)
  console.log(datasheet.wargear)

  console.log(datasheet)
});
let set = new Set()
console.log(JSON.stringify(manifest).length,manifest)