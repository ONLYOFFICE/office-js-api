// Create a new custom table style in a workbook in a spreadsheet.

// A custom style starts blank, with no fill or border formatting on any of its elements, and is not marked as a built-in style.

// Apply the new style to a formatted table by name in a spreadsheet.

let workbook = Api.GetActiveWorkbook();
let tableStyles = workbook.GetTableStyles();
let customStyle = tableStyles.Add('ReportStyle');

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('Product');
worksheet.GetRange('B1').SetValue('Price');
worksheet.GetRange('A2').SetValue('Apples');
worksheet.GetRange('B2').SetValue(100);
worksheet.GetRange('A3').SetValue('Oranges');
worksheet.GetRange('B3').SetValue(150);

let table = worksheet.AddListObject('xlSrcRange', 'A1:B3');
table.SetTableStyle(customStyle.GetName());
