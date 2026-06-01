// Convert a measurement from points to centimeters in a spreadsheet.

// How do I express a point value as centimeters in a spreadsheet?

// Get the centimeter equivalent of a given number of points in a spreadsheet.

const points = 1000;
const centimeters = Api.PointsToCentimeters(points);
const text = points + ' points are equal to ' + centimeters + ' centimeters.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);