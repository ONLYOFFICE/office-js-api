// This example shows how to make search and replace.

// How to search for a specific word and replace it with another one.

// Search the first string and replace it with the second one.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the first sample text. The serial number of this sample text was replaced here.");
doc.SearchAndReplace({"searchString": "first", "replaceString": "second"});