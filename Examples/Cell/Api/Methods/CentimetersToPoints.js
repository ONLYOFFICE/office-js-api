// Convert a measurement from centimeters to points and display the result in a spreadsheet.

// How do I translate centimeter values into points in a spreadsheet?

// Use a unit conversion to express a length in typographic points in a spreadsheet.

const centimeters = 1000;
const points = Api.CentimetersToPoints(centimeters);
const text = centimeters + ' centimeters are equal to ' + points + ' points.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);