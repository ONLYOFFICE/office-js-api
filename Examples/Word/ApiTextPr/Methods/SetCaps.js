// This example specifies that any lowercase characters in the text run are formatted for display only as their capital letter character equivalents.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTextPr = oDocument.GetDefaultTextPr();
oTextPr.SetCaps(true);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("A sample text set to capital letters using the text properties.");
builder.SaveFile("docx", "SetCaps.docx");
builder.CloseFile();