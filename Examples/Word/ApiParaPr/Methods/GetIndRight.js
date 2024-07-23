// This example shows how to get the paragraph right side indentation.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oParaPr = oParagraph.GetParaPr();
oParaPr.SetJc("right");
oParaPr.SetIndRight(2880);
oParagraph.AddText("This is the first paragraph with the right offset of 2 inches set to it. ");
oParagraph.AddText("This indent is set by the paragraph style. No paragraph inline style is applied. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes.");
var nIndRight = oParaPr.GetIndRight();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Right indent: " + nIndRight);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetIndRight.docx");
builder.CloseFile();