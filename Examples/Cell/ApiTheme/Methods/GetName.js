// Retrieve the name of the active workbook theme in a spreadsheet.

// How do I find out what the current theme is called in a spreadsheet?

// Read the theme name and write it to a cell in a spreadsheet.

const workbook = Api.GetActiveWorkbook();
const theme = workbook.GetTheme();
const themeName = theme.GetName();

const worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('Theme name: ' + themeName);