// Fetch one formatting element from a table style by its type in a spreadsheet.

// The type is one of the table style element names, such as xlWholeTable, xlHeaderRow, or xlFirstColumn.

// Retrieve the whole table element and the first column element of a custom style in a spreadsheet.

let workbook = Api.GetActiveWorkbook();
let tableStyles = workbook.GetTableStyles();
let customStyle = tableStyles.Add('HeaderBlue');
let styleElements = customStyle.GetTableStyleElements();

let wholeTable = styleElements.GetItem('xlWholeTable');
let firstColumn = styleElements.GetItem('xlFirstColumn');

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('Whole table element found:');
worksheet.GetRange('B1').SetValue(wholeTable !== null);
worksheet.GetRange('A2').SetValue('First column element found:');
worksheet.GetRange('B2').SetValue(firstColumn !== null);
