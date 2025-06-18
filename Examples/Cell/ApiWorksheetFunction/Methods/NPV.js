// This example shows how to return the net present value of an investment based on a discount rate and a series of future payments (negative values) and income (positive values).

// How to get the net present value of an investment.

// Use a function to get the net present value of an investment based on different parameters.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue("Rate");
worksheet.GetRange("A2").SetValue(0.05);
let values = ["Payment", -10000, 3000, 4500, 6000];

for (let i = 0; i < values.length; i++) {
    worksheet.GetRange("B" + (i + 1)).SetValue(values[i]);
}
let range = worksheet.GetRange("B2:B5");
worksheet.GetRange("B6").SetValue(func.NPV(0.05, range));