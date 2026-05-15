// Change the default font, size, and color for all text through a style in a document.

// How do I update the text appearance for the entire document using a style in a document?

// Adjust typeface, color, and size globally by modifying the shared text style in a document.

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