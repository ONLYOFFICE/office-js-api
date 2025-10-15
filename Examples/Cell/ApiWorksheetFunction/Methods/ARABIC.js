// This example shows how to convert a Roman numeral to Arabic.

// How to convert numbers to Arabic numerical.

// Use function to convert numbers to Arabic numerical.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ARABIC("MCCL"));