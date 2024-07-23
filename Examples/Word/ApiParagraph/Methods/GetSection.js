// This example shows how to get the paragraph section.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a new paragraph.");
var oSection = oParagraph.GetSection();
oSection.SetPageSize(7200, 4320);
builder.SaveFile("docx", "GetSection.docx");
builder.CloseFile();