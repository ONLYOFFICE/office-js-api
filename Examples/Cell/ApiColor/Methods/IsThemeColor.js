// Determine whether a color is linked to the document theme in a spreadsheet.

// How do I check if a given color comes from the theme palette rather than a custom value in a spreadsheet?

// Compare a plain hex color and a theme color to verify which one is theme-based in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const hexColor = Api.HexColor('#FF0000');
const themeColor = Api.ThemeColor('accent1');

const fill = Api.CreateSolidFill(hexColor);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape("flowChartMagneticTape", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);

worksheet.GetRange("A12").SetValue("Is hexColor a theme color? " + hexColor.IsThemeColor());
worksheet.GetRange("A14").SetValue("Is themeColor a theme color? " + themeColor.IsThemeColor());