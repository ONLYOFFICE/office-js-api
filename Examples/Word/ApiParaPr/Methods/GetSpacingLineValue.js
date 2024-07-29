// This example shows how to get the paragraph line spacing value.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oParaPr = oParagraph.GetParaPr();
oParaPr.SetSpacingLine(3 * 240, "auto");
oParagraph.AddText("Paragraph 1. Spacing: 3 times of a common paragraph line spacing.");
oParagraph.AddLineBreak();
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddLineBreak();
var nSpacingLineValue = oParaPr.GetSpacingLineValue();
oParagraph.AddText("Spacing line value: " + nSpacingLineValue);