// Read the hexadecimal representation of a color used in a spreadsheet.

// How do I obtain the hex code of a fill color applied to a shape in a spreadsheet?

// Inspect a shape's fill color and extract its hex value for display in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const color = Api.RGB(255, 111, 61);

const fill = Api.CreateSolidFill(color);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
worksheet.AddShape("rect", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);

worksheet.GetRange("A12").SetValue("Hex: " + color.GetHex());