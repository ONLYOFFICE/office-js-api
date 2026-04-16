// Make search and replace in a document.

// How to search for a specific word and replace it with another one in a document.

// Search the first string and replace it with the second one in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the first sample text. The serial number of this sample text was replaced here.");
doc.SearchAndReplace({"searchString": "first", "replaceString": "second"});