// This example shows how to convert millimeters to emus.

const millimeters = 0.2001;
const emus = Api.MillimetersToEmus(millimeters);
const text = millimeters + ' millimeters are equal to ' + emus + ' emus (value is rounded to integer).';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);
