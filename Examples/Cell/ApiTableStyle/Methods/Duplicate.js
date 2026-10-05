// Create a custom copy of a built-in table style in a spreadsheet.

// The copy keeps all the formatting and gallery settings of the original and can be changed without affecting it.

// Copy TableStyleMedium2, give the copy a dark red header and apply it to a formatted table in a spreadsheet.

let workbook = Api.GetActiveWorkbook();
let tableStyles = workbook.GetTableStyles();
let copy = tableStyles.GetItem('TableStyleMedium2').Duplicate('Medium2 Red Header');
copy.GetTableStyleElements('xlHeaderRow').SetFillColor(Api.RGB(128, 0, 0));

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('Product');
worksheet.GetRange('B1').SetValue('Price');
worksheet.GetRange('A2').SetValue('Apples');
worksheet.GetRange('B2').SetValue(100);
worksheet.GetRange('A3').SetValue('Oranges');
worksheet.GetRange('B3').SetValue(150);

let table = worksheet.AddListObject('xlSrcRange', 'A1:B3');
table.SetTableStyle(copy.GetName());
