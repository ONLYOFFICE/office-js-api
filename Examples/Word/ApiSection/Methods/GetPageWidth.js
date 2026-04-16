// Get the page width in a document.

// How to get the page width.

// Get the final section of the page and get its width.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let section = doc.GetFinalSection();
let width = section.GetPageWidth();
paragraph.AddText("Page width = " + width);