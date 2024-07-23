// This example creates a paragraph copy.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph1 = oDocument.GetElement(0);
oParagraph1.AddText("This is just a sample text that was copied.");
var oParagraph2 = oParagraph1.Copy();
oDocument.Push(oParagraph2);
builder.SaveFile("docx", "Copy.docx");
builder.CloseFile();