// This example sets the text color for the current text run in the RGB format.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is just a sample text. ");
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.SetColor(255, 111, 61);
oRun.AddText("This is a text run with the font color set to orange.");
oParagraph.AddElement(oRun);