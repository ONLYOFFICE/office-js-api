// This example shows how to return numbers in a linear trend matching known data points, using the least squares method.

// How to get numbers in a linear trend using the least squares method.

// Use a function to find a linear trend using data points by the least squares method.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let month = ["Month", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sales = ["Sales", "$1,500.00", "$1,230.00", "$1,700.00", "$1,000.00", "$980.00", "$1,470.00", "$1,560.00", "$1,640.00", "$1,420.00", "$1,100.00"];

for (let i = 0; i < month.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(month[i]);
}
for (let j = 0; j < sales.length; j++) {
    worksheet.GetRange("B" + (j + 1)).SetValue(sales[j]);
}

worksheet.GetRange("C1").SetValue("Trend");
let range1 = worksheet.GetRange("B2:B11");
let range2 = worksheet.GetRange("A2:A11");
worksheet.GetRange("C2:C11").SetValue(func.TREND(range1, range2));