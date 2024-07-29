// This example specifies that any lowercase characters in the current text Range are formatted for display only as their capital letter character equivalents.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oRange = oDocument.GetRange(10, 17);
oRange.SetCaps(true);