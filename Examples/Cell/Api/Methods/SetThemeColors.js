// Apply a named color theme to change the overall visual style in a spreadsheet.

// How do I pick and activate one of the available color themes for the whole document in a spreadsheet?

// Update the document's palette by selecting a theme from the list of built-in options in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let themes = Api.GetThemesColors();
for (let i = 0; i < themes.length; ++i) {
    worksheet.GetRange("A" + (i + 1)).SetValue(themes[i]);
}
Api.SetThemeColors(themes[3]);
worksheet.GetRange("C3").SetValue("The 'Apex' theme colors were set to the current spreadsheet.");