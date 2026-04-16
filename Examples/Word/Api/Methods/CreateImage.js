// Create an image and paste it into the document.

// Create the image object and add it to the paragraph class in a document.

// How to create the image object using the URL to the image, its width and height in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let image = Api.CreateImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	60 * 36000, 60 * 36000
);
paragraph.AddDrawing(image);