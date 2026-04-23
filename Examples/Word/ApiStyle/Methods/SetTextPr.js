// Store font size and weight settings inside a style so all text using that style looks uniform in a document.

// How do I make every paragraph use the same font size and bold setting by updating a shared style in a document?

// Control the appearance of all body text at once by embedding character formatting in the default style in a document.

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