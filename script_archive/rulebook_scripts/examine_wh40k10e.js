
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
  'Combat_Patrol.rulebook',
  'Death_Guard.rulebook',
  'Drukhari.rulebook',
  'Emperor\'s_Children.rulebook',
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
  // for (const file of fileList) {
    try {
      let response = await fetch('../../Space_Marines.rulebook');// + file);
      let SM = await response.json();
      response = await fetch('../../Chaos_Space_Marines.rulebook');// + file);
      let CSM = await response.json();
      response = await fetch('../../Chaos.rulebook');// + file);
      let Chaos = await response.json();
      Chaos.revision = '10.12.1';

      let list = [
        'Kratos',
        'Deredeo Dreadnought',
        'Relic Contemptor Dreadnought',
        'Leviathan Dreadnought',
        'Land Raider Proteus',
        'Land Raider Achilles',
        'Sicaran Battle Tank',
        'Sicaran Venator',
        'Sicaran Punisher',
        'Rapier Carrier',
        'Whirlwind Scorpius',
        'Terrax-pattern Termite',
        'Xiphon Interceptor',
        'Storm Eagle Gunship',
        'Fire Raptor Gunship',
        'Typhon',
        'Cerberus',
        'Spartan',
        'Fellblade',
        'Falchion',
        'Mastodon',
        'Sokar-pattern Stormbird',
      ];
      let newData = {};
      Object.entries(SM.rulebook.assetCatalog).forEach(([itemKey, item]) => {
        let [itemClass, itemDesignation] = itemKey.split('§');
        // check whether itemDesignation includes any elements of list
        if (list.some(name => itemDesignation.includes(name))) {
          newData[itemKey] = item;
          item.assets?.traits.forEach(trait => {
            let traitKey = trait.item ?? trait;
            if(SM.rulebook.assetCatalog[traitKey]){
              newData[traitKey] = SM.rulebook.assetCatalog[traitKey];
            }
          });
          newData[itemKey].keywords = newData[itemKey].keywords || {};
          newData[itemKey].keywords.Tags = newData[itemKey].keywords.Tags || [];
          newData[itemKey].keywords.Tags.push('chaosShared');
        } else {
          // itemDesignation does not include any elements from the list
          // do something else
        }
      });
      Chaos.rulebook.assetCatalog = {...newData,...Chaos.rulebook.assetCatalog};
      list = [
        'Chaos Thunderhawk',
        'Greater Blight Drone',
        'Blood Slaughterer',
        'Greater Brass Scorpion',
        'Kytan Ravager',
        'Chaos Lord on Palanquin of Nurgle',
        'Gellerpox Infected',
        'Hell Blade',
        'Hell Talon',
        'Mutoid Vermin',
        'Sorcerer on Palanquin of Nurgle',
        'Chaos Lord on Disc of Tzeentch',
      ];
      newData = {};
      Object.entries(CSM.rulebook.assetCatalog).forEach(([itemKey, item]) => {
        let [itemClass, itemDesignation] = itemKey.split('§');
        // check whether itemDesignation includes any elements of list
        if (list.some(name => itemDesignation.includes(name))) {
          newData[itemKey] = item;
          delete CSM.rulebook.assetCatalog[itemKey];
          item.assets?.traits.forEach(trait => {
            let traitKey = trait.item ?? trait;
            if(CSM.rulebook.assetCatalog[traitKey]){
              newData[traitKey] = CSM.rulebook.assetCatalog[traitKey];
            }
          });
          newData[itemKey].keywords = newData[itemKey].keywords || {};
          newData[itemKey].keywords.Tags = newData[itemKey].keywords.Tags || [];
          newData[itemKey].keywords.Tags.push('chaosShared');
        } else {
          // itemDesignation does not include any elements from the list
          // do something else
        }
      });
      Chaos.rulebook.assetCatalog = {...newData,...Chaos.rulebook.assetCatalog};
      console.log(CSM);
      console.log(Chaos);
    } catch (error) {
      // Handle any error that occurs during loading
      console.error(error);
    }
  // }
}

processFiles();
