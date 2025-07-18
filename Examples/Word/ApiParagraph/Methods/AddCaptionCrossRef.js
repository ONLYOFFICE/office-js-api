// This example adds a caption cross-reference to the paragraph.

// How to create a caption reference to the paragraph.

// Add a cross-reference to the caption of the paragraph.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let drawing = Api.CreateImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	60 * 36000, 60 * 36000
);
paragraph.AddDrawing(drawing);
paragraph = Api.CreateParagraph();
doc.Push(paragraph);
paragraph.AddCaption('', 'Figure', false, 'Arabic', false, undefined, 'hyphen');
paragraph = Api.CreateParagraph();
doc.Push(paragraph);
paragraph.AddText('Link to ');
let captionParagraphs = doc.GetAllCaptionParagraphs('Figure');
paragraph.AddCaptionCrossRef('Figure', 'entireCaption', captionParagraphs[0], true, false);
