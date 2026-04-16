// Get the name of the current workbook theme in a spreadsheet.

// How to get the name for a theme in a spreadsheet?

// Get the name and display the result in a spreadsheet.

const workbook = Api.GetActiveWorkbook();
const theme = workbook.GetTheme();
const themeName = theme.GetName();

const worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('Theme name: ' + themeName);