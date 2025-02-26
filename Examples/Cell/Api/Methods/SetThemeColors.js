// This example sets the theme colors to the current spreadsheet.

// How to get all theme colors and apply one of them.

// Apply one of the theme colors from the array of available ones.

var oWorksheet = Api.GetActiveSheet();
var themes = Api.GetThemesColors();
for (let i = 0; i < themes.length; ++i) {
	oWorksheet.GetRange("A" + (i + 1)).SetValue(themes[i]);
}
Api.SetThemeColors(themes[3]);
oWorksheet.GetRange("C3").SetValue("The 'Apex' theme colors were set to the current spreadsheet.");