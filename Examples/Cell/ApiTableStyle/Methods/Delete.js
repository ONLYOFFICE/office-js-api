// Delete a custom table style from a workbook in a spreadsheet.

// A formatted table that used the deleted style switches to the default table style of the workbook.

// Apply a custom style to a table, delete the style and show the style the table uses afterwards in a spreadsheet.

let workbook = Api.GetActiveWorkbook();
let tableStyles = workbook.GetTableStyles();
let customStyle = tableStyles.Add('Temporary Style');
customStyle.GetTableStyleElements('xlHeaderRow').SetFillColor(Api.RGB(192, 0, 0));

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('Product');
worksheet.GetRange('B1').SetValue('Price');
worksheet.GetRange('A2').SetValue('Apples');
worksheet.GetRange('B2').SetValue(100);
let table = worksheet.AddListObject('xlSrcRange', 'A1:B2');
table.SetTableStyle(customStyle.GetName());

customStyle.Delete();
worksheet.GetRange('D1').SetValue('Style found after delete:');
worksheet.GetRange('E1').SetValue(tableStyles.GetItem('Temporary Style') !== null);
worksheet.GetRange('D2').SetValue('Table style now:');
worksheet.GetRange('E2').SetValue(table.GetTableStyle());
