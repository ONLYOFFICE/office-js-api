// Convert a measurement from points to lines in a spreadsheet.

// How do I express a point value as lines in a spreadsheet?

// Get the line-unit equivalent of a given number of points in a spreadsheet.

const points = 100;
const lines = Api.PointsToLines(points);
const text = points + ' points are equal to ' + lines + ' lines.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);