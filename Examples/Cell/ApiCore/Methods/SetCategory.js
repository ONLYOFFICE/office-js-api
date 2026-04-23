// Assign a category label to the workbook through its document properties in a spreadsheet.

// How do I set a category for a workbook in a spreadsheet?

// Store a descriptive category in the metadata fields of the file in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const core = Api.GetCore();

core.SetCategory("Examples");
const category = core.GetCategory();

let fill = Api.CreateSolidFill(Api.RGB(100, 50, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 100 * 36000,
	fill, stroke,
	0, 0, 3, 0
);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Category: " + category);