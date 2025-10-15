// This example shows how to convert inches to points.

const inches = 100;
const points = Api.InchesToPoints(inches);
const text = inches + ' inches are equal to ' + points + ' points.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);
