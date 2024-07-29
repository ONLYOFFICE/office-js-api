// This example specifies that the contents of the current Range are displayed with a single horizontal line through the range center.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Server Builder");
var oRange = oDocument.GetRange(18, 23);
oRange.SetStrikeout(true);