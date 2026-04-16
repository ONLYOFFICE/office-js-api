// Convert millimeters to emus in a spreadsheet.

// How to convert millimeters to emus in a spreadsheet?

// Convert millimeters to emus using the spreadsheet API.

const millimeters = 0.2001;
const emus = Api.MillimetersToEmus(millimeters);
const text = millimeters + ' millimeters are equal to ' + emus + ' emus (value is rounded to integer).';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);