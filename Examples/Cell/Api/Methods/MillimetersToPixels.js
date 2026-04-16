// Convert millimeters to pixels in a spreadsheet.

// How do I convert millimeters to pixels in a spreadsheet?

// Convert millimeters to pixels and display the result in a spreadsheet.

const millimeters = 100;
const pixels = Api.MillimetersToPixels(millimeters);
const text = millimeters + ' millimeters are equal to ' + pixels + ' pixels.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);