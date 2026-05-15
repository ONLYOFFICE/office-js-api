// Show the file name of the current document inside the document itself.

// How do I display the full name of the open file in a document?

// Write the path and name of the currently open file into the first paragraph in a document.

let paragraph = Api.GetDocument().GetElement(0);
paragraph.AddText("File name: " + Api.GetFullName());