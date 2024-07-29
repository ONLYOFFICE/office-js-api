// This example wraps a run in a mail merge field.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("Name");
oParagraph.AddElement(oRun);
oRun.WrapInMailMergeField();
oParagraph.AddLineBreak();
oRun = Api.CreateRun();
oRun.AddText("Surname");
oParagraph.AddElement(oRun);
oRun.WrapInMailMergeField();