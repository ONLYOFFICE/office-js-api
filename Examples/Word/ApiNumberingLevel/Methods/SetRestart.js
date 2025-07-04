// This example specifies a one-based index which determines when a numbering level should restart to its starting value.

// How to restart the numbering.

// Reset the numbering of the bulleted text.

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
paragraph.SetNumbering(numLvl);
paragraph.AddText("This is the second element of a parent numbered list which starts with '2'");
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.SetNumbering(numLvl1);
paragraph.AddText("This is the third element of a child numbered list which starts with 'c'");
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.SetNumbering(numLvl1);
paragraph.AddText("This is the fourth element of a child numbered list which starts with 'd'");
doc.Push(paragraph);