// This example shows how to make search in paragraph.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text. This text was added to the paragraph.");
let searchResults = paragraph.Search("text");
searchResults[0].SetBold(true);