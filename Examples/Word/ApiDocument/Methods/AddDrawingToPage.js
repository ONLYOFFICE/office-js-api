// This example shows how to get a collection of tables on a given absolute page.

// How to add the drawing to the document.

// Create an image from the URL and insert it to the page.

let doc = Api.GetDocument();
let drawing = Api.CreateImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	60 * 36000, 60 * 36000
);
let paragraph = Api.CreateParagraph();
paragraph.AddPageBreak();
doc.Push(paragraph);
doc.AddDrawingToPage(drawing, 1, 50 * 36000, 50 * 36000);
