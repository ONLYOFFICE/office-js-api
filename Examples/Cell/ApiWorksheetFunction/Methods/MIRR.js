// This example shows how to return the internal rate of return for a series of periodic cash flows, considering both cost of investment and interest on reinvestment of cash.

// How to get the internal rate of return for a series of periodic cash flows.

// Use a function to calculate the internal rate of return.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
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