// This example creates a new history point.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a sample text.");
oDocument.CreateNewHistoryPoint();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("New history point was just created.");
oDocument.Push(oParagraph);
builder.SaveFile("docx", "CreateNewHistoryPoint.docx");
builder.CloseFile();