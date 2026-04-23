// Read the application ID of an embedded OLE object in a document.

// How do I retrieve the application identifier from an OLE object in a document?

// Inspect which application is associated with an embedded object by displaying its ID in a document.

let doc = Api.GetDocument();
let oleObject = Api.CreateOleObject(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	150 * 36000, 150 * 36000,
	'https://youtu.be/SKGz4pmnpgY',
	'asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}'
);
let paragraph = doc.GetElement(0);
paragraph.AddDrawing(oleObject);
let appId = oleObject.GetApplicationId();
paragraph = Api.CreateParagraph();
paragraph.AddText('The OLE object application ID: ' + appId);
doc.Push(paragraph);