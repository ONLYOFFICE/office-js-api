// This example shows how to get a Range object that represents the part of the document contained in the specified paragraph.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample paragraph.");
var oRange = oParagraph.GetRange(8, 11);
oRange.SetBold(true);