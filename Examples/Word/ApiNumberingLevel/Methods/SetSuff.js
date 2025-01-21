// This example specifies the content which will be added between the given numbering level text and the text of every numbered paragraph which references that numbering level.
let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("numbered");
let numLvl = numbering.GetLevel(0);
numLvl.SetCustomType("decimalZero", "repeating text %1", "left");
numLvl.SetSuff("space");
let paragraph = doc.GetElement(0);
paragraph.SetNumbering(numLvl);
paragraph.AddText("This is the first element of a numbered list using custom text with numbering");
paragraph = Api.CreateParagraph();
paragraph.SetNumbering(numLvl);
paragraph.AddText("This is the second element of a numbered list using custom text with numbering");
doc.Push(paragraph);