// This example adds a Run to the paragraph.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is just a text run. Nothing special.");
oParagraph.AddElement(oRun);