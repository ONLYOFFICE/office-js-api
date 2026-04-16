// Apply text settings to the specified style in a document.

// Create a paragraph, add a text to it, and set the font size and bold property to this text in a document.

// Specify the text properties object and apply its settings to the style object in a document.

let doc = Api.GetDocument();
let normalStyle = doc.GetDefaultStyle("paragraph");
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
normalStyle.SetTextPr(textPr);

let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the text color, font family and font size set using the text style. ");
paragraph.AddText("We do not change the style of the paragraph itself. ");
paragraph.AddText("Only document-wide text styles are applied.");