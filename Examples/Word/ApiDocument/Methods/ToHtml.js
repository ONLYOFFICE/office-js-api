// This example converts a document to HTML.
var oDocument = Api.GetDocument();
var oParagraph1 = oDocument.GetElement(0);
oParagraph1.AddText("Heading 1");
var oHeading1Style = oDocument.GetStyle("Heading 1");
oParagraph1.SetStyle(oHeading1Style);
var oParagraph2 = Api.CreateParagraph();
oParagraph2.AddText("This document will be converted to HTML.");
oDocument.Push(oParagraph2);
var aSearch = oParagraph2.Search("HTML");
aSearch[0].SetBold(true);
var oParagraph3 = Api.CreateParagraph();
oParagraph3.AddText("Heading 2");
oDocument.Push(oParagraph3);
var oHeading2Style = oDocument.GetStyle("Heading 2");
oParagraph3.SetStyle(oHeading2Style);
var oParagraph4 = Api.CreateParagraph();
oParagraph4.AddText("There is an example of two heading levels.");
oDocument.Push(oParagraph4);
var sHtml = Api.ConvertDocument("html", false, false, false, true);
var oParagraph5 = Api.CreateParagraph();
oParagraph5.AddLineBreak();
oParagraph5.AddText("HTML").SetBold(true);
oParagraph5.AddLineBreak();
oParagraph5.AddText(sHtml);
oDocument.Push(oParagraph5);