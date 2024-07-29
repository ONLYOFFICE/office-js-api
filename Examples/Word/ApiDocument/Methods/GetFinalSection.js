// This example shows how to get the document final section.
var oDocument = Api.GetDocument();
var oSection = oDocument.GetFinalSection();
var oHeader = oSection.GetHeader("default", true);
var oParagraph = oHeader.GetElement(0);
oParagraph.AddText("This is the text in the default header");
var oTextPr = oDocument.GetDefaultTextPr();
oTextPr.SetFontSize(22);
oTextPr.SetLanguage("en-US");
oTextPr.SetFontFamily("Calibri");
var oParaPr = oDocument.GetDefaultParaPr();
oParaPr.SetSpacingLine(276, "auto");
oParaPr.SetSpacingAfter(200);
oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a text in a paragraph.");