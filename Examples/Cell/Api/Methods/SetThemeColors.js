// This example sets the theme colors to the current spreadsheet.
let worksheet = Api.GetActiveSheet();
let themes = Api.GetThemesColors();
for (let i = 0; i < themes.length; ++i) {
    worksheet.GetRange("A" + (i + 1)).SetValue(themes[i]);
}
Api.SetThemeColors(themes[3]);
worksheet.GetRange("C3").SetValue("The 'Apex' theme colors were set to the current spreadsheet.");