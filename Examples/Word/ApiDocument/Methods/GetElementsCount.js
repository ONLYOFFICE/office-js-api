// This example shows how to get a number of elements in the current document.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("Number of document elements at this point: ");
paragraph.AddTabStop();
paragraph.AddText("" + document.GetElementsCount());
paragraph = Api.CreateParagraph();
paragraph.AddText("Now we add one more paragraph and push it.");
document.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("Number of document elements after we added the second paragraph ");
paragraph.AddText("but before we push the third one: ");
paragraph.AddTabStop();
paragraph.AddText("" + document.GetElementsCount());
document.Push(paragraph);