// This example adds a column break to the run position and starts the next element from a new column.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oSection = oDocument.GetFinalSection(oParagraph);
oSection.SetEqualColumns(2, 720);
var oRun = Api.CreateRun();
oRun.AddText("This is the text for the first column. It is written all in one text run. Nothing special.");
oRun.AddColumnBreak();
oRun.AddText("This is the text which starts from the beginning of the second column. ");
oRun.AddText("It is written in two text runs, you need a space at the end of the first run sentence to separate them.");
oParagraph.AddElement(oRun);
builder.SaveFile("docx", "AddColumnBreak.docx");
builder.CloseFile();