// Read the name of a custom table style in a spreadsheet.

// The name is set once when the style is created and identifies it in the table styles collection.

// Display the name of a newly created style in a cell in a spreadsheet.

let workbook = Api.GetActiveWorkbook();
let tableStyles = workbook.GetTableStyles();
let customStyle = tableStyles.Add('HeaderBlue');

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('Style name:');
worksheet.GetRange('B1').SetValue(customStyle.GetName());
