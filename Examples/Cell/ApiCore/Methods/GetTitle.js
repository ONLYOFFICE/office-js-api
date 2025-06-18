// This example demonstrates how to get the title of the current workbook.

const worksheet = Api.GetActiveSheet();
const core = Api.GetCore();

core.SetTitle("My Presentation Title");
const title = core.GetTitle();

let fill = Api.CreateSolidFill(Api.CreateRGBColor(100, 50, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 100 * 36000,
	fill, stroke,
	0, 0, 3, 0
);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Title: " + title);
