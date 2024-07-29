// This example sets verlical aligment "superscript" for [ApiRange](../ApiRange.md).
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Copyright Document Builder");
var oRange = oDocument.GetRange(10, 19);
oRange.SetVertAlign("superscript");