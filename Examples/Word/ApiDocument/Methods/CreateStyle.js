// Define a custom paragraph style with a specific font, color, and spacing in a document.

// How do I create a reusable heading style and apply it to a paragraph in a document?

// Give a heading a unique color and size so it stands out visually from body text in a document.

let doc = Api.GetDocument();
let heading1Style = doc.CreateStyle("Heading 1", "paragraph");
let paraPr = heading1Style.GetParaPr();
paraPr.SetKeepNext(true);
paraPr.SetKeepLines(true);
paraPr.SetSpacingAfter(240);
let textPr = heading1Style.GetTextPr();
textPr.SetColor(Api.HexColor('#FF6800'));
textPr.SetFontSize(40);
textPr.SetFontFamily("Calibri Light");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(heading1Style);
paragraph.AddText("This is a heading with a style created above");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is just a text.");
doc.Push(paragraph);