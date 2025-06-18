// This example shows how to get current page index.

// How to know the order index of the current page.

// Get current page number.

var oDocument = Api.GetDocument();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("The current page index is: " + oDocument.GetCurrentPage());
oDocument.Push(oParagraph);