// Convert a measurement from points to millimeters in a spreadsheet.

// How do I express a point value as millimeters in a spreadsheet?

// Get the millimeter equivalent of a given number of points in a spreadsheet.

const points = 100;
const millimeters = Api.PointsToMillimeters(points);
const text = points + ' points are equal to ' + millimeters + ' millimeters.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);