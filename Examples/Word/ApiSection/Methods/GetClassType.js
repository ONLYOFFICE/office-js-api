// This example gets a class type and inserts it into the document.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oSection = oDocument.GetFinalSection();
oSection.SetPageMargins(720, 720, 720, 720);
oSection.SetPageSize(7200, 4320);
var sClassType = oSection.GetClassType();
oParagraph.AddText("Class Type = " + sClassType);
builder.SaveFile("docx", "GetClassType.docx");
builder.CloseFile();