// Count the total number of cells in a range in a spreadsheet.

// How do I find out how many cells are in a range in a spreadsheet?

// Write the cell count of a range into a separate cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
worksheet.GetRange("C1").SetValue("3");
let count = worksheet.GetRange("A1:C1").GetCount();
worksheet.GetRange("A4").SetValue("Count: ");
worksheet.GetRange("B4").SetValue(count);