// This example shows how to get current page index.

// How to know the order index of the current page.

// Get current page number.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText("The current page index is: " + doc.GetCurrentPage());
doc.Push(paragraph);
