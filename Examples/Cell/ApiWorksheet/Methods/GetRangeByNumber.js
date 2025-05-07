// This example shows how to get an object that represents the selected range of the sheet using the row/column coordinates for the cell selection.

// How to get a range using its coordinates.

// Get range by number and set its value.

let worksheet = Api.GetActiveSheet();
worksheet.GetRangeByNumber(1, 2).SetValue("42");