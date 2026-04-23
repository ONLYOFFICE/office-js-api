// Position paragraph text above or below the normal line of writing in a document.

// How do I raise or lower the text of a paragraph relative to the baseline in a document?

// Distinguish scientific notation or footnote markers by shifting paragraph text vertically in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the text aligned below the baseline vertically.");
paragraph.SetVertAlign("subscript");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph with the text aligned above the baseline vertically.");
paragraph.SetVertAlign("superscript");
doc.Push(paragraph);