// This example shows how to get a Range object that represents the part of the document contained in the specified content control.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
oInlineLvlSdt.AddText("This is an inline text content control.");
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
var oRange = oInlineLvlSdt.GetRange(11, 16);
oRange.SetBold(true);
builder.SaveFile("docx", "GetRange.docx");
builder.CloseFile();