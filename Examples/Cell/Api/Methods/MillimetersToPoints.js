// Convert millimeters to points in a spreadsheet.

// How do I convert millimeters to points in a spreadsheet?

// Convert millimeters to points and display the result in a spreadsheet.

const millimeters = 100;
const points = Api.MillimetersToPoints(millimeters);
const text = millimeters + ' millimeters are equal to ' + points + ' points.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);