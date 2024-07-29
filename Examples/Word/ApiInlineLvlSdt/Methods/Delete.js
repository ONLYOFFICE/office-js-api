// This example removes a content control and its content.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
oInlineLvlSdt.AddText("This is an inline text content control.");
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
oInlineLvlSdt.Delete(false);
oParagraph.AddText("The inline text content control was removed.");