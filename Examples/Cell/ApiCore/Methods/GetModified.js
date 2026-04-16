// Get the date when the current workbook was modified last time in a spreadsheet.

// How to get the modified for a core properties in a spreadsheet?

// Get the modified and display the result in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const core = Api.GetCore();

core.SetModified(new Date("10 March 1990"));
const lastModifiedDate = core.GetModified().toDateString();

let fill = Api.CreateSolidFill(Api.RGB(100, 50, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 100 * 36000,
	fill, stroke,
	0, 0, 3, 0
);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Last modified: " + lastModifiedDate);