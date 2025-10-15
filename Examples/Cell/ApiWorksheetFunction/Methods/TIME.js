// This example shows how to convert hours, minutes and seconds given as numbers to a serial number, formatted with the time format.

// How to create a serial number indicating hours, minutes and seconds.

// Use a function to convert hours, minutes and seconds to serial numbers.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TIME(23, 4, 39));