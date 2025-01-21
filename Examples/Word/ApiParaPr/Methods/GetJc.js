// This example shows how to get the paragraph contents justification.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
let paraPr = paragraph.GetParaPr();
paragraph.AddText("This is a paragraph with the text in it aligned by the center. ");
paragraph.AddText("The justification is specified in the paragraph style. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
paraPr.SetJc("center");
let jc = paraPr.GetJc();
paragraph = Api.CreateParagraph();
paragraph.AddText("Justification: " + jc);
document.Push(paragraph);