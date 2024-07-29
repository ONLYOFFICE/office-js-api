// This example shows how to get a Range object that represents the document part contained in the specified range.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oRange1 = oDocument.GetRange(0, 24);
oRange1.SetBold(true);
var oRange2 = oRange1.GetRange(0, 9);
oRange2.SetItalic(true);