// This example adds a footnote cross-reference to the paragraph.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0); 
paragraph.AddText("This is just a sample text.");
doc.AddFootnote();
let footnotesFirstParagraphs = doc.GetFootnotesFirstParagraphs();
footnotesFirstParagraphs[0].AddText("Footnote 1");
paragraph = Api.CreateParagraph();
paragraph.AddText("For more information on previous sentences see footnote ");
doc.Push(paragraph);
paragraph.AddFootnoteCrossRef("formFootnoteNum", footnotesFirstParagraphs[0]);