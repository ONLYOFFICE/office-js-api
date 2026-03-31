// This example sets the fill formatting properties to a shape and an image.

const worksheet = Api.GetActiveSheet();
const noFill = Api.CreateNoFill();
const stroke = Api.CreateStroke(0, noFill);
const shape = worksheet.AddShape(
	'rect',
	Api.MillimetersToEmus(60), Api.MillimetersToEmus(40),
	noFill, stroke,
	1, 0, 1, 0
);
const shapeFill = Api.CreateSolidFill(Api.RGB(96, 125, 139));
shape.SetFill(shapeFill);
worksheet.GetRange('A1').SetValue('Shape fill changed to blue-grey.');

const image = worksheet.AddImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	Api.MillimetersToEmus(40), Api.MillimetersToEmus(40),
	8, 0, 1, 0
);
const imageFill = Api.CreateSolidFill(Api.RGBA(38, 50, 56, 180));
image.SetFill(imageFill);
worksheet.GetRange('H1').SetValue('Image with semi-transparent fill overlay.');
