// This example shows how to return the arctangent of the specified x and y coordinates, in radians between -Pi and Pi, excluding -Pi.

// How to get an arctangent of the specified x and y coordinates.

// Use function to get an arctangent of the specified x and y coordinates in radians.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ATAN2(1, -9));