// This example shows how to calculate or predict a future value based on existing (historical) values by using the AAA version of the Exponential Smoothing (ETS) algorithm.

// How to calculate or predict a future value based on existing (historical) values.

// Use an AAA version of the Exponential Smoothing (ETS) algorithm to calculate or predict a future value based on existing values.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let dates = ["10/1/2017", "11/1/2017", "12/1/2017", "1/1/2018", "2/1/2018", "3/1/2018"];
let numbers = [12558, 14356, 16345, 18678, 14227];

for (let i = 0; i < dates.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(dates[i]);
}
for (let j = 0; j < numbers.length; j++) {
    worksheet.GetRange("B" + (j + 1)).SetValue(numbers[j]);
}

worksheet.GetRange("A1").SetColumnWidth(15);
let range1 = worksheet.GetRange("B1:B5");
let range2 = worksheet.GetRange("A1:A5");
worksheet.GetRange("B6").SetValue(func.FORECAST_ETS("3/1/2018", range1, range2, 0, 1, 1));