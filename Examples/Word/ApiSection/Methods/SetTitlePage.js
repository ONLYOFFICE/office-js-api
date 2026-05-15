// Mark the first page of a section as a title page in a document.

// How do I give the first page of a section its own distinct header and footer in a document?

// Suppress the regular footer on the opening page of a section in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This page does not have a footer, as it is a title page. ");
paragraph.AddText("Scroll down the page to see if the footer was removed.");
let section = doc.CreateSection(paragraph);
section.SetTitlePage(true);
let footer = section.GetFooter("default", true);
paragraph = footer.GetElement(0);
paragraph.AddText("This is page footer. ");
paragraph.AddText("You will only see it for page #2.");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is page #2 and it has a footer. ");
paragraph.AddText("Scroll down the page to see it.");
doc.Push(paragraph);