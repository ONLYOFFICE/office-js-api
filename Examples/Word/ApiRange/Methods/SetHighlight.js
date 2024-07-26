// This example specifies a highlighting color which is applied as a background to the contents of the Range.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oRange = oDocument.GetRange(0, 26);
oRange.SetHighlight("lightGray");
builder.SaveFile("docx", "SetHighlight.docx");
builder.CloseFile();