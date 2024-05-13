
let titleCase = function(sentence){
  return sentence.replace(/^\s*(.*[^\s])*\s*$/,'$1').replace(/\s+/g,' ').toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ').replace(/ Of /g,' of ').replace(/ The /g,' the ').replace(/ With /g,' with ').replace(/ In /g,' in ').replace(/ On /g,' on ').replace(/ Of /g,' of ').replace(/ And /g,' and ')
}
const divisions = ['traits','included'];

// console.log(datasheets)
const fileList = [
  // 'Adepta_Sororitas',
  // 'Adeptus_Custodes',
  // 'Adeptus_Mechanicus',
  // 'Adeptus_Titanicus',
  // 'Aeldari-Drukhari-Common',
  // 'Aeldari',
  // 'Astra_Militarum',
  // 'Chaos_Daemons',
  // 'Chaos_Knights',
  // 'Chaos_Space_Marines',
  // 'Chaos',
  // 'Death_Guard',
  // 'Drukhari',
  // 'Genestealer_Cults',
  // 'Grey_Knights',
  // 'Imperial_Agents',
  // 'Imperial_Knights',
  // 'Imperium',
  // 'Leagues_of_Votann',
  // 'Necrons',
  // 'Orks',
  // 'SM_Black_Templars',
  // 'SM_Blood_Angels',
  // 'SM_Dark_Angels',
  // 'SM_Deathwatch',
  // 'SM_Space_Wolves',
  // 'Space_Marines',
  // 'drafts/T\'au_Empire',
  // 'Thousand_Sons',
  // 'Titanicus_Traitoris',
  // 'Tyranids',
  // 'Warhammer_40k_10e',
  // 'World_Eaters',
  'Combat_Patrol'
];
let ttsData;
let rulebookData;
fileList.forEach(file => {
  fetch('../../' + file + '.rulebook')
  .then(response => response.json())
  .then(data => {
    rulebookData = data;
    rulebookData.revision = '10.11.0'
    fetch('../tts/' + file + '.json')
    .then(response => response.json())
    .then(anotherData => {
      // Process the fetched data here
      ttsData = anotherData;

      Object.keys(rulebookData.rulebook.assetCatalog).forEach(itemKey => {
        let [classification, designation] = itemKey.split('§');
        // console.log(itemKey,isGamePiece(itemKey))
        let item = rulebookData.rulebook.assetCatalog[itemKey];
        if(isGamePiece(itemKey) && !item.meta?.ttsModelCode){
          let label = item.aspects?.Label || designation;
          // console.log(itemKey, label,item);
          let ttsObjects = ttsData.ObjectStates.filter(objectState => {
            // console.log(label,objectState.Nickname)
            return objectState.Nickname.toLowerCase().includes(label.toLowerCase());
          });
          // console.log(ttsObjects)
          let ttsObject = ttsObjects[0];
          if(ttsObject){
            item.meta = item.meta || {};
            item.meta.ttsModelCode = {...ttsObject}
            delete item.meta.ttsModelCode.GUID;
            delete item.meta.ttsModelCode.Nickname;
            delete item.meta.ttsModelCode.Description;
            delete item.meta.ttsModelCode.Tags;
            delete item.meta.ttsModelCode.States;
            delete item.meta.ttsModelCode.LuaScript;
            delete item.meta.ttsModelCode.LuaScriptState;
            delete item.meta.ttsModelCode.XmlUI;
            item.meta.ttsModelCode = JSON.stringify(item.meta.ttsModelCode);
            // if(ttsObject.Name.includes('Custom_Model')){
            //   if(ttsObject.CustomMesh.MeshURL) item.meta.ttsMeshURL = ttsObject.CustomMesh.MeshURL;
            //   if(ttsObject.CustomMesh.DiffuseURL) item.meta.ttsDiffuseURL = ttsObject.CustomMesh.DiffuseURL;
            //   if(ttsObject.CustomMesh.NormalURL) item.meta.ttsNormalURL = ttsObject.CustomMesh.NormalURL;
            //   if(ttsObject.CustomMesh.ColliderURL) item.meta.ttsColliderURL = ttsObject.CustomMesh.ColliderURL;
            // }else if(ttsObject.Name === 'Custom_Assetbundle'){
            //   if(ttsObject.CustomAssetbundle.AssetbundleURL) item.meta.ttsAssetbundleURL = ttsObject.CustomAssetbundle.AssetbundleURL;
            //   if(ttsObject.CustomAssetbundle.AssetbundleSecondaryURL) item.meta.ttsAssetbundleSecondaryURL = ttsObject.CustomAssetbundle.AssetbundleSecondaryURL;
            // }
            // if(ttsObject.States) item.meta.ttsStates = JSON.stringify(ttsObject.States);
            // if(ttsObject.ChildObjects) item.meta.ttsChildObjects = JSON.stringify(ttsObject.ChildObjects);
          }else{
            console.log("missing: ",itemKey)
            item.keywords = item.keywords || {};
            item.keywords.Tags = item.keywords.Tags || [];
            item.keywords.Tags.push('ttsModelMissing');
          }
        }
      });
      // console.log("objectsWithoutChildObjects",ttsData.ObjectStates.filter(objectState => !objectState.ChildObjects))
      // console.log("objectsWithStates",ttsData.ObjectStates.filter(objectState => objectState.States))
      console.log(rulebookData.name, rulebookData);


    })
    .catch(error => {
      console.error('Error fetching another file:', error);
    });
  
  })
  .catch(error => {
    // Handle any error that occurs during loading
    console.error(error);
  });
});

function isGamePiece(itemKey){
  let [classification, designation] = itemKey.split('§');
  let output = false;
  if(classification === 'Model'){
    output = true
  }else if(
    (
       (
          (['Character','Vehicle','Monster'].includes(classification) && !rulebookData.rulebook.assetCatalog[itemKey]?.assets?.traits?.map(trait => (trait.item ? trait.item : trait).split('§')[0]).includes('Model'))
       || (classification === 'Unit' && ['Vehicle','Vehicle—Dedicated Transport','Vehicle—Walker','Monster','Swarm'].some(cat => rulebookData.rulebook.assetCatalog[itemKey].keywords?.Category?.includes(cat)))
       )
    && rulebookData.rulebook.assetCatalog[itemKey]?.aspects?.Type !== 'conceptual'
    )
    || rulebookData.rulebook.assetCatalog[itemKey]?.aspects?.Type === 'game piece'
  ){
    output = true
  }
  // if(output) console.log(itemKey)
  return output
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