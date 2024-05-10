
let titleCase = function(sentence){
  return sentence.replace(/^\s*(.*[^\s])*\s*$/,'$1').replace(/\s+/g,' ').toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ').replace(/ Of /g,' of ').replace(/ The /g,' the ').replace(/ With /g,' with ').replace(/ In /g,' in ').replace(/ On /g,' on ').replace(/ Of /g,' of ').replace(/ And /g,' and ')
}
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
  'drafts/T\'au_Empire.rulebook',
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

      console.log('~~~ ' + file + ' ~~~');
      Object.entries(data.rulebook.assetCatalog).forEach(([itemKey, item]) => {
        let [itemClass, itemDesignation] = itemKey.split('§');
        if(['Unit','Infantry/Mounted','Vehicle','Character','Titan'].includes(itemClass)){
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
          ['class','items'].forEach(type => {
            item.allowed?.[type]?.forEach(allowed => {
              if(allowed.includes('Model')){
                modelCount++
              }
            })
          })
          // console.log(itemDesignation + '(' + itemClass + ')' + ' ' + modelCount)
          if(['Unit','Infantry/Mounted'].includes(itemClass) && (!item.aspects?.Type || item.aspects?.Type === 'conceptual') && !modelCount){
            console.log(itemDesignation + '(' + itemClass + ')' + ' should be a game piece')
          }else if(['Character','Titan','Vehicle'].includes(itemClass) && (!item.aspects?.Type || item.aspects?.Type === 'game piece') && modelCount){
            console.log(itemDesignation + '(' + itemClass + ')' + ' should be conceptual')
          }
          if(['Character','Titan'].includes(itemClass) && item.aspects?.Type === 'conceptual') console.log(itemDesignation + '(' + itemClass + ')' + ' is conceptual')
        }
      });
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