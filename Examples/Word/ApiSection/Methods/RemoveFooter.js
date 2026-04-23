// Delete the footer from a chosen section in a document.

// How do I remove the footer that appears at the bottom of a section in a document?

// Clear the bottom area of a section so no footer is shown in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This page first was with a footer. ");
paragraph.AddText("Scroll down the page to see if it was removed.");
let section = doc.CreateSection(paragraph);
let footer = section.GetFooter("default", true);
paragraph = footer.GetElement(0);
paragraph.AddText("This is page footer #1. ");
paragraph.AddText("You will not see it, as it will be removed.");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a page with a footer. ");
paragraph.AddText("Scroll down the page to see it.");
doc.Push(paragraph);
let section1 = doc.GetFinalSection();
footer = section1.GetFooter("default", true);
paragraph = footer.GetElement(0);
paragraph.AddText("This is page footer #2. ");
paragraph.AddText("Only this footer can be seen, as the first one has been removed.");
section.RemoveFooter("default");