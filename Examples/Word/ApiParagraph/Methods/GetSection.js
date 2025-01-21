// This example shows how to get the paragraph section.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("This is a new paragraph.");
let section = paragraph.GetSection();
section.SetPageSize(7200, 4320);