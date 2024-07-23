// This example shows how to get the paragraph right side indentation.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a paragraph with the right offset of 2 inches set to it. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes.");
oParagraph.SetJc("right");
oParagraph.SetIndRight(2880);
var nIndRight = oParagraph.GetIndRight();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Right indent: " + nIndRight);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetIndRight.docx");
builder.CloseFile();