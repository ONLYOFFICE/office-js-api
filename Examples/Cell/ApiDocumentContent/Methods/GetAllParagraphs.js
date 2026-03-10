// This example shows how to get all paragraphs from the document content of a shape.

const worksheet = Api.GetActiveSheet();

const fill = Api.CreateSolidFill(Api.RGB(89, 130, 190));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'rect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(25),
	fill, stroke,
	0, 0, 1, 0
);

const content = shape.GetContent();
const p1 = content.GetElement(0);
p1.AddText('First paragraph.');
content.Push(p1);

const p2 = Api.CreateParagraph();
p2.AddText('Second paragraph.');
content.Push(p2);

const paragraphs = content.GetAllParagraphs();
worksheet.GetRange('A1').SetValue('Paragraph count: ' + paragraphs.length);
