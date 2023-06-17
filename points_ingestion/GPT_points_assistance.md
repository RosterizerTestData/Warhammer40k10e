If you give chatGPT the following prompt, it provides a fairly decent conversion of the points for a faction of 40k from the MFM:

> I'm going to paste in a series of data and I'd like it converted to TSV (tab-separated with an actual tab character: 	). I'd like it to be in this header form: designation,pts1,models1,pts2,models2 etc. (for as many columns as necessary), combining rows with matching designations into longer rows with as many column headers as necessary. For models and pts, omit the labels. Does that make sense?

input: text copied from https://www.warhammer-community.com/wp-content/uploads/2023/06/oF1iWIkNsvlUHByM.pdf

sample output for units:

```
designation,points1,models1,points2,models2,points3,models3
Barbgaunts,50,5,50,10,
Biovores,40,1,40,2,40,3
Broodlord,100,1,,,,,
```
etc

These values can be pasted into the 2nd column of the Input tab of [this google sheet](https://docs.google.com/spreadsheets/d/1WLlyLXVmjsMw41IsV67L948HZLkCtkILgyFHx39NQ6Q/edit#gid=0) (copy to your own account to avoid stomping on others). The first column of the Input sheet is for notes; the second is for the CSV export from Rosterizer. This is to ensure that no name changes result in extra units. The Output sheet is what should be saved out as a CSV to re-import into Rosterizer.

sample rosterizer CSV input for characters:

```
designation,stats§Points,stats§model1stTally,stats§model2ndCost,stats§model2ndTally,stats§model3rdCost
Broodlord,100,1,,,
Deathleaper,80,1,,,
Hive Tyrant,220,1,,,
```

Glance over your CSV for oddities before you import; some units have VERY odd pointing that's better done by hand; just remove those rows and make a note on the unit's text field if you can.

After importing, DO A THOROUGH QA CHECK... You can undo an import with the history menu (as long as your manifest isn't enormous), but you want to catch problems right away. Sometimes the names don't match perfectly; this will create a duplicate unit. Undo, correct the name in either place (ideally in Rosterizer but that can cause cascading problems if not careful) and try again.