// Count the total number of pages in a document.

// How do I find out how many pages a document has in a document?

// Insert the page count as readable text so readers see it at a glance in a document.

let doc = Api.GetDocument();
let pageCount = doc.GetPageCount();
let paragraph = doc.GetElement(0);
paragraph.AddText("Number of pages: " + pageCount);