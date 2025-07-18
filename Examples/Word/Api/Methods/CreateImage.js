// This example creates an image and pastes it into the document.

// Creates the ApiImage object and adds it to the ApiParagraph class.

// How to create the ApiImage object using the URL to the image, its width and height.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let image = Api.CreateImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	60 * 36000, 60 * 36000
);
paragraph.AddDrawing(image);
