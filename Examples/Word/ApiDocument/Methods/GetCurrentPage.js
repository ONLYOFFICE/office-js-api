// Retrieve the index of the current page in a document.

// How do I find which page the cursor is on in a document?

// Useful when building navigation tools that need to report the user's current position in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText("The current page index is: " + doc.GetCurrentPage());
doc.Push(paragraph);