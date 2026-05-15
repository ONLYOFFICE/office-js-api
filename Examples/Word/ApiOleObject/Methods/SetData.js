// Update the data string of an embedded OLE object in a document.

// How do I change the link or data stored in an OLE object in a document?

// Replace the existing OLE object content with a new URL or data value in a document.

let doc = Api.GetDocument();
let oleObject = Api.CreateOleObject(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	150 * 36000, 150 * 36000,
	'https://youtu.be/SKGz4pmnpgY',
	'asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}'
);
let paragraph = doc.GetElement(0);
paragraph.AddDrawing(oleObject);
oleObject.SetData('https://youtu.be/eJxpkjQG6Ew');