// Convert a measurement from points to inches in a spreadsheet.

// How do I express a point value as inches in a spreadsheet?

// Get the inch equivalent of a given number of points in a spreadsheet.

const points = 1000;
const inches = Api.PointsToInches(points);
const text = points + ' points are equal to ' + inches + ' inches.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);