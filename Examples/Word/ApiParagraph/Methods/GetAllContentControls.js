// This example shows how to get a collection of content control objects in the paragraph.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
var oRun = Api.CreateRun();
oRun.AddText("This is an inline text content control.");
oInlineLvlSdt.AddElement(oRun);
var aContentControls = oParagraph.GetAllContentControls();
aContentControls[0].GetElement(0).SetBold(true);
var sClassType = aContentControls[0].GetClassType();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Class type: " + sClassType);
oDocument.Push(oParagraph);