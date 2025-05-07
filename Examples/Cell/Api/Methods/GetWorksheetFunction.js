// This example shows how to use built-in functions using worksheet function objects.

// How to use system functions in a spreadsheets.

// Use built-in functions in a worksheet.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.ASC("text"));