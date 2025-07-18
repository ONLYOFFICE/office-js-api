// This example showh how to get a collection of OLE objects from the document.

// Get all OLE objects added to the document.

// How to retrieve all OLE objects and display the application ID of the first one.

let doc = Api.GetDocument();
let oleObject = Api.CreateOleObject(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	150 * 36000, 150 * 36000,
	'https://youtu.be/SKGz4pmnpgY',
	'asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}'
);
let paragraph = doc.GetElement(0);
paragraph.AddDrawing(oleObject);
let oleObjects = doc.GetAllOleObjects();
let appId = oleObjects[0].GetApplicationId();
paragraph = Api.CreateParagraph();
paragraph.AddText('The application ID for the current OLE object: ' + appId);
doc.Push(paragraph);
