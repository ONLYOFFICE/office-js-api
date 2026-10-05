// Set the spell-check language for a paragraph inside a shape in a spreadsheet.

// How do I tell the editor which language to use when checking the text of a shape in a spreadsheet?

// Set the language of the paragraph and print it in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(160, 100, 110));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'roundRect',
	Api.MillimetersToEmus(90), Api.MillimetersToEmus(40),
	fill, stroke,
	0, 0, 2, 0
);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('This is a paragraph with the spell-check language set.');
paragraph.SetLanguage('en-CA');

const resultParagraph = Api.CreateParagraph();
resultParagraph.AddText('Paragraph language: ' + shape.GetTextRange().GetTextPr().GetLanguage());
content.Push(resultParagraph);