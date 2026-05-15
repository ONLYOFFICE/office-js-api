// Insert an image from a URL into a paragraph in a document.

// How do I add an image with a specific width and height to a document?

// Place a remotely hosted picture at a fixed size inside a paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let image = Api.CreateImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	60 * 36000, 60 * 36000
);
paragraph.AddDrawing(image);