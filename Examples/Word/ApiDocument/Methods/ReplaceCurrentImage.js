// Replace the current image with an image specified in a document.

// How to change the image to another one in a document.

// Add the new image instead of another using the URL in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let drawing = Api.CreateImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png',
	60 * 36000, 60 * 36000
);
paragraph.AddDrawing(drawing);
drawing.Select();
doc.ReplaceCurrentImage('https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png');