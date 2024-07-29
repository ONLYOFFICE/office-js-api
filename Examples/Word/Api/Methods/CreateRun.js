// This example creates a run and inserts it into the document.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is a text run");
oParagraph.AddElement(oRun);