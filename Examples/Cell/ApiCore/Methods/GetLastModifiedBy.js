// Retrieve the name of the person who last edited the workbook in a spreadsheet.

// How do I find out who made the most recent change to a workbook in a spreadsheet?

// Look up the last editor's name recorded in the document properties in a spreadsheet.

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