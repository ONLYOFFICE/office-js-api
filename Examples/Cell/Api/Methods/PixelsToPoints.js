// This example shows how to convert pixels to points.

const pixels = 100;
const points = Api.PixelsToPoints(pixels);
const text = pixels + ' pixels are equal to ' + points + ' points.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);
