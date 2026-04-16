// Get a document name and insert it into the document.

// Return the first paragraph of the document and add the document full name to it.

// How to get the full name of the current document and add it to the paragraph.

// Return the full name of the currently opened file and write it to the first paragraph of the document.

let paragraph = Api.GetDocument().GetElement(0);
paragraph.AddText("File name: " + Api.GetFullName());