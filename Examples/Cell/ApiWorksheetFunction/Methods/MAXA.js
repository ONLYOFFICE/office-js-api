// This example shows how to return the largest value in a set of values. Does not ignore logical values and text.

// How to get a maximum from a list including text and logical values.

// Use a function to find a maximum from a list of objects.

const worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:A5").GetValue();
let func = Api.GetWorksheetFunction();
let maxA = func.MAX(23, 45, true, "text", 0.89);
worksheet.GetRange("C1").SetValue(maxA);
