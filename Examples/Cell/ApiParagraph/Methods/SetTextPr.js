// Apply bold, italic, and font size settings to all text in a paragraph inside a shape in a spreadsheet.

// How do I style all the text in a paragraph at once in a spreadsheet?

// Change the appearance of paragraph text by assigning a shared set of formatting properties in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(110, 140, 130));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'roundRect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(30),
	fill, stroke,
	0, 0, 2, 0
);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('This text has custom text properties applied.');

const textPr = Api.CreateTextPr();
textPr.SetBold(true);
textPr.SetItalic(true);
textPr.SetFontSize(32);
paragraph.SetTextPr(textPr);

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('This text has default properties.');
content.Push(paragraph2);