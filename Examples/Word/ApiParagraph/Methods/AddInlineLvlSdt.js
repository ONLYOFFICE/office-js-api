// This example adds an inline container to the paragraph.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
var oRun = Api.CreateRun();
oRun.AddText("This is an inline text content control.");
oInlineLvlSdt.AddElement(oRun, 0);
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
builder.SaveFile("docx", "AddInlineLvlSdt.docx");
builder.CloseFile();