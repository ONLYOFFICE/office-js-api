// This example shows how to get the paragraph contents justification.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the text in it aligned by the center. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
paragraph.SetJc("center");
let jc = paragraph.GetJc();
paragraph = Api.CreateParagraph();
paragraph.AddText("Justification: " + jc);
doc.Push(paragraph);