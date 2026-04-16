// Return the arccosine of a number, in radians in the range from 0 to Pi. The arccosine is the angle whose cosine is a number specified in the parameters in a spreadsheet.

// How to get an arccosine of a number and display it in the worksheet.

// Get a function that gets arccosine of a number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ACOS(0));