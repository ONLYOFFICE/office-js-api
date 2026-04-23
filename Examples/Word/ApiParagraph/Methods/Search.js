// Search for a word inside a paragraph and bold the first match in a document.

// How do I find a specific word within a paragraph in a document?

// Highlight a search result by applying bold formatting to the found text in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text. This text was added to the paragraph.");
let searchResults = paragraph.Search("text");
searchResults[0].SetBold(true);