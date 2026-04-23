// Turn a line count into a point measurement in a spreadsheet.

// How do I convert a number of lines into points in a spreadsheet?

// Show the point equivalent of a given number of lines in a spreadsheet.

const lines = 100;
const points = Api.LinesToPoints(lines);
const text = lines + ' lines are equal to ' + points + ' points.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);