// This example shows how to get the paragraph line spacing value.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.SetSpacingLine(3 * 240, "auto");
oParagraph.AddText("Paragraph 1. Spacing: 3 times of a common paragraph line spacing.");
oParagraph.AddLineBreak();
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddLineBreak();
var nSpacingLineValue = oParagraph.GetSpacingLineValue();
oParagraph.AddText("Spacing line value: " + nSpacingLineValue);
builder.SaveFile("docx", "GetSpacingLineValue.docx");
builder.CloseFile();