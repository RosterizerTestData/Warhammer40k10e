
let titleCase = function(sentence){
  return sentence.replace(/^\s*(.*[^\s])*\s*$/,'$1').replace(/\s+/g,' ').toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ').replace(/ Of /g,' of ').replace(/ The /g,' the ').replace(/ With /g,' with ').replace(/ In /g,' in ').replace(/ On /g,' on ').replace(/ Of /g,' of ').replace(/ And /g,' and ')
}
const divisions = ['traits','included'];

// console.log(datasheets)
const fileList = [
  // 'Adepta_Sororitas.rulebook',
  'Adeptus_Custodes.rulebook',
  // 'Adeptus_Mechanicus.rulebook',
  // 'Adeptus_Titanicus.rulebook',
  // 'Aeldari-Drukhari-Common.rulebook',
  // 'Aeldari.rulebook',
  // 'Astra_Militarum.rulebook',
  // 'Chaos_Daemons.rulebook',
  // 'Chaos_Knights.rulebook',
  // 'Chaos_Space_Marines.rulebook',
  // 'Chaos.rulebook',
  // 'Death_Guard.rulebook',
  // 'Drukhari.rulebook',
  // 'Genestealer_Cults.rulebook',
  // 'Grey_Knights.rulebook',
  // 'Imperial_Agents.rulebook',
  // 'Imperial_Knights.rulebook',
  // 'Imperium.rulebook',
  // 'Leagues_of_Votann.rulebook',
  // 'Necrons.rulebook',
  'Orks.rulebook',
  // 'SM_Black_Templars.rulebook',
  // 'SM_Blood_Angels.rulebook',
  // 'SM_Dark_Angels.rulebook',
  // 'SM_Deathwatch.rulebook',
  // 'SM_Space_Wolves.rulebook',
  // 'Space_Marines.rulebook',
  'drafts/T\'au_Empire.rulebook',
  // 'Thousand_Sons.rulebook',
  // 'Titanicus_Traitoris.rulebook',
  // 'Tyranids.rulebook',
  // 'Warhammer_40k_10e.rulebook',
  // 'World_Eaters.rulebook'
];
fileList.forEach(file => {
  fetch('../../' + file)
  .then(response => response.json())
  .then(data => {
    console.log(data.name, data)
    // check each: Unit, Infantry/Mounted for allowed includes that have the Ability prefix
    let newExport = {
      "id": "",
      "link": "https://game-datacards.eu",
      "name": data.name,
      "is_subfaction": !['40k10e','Chaos','Imperium'].includes(data.dependencies?.[0]?.name),
      "parent_id": "",
      "allied_factions": ["AoI", "QI"],
      "stratagems": [],
      "enhancements": [],
      "datasheets": [],
    }
    Object.keys(data.rulebook.assetCatalog).filter(key => key.split('§')[0] === 'Stratagem').forEach(key => {
      let strat = data.rulebook.assetCatalog[key];
      strat.text = strat.text.replace(/\*\*/g,'').split('\n\n').map(line => line.toLowerCase().split(': '));
      let newStrat = {
        "name": key.split('§')[1].toLocaleUpperCase(),
        "cost": strat.stats?.['Command Cost']?.value || 1,
        "type": strat.keywords.Category[0],
        "detachment": strat.keywords.Keywords[0],
        "turn": strat.keywords.Turn.join(', '),
        "phase": strat.keywords.Phase.join(', '),
        "fluff": "",
        "id": "27ec1914-0206-5e29-ae17-07aa7c7f3e5a"
      }
      strat.text.forEach(line => {
        newStrat[line[0]] = line[1];
      })
      newExport.stratagems.push(newStrat);
    });
    Object.keys(data.rulebook.assetCatalog).filter(key => key.split('§')[0] === 'Enhancement').forEach(key => {
      let enhance = data.rulebook.assetCatalog[key];
      // console.log(enhance)
      let newEnhance = 
      {
        "name": key.split('§')[1].toLocaleUpperCase(),
        "description": enhance.text,
        "keywords": ["Captain"],
        "detachment": enhance.keywords.Keywords[0],
        "excludes": [],
        "cost": enhance.stats?.Points?.value,
      }
      newExport.enhancements.push(newEnhance);
    });
    Object.keys(data.rulebook.assetCatalog).filter(key => ['Character', 'Unit', 'Infantry/Mounted', 'Vehicle'].includes(key.split('§')[0])).forEach(key => {
      let unit = data.rulebook.assetCatalog[key];
      // console.log(key.split('§')[1].toLocaleUpperCase(),unit)
      let newUnit = {
        "id": "",
        "name": key.split('§')[1],
        "source": unit.keywords.Source[0],
        "faction_id": "",
        "cardType": "DataCard",
        "loadout": "",
        "wargear": [],
        "points": [],
        "keywords": unit.keywords.Keywords,
        "factions": unit.keywords.Faction,
        "stats": [],
        "rangedWeapons": [],
        "meleeWeapons": [],
        "abilities": {
          "invul": {},
          "damaged": {
            "showDamagedAbility": false,
            "showDescription": true,
            "range": "",
            "description": ""
          },
          "faction": [],
          "core": [],
          "other": [],
          "primarch": [],
          "wargear": [],

          "special": [],
        },
      };
      let statlines = [];
      if(unit.stats?.M || unit.stats?.W){
        statlines.push([newUnit.name,unit.stats]);
      }
      if(['Character', 'Vehicle'].includes(key.split('§')[0])){
        newUnit.composition = ['1 ' + key.split('§')[1]];
        if(unit.keywords.Keywords.includes('Epic Hero')) newUnit.composition[0] += ' - Epic Hero';
        newUnit.points.push(
          {
            "models": "1",
            "cost": unit.stats.Points.value,
            "active": true
          }
        );
        let transport = unit.assets.traits.filter(trait => trait.item === 'Ability§Transport')[0];
        if(transport) newUnit.transport = transport.text;
      }else{
        let modelArr = [];
        if(unit.stats.model1stTally) modelArr.push([unit.stats.model1stTally.value,unit.stats.Points.value]);
        if(unit.stats.model2ndTally) modelArr.push([unit.stats.model2ndTally.value,unit.stats.model2ndCost.value]);
        if(unit.stats.model3rdTally) modelArr.push([unit.stats.model3rdTally.value,unit.stats.model3rdCost.value]);
        if(unit.stats.model4thTally) modelArr.push([unit.stats.model4thTally.value,unit.stats.model4thCost.value]);
        newUnit.points = modelArr.map(el => {
          return {
            "models": el[0],
            "cost": el[1],
            "active": true
          }
        })

        newUnit.composition = [];
        let totalModels = modelArr.slice(-1)[0]?.[0];
        divisions.forEach(division => {
          unit.assets?.[division]?.forEach(asset => {
            if(typeof asset === 'string'){
              assKey = asset.split('§');
              if(assKey[0] === 'Model'){
                statlines.push([assKey[1], data.rulebook.assetCatalog[asset].stats]);
                newUnit.composition.push('1 ' + assKey[1]);
                totalModels -= 1;
              }
            }else{
              assKey = asset.item.split('§');
              let qty = asset.quantity + (totalModels > asset.quantity ? '-'+totalModels : '');
              if(assKey[0] === 'Model'){
                statlines.push([assKey[1], data.rulebook.assetCatalog[asset.item].stats]);
                newUnit.composition.push(qty + ' ' + assKey[1]+(asset.quantity > 1 || totalModels > 1 ? 's' : ''));
              }
            }
          });
        });
        let characterList = unit.allowed?.items.filter(item => item.split('§')[0] === 'Character').map(item => item.split('§')[1]);
        if(characterList?.length) newUnit.ledBy = characterList;
      }
     
      // console.log(JSON.parse(JSON.stringify(statlines)))
      newUnit.stats = statlines.map((statline,i) => { return {
        "m": statline[1].M?.value + "″",
        "t": statline[1].T.value,
        "sv": statline[1].Sv.value + "+",
        "w": statline[1].W.value,
        "ld": statline[1].Ld.value + "+",
        "oc": statline[1].OC.value,
        "name": statline[0],
        "showDamagedMarker": !!unit.assets.traits.filter(trait => trait.item?.split('§')[1] === 'Damaged:').length,
        "showName": !!i,
        "active": true
      }});

      let leaderTrait = unit.assets.traits.filter(trait => trait.item === 'Ability§Leader')[0];
      if(leaderTrait){
        newUnit.leader = leaderTrait.text;
        let leadsArr = leaderTrait.text.replace(/\n\n/g,'\n').split('\n').map(line => line.replace('* ',''));
        newUnit.leads = {
          "units": leadsArr.filter((lead,i) => i),
          "extra": ""
        }
      }

      let weapons = Object.entries(data.rulebook.assetCatalog)
        .filter(([assetName,asset]) => {
          return (
            ['Ranged Weapon','Melee Weapon'].includes(assetName.split('§')[0]) &&
            assetName.split('§')[1].split('—')[0] === newUnit.name
          )
        });
      let rangedWeapons = weapons.filter(weapon => weapon[0].split('§')[0] === 'Ranged Weapon');
      let meleeWeapons = weapons.filter(weapon => weapon[0].split('§')[0] === 'Melee Weapon');
      weapons = {
        "rangedWeapons": rangedWeapons,
        "meleeWeapons": meleeWeapons
      };
      ['meleeWeapons','rangedWeapons'].forEach(weaponType => {
        let seenWeapons = [];
        weapons[weaponType]?.forEach(weapon => {
          let weaponName = weapon[0].split('§')[1];
          let profiles = []
          if(!seenWeapons.filter(seenWeapon => weaponName.includes(seenWeapon)).length){
            seenWeapons.push(weaponName);
            if(!weapon[1].assets?.traits?.filter(trait => (typeof trait === 'string' && trait.split('§')[0].includes('Weapon'))).length){
              profiles.push(weapon);
            }else{
              weapon[1].assets?.traits.forEach(trait => {
                profiles.push([trait, data.rulebook.assetCatalog[trait]]);
              })
            }
            newUnit[weaponType].push({
              "active": true,
              "profiles": profiles.map(profile => profileWeapon(profile[0],profile[1]))
            });
          }
        });
      });

      let unitAbilities = unit.assets.traits.filter(trait => {
        if (typeof trait === 'string') {
          return !trait.split('§')[0].includes('Weapon') && !trait.split('§')[0].includes('Model');
        } else if (trait.item) {
          return !trait.item.split('§')[0].includes('Weapon') && !trait.item.split('§')[0].includes('Model');
        } else {
          return true;
        }
      }).map(trait => {
        let object = data.rulebook.assetCatalog[trait] || {keywords:{Keywords:['Core']}}
        if(typeof trait === 'string'){
          return {...object,item: trait};
        }else{
          return {...object,...trait}
        }
      });
      let invIdx = unitAbilities.findIndex(trait => trait.item?.split('§')[1] === 'Invulnerable');
      if(invIdx >= 0){
        newUnit.abilities.invul = {
          "value": unitAbilities[invIdx].stats.x.value,
          "info": unitAbilities[invIdx].text || "",
          "showInvulnerableSave": true,
          "showInfo": false
        };
        unitAbilities.splice(invIdx,1);
      }
      let dmgIdx = unitAbilities.findIndex(trait => trait.item?.split('§')[1] === 'Damaged:');
      if(dmgIdx >= 0){
        newUnit.abilities.damaged = {
          "showDamagedAbility": true,
          "showDescription": true,
          "range": unitAbilities[dmgIdx].stats.x.value.split(' ')[0],
          "description": ""
        };
        unitAbilities.splice(dmgIdx,1);
      }
      // console.log(unitAbilities);
      let primIdx = unitAbilities.findIndex(trait => trait.keywords?.Keywords?.includes('Primarch'));
      if(primIdx >= 0){
        newUnit.abilities.primarch.push({
          "name": unitAbilities[primIdx].item.split('§')[1].toLocaleUpperCase(),
          "showAbility": true,
          "abilities": unitAbilities[primIdx].assets.traits.map(trait => {
            return {
              "name": trait.split('§')[1],
              "description": data.rulebook.assetCatalog[trait].text,
              "showAbility": true,
              "showDescription": true
            }
          })
        });
      }

      let wargearTraits = unitAbilities.filter(trait => trait.item.split('§')[0 === 'Wargear']);
      unitAbilities = unitAbilities.filter(trait => !trait.item.split('§')[0 === 'Wargear']);
      newUnit.abilities.wargear = wargearTraits.map(trait => { return {
        "name": trait.item.split('§')[1],
        "description": trait.text,
        "showAbility": true,
        "showDescription": true
      }});

      let factionTraits = unitAbilities.filter(trait => trait.keywords?.Keywords?.includes('Faction'));
      unitAbilities = unitAbilities.filter(trait => !trait.keywords?.Keywords?.includes('Faction'));
      newUnit.abilities.faction = factionTraits.map(trait => trait.item.split('§')[1]);
      
      let coreTraits = unitAbilities.filter(trait => trait.keywords?.Keywords?.includes('Core'));
      unitAbilities = unitAbilities.filter(trait => !trait.keywords?.Keywords?.includes('Core'));
      newUnit.abilities.core = coreTraits.map(trait => trait.item.split('§')[1]);
      
      let otherTraits = unitAbilities.filter(trait => trait.keywords?.Keywords?.includes('Other'));
      unitAbilities = unitAbilities.filter(trait => !trait.keywords?.Keywords?.includes('Other'));
      newUnit.abilities.other = otherTraits.map(trait => { return {
        "name": trait.item.split('§')[1],
        "description": trait.text,
        "showAbility": true,
        "showDescription": true
      }});

      newUnit.abilities.special = unitAbilities.map(trait => { return {
        "name": trait.item.split('§')[1],
        "description": trait.text,
        "showAbility": true,
        "showDescription": true
      }});


      newExport.datasheets.push(newUnit);
    });



    console.log(newExport)
  })
  .catch(error => {
    // Handle any error that occurs during loading
    console.error(error);
  });
});

function profileWeapon(weaponName,weaponAsset){
  return {
    "active": true,
    "name": weaponName.split('§')[1].split('—')[1],
    "keywords": weaponAsset.traits?.map(trait => trait.split('§')[1]) || [],
    "range": weaponAsset.stats.Range?.value + (weaponAsset.stats.Range?.value !== 'Melee' ? "″" : ""),
    "attacks": weaponAsset.stats.A.value,
    "skill": (weaponAsset.stats.BS?.value || weaponAsset.stats.WS?.value) + "+",
    "strength": weaponAsset.stats.S.value,
    "ap": weaponAsset.stats.AP.value,
    "damage": weaponAsset.stats.D.value,
  }
}

function replaceStringsInObject(obj, searchString, replaceString) {
  // Base case: if the object is a string, replace the search string with the replace string
  if (typeof obj === 'string' && obj === searchString) {
    return replaceString;
  }

  // Recursive case: if the object is an array or an object, iterate over its properties
  if (Array.isArray(obj)) {
    return obj.map(element => replaceStringsInObject(element, searchString, replaceString));
  }

  if (typeof obj === 'object' && obj !== null) {
    const newObj = {};
    for (let key in obj) {
      newObj[key] = replaceStringsInObject(obj[key], searchString, replaceString);
    }
    return newObj;
  }

  // If the object is neither a string, an array, nor an object, return it as is
  return obj;
}