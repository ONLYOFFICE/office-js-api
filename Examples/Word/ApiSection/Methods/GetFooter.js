// This example shows how to get the content for the specified footer type.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("This is a page with a footer. ");
paragraph.AddText("Scroll down the page to see it.");
let section = document.GetFinalSection();
let footer = section.GetFooter("default", true);
paragraph = footer.GetElement(0);
paragraph.AddText("This is a page footer");