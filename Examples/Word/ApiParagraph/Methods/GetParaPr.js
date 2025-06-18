// This example shows how to get the paragraph properties.

// How to set the spacing line, justification and other properties of the text.

// Create a paragraph, add its text and properties.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let paraStyle = doc.GetDefaultStyle("paragraph");
paragraph = doc.GetElement(0);
paragraph.SetStyle(paraStyle);
let paraPr = paragraph.GetParaPr();
paraPr.SetSpacingLine(480, "auto");
paraPr.SetJc("both");
paraPr.SetIndFirstLine(720);
paragraph.AddText("This is a paragraph with the line spacing, text justification and indent set using the paragraph style. ");
paragraph.AddText("We do not change the style of the paragraph itself. ");
paragraph.AddText("Only document-wide paragraph styles are applied.");