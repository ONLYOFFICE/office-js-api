// This example specifies a highlighting color which is applied as a background to the contents of the run.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is just a sample text. ");
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.SetHighlight("lightGray");
oRun.AddText("This is a text run with the text highlighted with light gray color.");
oParagraph.AddElement(oRun);