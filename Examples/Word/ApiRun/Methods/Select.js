// This example selects the current run.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is just a sample text.");
oParagraph.AddElement(oRun);
oRun.Select();
oParagraph.AddLineBreak();
oParagraph.AddText("The text from the first run was selected.");
builder.SaveFile("docx", "Select.docx");
builder.CloseFile();