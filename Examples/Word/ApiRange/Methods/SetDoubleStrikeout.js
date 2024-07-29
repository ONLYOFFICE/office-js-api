// This example specifies that the contents of the current Range are displayed with two horizontal lines through each character displayed on the line.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Server Builder");
var oRange = oDocument.GetRange(18, 23);
oRange.SetDoubleStrikeout(true);