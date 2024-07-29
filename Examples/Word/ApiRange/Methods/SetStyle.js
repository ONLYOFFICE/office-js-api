// This example sets the style to the current Range.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oRange = oDocument.GetRange(0, 26);
var oStyle = oDocument.GetStyle("Heading 2");
oRange.SetStyle(oStyle);