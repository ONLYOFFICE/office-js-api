// This example adds a line break to the current position and starts the next element from a new line.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = oParagraph.AddText("This is the text for the first line. Nothing special.");
oParagraph.AddLineBreak();
oRun = oParagraph.AddText("This is the text which starts from the beginning of the second line. ");
oRun = oParagraph.AddText("It is written in two text runs, you need a space at the end of the first run sentence to separate them.");
builder.SaveFile("docx", "AddLineBreak.docx");
builder.CloseFile();