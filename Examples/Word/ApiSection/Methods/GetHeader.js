// Access the header area of a section in a document.

// How do I retrieve the header from a specific section in a document?

// Open the header region to add or inspect text that appears at the top of pages in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a page with a header. ");
paragraph.AddText("See it above.");
let section = doc.GetFinalSection();
let header = section.GetHeader("default", true);
paragraph = header.GetElement(0);
paragraph.AddText("This is a page header");