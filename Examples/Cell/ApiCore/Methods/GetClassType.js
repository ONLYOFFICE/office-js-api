// Read the type label of the document properties object in a spreadsheet.

// How do I find out what kind of object holds the document properties in a spreadsheet?

// Identify the internal type of the core document properties in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const core = Api.GetCore();
const classType = core.GetClassType();

let fill = Api.CreateSolidFill(Api.RGB(100, 50, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 100 * 36000,
	fill, stroke,
	0, 0, 3, 0
);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Class type: " + classType);