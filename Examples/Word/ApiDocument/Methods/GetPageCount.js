// This example shows how to get a number of pages in the current document.
let document = Api.GetDocument();
let pageCount = document.GetPageCount();
let paragraph = document.GetElement(0);
paragraph.AddText("Number of pages: " + pageCount);