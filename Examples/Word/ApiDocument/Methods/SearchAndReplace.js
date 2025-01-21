// This example shows how to make search and replace.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("This is the first sample text. The serial number of this sample text was replaced here.");
document.SearchAndReplace({"searchString": "first", "replaceString": "second"});