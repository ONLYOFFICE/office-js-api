// This example sets the selection to the specified range.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oRange = oParagraph.GetRange(0, 9);
oRange.Select();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The word 'ONLYOFFICE' was just selected.");
oDocument.Push(oParagraph);