// Insert a cross-reference to an endnote into a paragraph in a document.

// How do I reference an endnote from within paragraph text in a document?

// Link a paragraph to a specific endnote so readers can locate supplementary notes by page number in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0); 
paragraph.AddText("This is just a sample text.");
doc.AddEndnote();
let endNotesFirstParagraphs = doc.GetEndNotesFirstParagraphs();
endNotesFirstParagraphs[0].AddText("Endnote 1");
paragraph = Api.CreateParagraph();
paragraph.AddText("For more information on previous sentences see endnote on page ");
doc.Push(paragraph);
paragraph.AddEndnoteCrossRef("pageNum", endNotesFirstParagraphs[0]);