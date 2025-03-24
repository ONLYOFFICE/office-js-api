// This example shows how to get the first paragraphs from all endnotes in the document.

// How to get the first endnote paragraph, add text to it and make it bold.

// Retrieve all endnote first paragraph for further manipulation.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0); 
paragraph.AddText("This is just a sample text.");
doc.AddEndnote();
let endNotesFirstParagraphs = doc.GetEndNotesFirstParagraphs();
endNotesFirstParagraphs[0].AddText("Endnote 1");
endNotesFirstParagraphs[0].SetBold(true);