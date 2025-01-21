// This example shows how to get the numbering definition and numbering level for the numbered list.
let document = Api.GetDocument();
let numbering = document.CreateNumbering("numbered");
let numLvl = numbering.GetLevel(0);
let paragraph = document.GetElement(0);
paragraph.AddText("This is the first element of a numbered list");
paragraph.SetNumbering(numLvl);
paragraph.SetContextualSpacing(true);
let numbering1 = paragraph.GetNumbering();
numLvl = numbering.GetLevel(0);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is the second element of a numbered list");
paragraph.SetNumbering(numLvl);
paragraph.SetContextualSpacing(true);
document.Push(paragraph);