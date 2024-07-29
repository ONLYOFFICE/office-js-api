// This example creates a new style with the "Heading 1" type and "paragraph" name.
var oDocument = Api.GetDocument();
var oHeading1Style = oDocument.CreateStyle("Heading 1", "paragraph");
var oParaPr = oHeading1Style.GetParaPr();
oParaPr.SetKeepNext(true);
oParaPr.SetKeepLines(true);
oParaPr.SetSpacingAfter(240);
var oTextPr = oHeading1Style.GetTextPr();
oTextPr.SetColor(0xff, 0x68, 0x00, false);
oTextPr.SetFontSize(40);
oTextPr.SetFontFamily("Calibri Light");
var oParagraph = oDocument.GetElement(0);
oParagraph.SetStyle(oHeading1Style);
oParagraph.AddText("This is a heading with a style created above");
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is just a text.");
oDocument.Push(oParagraph);