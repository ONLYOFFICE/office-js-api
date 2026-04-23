// Give a workbook a descriptive title through its document properties in a spreadsheet.

// How do I assign a title to a workbook's metadata in a spreadsheet?

// Name the workbook by writing a title into its document properties so it is easy to identify in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const core = Api.GetCore();

core.SetTitle("My Workbook Title");
const title = core.GetTitle();

let fill = Api.CreateSolidFill(Api.RGB(100, 50, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 100 * 36000,
	fill, stroke,
	0, 0, 3, 0
);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Title: " + title);