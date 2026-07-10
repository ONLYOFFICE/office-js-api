// Get the outline of a drawing object through the base ApiDrawing interface in a spreadsheet.

// GetLine returns the ApiStroke of a drawing object, or null when no outline is set.

// Read the outline width from a shape and write it into a cell.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
const drawing = worksheet.AddShape("rect", 90 * 36000, 27 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
const currentLine = drawing.GetLine();
if (currentLine) {
	worksheet.GetRange("A1").SetValue("Outline width (EMU): " + currentLine.GetWidth());
}
