// This example shows how to get a number of pages in the current document.

// How to count the number of pages in the document.

// Display the number of pages of the document.

let doc = Api.GetDocument();
let pageCount = doc.GetPageCount();
let paragraph = doc.GetElement(0);
paragraph.AddText("Number of pages: " + pageCount);