// This example shows how to get the paragraph text.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("\tThis is just a sample text.");
var sText = oParagraph.GetText({"Numbering": true, "Math": true, "NewLineSeparator": "\r", "TabSymbol": "\t"});
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The text of the first paragraph: " + sText);
oDocument.Push(oParagraph);