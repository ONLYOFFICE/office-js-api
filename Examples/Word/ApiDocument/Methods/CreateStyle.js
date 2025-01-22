// This example creates a new style with the "Heading 1" type and "paragraph" name.
let doc = Api.GetDocument();
let heading1Style = doc.CreateStyle("Heading 1", "paragraph");
let paraPr = heading1Style.GetParaPr();
paraPr.SetKeepNext(true);
paraPr.SetKeepLines(true);
paraPr.SetSpacingAfter(240);
let textPr = heading1Style.GetTextPr();
textPr.SetColor(0xff, 0x68, 0x00, false);
textPr.SetFontSize(40);
textPr.SetFontFamily("Calibri Light");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(heading1Style);
paragraph.AddText("This is a heading with a style created above");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is just a text.");
doc.Push(paragraph);