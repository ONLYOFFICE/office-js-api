// This example shows how to get an object that represents the selected range of the sheet using the row/column coordinates for the cell selection.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRangeByNumber(1, 2).SetValue("42");