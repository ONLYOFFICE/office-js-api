// This example ctreates a range and sets bold for the first 9 characters.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oRange = Api.CreateRange(oParagraph, 0, 9);
oRange.SetBold(true);