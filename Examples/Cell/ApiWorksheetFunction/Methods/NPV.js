// Calculate the net present value of an investment using a discount rate in a spreadsheet.

// How do I find the net present value of future cash flows in a spreadsheet?

// Evaluate an investment by discounting future payments and income in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue("Rate");
worksheet.GetRange("A2").SetValue(0.05);
let values = ["Payment", -10000, 3000, 4500, 6000];

for (let i = 0; i < values.length; i++) {
    worksheet.GetRange("B" + (i + 1)).SetValue(values[i]);
}
let range = worksheet.GetRange("B2:B5");
worksheet.GetRange("B6").SetValue(func.NPV(0.05, range));