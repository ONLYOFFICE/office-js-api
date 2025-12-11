// This example shows how to convert emus to millimeters.

const emus = 780000;
const millimeters = Api.EmusToMillimeters(emus);
const text = emus + ' emus are equal to ' + millimeters + ' millimeters.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);
