// This example shows how to get the last document element.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a sample text №1.");
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a sample text №2.");
oDocument.Push(oParagraph);
var oElement = oDocument.Last();
oElement.SetBold(true);