// Read the unique identifier assigned to a shape's text area in a spreadsheet.

// How do I obtain the internal identifier of a shape's text area in a spreadsheet?

// Store the text area identifier in a cell for reference in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(89, 130, 190));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'rect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(25),
	fill, stroke,
	0, 0, 3, 0
);
const content = shape.GetContent();
const internalId = content.GetInternalId();
worksheet.GetRange('A1').SetValue('Internal ID: ' + internalId);