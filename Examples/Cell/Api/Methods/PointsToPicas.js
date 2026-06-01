// Convert a measurement from points to picas in a spreadsheet.

// How do I express a point value as picas in a spreadsheet?

// Get the pica equivalent of a given number of points in a spreadsheet.

const points = 42;
const picas = Api.PointsToPicas(points);
const text = points + ' points are equal to ' + picas + ' picas.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);