// This example shows how to get the theme color name used in a shape fill.

const worksheet = Api.GetActiveSheet();
const themeColor = Api.ThemeColor('accent1');

const fill = Api.CreateSolidFill(themeColor);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
worksheet.AddShape("rect", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);

worksheet.GetRange("A12").SetValue("Theme name: " + themeColor.GetThemeName());
