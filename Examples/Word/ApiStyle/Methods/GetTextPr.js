// This example shows how to get the text properties of the current style.

// How to update text properties.

// Get the default style text properties of the paragraph.

let doc = Api.GetDocument();
let normalStyle = doc.GetDefaultStyle("paragraph");
let textPr = normalStyle.GetTextPr();
textPr.SetColor(0x26, 0x26, 0x26, false);
textPr.SetFontFamily("Calibri Light");
textPr.SetFontSize(32);
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the text color, font family and font size set using the text style. ");
paragraph.AddText("We do not change the style of the paragraph itself. ");
paragraph.AddText("Only document-wide text styles are applied.");