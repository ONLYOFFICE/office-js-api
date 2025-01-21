// This example adds an endnote cross-reference to the paragraph.
let document = Api.GetDocument();
let paragraph = document.GetElement(0); 
paragraph.AddText("This is just a sample text.");
document.AddEndnote();
let endNotesFirstParagraphs = document.GetEndNotesFirstParagraphs();
endNotesFirstParagraphs[0].AddText("Endnote 1");
paragraph = Api.CreateParagraph();
paragraph.AddText("For more information on previous sentences see endnote on page ");
document.Push(paragraph);
paragraph.AddEndnoteCrossRef("pageNum", endNotesFirstParagraphs[0]);