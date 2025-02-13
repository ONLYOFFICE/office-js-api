// This example shows how to get current page index
var oDocument = Api.GetDocument();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("The current page index is: " + oDocument.GetCurrentPage());
oDocument.Push(oParagraph);