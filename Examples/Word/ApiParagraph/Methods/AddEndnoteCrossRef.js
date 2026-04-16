// Add an endnote cross-reference to the paragraph in a document.

// How to create an endnote reference to the paragraph in a document.

// Add a cross-reference to the endnote of the paragraph in a document.

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