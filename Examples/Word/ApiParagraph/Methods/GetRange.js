// This example shows how to get a Range object that represents the part of the document contained in the specified paragraph.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("This is just a sample paragraph.");
let range = paragraph.GetRange(8, 11);
range.SetBold(true);