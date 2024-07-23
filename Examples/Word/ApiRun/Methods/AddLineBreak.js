// This example adds a line break to the run position and starts the next element from a new line.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is the text for the first line. Nothing special.");
oRun.AddLineBreak();
oRun.AddText("This is the text which starts from the beginning of the second line. ");
oRun.AddText("It is written in two text runs, you need a space at the end of the first run sentence to separate them.");
oParagraph.AddElement(oRun);
builder.SaveFile("docx", "AddLineBreak.docx");
builder.CloseFile();