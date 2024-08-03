// This example sets the placeholder text to the inline content control.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
oInlineLvlSdt.SetPlaceholderText("Custom placeholder");
