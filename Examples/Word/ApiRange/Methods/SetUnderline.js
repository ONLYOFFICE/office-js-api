// This example specifies that the contents of the current Range are displayed along with a line appearing directly below the character.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oRange = oDocument.GetRange(0, 24);
oRange.SetUnderline(true);