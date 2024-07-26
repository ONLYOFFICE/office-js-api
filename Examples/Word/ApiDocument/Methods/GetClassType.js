// This example gets a class type and inserts it into the document.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = Api.CreateParagraph();
var sClassType = oDocument.GetClassType();
oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Class Type = " + sClassType);
builder.SaveFile("docx", "GetClassType.docx");
builder.CloseFile();