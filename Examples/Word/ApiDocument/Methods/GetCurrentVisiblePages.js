// This example shows how to get current visible pages indexes.

// How to get all indexes of non-hidden pages.

// How to display numbers of all visible pages.

var oDocument = Api.GetDocument();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("The current visibles pages indexes is: " + oDocument.GetCurrentVisiblePages());
oDocument.Push(oParagraph);