// This example gets a class type and inserts it into the document.

// How to get a class type of ApiOleObject.

// Retrieve class type of ApiOleObject object and insert it to the document.

let doc = Api.GetDocument();
let oleObject = Api.CreateOleObject(
	"https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png",
	130 * 36000, 130 * 36000,
	"https://youtu.be/SKGz4pmnpgY",
	"asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}"
);
let paragraph = doc.GetElement(0);
paragraph.AddDrawing(oleObject);
let type = oleObject.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + type);
doc.Push(paragraph);