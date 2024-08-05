// This example shows how to get the placeholder text from the content control.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
oInlineLvlSdt.SetPlaceholderText("Enter your text here");
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
var sText = oInlineLvlSdt.GetPlaceholderText();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Placeholder text: " + sText);
oDocument.Push(oParagraph);