// Read the number assigned to the first page of a section in a document.

// How do I find out which page number a section begins on in a document?

// Check where a section's page numbering starts within a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let section = paragraph.GetSection();
section.SetStartPageNumber(5);
let startPageNumber = section.GetStartPageNumber();
paragraph.AddText("The start page number for this section is: " + startPageNumber);
let header = section.GetHeader("default", true);
paragraph = header.GetElement(0);
paragraph.AddText("Page #");
paragraph.AddPageNumber();
let footer = section.GetFooter("default", true);
paragraph = footer.GetElement(0);
paragraph.AddText("Page #");
paragraph.AddPageNumber();