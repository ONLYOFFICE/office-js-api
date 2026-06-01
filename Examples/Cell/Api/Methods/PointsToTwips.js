// Convert a measurement from points to twips in a spreadsheet.

// How do I express a point value as twips in a spreadsheet?

// Get the twip equivalent of a given number of points in a spreadsheet.

const points = 1000;
const twips = Api.PointsToTwips(points);
const text = points + ' points are equal to ' + twips + ' twips.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);