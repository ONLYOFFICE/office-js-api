// This example shows how to get the numbering level of the current paragraph.

// Get the numbering level of the paragraph and display its class type in the document.

// How to get the numbering level of the ApiParaPr object.

let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("bullet");
let numLvl = numbering.GetLevel(0);
let paragraph = doc.GetElement(0);
paragraph.SetNumbering(numLvl);
paragraph.AddText("This is a bulleted paragraph.");
let paraPr = paragraph.GetParaPr();
let numPr = paraPr.GetNumPr();
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("Numbering class type: " + (numPr ? numPr.GetClassType() : "none"));
doc.Push(paragraph2);
