// Set the subject of the workbook in a spreadsheet.

// How can I set subject using a core properties in a spreadsheet?

// Set subject for a core properties in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const core = Api.GetCore();

core.SetSubject("ApiCore Method Showcase");
const subject = core.GetSubject();

let fill = Api.CreateSolidFill(Api.RGB(100, 50, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 100 * 36000,
	fill, stroke,
	0, 0, 3, 0
);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Subject: " + subject);