// This example adds a comment to the run.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is just a sample text. Nothing special.");
oParagraph.AddElement(oRun);
oRun.AddComment("comment", "John Smith");
builder.SaveFile("docx", "AddComment.docx");
builder.CloseFile();