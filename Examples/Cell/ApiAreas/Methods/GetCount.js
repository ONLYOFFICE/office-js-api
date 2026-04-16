// Get a value that represents the number of objects in the collection in a spreadsheet.

// How to get collection objects count in a spreadsheet.

// Get the count for a range areas collection in a spreadsheet.

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