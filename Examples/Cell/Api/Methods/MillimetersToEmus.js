// Turn a millimeter measurement into EMUs in a spreadsheet.

// How do I convert millimeters to EMU units in a spreadsheet?

// Show the EMU equivalent of a given millimeter value in a spreadsheet.

const millimeters = 0.2001;
const emus = Api.MillimetersToEmus(millimeters);
const text = millimeters + ' millimeters are equal to ' + emus + ' emus (value is rounded to integer).';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);