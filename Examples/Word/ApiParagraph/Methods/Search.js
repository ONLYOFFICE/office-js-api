// Make search in paragraph in a document.

// How to find a word in the paragraph in a document.

// Make the search result word bold in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text. This text was added to the paragraph.");
let searchResults = paragraph.Search("text");
searchResults[0].SetBold(true);