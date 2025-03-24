// This example creates two paragraphs. One with vertical aligment "subscript" and another one with vertical aligment "superscript".

// How to change a vertical alignment of a text run.

// Create a new text run and make it subscript, baseline or superscript.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the text aligned below the baseline vertically.");
paragraph.SetVertAlign("subscript");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph with the text aligned above the baseline vertically.");
paragraph.SetVertAlign("superscript");
doc.Push(paragraph);