// Get an object that represents the selected range of the sheet using the row/column coordinates for the cell selection in a spreadsheet.

// How to get a range using its coordinates in a spreadsheet.

// Get range by number and set its value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRangeByNumber(1, 2).SetValue("42");