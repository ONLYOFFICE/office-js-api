// This example shows how to get the paragraph properties.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
let paraStyle = document.GetDefaultStyle("paragraph");
paragraph = document.GetElement(0);
paragraph.SetStyle(paraStyle);
let paraPr = paragraph.GetParaPr();
paraPr.SetSpacingLine(480, "auto");
paraPr.SetJc("both");
paraPr.SetIndFirstLine(720);
paragraph.AddText("This is a paragraph with the line spacing, text justification and indent set using the paragraph style. ");
paragraph.AddText("We do not change the style of the paragraph itself. ");
paragraph.AddText("Only document-wide paragraph styles are applied.");