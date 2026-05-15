// Display a custom value when a formula produces an error in a spreadsheet.

// How do I handle errors in calculations and show a default value in a spreadsheet?

// Catch formula errors and replace them with a specified message or value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let stock = ["Stock", 0, 84];
let values = ["Total value", "$5.43", "$297.36"];
worksheet.GetRange("C1").SetValue("Unit Price");

for (let i = 0; i < stock.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(stock[i]);
}
for (let j = 0; j < values.length; j++) {
    worksheet.GetRange("B" + (j + 1)).SetValue(values[j]);
}
for (let n = 1; n < values.length; n++) {
    let value1 = worksheet.GetRange("B" + (n + 1)).GetValue();
    let value2 = worksheet.GetRange("A" + (n + 1)).GetValue();
    worksheet.GetRange("C" + (n + 1)).SetValue(func.IFERROR(value1/value2, "Out of stock"));
}