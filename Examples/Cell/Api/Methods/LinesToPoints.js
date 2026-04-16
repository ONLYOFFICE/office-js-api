// Convert lines to points in a spreadsheet.

// How to convert lines to points in a spreadsheet?

// Convert lines to points using the spreadsheet API.

const lines = 100;
const points = Api.LinesToPoints(lines);
const text = lines + ' lines are equal to ' + points + ' points.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);