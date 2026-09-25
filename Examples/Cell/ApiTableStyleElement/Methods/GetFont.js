// Access the font of the header row element of a custom table style in a spreadsheet.

// The font controls bold, italic, underline, strikethrough, and color; font size and family cannot be changed.

// Make the header row text bold and white, then apply the style to a formatted table in a spreadsheet.

let workbook = Api.GetActiveWorkbook();
let tableStyles = workbook.GetTableStyles();
let customStyle = tableStyles.Add('HeaderBlue');
let styleElements = customStyle.GetTableStyleElements();

let headerRow = styleElements.GetItem('xlHeaderRow');
let headerFont = headerRow.GetFont();
headerFont.SetBold(true);
headerFont.SetColor(Api.RGB(255, 255, 255));

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('Product');
worksheet.GetRange('B1').SetValue('Price');
worksheet.GetRange('A2').SetValue('Apples');
worksheet.GetRange('B2').SetValue(100);
worksheet.GetRange('A3').SetValue('Oranges');
worksheet.GetRange('B3').SetValue(150);

let table = worksheet.AddListObject('xlSrcRange', 'A1:B3');
table.SetTableStyle(customStyle.GetName());
