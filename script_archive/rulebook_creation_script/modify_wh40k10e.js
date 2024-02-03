
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
  for (const file of fileList) {
    try {
      const response = await fetch('../../' + file);
      const data = await response.json();

      data.revision = '10.9.0';
      data.wip = true;

      Object.entries(data.rulebook.assetCatalog).forEach(([itemKey, item]) => {
        if(item.stats?.model1stTally){
          let allowedModels = item.allowed?.items?.filter(asset => asset.split('§')[0] === 'Model');
          if(allowedModels?.length > 0){
            if(allowedModels.length === 1){
              data.rulebook.assetCatalog[itemKey].stats.modelKey = {value: allowedModels[0]};
              data.rulebook.assetCatalog[itemKey].text = 'WARNING: This unit has been auto-converted and may need manual stats and/or rules to handle wargear options.\n\n' + (data.rulebook.assetCatalog[itemKey].text || '');
            }else{
              data.rulebook.assetCatalog[itemKey].text = 'ERROR: multiple models allowed; please update manually\n\n' + (data.rulebook.assetCatalog[itemKey].text || '');
            }
          }
          data.rulebook.assetCatalog[itemKey].stats.Models = {
            max: item.stats?.model4thTally?.value || item.stats?.model3rdTally?.value || item.stats?.model2ndTally?.value || item.stats?.model1stTally.value, 
            min: item.stats?.model1stTally.value, 
            value: item.stats?.model1stTally.value,
          }
          if(item.stats?.model2ndTally){
            data.rulebook.assetCatalog[itemKey].stats.Models.visibility = 'normal';
            data.rulebook.assetCatalog[itemKey].stats.Models.increment = {value: item.stats?.model2ndTally.value - item.stats?.model1stTally.value};
          }
        }
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