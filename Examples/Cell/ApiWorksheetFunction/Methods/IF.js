// This example shows how to check whether a condition is met, and returns one value if true, and another value if false.

// How to check a condition.

// Use a function to use IF condition checker.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.IF("12<100", 0, 1));