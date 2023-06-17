If you give chatGPT the following prompt, it provides a fairly decent conversion of the points for a faction of 40k from the MFM:

> I'm going to paste in a series of data and I'd like it converted to CSV. I'd like it to be in this header form: designation,points1,models1,points2,models2 etc. (for as many columns as necessary), combining rows with matching designations into longer rows with as many column headers as necessary. Additionally, each points field after the first should evaluate to the difference between the input data's points and the previous points field. Does that make sense?

input: text copied from https://www.warhammer-community.com/wp-content/uploads/2023/06/oF1iWIkNsvlUHByM.pdf

sample output for units:

```
designation,points1,models1,points2,models2,points3,models3
Barbgaunts,50,5,50,10,
Biovores,40,1,80,2,120,3
Broodlord,100,1,,,,,
```
etc

These values can be pasted into the following template to import as a (unicode!) csv into the proper class in Rosterizer. Be sure to only import the entries that match your class: character or unit.

sample input for characters:

```
designation,stats§Points,stats§model1stTally,stats§model2ndCost,stats§model2ndTally,stats§model3rdCost
Broodlord,100,1,,,
Deathleaper,80,1,,,
Hive Tyrant,220,1,,,
```

Glance over your CSV for oddities before you import; some units have VERY odd pointing that's better done by hand; just remove those rows and make a note on the unit's text field if you can.

After importing, DO A THOROUGH QA CHECK... You can undo an import with the history menu (as long as your manifest isn't enormous), but you want to catch problems right away. Sometimes the names don't match perfectly; this will create a duplicate unit. Undo, correct the name in either place (ideally in Rosterizer but that can cause cascading problems if not careful) and try again.