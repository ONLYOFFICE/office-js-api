// Convert pixels to english metric units in a spreadsheet.

// How to convert pixels to emus in a spreadsheet?

// Convert pixels to emus using the spreadsheet API.

const pixels = 1080;
const emus = Api.PixelsToEmus(pixels);
const text = pixels + ' pixels are equal to ' + emus + ' english metric units.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);