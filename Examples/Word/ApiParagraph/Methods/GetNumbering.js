// This example shows how to get the numbering definition and numbering level for the numbered list.

// Get the numbering from the paragraph.

// How to get the numbering of the numbered text.

let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("numbered");
let numLvl = numbering.GetLevel(0);
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the first element of a numbered list");
paragraph.SetNumbering(numLvl);
paragraph.SetContextualSpacing(true);
let numbering1 = paragraph.GetNumbering();
numLvl = numbering.GetLevel(0);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is the second element of a numbered list");
paragraph.SetNumbering(numLvl);
paragraph.SetContextualSpacing(true);
doc.Push(paragraph);