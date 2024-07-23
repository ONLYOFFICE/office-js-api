// This example shows how to get an element by its position in the document.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is just a sample text. Nothing special.");
oParagraph.AddElement(oRun);
builder.SaveFile("docx", "GetElement.docx");
builder.CloseFile();