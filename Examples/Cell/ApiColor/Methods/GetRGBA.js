// Get the RGBA components of a shape fill color in a spreadsheet.

// How to get the r g b a for a color in a spreadsheet?

// Get the r g b an and display the result in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const color = Api.RGBA(110, 160, 180, 127);

const fill = Api.CreateSolidFill(color);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
worksheet.AddShape("rect", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);

const rgba = color.GetRGBA();
worksheet.GetRange("A12").SetValue("RGBA: " + rgba.r + ", " + rgba.g + ", " + rgba.b + ", " + rgba.a);