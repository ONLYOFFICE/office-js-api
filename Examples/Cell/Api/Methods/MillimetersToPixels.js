// This example shows how to convert millimeters to pixels.

const millimeters = 100;
const pixels = Api.MillimetersToPixels(millimeters);
const text = millimeters + ' millimeters are equal to ' + pixels + ' pixels.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);
