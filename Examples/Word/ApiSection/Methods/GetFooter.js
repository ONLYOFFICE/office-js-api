// Access the footer area of a section in a document.

// How do I retrieve the footer from a specific section in a document?

// Read the footer content to add or inspect text at the bottom of pages in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a page with a footer. ");
paragraph.AddText("Scroll down the page to see it.");
let section = doc.GetFinalSection();
let footer = section.GetFooter("default", true);
paragraph = footer.GetElement(0);
paragraph.AddText("This is a page footer");