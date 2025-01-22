// This example shows how to get the content for the specified header type.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("This is a page with a header. ");
paragraph.AddText("See it above.");
let section = document.GetFinalSection();
let header = section.GetHeader("default", true);
paragraph = header.GetElement(0);
paragraph.AddText("This is a page header");