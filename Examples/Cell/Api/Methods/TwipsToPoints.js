// Convert a measurement from twips into its equivalent value in points in a spreadsheet.

// How do I translate a twip-based size into points for use with drawing or layout properties in a spreadsheet?

// Express a twip value as points so it can be applied consistently to document elements in a spreadsheet.

const twips = 100;
const points = Api.TwipsToPoints(twips);
const text = twips + ' twips are equal to ' + points + ' points.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);