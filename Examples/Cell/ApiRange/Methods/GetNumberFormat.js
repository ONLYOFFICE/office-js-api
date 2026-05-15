// Read the number format code applied to a cell range in a spreadsheet.

// How do I find out what number format is set on a range in a spreadsheet?

// Inspect the formatting pattern a range uses to display its values in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B2");
range.SetValue(3);
let format = range.GetNumberFormat();
worksheet.GetRange("B3").SetValue("Number format: " + format);