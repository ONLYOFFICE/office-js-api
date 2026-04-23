// Apply text formatting to the numbering label of a list level in a document.

// How do I change the font and size of a list level's numbering label in a document?

// Style the numbering marker itself with bold and a custom typeface without affecting the paragraph text in a document.

let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("numbered");
let numLvl = numbering.GetLevel(0);
let textPr = numLvl.GetTextPr();
textPr.SetBold(true);
textPr.SetFontFamily("Calibri");
textPr.SetFontSize(28);
let paragraph = doc.GetElement(0);
paragraph.SetNumbering(numLvl);
paragraph.AddText("This is the first element of a numbered list which starts with '1'");
paragraph = Api.CreateParagraph();
paragraph.SetNumbering(numLvl);
paragraph.AddText("This is the second element of a numbered list which starts with '2'");
doc.Push(paragraph);