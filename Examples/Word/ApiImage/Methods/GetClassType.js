// Check the class type returned by an image in a document.

// How do I check what type an image object is in a document?

// Retrieve and output the class type string for an image in a document.

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