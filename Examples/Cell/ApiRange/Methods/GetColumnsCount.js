// This example shows how to get a count of columns in the specified range.

// How to get a count of columns in the range.

// Get a count of columns in the range and display it in another cell.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:E2");
range.SetValue("I was selected");
worksheet.GetRange("A3").SetValue("Columns count in the selected range should be 5: " + range.GetColumnsCount());