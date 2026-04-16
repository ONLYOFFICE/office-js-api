// Get current page index in a document.

// How to know the order index of the current page.

// Get current page number using the document API in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText("The current page index is: " + doc.GetCurrentPage());
doc.Push(paragraph);