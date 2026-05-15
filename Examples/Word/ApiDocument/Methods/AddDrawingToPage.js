// Place an image at a fixed position on a page in a document.

// How do I add a drawing to a specific page in a document?

// Anchor a logo or illustration at exact coordinates without disrupting text flow in a document.

let doc = Api.GetDocument();
let drawing = Api.CreateImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	60 * 36000, 60 * 36000
);
let paragraph = Api.CreateParagraph();
paragraph.AddPageBreak();
doc.Push(paragraph);
doc.AddDrawingToPage(drawing, 1, 50 * 36000, 50 * 36000);