// This example shows how to get the page width.

// How to get the page width.

// Get the final section of the page and get its width.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let section = doc.GetFinalSection();
let width = section.GetPageWidth();
paragraph.AddText("Page width = " + width);