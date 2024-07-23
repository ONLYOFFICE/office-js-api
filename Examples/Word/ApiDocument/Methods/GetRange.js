// This example shows how to get a Range object that represents the part of the document contained in the specified document.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text.");
var oRange = oDocument.GetRange(8, 11);
oRange.SetBold(true);
builder.SaveFile("docx", "GetRange.docx");
builder.CloseFile();