// This example reates a copy of the run.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun1 = Api.CreateRun();
oRun1.AddText("This is just a sample text that was copied. ");
oParagraph.AddElement(oRun1);
var oRun2 = oRun1.Copy();
oParagraph.AddElement(oRun2);
builder.SaveFile("docx", "Copy.docx");
builder.CloseFile();