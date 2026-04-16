// Get the name of the last user who modified the current workbook in a spreadsheet.

// How to get last modified by for a core properties in a spreadsheet?

// Get last modified by and display the result in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const core = Api.GetCore();

core.SetLastModifiedBy("Mark Pottato");
const lastModifiedBy = core.GetLastModifiedBy();

let fill = Api.CreateSolidFill(Api.RGB(100, 50, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 100 * 36000,
	fill, stroke,
	0, 0, 3, 0
);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Last modified by: " + lastModifiedBy);