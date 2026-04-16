// Return the arctangent of the specified x and y coordinates, in radians between -Pi and Pi, excluding -Pi in a spreadsheet.

// How to get an arctangent of the specified x and y coordinates in a spreadsheet.

// Use function to get an arctangent of the specified x and y coordinates in radians in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ATAN2(1, -9));