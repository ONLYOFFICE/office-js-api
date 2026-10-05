// Check whether a table style ships with the application or was created by the user in a spreadsheet.

// A style added through the table styles collection is never built-in, while a preset style such as TableStyleMedium2 always is.

// Compare the built-in flag of a custom style and a preset style in a spreadsheet.

let workbook = Api.GetActiveWorkbook();
let tableStyles = workbook.GetTableStyles();
let customStyle = tableStyles.Add('HeaderBlue');
let builtInStyle = tableStyles.GetItem('TableStyleMedium2');

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('Custom style is built-in:');
worksheet.GetRange('B1').SetValue(customStyle.GetBuiltIn());
worksheet.GetRange('A2').SetValue('Preset style is built-in:');
worksheet.GetRange('B2').SetValue(builtInStyle.GetBuiltIn());
