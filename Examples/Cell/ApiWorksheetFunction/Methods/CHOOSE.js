// This example shows how to choose a value or action to perform from a list of values, based on an index number.

// How to choose a value or action to perform from a list of values, based on an index number.

// Use function to choose a value or action to perform from a list of values, based on an index number.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.CHOOSE(2, 3, 4, 89, 76, 0));