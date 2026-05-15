// Search for all occurrences of a word and apply bold to one result in a document.

// How do I find every match of a string and format a specific result in a document?

// Collect search results by keyword and style the second match to highlight it in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is paragraph №1.");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is paragraph №2.");
doc.Push(paragraph);
let searchResults = doc.Search("paragraph");
searchResults[1].SetBold(true);