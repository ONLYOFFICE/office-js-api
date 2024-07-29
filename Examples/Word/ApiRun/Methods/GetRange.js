// This example shows how to get a Range object that represents the part of the document contained in the specified run.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is just a sample text.");
oParagraph.AddElement(oRun);
var oRange = oRun.GetRange(0, 3);
oRange.SetBold(true);