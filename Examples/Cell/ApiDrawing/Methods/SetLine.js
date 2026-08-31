// Set the outline of a drawing object through the base ApiDrawing interface in a spreadsheet.

// SetLine is the base method for the outline and works for any drawing object added to a worksheet, not only shapes.

// Add a shape to a worksheet and give it a dark solid outline.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const noStroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = worksheet.AddShape("rect", 90 * 36000, 27 * 36000, fill, noStroke, 0, 2 * 36000, 0, 3 * 36000);
const outline = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
drawing.SetLine(outline);
