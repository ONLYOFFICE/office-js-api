// Add an endnote and write bold text into its first paragraph in a document.

// How do I access the first paragraph of each endnote to add formatted text in a document?

// Populate endnote content by writing directly to each endnote's opening paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0); 
paragraph.AddText("This is just a sample text.");
doc.AddEndnote();
let endNotesFirstParagraphs = doc.GetEndNotesFirstParagraphs();
endNotesFirstParagraphs[0].AddText("Endnote 1");
endNotesFirstParagraphs[0].SetBold(true);