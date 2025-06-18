// This example shows how to get a number of elements in the current document.

// How to get elements count and push it to the paragraph.

// Count the number of elements in the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Number of document elements at this point: ");
paragraph.AddTabStop();
paragraph.AddText("" + doc.GetElementsCount());
paragraph = Api.CreateParagraph();
paragraph.AddText("Now we add one more paragraph and push it.");
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("Number of document elements after we added the second paragraph ");
paragraph.AddText("but before we push the third one: ");
paragraph.AddTabStop();
paragraph.AddText("" + doc.GetElementsCount());
doc.Push(paragraph);