// Retrieve the name of the theme color applied to a shape in a spreadsheet.

// How do I find out which theme color name is assigned to a fill in a spreadsheet?

// Look up the built-in theme color label behind a shape's fill and print it to a cell in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const themeColor = Api.ThemeColor('accent1');

const fill = Api.CreateSolidFill(themeColor);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
worksheet.AddShape("rect", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);

worksheet.GetRange("A12").SetValue("Theme name: " + themeColor.GetThemeName());