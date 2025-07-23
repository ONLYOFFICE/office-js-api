// This example shows how to return the arctangent of the specified x and y coordinates, in radians between -Pi and Pi, excluding -Pi.

// How to get an arctangent of the specified x and y coordinates.

// Use function to get an arctangent of the specified x and y coordinates in radians.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ATAN2(1, -9));