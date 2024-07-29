// This example showh how to get a collection of OLE objects from the document.
var oDocument = Api.GetDocument();
var oOleObject = Api.CreateOleObject("https://i.ytimg.com/vi_webp/SKGz4pmnpgY/sddefault.webp", 95 * 36000, 70 * 36000, "https://youtu.be/SKGz4pmnpgY", "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}");
var oParagraph = oDocument.GetElement(0);
oParagraph.AddDrawing(oOleObject);
var aOleObjects = oDocument.GetAllOleObjects();
var sAppId = aOleObjects[0].GetApplicationId();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The application ID for the current OLE object: " + sAppId);
oDocument.Push(oParagraph);