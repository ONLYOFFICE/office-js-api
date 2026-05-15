// Calculate the internal rate of return for cash flows in a spreadsheet.

// How do I find the rate of return on a series of investments in a spreadsheet?

// Determine the yield from a sequence of cash flows in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let values = ["Values", "-$40,000.00", "$10,000.00", "$15,000.00", "$20,000.00"];

for (let i = 0; i < values.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(values[i]);
}

let range = worksheet.GetRange("A2:A5");
worksheet.GetRange("B5").SetValue(func.IRR(range));