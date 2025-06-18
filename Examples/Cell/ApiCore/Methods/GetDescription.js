// This example demonstrates how to get the description of the current workbook using the ApiCore.

const worksheet = Api.GetActiveSheet();
const core = Api.GetCore();

core.SetDescription("This is a sample presentation made to help fellow users understand how to use the ApiCore methods.");
const description = core.GetDescription();

let fill = Api.CreateSolidFill(Api.CreateRGBColor(100, 50, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 100 * 36000,
	fill, stroke,
	0, 0, 3, 0
);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Description: " + description);
