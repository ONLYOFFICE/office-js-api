// This example gets a class type and pastes it into the document.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oWatermarkSettings = oDocument.GetWatermarkSettings();
var sClassType = oWatermarkSettings.GetClassType();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Class Type = " + sClassType);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetClassType.docx");
builder.CloseFile();