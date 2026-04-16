// Convert centimeters to points in a spreadsheet.

// How can I convert centimeters to points in a spreadsheet?

// Convert centimeters to points in a spreadsheet.

const centimeters = 1000;
const points = Api.CentimetersToPoints(centimeters);
const text = centimeters + ' centimeters are equal to ' + points + ' points.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);