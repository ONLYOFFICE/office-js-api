// Find out the class type of a theme object in a spreadsheet.

// How can I get the class type of a theme in a spreadsheet?

// Get the class type of a theme and display it in the spreadsheet.

const workbook = Api.GetActiveWorkbook();
const theme = workbook.GetTheme();
const classType = theme.GetClassType();

const worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('Theme class type: ' + classType);