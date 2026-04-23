// Retrieve the numbering properties of a bulleted paragraph in a document.

// How do I read the numbering settings assigned to a paragraph in a document?

// Confirm which list level is active by checking the class type of the numbering properties in a document.

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