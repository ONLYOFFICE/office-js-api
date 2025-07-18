// This example shows how to get the next inline image if exists.

// How to add the next drawing to the paragraph.

// Get the next drawing and add it separated with a line break.

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
