// Break a multi-area selection into its individual ranges in a spreadsheet.

// How do I count the separate areas that make up a range in a spreadsheet?

// Tally the distinct sub-ranges within a selection and write the total to a cell.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1:D1");
range.SetValue("1");
range.Select();
let areas = range.GetAreas();
let count = areas.GetCount();
range = worksheet.GetRange("A5");
range.SetValue("The number of ranges in the areas: ");
range.AutoFit(false, true);
worksheet.GetRange("B5").SetValue(count);