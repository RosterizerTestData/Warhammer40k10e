
let titleCase = function(sentence){
  return sentence.replace(/^\s*(.*[^\s])*\s*$/,'$1').replace(/\s+/g,' ').toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ').replace(/ Of /g,' of ').replace(/ The /g,' the ').replace(/ With /g,' with ').replace(/ In /g,' in ').replace(/ On /g,' on ').replace(/ Of /g,' of ').replace(/ And /g,' and ')
}
const datasheets = {};
Object.values(window.data).forEach(data => {
  data.datasheets.forEach(sheet => {
    if(!datasheets[titleCase(sheet.name)]) datasheets[titleCase(sheet.name)] = sheet;
    else datasheets[sheet.faction_id + ' ' + titleCase(sheet.name)] = sheet
  });
});
// console.log(datasheets)
const fileList = [
  'Adepta_Sororitas.manifest',
  'Adeptus_Custodes.manifest',
  'Adeptus_Mechanicus.manifest',
  'Adeptus_Titanicus.manifest',
  'Aeldari-Drukhari-Common.manifest',
  'Aeldari.manifest',
  'Astra_Militarum.manifest',
  'Chaos_Daemons.manifest',
  'Chaos_Knights.manifest',
  'Chaos_Space_Marines.manifest',
  'Chaos.manifest',
  'Death_Guard.manifest',
  'Drukhari.manifest',
  'Genestealer_Cults.manifest',
  'Grey_Knights.manifest',
  'Imperial_Agents.manifest',
  'Imperial_Knights.manifest',
  'Imperium.manifest',
  'Leagues_of_Votann.manifest',
  'Necrons.manifest',
  'Orks.manifest',
  'SM_Black_Templars.manifest',
  'SM_Blood_Angels.manifest',
  'SM_Dark_Angels.manifest',
  'SM_Deathwatch.manifest',
  'SM_Space_Wolves.manifest',
  'Space_Marines.manifest',
  'T\'au_Empire.manifest',
  'Thousand_Sons.manifest',
  'Titanicus_Traitoris.manifest',
  'Tyranids.manifest',
  'Warhammer_40k_10e.manifest',
  'World_Eaters.manifest'
];
fileList.forEach(file => {
  fetch('../../' + file)
  .then(response => response.json())
  .then(data => {
    console.log(data.name)
    // check each: weapon, ranged weapon, and melee weapon in assetCatalog.
    // verify that each weapon with sub-trait weapons has a tag that denotes it as a multi-weapon
    // display the weapon's weaponName stat, then each sub-weapon's weaponName stat.
    Object.keys(data.manifest.assetCatalog).forEach(assetKey => {
      // if the assetKey is a weapon with sub-trait weapoons, then: log the weapon's weaponName stat
      if(['Weapon', 'Ranged Weapon', 'Melee Weapon'].includes(assetKey.split('§')[0])){
        if(data.manifest.assetCatalog[assetKey].assets?.traits?.filter(trait => typeof trait === 'string' && ['Weapon', 'Ranged Weapon', 'Melee Weapon'].includes(trait?.split('§')[0]))?.length){
          console.log('  ',data.manifest.assetCatalog[assetKey].stats?.weaponName.value,' : ',assetKey);
          data.manifest.assetCatalog[assetKey].assets?.traits?.forEach(traitKey => {
            console.log('    ',data.manifest.assetCatalog[traitKey]?.stats?.weaponName.value)
          })
        }
      }
    })
  })
  .catch(error => {
    // Handle any error that occurs during loading
    console.error(error);
  });
})

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