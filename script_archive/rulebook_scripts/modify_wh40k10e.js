
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
  'World_Eaters.rulebook',
  'Combat_Patrol.rulebook',
];
async function processFiles() {
  for (const file of fileList) {
    try {
      const response = await fetch('../../' + file);
      const data = await response.json();

      dataRevisionArr = data.revision.split('.');
      data.revision = dataRevisionArr[0] + '.' + dataRevisionArr[1] + '.' + (Number(dataRevisionArr[2]) + 1);
      // data.wip = true;

      let changeCount = 0;
      Object.entries(data.rulebook.assetCatalog).forEach(([itemKey, item]) => {
        let [classification, designation] = itemKey.split('§');
        item = data.rulebook.assetCatalog[itemKey];
        
        let modelCount = 0;
        ['traits','included'].forEach(division => {
          item.assets?.[division]?.forEach(asset => {
            if(typeof asset === 'string' && asset.includes('Model')){
              modelCount++
            }else if (typeof asset === 'object' && asset.item.includes('Model')){
              modelCount++
            }
          });
        });
        // console.log(itemDesignation + '(' + itemClass + ')' + ' ' + modelCount)
        if(
          (classification === 'Unit')
          && !modelCount && item.aspects?.Type !== 'game piece'
        ){
          item.aspects = item.aspects || {};
          item.aspects.Type = 'game piece';
          changeCount++;
        }
        // dedup keywords
        Object.keys(item.keywords || {}).forEach(keyCat => {
          let newKeys = Array.from(new Set(item.keywords[keyCat]));
          if(JSON.stringify(newKeys) !== JSON.stringify(item.keywords[keyCat])){
            changeCount++;
            item.keywords[keyCat] = newKeys
          }
        });
      });
      if(changeCount) console.log(data.name, data);
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