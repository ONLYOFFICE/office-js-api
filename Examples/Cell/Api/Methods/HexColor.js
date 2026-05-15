// Define a color from a hex code and apply it as a shape fill in a spreadsheet.

// How do I use a hex color code to fill a shape in a spreadsheet?

// Paint a shape with a custom hex color in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const color = Api.HexColor('#DECADE');
const fill = Api.CreateSolidFill(color);
const stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(0, 0, 0)));
worksheet.AddShape("rect", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);