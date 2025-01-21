// This example creates two paragraphs. One with vertical aligment "subscript" and another one with vertical aligment "superscript".
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("This is a paragraph with the text aligned below the baseline vertically.");
paragraph.SetVertAlign("subscript");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph with the text aligned above the baseline vertically.");
paragraph.SetVertAlign("superscript");
document.Push(paragraph);