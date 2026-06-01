// Calculate the modified internal rate of return for an investment with varying interest rates in a spreadsheet.

// What is the return rate on an investment with different borrowing and lending costs in a spreadsheet?

// Find the effective rate of return on cash flows with separate rates in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let values = ["Values", "-$40,000.00", "$10,000.00", "$15,000.00", "$20,000.00"];

for (let i = 0; i < values.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(values[i]);
}

worksheet.GetRange("B1").SetValue("Paid interest rate");
worksheet.GetRange("B2").SetValue(0.2);
worksheet.GetRange("C1").SetValue("Received interest rate");
worksheet.GetRange("C2").SetValue(0.23);

let range = worksheet.GetRange("A2:A5");
worksheet.GetRange("B5").SetValue(func.MIRR(range, 0.2, 0.23));