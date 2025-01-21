// This example sets the paragraph first line indentation.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the indent of 1 inch set to the first line. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
paragraph.SetIndFirstLine(1440);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph without any indent set to the first line. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
doc.Push(paragraph);