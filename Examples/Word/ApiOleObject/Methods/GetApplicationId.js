// This example shows how to get the application ID from the OLE object.

// How to get an application ID of the OLE object.

// Display the application ID of the OLE object.

let doc = Api.GetDocument();
let oleObject = Api.CreateOleObject(
	"https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png",
	130 * 36000, 130 * 36000,
	"https://youtu.be/SKGz4pmnpgY",
	"asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}"
);
let paragraph = doc.GetElement(0);
paragraph.AddDrawing(oleObject);
let appId = oleObject.GetApplicationId();
paragraph = Api.CreateParagraph();
paragraph.AddText("The OLE object application ID: " + appId);
doc.Push(paragraph);