// This example sets the row height value.

// How to set a row height of cells.

// Get a range and specify its row height.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetRowHeight(32);