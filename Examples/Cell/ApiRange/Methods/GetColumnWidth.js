// This example shows how to get the column width value.

// How to get width of a range column.

// Get a range, get its column width and show it in the worksheet.

let worksheet = Api.GetActiveSheet();
let width = worksheet.GetRange("A1").GetColumnWidth();
worksheet.GetRange("A1").SetValue("Width: ");
worksheet.GetRange("B1").SetValue(width);