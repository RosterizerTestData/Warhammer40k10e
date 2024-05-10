
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
      const response = await fetch('../../drafts/' + file);
      const data = await response.json();

      dataRevisionArr = data.revision.split('.');
      data.revision = dataRevisionArr[0] + '.' + dataRevisionArr[1] + '.' + (Number(dataRevisionArr[2]) + 1);
      // data.wip = true;

      let item;
      Object.entries(data.rulebook.assetCatalog).forEach(([itemKey, item]) => {
        item = data.rulebook.assetCatalog[itemKey];
        // if(item.stats?.Models && item.assets?.traits){
        //   // console.log(itemKey, item.assets?.traits, item.stats?.Models, item)
        //   let modelQty = Number(item.stats.Models.value);
        //   let existingModels = item.assets.traits?.filter(t => typeof t === 'object' ? t.item.includes('Model§') : t.includes('Model§')) || [];
        //   let existingModelQty = existingModels.reduce((a, b) => (a + (typeof b === 'object' ? (b.quantity || 1) : 1)), 0);
        //   let modelDelta = modelQty - existingModelQty;
        //   if(modelDelta && item.stats.modelKey){
        //     let modelKey = item.stats.modelKey.value;
        //     // console.log(existingModels, modelDelta, modelKey)
        //     item.assets.traits = item.assets.traits || [];
        //     item.assets.traits.push({
        //       "item": modelKey,
        //       "quantity": modelDelta,
        //     });
        //   }
        //   if(['Character'].includes(itemKey.split('§')[0])){
        //     delete item.stats.Models;
        //     delete item.stats.modelKey;
        //     if(item.allowed && item.allowed.items) item.allowed.items = item.allowed.items.filter(i => !i.includes('Model§'));
        //     if(item.allowed?.items?.length === 0) delete item.allowed.items;
        //     if(Object.keys(item.allowed || {}).length === 0) delete item.allowed;
        //   }
        // }
        // ['Infantry','Mounted','Battleline','Vehicle','Walker','Monster','Dedicated Transport','Fortification','Character','Epic Hero',].forEach(role => {
        //   if(item.keywords?.Keywords?.includes(role)){
        //     // console.log(itemKey,item)
        //     item.keywords.Role = [role];
        //   }
        // });
        let [itemClass, itemDesignation] = itemKey.split('§');
        if(['Infantry/Mounted','Vehicle','Monster'].includes(itemClass)){
          item.keywords.Tags = ['Unit ' + itemDesignation];
          data.rulebook.assetCatalog['Unit§' + itemDesignation] = item;
          delete data.rulebook.assetCatalog[itemKey];
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