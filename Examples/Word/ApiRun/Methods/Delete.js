// This example deletes the run.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun1 = Api.CreateRun();
oRun1.AddText("This is run №1.");
oParagraph.AddElement(oRun1);
var oRun2 = Api.CreateRun();
oRun2.AddText("This is run №2.");
oParagraph.AddElement(oRun2);
oRun1.RemoveAllElements();
oParagraph.AddLineBreak();
oParagraph.AddText("The first run was removed from the document.");