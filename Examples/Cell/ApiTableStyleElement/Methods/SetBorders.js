// Add grid borders to the whole table element of a custom table style in a spreadsheet.

// Each side of the element takes its own line style and color, so outer edges and inner gridlines can differ.

// Draw thin gray borders around and inside the table body in a spreadsheet.

let workbook = Api.GetActiveWorkbook();
let tableStyles = workbook.GetTableStyles();
let customStyle = tableStyles.Add('HeaderBlue');
let styleElements = customStyle.GetTableStyleElements();
let wholeTable = styleElements.GetItem('xlWholeTable');

let borderColor = Api.RGB(191, 191, 191);
wholeTable.SetBorders('Top', 'Thin', borderColor);
wholeTable.SetBorders('Bottom', 'Thin', borderColor);
wholeTable.SetBorders('InsideHorizontal', 'Thin', borderColor);
wholeTable.SetBorders('InsideVertical', 'Thin', borderColor);

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('Whole table borders set:');
worksheet.GetRange('B1').SetValue(wholeTable.GetHasFormat());
