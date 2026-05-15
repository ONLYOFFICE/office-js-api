// Read the width of the pages defined by a section in a document.

// How do I find out the page width for a section in a document?

// Retrieve the horizontal page size to verify or display layout dimensions in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let section = doc.GetFinalSection();
let width = section.GetPageWidth();
paragraph.AddText("Page width = " + width);