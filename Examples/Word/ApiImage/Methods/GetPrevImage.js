// Get the previous inline image if exists in a document.

// How to add the previous drawing to the paragraph in a document.

// Get the previous drawing and add it separated with a line break in a document.

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

let prevImage = image2.GetPrevImage();
let copyImage = prevImage.Copy();
paragraph.AddLineBreak();
paragraph.AddDrawing(copyImage);