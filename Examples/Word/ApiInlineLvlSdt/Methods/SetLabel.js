// This example sets a string label to the inline text content control.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
var oRun = Api.CreateRun();
oRun.AddText("This is an inline text content control with a label set to it.");
oInlineLvlSdt.SetLabel("2147483647");
oInlineLvlSdt.AddElement(oRun, 0);
var sLabel = oInlineLvlSdt.GetLabel();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Label: " + sLabel);
oDocument.Push(oParagraph);