// Write a creation date into the workbook document properties in a spreadsheet.

// How do I set the creation date recorded for a workbook in a spreadsheet?

// Store a specific date as the origin timestamp for the file in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const core = Api.GetCore();

core.SetCreated(new Date('20 January 2000'));
const createdDate = core.GetCreated().toDateString();

let fill = Api.CreateSolidFill(Api.RGB(100, 50, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 100 * 36000,
	fill, stroke,
	0, 0, 3, 0
);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Created: " + createdDate);