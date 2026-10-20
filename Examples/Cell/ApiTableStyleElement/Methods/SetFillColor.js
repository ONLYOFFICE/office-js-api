// Set the background color of the header row element of a custom table style in a spreadsheet.

// Passing null instead of a color clears the fill back to No Fill.

// Paint the header row dark blue and apply the style to a formatted table in a spreadsheet.

let workbook = Api.GetActiveWorkbook();
let tableStyles = workbook.GetTableStyles();
let customStyle = tableStyles.Add('HeaderBlue');
let styleElements = customStyle.GetTableStyleElements();
let headerRow = styleElements.GetItem('xlHeaderRow');

headerRow.SetFillColor(Api.RGB(31, 78, 121));

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('Product');
worksheet.GetRange('B1').SetValue('Price');
worksheet.GetRange('A2').SetValue('Apples');
worksheet.GetRange('B2').SetValue(100);
worksheet.GetRange('A3').SetValue('Oranges');
worksheet.GetRange('B3').SetValue(150);

let table = worksheet.AddListObject('xlSrcRange', 'A1:B3');
table.SetTableStyle(customStyle.GetName());
