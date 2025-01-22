// This example shows how to get a number of pages in the current document.
let doc = Api.GetDocument();
let pageCount = doc.GetPageCount();
let paragraph = doc.GetElement(0);
paragraph.AddText("Number of pages: " + pageCount);