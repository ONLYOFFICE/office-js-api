// This example sets the data to the current OLE object.
var oDocument = Api.GetDocument();
var oOleObject = Api.CreateOleObject("https://api.onlyoffice.com/content/img/docbuilder/examples/ole-object-image.png", 130 * 36000, 90 * 36000, "https://youtu.be/SKGz4pmnpgY", "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}");
var oParagraph = oDocument.GetElement(0);
oParagraph.AddDrawing(oOleObject);
oOleObject.SetData("https://youtu.be/eJxpkjQG6Ew");