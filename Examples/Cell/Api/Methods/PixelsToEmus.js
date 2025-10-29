// This example shows how to convert pixels to english metric units.

const pixels = 1080;
const emus = Api.PixelsToEmus(pixels);
const text = pixels + ' pixels are equal to ' + emus + ' english metric units.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);
