// Duplicate an OLE object and add the copy to the same paragraph in a document.

// How do I make a copy of an OLE object in a document?

// Clone an OLE object so that the duplicate appears alongside the original in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let oleObject = Api.CreateOleObject(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	130 * 36000, 90 * 36000,
	'https://youtu.be/SKGz4pmnpgY',
	'asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}'
);
paragraph.AddDrawing(oleObject);

let copyOle = oleObject.Copy();
paragraph.AddDrawing(copyOle);
