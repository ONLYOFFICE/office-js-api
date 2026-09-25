// Show a custom table style in the table style gallery in a spreadsheet.

// Making a style available lets users pick it from the gallery when formatting a table.

// Turn on table style visibility for a custom style and confirm the change in a spreadsheet.

let workbook = Api.GetActiveWorkbook();
let tableStyles = workbook.GetTableStyles();
let customStyle = tableStyles.Add('HeaderBlue');

customStyle.SetShowAsAvailableTableStyle(true);

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('Available for tables:');
worksheet.GetRange('B1').SetValue(customStyle.GetShowAsAvailableTableStyle());
