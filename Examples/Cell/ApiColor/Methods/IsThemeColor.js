// Check if the color used in a shape fill is a theme color in a spreadsheet.

// How can I is theme color using a color in a spreadsheet?

// Is theme color for a color in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const hexColor = Api.HexColor('#FF0000');
const themeColor = Api.ThemeColor('accent1');

const fill = Api.CreateSolidFill(hexColor);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape("flowChartMagneticTape", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);

worksheet.GetRange("A12").SetValue("Is hexColor a theme color? " + hexColor.IsThemeColor());
worksheet.GetRange("A14").SetValue("Is themeColor a theme color? " + themeColor.IsThemeColor());