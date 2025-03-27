// This example shows how to get current visible pages indexes
var oDocument = Api.GetDocument();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("The current visibles pages indexes is: " + oDocument.GetCurrentVisiblePages());
oDocument.Push(oParagraph);