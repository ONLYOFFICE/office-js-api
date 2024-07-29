// This example clears the content from the run.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is just a sample text. ");
oRun.AddText("But you will not see it in the resulting document, as it will be cleared.");
oParagraph.AddElement(oRun);
oRun.ClearContent();
oParagraph = Api.CreateParagraph();
oRun = Api.CreateRun();
oRun.AddText("The text in the previous paragraph cannot be seen, as it has been cleared.");
oParagraph.AddElement(oRun);
oDocument.Push(oParagraph);