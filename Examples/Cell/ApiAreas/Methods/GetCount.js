// Count how many separate ranges make up a multi-area selection in a spreadsheet.

// How do I find the total number of distinct ranges within a multi-area selection in a spreadsheet?

// Determine the size of an areas collection to loop over each range individually in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1:D1");
range.SetValue("1");
range.Select();
let areas = range.GetAreas();
let count = areas.GetCount();
range = worksheet.GetRange('A5');
range.SetValue("The number of ranges in the areas: ");
range.AutoFit(false, true);
worksheet.GetRange('B5').SetValue(count);