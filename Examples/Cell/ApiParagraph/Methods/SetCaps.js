// Display all text in a paragraph as capital letters inside a shape in a spreadsheet.

// How do I make every letter in a paragraph appear uppercase in a spreadsheet?

// Enforce an all-caps style on a paragraph without changing the underlying text in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(110, 130, 170));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'roundRect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(30),
	fill, stroke,
	0, 0, 2, 0
);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('This text is displayed in all caps.');
paragraph.SetCaps(true);

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('This text has normal capitalization.');
content.Push(paragraph2);