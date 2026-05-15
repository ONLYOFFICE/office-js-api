// Retrieve a specific range from a multi-area selection by its position in a spreadsheet.

// How do I access one particular range out of a multi-area selection in a spreadsheet?

// Pull out an individual area by index to work with it separately in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1:D1");
range.SetValue("1");
range.Select();
let areas = range.GetAreas();
let item = areas.GetItem(1);
range = worksheet.GetRange('A5');
range.SetValue("The first item from the areas: ");
range.AutoFit(false, true);
worksheet.GetRange('B5').Paste(item);