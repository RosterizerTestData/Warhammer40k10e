
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
  for (const file of fileList) {
    try {
      const response = await fetch('../../' + file);
      const data = await response.json();
      data.revision = '10.12.0';

      console.log('~~~ ' + file + ' ~~~');
      Object.entries(data.rulebook.assetCatalog).forEach(([itemKey, item]) => {
        let [itemClass, itemDesignation] = itemKey.split('§');
        Object.keys(item.stats || {}).forEach(statKey => {
          let stat = item.stats[statKey];
          if(typeof stat.value === 'string' && stat.value?.includes('D6')){
            // regex to determine what die modifier exists. i.e. D6+1 = 1 while 2D6 = 0
            let regex = /(\d*D\d)\+*(\d*)/g;
            let match = regex.exec(stat.value);
            let statFormat = match[1];
            let statNum = Number(match[2]) || 0;
            delete stat.statType;
            stat.value = statNum;
            stat.format = statFormat;
          }
        })
      });
      console.log(data);
    } catch (error) {
      // Handle any error that occurs during loading
      console.error(error);
    }
  }
}

processFiles();
