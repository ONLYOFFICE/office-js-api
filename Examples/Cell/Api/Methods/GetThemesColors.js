// Retrieve all available theme colors in a spreadsheet.

// How do I get a list of every theme color used in a spreadsheet?

// Display the full set of theme color names in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let themes = Api.GetThemesColors();
for (let i = 0; i < themes.length; ++i) {
    worksheet.GetRange("A" + (i + 1)).SetValue(themes[i]);
}