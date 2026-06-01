// Read the class type of the active workbook theme in a spreadsheet.

// How do I identify what type of object a theme is in a spreadsheet?

// Confirm the category of a theme object and write the result to a cell in a spreadsheet.

const workbook = Api.GetActiveWorkbook();
const theme = workbook.GetTheme();
const classType = theme.GetClassType();

const worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('Theme class type: ' + classType);