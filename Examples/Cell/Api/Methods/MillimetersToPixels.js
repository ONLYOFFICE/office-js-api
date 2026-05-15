// Turn a millimeter measurement into pixels in a spreadsheet.

// How do I convert millimeters to pixel units in a spreadsheet?

// Show the pixel equivalent of a given millimeter value in a spreadsheet.

const millimeters = 100;
const pixels = Api.MillimetersToPixels(millimeters);
const text = millimeters + ' millimeters are equal to ' + pixels + ' pixels.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);