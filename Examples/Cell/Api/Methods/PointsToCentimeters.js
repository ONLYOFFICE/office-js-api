// This example shows how to convert points to centimeters.

const points = 1000;
const centimeters = Api.PointsToCentimeters(points);
const text = points + ' points are equal to ' + centimeters + ' centimeters.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);
