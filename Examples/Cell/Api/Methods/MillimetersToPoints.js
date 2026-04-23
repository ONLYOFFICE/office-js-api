// Turn a millimeter measurement into points in a spreadsheet.

// How do I convert millimeters to points in a spreadsheet?

// Show the point equivalent of a given millimeter value in a spreadsheet.

const millimeters = 100;
const points = Api.MillimetersToPoints(millimeters);
const text = millimeters + ' millimeters are equal to ' + points + ' points.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);