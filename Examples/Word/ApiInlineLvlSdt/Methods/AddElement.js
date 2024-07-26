// This example adds a run to the container.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
var oRun = Api.CreateRun();
oRun.AddText("This is an inline text content control with a text run in it.");
oInlineLvlSdt.AddElement(oRun, 0);
builder.SaveFile("docx", "AddElement.docx");
builder.CloseFile();