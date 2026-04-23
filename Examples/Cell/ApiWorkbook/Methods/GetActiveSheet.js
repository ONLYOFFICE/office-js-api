// Retrieve the sheet that is currently open and display its name in a spreadsheet.

// How do I find out which sheet the user is looking at right now in a spreadsheet?

// Capture the active sheet's name and write it into a shape on the same sheet in a spreadsheet.

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