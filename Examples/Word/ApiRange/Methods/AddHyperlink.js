// This example adds a hyperlink to the specified range.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oRange = oDocument.GetRange(0, 9);
oRange.AddHyperlink("https://www.onlyoffice.com/", "Main portal");
builder.SaveFile("docx", "AddHyperlink.docx");
builder.CloseFile();