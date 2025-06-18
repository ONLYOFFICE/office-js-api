// This example shows how to return a number shifted right by the specified number of bits. 

// How to get a result from bits right shift.

// Use function to calculate bitwise right shift operation.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.BITRSHIFT(13, 2));