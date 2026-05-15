// Make all text in a paragraph appear in italic style inside a shape in a spreadsheet.

// How do I switch a paragraph's text to italic in a spreadsheet?

// Slant the characters in a paragraph to visually emphasize the text in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(170, 110, 130));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'roundRect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(30),
	fill, stroke,
	0, 0, 2, 0
);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('This text is italic.');
paragraph.SetItalic(true);

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('This text is not italic.');
content.Push(paragraph2);