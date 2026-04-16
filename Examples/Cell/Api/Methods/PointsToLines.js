// Convert points to lines in a spreadsheet.

// How can I convert points to lines in a spreadsheet?

// Convert points to lines in a spreadsheet.

const points = 100;
const lines = Api.PointsToLines(points);
const text = points + ' points are equal to ' + lines + ' lines.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);