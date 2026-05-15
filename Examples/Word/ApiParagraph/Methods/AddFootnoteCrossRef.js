// Insert a cross-reference to a footnote into a paragraph in a document.

// How do I reference a footnote from within paragraph text in a document?

// Point readers from body text to a specific footnote number so they can find source details in a document.

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