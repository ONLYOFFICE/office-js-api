// This example shows how to convert millimeters to points.

const millimeters = 100;
const points = Api.MillimetersToPoints(millimeters);
const text = millimeters + ' millimeters are equal to ' + points + ' points.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);
