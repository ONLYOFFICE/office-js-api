// This example shows how to get a count of rows in the specified range.

// How to get a count of rows in the range.

// Get a count of rows in the range and display it in another cell.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:C4");
range.SetValue("I was selected");
worksheet.GetRange("A5").SetValue("Rows count in the selected range should be 4: " + range.GetRowsCount());
