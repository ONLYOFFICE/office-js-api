// This example pushes a run to actually add it to the container.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
var oRun = Api.CreateRun();
oRun.AddText("This is an inline text content control. ");
oInlineLvlSdt.AddElement(oRun, 0);
oRun = Api.CreateRun();
oRun.AddText("This sentence was pushed here.");
oInlineLvlSdt.Push(oRun);
builder.SaveFile("docx", "Push.docx");
builder.CloseFile();