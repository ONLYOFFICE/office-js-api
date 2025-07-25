// This example shows how to get the level index.

// How to retrieve the index of the numbering level.

// Get the number of the level.

let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("numbered");
let numLvl = numbering.GetLevel(0);
let numLvl1 = numbering.GetLevel(1);
numLvl1.SetRestart(false);
let paragraph = doc.GetElement(0);
paragraph.SetNumbering(numLvl);
paragraph.AddText("This is the first element of a parent numbered list which starts with '1'");
paragraph = Api.CreateParagraph();
paragraph.SetNumbering(numLvl1);
paragraph.AddText("This is the first element of a child numbered list which starts with 'a'");
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.SetNumbering(numLvl1);
paragraph.AddText("This is the second element of a child numbered list which starts with 'b'");
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
let levelIndex = numLvl.GetLevelIndex();
paragraph.AddText("Level index for the parent numbered list = " + levelIndex);
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
levelIndex = numLvl1.GetLevelIndex();
paragraph.AddText("Level index for the element of a child numbered list  = " + levelIndex);
doc.Push(paragraph);