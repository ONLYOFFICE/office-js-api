// Turn an inch measurement into points in a spreadsheet.

// How do I convert a size given in inches to points in a spreadsheet?

// Show the equivalent point value for a given number of inches in a spreadsheet.

const inches = 100;
const points = Api.InchesToPoints(inches);
const text = inches + ' inches are equal to ' + points + ' points.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);