// Express a pixel count as english metric units in a spreadsheet.

// How do I turn a number of pixels into english metric units in a spreadsheet?

// Store the equivalent english metric unit value for a pixel measurement in a spreadsheet.

const pixels = 1080;
const emus = Api.PixelsToEmus(pixels);
const text = pixels + ' pixels are equal to ' + emus + ' english metric units.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);