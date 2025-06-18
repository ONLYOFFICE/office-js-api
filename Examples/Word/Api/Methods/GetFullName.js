// This example gets a document name and inserts it into the document.

// Returns the first paragraph of the document and adds the document full name to it.

// How to get the full name of the current document and add it to the paragraph.

// Returns the full name of the currently opened file and write it to the first paragraph of the document.

let paragraph = Api.GetDocument().GetElement(0);
paragraph.AddText("File name: " + Api.GetFullName());