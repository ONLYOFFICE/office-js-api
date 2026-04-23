// Read the gap between the page bottom edge and the footer in a document.

// How do I find out how much space separates the footer from the page bottom in a document?

// Check the footer spacing to verify that the layout matches the intended design in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a page with a footer. ");
paragraph.AddText("Scroll down the page to see it.");
let section = doc.GetFinalSection();
let footer = section.GetFooter("default", true);
section.SetFooterDistance(1440);
paragraph = footer.GetElement(0);
paragraph.AddText("This is a page footer. ");
paragraph.AddText("The distance from the page bottom to the footer is 1 inch (" + section.GetFooterDistance() + " twentieths of a point).");