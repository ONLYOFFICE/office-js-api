// Write a short summary of a workbook's purpose into its document properties in a spreadsheet.

// How do I add a description to a workbook's metadata in a spreadsheet?

// Attach a plain-text explanation to the workbook so others know what it contains in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const core = Api.GetCore();

core.SetDescription("This is a sample workbook made to help fellow users understand how to use the ApiCore methods.");
const description = core.GetDescription();

let fill = Api.CreateSolidFill(Api.RGB(100, 50, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 100 * 36000,
	fill, stroke,
	0, 0, 3, 0
);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Description: " + description);