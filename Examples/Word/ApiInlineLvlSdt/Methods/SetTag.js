// This example sets a string tag to the inline text content control.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
var oRun = Api.CreateRun();
oRun.AddText("This is an inline text content control with a tag set to it.");
oInlineLvlSdt.SetTag("This is a tag");
oInlineLvlSdt.AddElement(oRun, 0);
var sTag = oInlineLvlSdt.GetTag();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Tag: " + sTag);
oDocument.Push(oParagraph);