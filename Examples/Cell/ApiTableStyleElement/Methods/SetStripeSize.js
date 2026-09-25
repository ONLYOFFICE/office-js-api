// Make each stripe of a custom table style cover several rows in a spreadsheet.

// The size is an integer from 1 to 9; the first and second stripes alternate with their own sizes.

// Band a formatted table as two plain rows followed by one shaded row in a spreadsheet.

let workbook = Api.GetActiveWorkbook();
let tableStyles = workbook.GetTableStyles();
let customStyle = tableStyles.Add('Two Plus One');
let elements = customStyle.GetTableStyleElements();
elements.GetItem('xlRowStripe1').SetStripeSize(2);
elements.GetItem('xlRowStripe2').SetFillColor(Api.RGB(221, 235, 247));

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('Month');
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
for (let i = 0; i < months.length; i++) {
    worksheet.GetRange('A' + (i + 2)).SetValue(months[i]);
}

let table = worksheet.AddListObject('xlSrcRange', 'A1:A7');
table.SetTableStyle(customStyle.GetName());
