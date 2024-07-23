// This example shows how to get the application ID from the OLE object.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oOleObject = Api.CreateOleObject("https://api.onlyoffice.com/content/img/docbuilder/examples/ole-object-image.png", 130 * 36000, 90 * 36000, "https://youtu.be/SKGz4pmnpgY", "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}");
var oParagraph = oDocument.GetElement(0);
oParagraph.AddDrawing(oOleObject);
var sAppId = oOleObject.GetApplicationId();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The OLE object application ID: " + sAppId);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetApplicationId.docx");
builder.CloseFile();