// Get the text properties of the current style in a document.

// How to update text properties in a document.

// Get the default style text properties of the paragraph in a document.

let doc = Api.GetDocument();
let normalStyle = doc.GetDefaultStyle("paragraph");
let textPr = normalStyle.GetTextPr();
textPr.SetColor(Api.HexColor('#262626'));
textPr.SetFontFamily("Calibri Light");
textPr.SetFontSize(32);
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the text color, font family and font size set using the text style. ");
paragraph.AddText("We do not change the style of the paragraph itself. ");
paragraph.AddText("Only document-wide text styles are applied.");