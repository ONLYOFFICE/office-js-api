// Serialize a shape fill color into a JSON string in a spreadsheet.

// How do I export a color object as a JSON-formatted string for storage or inspection in a spreadsheet?

// Capture the full color definition as structured text and write it to a cell in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const color = Api.RGB(64, 128, 192);

const fill = Api.CreateSolidFill(color);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
worksheet.AddShape("rect", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);

worksheet.GetRange("A12").SetValue("Color JSON: " + color.ToJSON());