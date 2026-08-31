// Get the fill formatting properties from a drawing in a spreadsheet.

// GetFill returns the ApiFill of a drawing object, or null when the object has no fill.

// Read the fill type from a filled shape and an image and write the values into cells.

const worksheet = Api.GetActiveSheet();
const gs1 = Api.CreateGradientStop(Api.RGB(200, 230, 180), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(110, 170, 150), 100000);
const fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'rect',
	Api.MillimetersToEmus(60), Api.MillimetersToEmus(40),
	fill, stroke,
	0, Api.MillimetersToEmus(1), 1, Api.MillimetersToEmus(1)
);

const image = worksheet.AddImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	Api.MillimetersToEmus(40), Api.MillimetersToEmus(40),
	7, Api.MillimetersToEmus(1), 1, Api.MillimetersToEmus(1)
);
const imageFill = Api.CreateSolidFill(Api.HexColor('#c7edfc'));
image.SetFill(imageFill);

const shapeFill = shape.GetFill();
if (shapeFill) {
    worksheet.GetRange('A1').SetValue('Shape fill type: ' + shapeFill.GetType());
}

const retrievedImageFill = image.GetFill();
if (retrievedImageFill) {
    worksheet.GetRange('H1').SetValue('Image fill type: ' + retrievedImageFill.GetType());
}
