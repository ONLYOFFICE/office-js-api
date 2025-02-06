// This example shows how to get a list of all the available theme colors for the spreadsheet.
// Get all theme colors from the worksheet.
// List all available theme colors.
var oWorksheet = Api.GetActiveSheet();
var themes = Api.GetThemesColors();
for (let i = 0; i < themes.length; ++i) {
	oWorksheet.GetRange("A" + (i + 1)).SetValue(themes[i]);
}