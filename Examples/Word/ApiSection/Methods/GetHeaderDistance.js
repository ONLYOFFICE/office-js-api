// Read the gap between the page top edge and the header in a document.

// How do I find out how much space separates the header from the page top in a document?

// Check the header spacing to confirm that the layout matches the intended design in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a page with a header. ");
paragraph.AddText("Scroll up the page to see it.");
let section = doc.GetFinalSection();
let header = section.GetHeader("default", true);
section.SetHeaderDistance(1440);
paragraph = header.GetElement(0);
paragraph.AddText("This is a page header. ");
paragraph.AddText("The distance from the page top to the header is 1 inch (" + section.GetHeaderDistance() + " twentieths of a point).");