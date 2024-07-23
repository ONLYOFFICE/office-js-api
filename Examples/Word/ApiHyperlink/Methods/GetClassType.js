// This example gets a class type and inserts it into the document.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("ONLYOFFICE Document Builder");
oParagraph.AddElement(oRun);
var oHyperlink = oParagraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
var sClassType = oHyperlink.GetClassType();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Class type: " + sClassType);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetClassType.docx");
builder.CloseFile();