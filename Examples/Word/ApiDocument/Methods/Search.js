// Make a search in a document.

// How to search all paragraph objects in a document.

// Search paragraphs and make the second one bold in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is paragraph №1.");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is paragraph №2.");
doc.Push(paragraph);
let searchResults = doc.Search("paragraph");
searchResults[1].SetBold(true);