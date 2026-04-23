// Calculate the arctangent of a point defined by x and y coordinates in a spreadsheet.

// Get the angle in radians from a pair of coordinates in a spreadsheet.

// Determine direction from the origin to a specific point in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ATAN2(1, -9));
