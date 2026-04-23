// Control how far the footer sits from the bottom edge of the page in a document.

// How do I set the gap between the page bottom and the footer area in a document?

// Adjust the spacing that separates the footer from the lower edge of a page in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a page with a footer. ");
paragraph.AddText("Scroll down the page to see it.");
let section = doc.GetFinalSection();
let footer = section.GetFooter("default", true);
section.SetFooterDistance(1440);
paragraph = footer.GetElement(0);
paragraph.AddText("This is a page footer. ");
paragraph.AddText("The distance from the page bottom to the footer is 1 inch (1440 twentieths of a point).");