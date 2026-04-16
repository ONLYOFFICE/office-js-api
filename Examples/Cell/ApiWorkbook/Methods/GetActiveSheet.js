// Get the name of the current workbook (filename) in a spreadsheet.

// How can I get active sheet using a workbook in a spreadsheet?

// Get active sheet for a workbook in a spreadsheet.

const workbook = Api.GetActiveWorkbook();
const worksheet = workbook.GetActiveSheet();

worksheet.SetName('not-an-easter-egg');
const worksheetName = worksheet.GetName();

const lightGreen = Api.RGB(16, 121, 63);
const darkGreen = Api.RGB(24, 92, 55);
const fill = Api.CreateSolidFill(lightGreen);
const stroke = Api.CreateStroke(2, Api.CreateSolidFill(darkGreen));
let shape = worksheet.AddShape(
	'rect',
	100 * 36000, 70 * 36000,
	fill, stroke,
	0, 2 * 36000,
	0, 3 * 36000
);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText('Active Sheet Name: ' + worksheetName);