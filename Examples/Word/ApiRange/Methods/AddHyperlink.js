// This example adds a hyperlink to the specified range.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oRange = oDocument.GetRange(0, 11);
oRange.AddHyperlink("https://www.onlyoffice.com/", "Main portal");