// This example sets the footer distance and then reads it back.

// How to get footer distance of the section.

// Retrieve the current distance between the end of the page and the footer.

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