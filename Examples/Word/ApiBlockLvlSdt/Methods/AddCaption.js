// Add a numbered figure caption below a content control in a document.

// How do I label a content control with a figure caption in a document?

// Insert an image into a content control and attach a caption with automatic numbering in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let paragraph = Api.CreateParagraph();
let image = Api.CreateImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	60 * 36000, 60 * 36000
);
paragraph.AddDrawing(image);
blockLvlSdt.AddElement(paragraph, 0);
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.AddCaption('', 'Figure', false, 'Arabic', false, undefined, 'hyphen');