// Extract the data string stored inside an embedded OLE object in a document.

// How do I read the raw data value from an OLE object in a document?

// Display the stored data of an OLE object as text in a paragraph in a document.

let doc = Api.GetDocument();
let oleObject = Api.CreateOleObject(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	150 * 36000, 150 * 36000,
	'https://youtu.be/SKGz4pmnpgY',
	'asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}'
);
let paragraph = doc.GetElement(0);
paragraph.AddDrawing(oleObject);
let data = oleObject.GetData();
paragraph = Api.CreateParagraph();
paragraph.AddText('The OLE object data: ' + data);
doc.Push(paragraph);