// This example removes the current selection.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Api ONLYOFFICE");
var oRange = oDocument.GetRange(0, 2);
oRange.Select();
oDocument.RemoveSelection();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The selection from the word 'Api' was removed.");
oDocument.Push(oParagraph);