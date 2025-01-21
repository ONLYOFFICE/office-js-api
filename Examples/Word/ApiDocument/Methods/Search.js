// This example shows how to make a search.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("This is paragraph №1.");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is paragraph №2.");
document.Push(paragraph);
let searchResults = document.Search("paragraph");
searchResults[1].SetBold(true);