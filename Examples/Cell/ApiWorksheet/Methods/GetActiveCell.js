// This example shows how to get an object that represents an active cell.
// How to get selected active cell.
// Get an active cell and insert data to it.
var oWorksheet = Api.GetActiveSheet();
var oActiveCell = oWorksheet.GetActiveCell();
oActiveCell.SetValue("This sample text was placed in an active cell.");