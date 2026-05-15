// Get the next image after a given image and copy it into a paragraph in a document.

// How do I access the image that follows another image in a document?

// Copy a sibling image by navigating forward through inline images in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);

let image1 = Api.CreateImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	60 * 36000, 60 * 36000
);
paragraph.AddDrawing(image1);
paragraph.AddLineBreak();

let image2 = Api.CreateImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png',
	130 * 36000, 90 * 36000
);
paragraph.AddDrawing(image2);

let nextImage = image1.GetNextImage();
let copyImage = nextImage.Copy();
paragraph.AddLineBreak();
paragraph.AddDrawing(copyImage);