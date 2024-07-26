// This example creates a copy of an inline content control.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
oInlineLvlSdt.AddText("This is an inline text content control.");
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
var oCopyInlineLvlSdt = oInlineLvlSdt .Copy();
oParagraph.AddLineBreak();
oParagraph.AddInlineLvlSdt(oCopyInlineLvlSdt);
builder.SaveFile("docx", "Copy.docx");
builder.CloseFile();