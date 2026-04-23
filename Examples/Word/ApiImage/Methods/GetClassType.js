// Retrieve the class type of an image element in a document.

// How do I get the type identifier of an image object in a document?

// Display what kind of drawing element an image is classified as in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let drawing = Api.CreateImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	60 * 36000, 60 * 36000
);
paragraph.AddDrawing(drawing);
let classType = drawing.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText('Class Type = ' + classType);
doc.Push(paragraph);