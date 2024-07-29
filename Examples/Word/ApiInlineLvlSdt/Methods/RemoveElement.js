// This example removes an element using the position specified from the inline text content control.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
var oRun1 = Api.CreateRun();
oRun1.AddText("This is the first text run in the inline text content control.");
oInlineLvlSdt.AddElement(oRun1, 0);
var oRun2 = Api.CreateRun();
oRun2.AddText("This is the second text run in the inline text content control. The first text run was removed.");
oInlineLvlSdt.AddElement(oRun2, 1);
oInlineLvlSdt.RemoveElement(0);