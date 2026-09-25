// Read how many rows one stripe of a table style covers in a spreadsheet.

// A stripe element that has never been sized covers one row or column.

// Compare the first row stripe size before and after it is changed in a spreadsheet.

let workbook = Api.GetActiveWorkbook();
let tableStyles = workbook.GetTableStyles();
let customStyle = tableStyles.Add('Wide Stripes');
let rowStripe = customStyle.GetTableStyleElements('xlRowStripe1');

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('Stripe size before:');
worksheet.GetRange('B1').SetValue(rowStripe.GetStripeSize());

rowStripe.SetStripeSize(3);
worksheet.GetRange('A2').SetValue('Stripe size after:');
worksheet.GetRange('B2').SetValue(rowStripe.GetStripeSize());
