// This example deletes all the contents from the range.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE delete text Document Builder");
var oRange = oDocument.GetRange(10, 21);
oRange.Delete();
builder.SaveFile("docx", "Delete.docx");
builder.CloseFile();