// Set the identifier of the workbook using the core properties in a spreadsheet.

// How to set identifier for a core properties in a spreadsheet?

// Set identifier and display the result in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const core = Api.GetCore();

core.SetIdentifier("#ID42");
const identifier = core.GetIdentifier();

let fill = Api.CreateSolidFill(Api.RGB(100, 50, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 100 * 36000,
	fill, stroke,
	0, 0, 3, 0
);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Identifier: " + identifier);