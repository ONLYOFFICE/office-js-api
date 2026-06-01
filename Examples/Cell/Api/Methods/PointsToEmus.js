// Convert a measurement from points to English metric units in a spreadsheet.

// How do I express a point value as English metric units in a spreadsheet?

// Get the EMU equivalent of a given number of points in a spreadsheet.

const points = 1000;
const emus = Api.PointsToEmus(points);
const text = points + ' points are equal to ' + emus + ' english metric units.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);