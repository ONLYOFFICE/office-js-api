// This example gets a class type and inserts it into the document.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
var oRun = Api.CreateRun();
oRun.AddText("This is an inline text content control.");
oInlineLvlSdt.AddElement(oRun, 0);
var sClassType = oInlineLvlSdt.GetClassType();
oParagraph.AddLineBreak();
oParagraph.AddText("Class Type = " + sClassType);
builder.SaveFile("docx", "GetClassType.docx");
builder.CloseFile();