// This example shows how to calculate predicted exponential growth by using existing data.

// How to calculate predicted exponential growth by using existing data.

// Use a function to calculate predicted exponential growth.

const worksheet = Api.GetActiveSheet();

// Configure function parameters
let data_array = [1289, 1590, 1652, 1107, 903]; 
let months_array = [1, 2, 3, 4, 5]

// Set data_array and months_array in cells
for (let i = 0; i < months_array.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(months_array[i]);
}
for (let i = 0; i < data_array.length; i++) {
  worksheet.GetRange("B" + (i + 1)).SetValue(data_array[i]);
  worksheet.GetRange("B" + (i + 1)).SetNumberFormat("$#,##0.00");
}

// Get the ranges for data_array and bins_array
let data_arrayRange = worksheet.GetRange("A1:A5");
let months_arrayRange = worksheet.GetRange("B1:B5");

// Get the worksheet function object
let func = Api.GetWorksheetFunction();

// Ensure the ranges are properly passed to the function
let growth = func.GROWTH(data_arrayRange, months_arrayRange);

// Print the growth result
worksheet.GetRange("D1").SetValue(growth);