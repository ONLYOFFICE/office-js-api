// This example sets the width of all the columns in the range.

// How to make a cell column wider.

// Get a range and set its column width.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetColumnWidth(20);