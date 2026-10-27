// Add an image stamp annotation to a PDF page.

// Create a PDF stamp annotation using an image URL.

// Place an image stamp at specified coordinates in a PDF.

let doc = Api.GetDocument();
let imageAnnot = Api.CreateImageStampAnnot(
	[40, 40, 160, 100],
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png'
);
let page = doc.GetPage(0);
page.AddObject(imageAnnot);
