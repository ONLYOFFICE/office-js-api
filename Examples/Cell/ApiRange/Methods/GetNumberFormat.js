// This example shows how to get a value that represents the format code for the current range.

// How to find out a number format of a range.

// Get a range, get its cell number format and show it in the worksheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B2");
range.SetValue(3);
let format = range.GetNumberFormat();
worksheet.GetRange("B3").SetValue("Number format: " + format);