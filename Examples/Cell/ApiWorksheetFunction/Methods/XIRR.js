// Calculate the internal rate of return for a series of dated cash flows in a spreadsheet.

// How do I find the internal rate of return when cash flows occur on specific dates in a spreadsheet?

// Determine the annual rate of return based on irregular payment timing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let values = ["Values", "-$40,000.00", "$10,000.00", "$15,000.00", "$20,000.00"];
let dates = ["Dates", "1/1/2018", "4/1/2018", "8/1/2018", "12/1/2018"];

for (let i = 0; i < values.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(values[i]);
}
for (let j = 0; j < dates.length; j++) {
    worksheet.GetRange("B" + (j + 1)).SetValue(dates[j]);
}

worksheet.GetRange("B1").SetColumnWidth(15);
let range1 = worksheet.GetRange("A2:A5");
let range2 = worksheet.GetRange("B2:B5");
worksheet.GetRange("C5").SetValue(func.XIRR(range1, range2));