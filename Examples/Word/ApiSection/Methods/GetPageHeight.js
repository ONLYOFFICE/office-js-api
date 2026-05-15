// Read the height of the pages defined by a section in a document.

// How do I find out the page height for a section in a document?

// Retrieve the vertical page size to verify or display layout dimensions in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let section = doc.GetFinalSection();
let height = section.GetPageHeight();
paragraph.AddText("Page height = " + height);