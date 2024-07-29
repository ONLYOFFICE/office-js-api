// This example clears the contents from the content control.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
oInlineLvlSdt.AddText("This is an inline text content control.");
oInlineLvlSdt.RemoveAllElements();
oInlineLvlSdt.AddText("We removed all the inline content control elements.");