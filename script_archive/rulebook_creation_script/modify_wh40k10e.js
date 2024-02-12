
let titleCase = function(sentence){
  return sentence.replace(/^\s*(.*[^\s])*\s*$/,'$1').replace(/\s+/g,' ').toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ').replace(/ Of /g,' of ').replace(/ The /g,' the ').replace(/ With /g,' with ').replace(/ In /g,' in ').replace(/ On /g,' on ').replace(/ Of /g,' of ').replace(/ And /g,' and ')
}
// const datasheets = {};
// Object.values(window.data).forEach(data => {
//   data.datasheets.forEach(sheet => {
//     if(!datasheets[titleCase(sheet.name)]) datasheets[titleCase(sheet.name)] = sheet;
//     else datasheets[sheet.faction_id + ' ' + titleCase(sheet.name)] = sheet
//   });
// });
// console.log(datasheets)
const fileList = [
  'Adepta_Sororitas.rulebook',
  'Adeptus_Custodes.rulebook',
  'Adeptus_Mechanicus.rulebook',
  'Adeptus_Titanicus.rulebook',
  'Aeldari-Drukhari-Common.rulebook',
  'Aeldari.rulebook',
  'Astra_Militarum.rulebook',
  'Chaos_Daemons.rulebook',
  'Chaos_Knights.rulebook',
  'Chaos_Space_Marines.rulebook',
  'Chaos.rulebook',
  'Death_Guard.rulebook',
  'Drukhari.rulebook',
  'Genestealer_Cults.rulebook',
  'Grey_Knights.rulebook',
  'Imperial_Agents.rulebook',
  'Imperial_Knights.rulebook',
  'Imperium.rulebook',
  'Leagues_of_Votann.rulebook',
  'Necrons.rulebook',
  'Orks.rulebook',
  'SM_Black_Templars.rulebook',
  'SM_Blood_Angels.rulebook',
  'SM_Dark_Angels.rulebook',
  'SM_Deathwatch.rulebook',
  'SM_Space_Wolves.rulebook',
  'Space_Marines.rulebook',
  'T\'au_Empire.rulebook',
  'Thousand_Sons.rulebook',
  'Titanicus_Traitoris.rulebook',
  'Tyranids.rulebook',
  'Warhammer_40k_10e.rulebook',
  'World_Eaters.rulebook'
];
async function processFiles() {
  const trimRulesPath = (path,ruleName) => {
    let newPath = path;
    if(Array.isArray(newPath)){
      newPath = [...path];
      if(newPath[1] === 'rules' && newPath[2] === ruleName) newPath.splice(0,3,'{this}');
    }
    return newPath
  }
  for (const file of fileList) {
    try {
      const response = await fetch('../../' + file);
      const data = await response.json();

      data.revision = '10.9.0';
      data.wip = true;

      Object.entries(data.rulebook.assetCatalog).forEach(([itemKey, item]) => {
        if(item.stats?.model1stTally){
          let allowedModels = item.allowed?.items?.filter(asset => asset.split('§')[0] === 'Model');
          let itemObj = data.rulebook.assetCatalog[itemKey]
          if(allowedModels?.length > 0){
            if(allowedModels.length === 1){
              itemObj.stats.modelKey = {value: allowedModels[0]};
              if(
                itemObj.assets?.included?.length === 1
                && (
                  itemObj.assets.included[0].item === allowedModels[0]
                  || itemObj.assets.included[0] === allowedModels[0]
                )
              ) delete itemObj.assets.included;
              let traitIdx = itemObj.assets?.traits?.findIndex(trait => trait === allowedModels[0] || trait.item === allowedModels[0]);
              if(traitIdx > -1) itemObj.assets?.traits.splice(traitIdx,1);
              itemObj.text = 'WARNING: This unit has been auto-converted and may need manual stats and/or rules to handle wargear options.\n\n' + (itemObj.text || '');
            }else{
              itemObj.text = 'WARNING: multiple models allowed; please update modelKey manually\n\n' + (itemObj.text || '');
            }
          }
          itemObj.stats.Models = {
            max: item.stats?.model4thTally?.value || item.stats?.model3rdTally?.value || item.stats?.model2ndTally?.value || item.stats?.model1stTally.value, 
            min: item.stats?.model1stTally.value, 
            value: item.stats?.model1stTally.value,
          }
          if(item.stats?.model2ndTally){
            itemObj.stats.Models.visibility = 'normal';
            itemObj.stats.Models.increment = {value: item.stats?.model2ndTally.value - item.stats?.model1stTally.value};
          }
        }
        Object.keys(item?.rules || {}).forEach((ruleName) => {
          let rule = item.rules[ruleName];
          if(ruleName.match(/[0-9] in [0-9]*.*/)){
            if(ruleName.match(/1 in [0-9]*.*/)) rule.evals.splice(0,1);
            if(ruleName.match(/2 in [0-9]*.*/)) rule.evals.splice(0,1);
            if(ruleName.match(/2 in [0-9]*.*/) && [2,5,10].includes(rule.evals[0].equation?.value)) rule.evals.splice(0,1);
            let test = rule.evals[0]?.max?.[2];
            switch (true) {
              case test?.includes('1 in 3'): rule.evals[0].max[2] = 'count1in3'; break;
              case test?.includes('1 in 4'): rule.evals[0].max[2] = 'count1in4'; break;
              case test?.includes('1 in 5'): rule.evals[0].max[2] = 'count1in5'; break;
              case test?.includes('1 in 10'): rule.evals[0].max[2] = 'count1in10'; break;
              case test?.includes('2 in 5'): 
                rule.evals[0].max[2] = 'count2in5';
                rule.evals[0].max[4] = '1';
                break;
              case test?.includes('2 in 10'): 
                rule.evals[0].max[2] = 'count2in10';
                rule.evals[0].max[4] = '1';
                break;
              default:
                break;
            }
          }
          ['evals', 'actions'].forEach((rulePhase) => {
            rule[rulePhase]?.forEach((phaseValue,i,a) => {
              ['max','min','value'].forEach(prop => {
                if(rule[rulePhase]?.[i]?.[prop]) rule[rulePhase][i][prop] = trimRulesPath(rule[rulePhase][i][prop],ruleName);
              });
              if(rule[rulePhase]?.[i]?.paths) rule[rulePhase][i].paths.forEach((path,j,b) => {
                rule[rulePhase][i].paths[j] = trimRulesPath(path,ruleName);
              });
            });
          })
        })
      });
      console.log(data.name, data);
    } catch (error) {
      // Handle any error that occurs during loading
      console.error(error);
    }
  }
}

processFiles();

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