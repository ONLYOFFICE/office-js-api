// Read the class type of an embedded OLE object in a document.

// How do I find out the class type of an OLE object in a document?

// Identify what kind of embedded object is inserted by checking its class type string in a document.

let doc = Api.GetDocument();
let oleObject = Api.CreateOleObject(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	150 * 36000, 150 * 36000,
	'https://youtu.be/SKGz4pmnpgY',
	'asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}'
);
let paragraph = doc.GetElement(0);
paragraph.AddDrawing(oleObject);
let type = oleObject.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText('Class type: ' + type);
doc.Push(paragraph);