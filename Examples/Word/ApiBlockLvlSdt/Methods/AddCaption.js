// Add a caption paragraph after (or before) the current content control in a document.

// Add a figure caption after the block content control and set the Arabic caption numbering format.

// Create a block content control, add a paragraph with an image to it, and add a figure caption for the current content control in a document.

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