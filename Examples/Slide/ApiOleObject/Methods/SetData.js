// This example sets the data to the current OLE object.

// Set data of an OLE object.

// How to insert a url address to the OLE object.

var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oOleObject = Api.CreateOleObject("https://api.onlyoffice.com/content/img/docbuilder/examples/ole-object-image.png", 130 * 36000, 90 * 36000, "https://youtu.be/SKGz4pmnpgY", "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}");
oOleObject.SetSize(200 * 36000, 130 * 36000);
oOleObject.SetPosition(70 * 36000, 30 * 36000);
oSlide.AddObject(oOleObject);
oOleObject.SetData("https://youtu.be/eJxpkjQG6Ew");