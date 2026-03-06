// This example shows how to get the class type of an ApiTheme object.

const workbook = Api.GetActiveWorkbook();
const theme = workbook.GetTheme();
const classType = theme.GetClassType();

const worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('Theme class type: ' + classType);
