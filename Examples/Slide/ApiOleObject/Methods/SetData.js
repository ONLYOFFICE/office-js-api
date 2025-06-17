// This example sets the data to the current OLE object.

// Set data to an OLE object.

// How to insert a url address to the OLE object.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
const oleObject = Api.CreateOleObject(
	"https://api.onlyoffice.com/content/img/docbuilder/examples/ole-object-image.png",
	130 * 36000, 90 * 36000,
	"https://youtu.be/SKGz4pmnpgY",
	"asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}"
);
oleObject.SetSize(200 * 36000, 130 * 36000);
oleObject.SetPosition(70 * 36000, 30 * 36000);
slide.AddObject(oleObject);
oleObject.SetData("https://youtu.be/eJxpkjQG6Ew");
