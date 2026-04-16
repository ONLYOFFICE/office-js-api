// Convert points to picas in a spreadsheet.

// How do I convert points to picas in a spreadsheet?

// Convert points to picas and display the result in a spreadsheet.

const points = 42;
const picas = Api.PointsToPicas(points);
const text = points + ' points are equal to ' + picas + ' picas.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);