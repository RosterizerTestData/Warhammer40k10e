
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
console.log(datasheets)
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
    data.revision = '10.5.0';
    let classetList = Object.keys(data.manifest.assetCatalog);
    classetList.forEach(classet => {
      const [className,itemKey] = classet.split('§');
      // allow characters in units
      if(['Unit','Infantry/Mounted'].includes(className) && datasheets[itemKey]?.leadBy){
        datasheets[itemKey]?.leadBy.map(leadBy => titleCase(leadBy)).forEach(leadBy => {
          let leadByKey = Object.keys(data.manifest.assetCatalog).filter(classet => classet.split('§')[1] === leadBy)[0];
          if(!leadByKey) leadByKey = 'Character§' + leadBy;
          data.manifest.assetCatalog[classet].allowed = data.manifest.assetCatalog[classet].allowed || {};
          data.manifest.assetCatalog[classet].allowed.items = data.manifest.assetCatalog[classet].allowed.items || [];
          data.manifest.assetCatalog[classet].allowed.items.push(leadByKey);
        });
      }
      // create tracking tags for each unit
      if(['Unit','Infantry/Mounted','Character','Vehicle'].includes(className)){
        delete data.manifest.assetCatalog[classet].removed?.rules?.cheatUnitNameTally;
        delete data.manifest.assetCatalog[classet].removed?.rules?.['Too many of this unit type in the army.'];
        delete data.manifest.assetCatalog[classet].rules?.['Too many of this unit type in the army'];
        delete data.manifest.assetCatalog[classet].stats?.[className + ' ' + itemKey];
        data.manifest.assetCatalog[classet].keywords = data.manifest.assetCatalog[classet].keywords || {};
        data.manifest.assetCatalog[classet].keywords.Tags = data.manifest.assetCatalog[classet].keywords.Tags || [];
        data.manifest.assetCatalog[classet].keywords.Tags.push(className + ' ' + itemKey);
      }
      // fix extraeneous linebreaks in text
      data.manifest.assetCatalog[classet].text = data.manifest.assetCatalog[classet].text?.replace(/\n\n/g,'@@@@@@@').replace(/([0-9a-z,.])\n([a-zA-Z])/g, '$1 $2').replace(/@@@@@@@/g,'\n\n');
      // replace double quote with double prime
      data.manifest.assetCatalog[classet].text = data.manifest.assetCatalog[classet].text?.replace(/([0-9])\\"/g,'$1″');
      // fix multi-weapon profiles
      if(className === 'Weapon'){
        const weaponAsset = data.manifest.assetCatalog[classet];
        ['Ranged','Melee'].forEach(range => {
          let weaponRanges = weaponAsset.assets?.traits?.map(trait => {
            return trait.split(' Weapon§')[0];
          });
          if(weaponRanges?.every(wrange => wrange === range)){
            const newClasset = range + ' Weapon§' + itemKey;
            data.manifest.assetCatalog[newClasset] = weaponAsset;
            delete data.manifest.assetCatalog[classet];
            // recursively go through assetCatalog and replace all strings that match classet with newClasset
            data.manifest.assetCatalog = replaceStringsInObject(data.manifest.assetCatalog, classet, newClasset);
          }
        });
      }
    });
    console.log(data.name,data);
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