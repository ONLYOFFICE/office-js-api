// This example specifies the shading applied to the contents of the current text Range.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oRange = oDocument.GetRange(0, 24);
oRange.SetShd("clear", 255, 111, 61);