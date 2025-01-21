// This example adds a footnote cross-reference to the paragraph.
let document = Api.GetDocument();
let paragraph = document.GetElement(0); 
paragraph.AddText("This is just a sample text.");
document.AddFootnote();
let footnotesFirstParagraphs = document.GetFootnotesFirstParagraphs();
footnotesFirstParagraphs[0].AddText("Footnote 1");
paragraph = Api.CreateParagraph();
paragraph.AddText("For more information on previous sentences see footnote ");
document.Push(paragraph);
paragraph.AddFootnoteCrossRef("formFootnoteNum", footnotesFirstParagraphs[0]);