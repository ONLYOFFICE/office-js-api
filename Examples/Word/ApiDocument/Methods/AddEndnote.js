// This example adds an for the document.
let document = Api.GetDocument();
let paragraph = document.GetElement(0); 
paragraph.AddText("This is just a sample text.");
document.AddEndnote();
let endNotesFirstParagraphs = document.GetEndNotesFirstParagraphs();
endNotesFirstParagraphs[0].AddText("Endnote 1");
endNotesFirstParagraphs[0].SetBold(true);