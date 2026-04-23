// Read the document language setting stored in the workbook metadata in a spreadsheet.

// How do I find out what language is assigned to a workbook in a spreadsheet?

// Check the language property to confirm the locale recorded for the file in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const core = Api.GetCore();

core.SetLanguage("en-US");
const language = core.GetLanguage();

let fill = Api.CreateSolidFill(Api.RGB(100, 50, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 100 * 36000,
	fill, stroke,
	0, 0, 3, 0
);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Language: " + language);