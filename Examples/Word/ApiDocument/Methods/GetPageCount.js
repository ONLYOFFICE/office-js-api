// This example shows how to get a number of pages in the current document.
var oDocument = Api.GetDocument();
var sPageCount = oDocument.GetPageCount();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Number of pages: " + sPageCount);