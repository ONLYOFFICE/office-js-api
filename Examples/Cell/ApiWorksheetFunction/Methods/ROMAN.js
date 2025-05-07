// This example shows how to convert an arabic numeral to a roman numeral in the string format.

// How to get roman numbers from arabic.

// Use a function to convert numbers from arabic numeral to roman.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.ROMAN(1250, 4));