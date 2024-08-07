// This example shows how to get a number of elements in the inline text content control.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
oParagraph.AddLineBreak();
oInlineLvlSdtCount = oInlineLvlSdt.GetElementsCount();
oParagraph.AddText("Number of elements in oInlineLvlSdt (before adding anything) = " + oInlineLvlSdtCount);
var oRun = Api.CreateRun();
oRun.AddText("This is an inline text content control. ");
oInlineLvlSdt.AddElement(oRun, 0);
oParagraph.AddLineBreak();
var oInlineLvlSdtCount = oInlineLvlSdt.GetElementsCount();
oParagraph.AddText("Number of elements in oInlineLvlSdt (after adding one element) = " + oInlineLvlSdtCount);
var oRun1 = Api.CreateRun();
oRun1.AddText("One more element of the inline text content control.");
oInlineLvlSdt.AddElement(oRun1, 1);
oInlineLvlSdtCount = oInlineLvlSdt.GetElementsCount();
oParagraph.AddLineBreak();
oParagraph.AddText("Number of elements in oInlineLvlSdt (after adding one more element) = " + oInlineLvlSdtCount);