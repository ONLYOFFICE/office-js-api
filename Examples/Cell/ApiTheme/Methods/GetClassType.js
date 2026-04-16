// Retrieve the class type of a theme in a spreadsheet.

// How to identify the class type of a theme in a spreadsheet?

// Obtain the class type identifier of a theme object in a spreadsheet.

const workbook = Api.GetActiveWorkbook();
const theme = workbook.GetTheme();
const classType = theme.GetClassType();

const worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('Theme class type: ' + classType);