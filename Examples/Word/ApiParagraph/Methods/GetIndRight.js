// This example shows how to get the paragraph right side indentation.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the right offset of 2 inches set to it. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
paragraph.SetJc("right");
paragraph.SetIndRight(2880);
let indRight = paragraph.GetIndRight();
paragraph = Api.CreateParagraph();
paragraph.AddText("Right indent: " + indRight);
doc.Push(paragraph);