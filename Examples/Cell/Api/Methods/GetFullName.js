// This example shows how to get the full name of the currently opened file.
// How to get a full name of the file.
// Insert a full name of the file into a cell.
var oWorksheet = Api.GetActiveSheet();
var sName = Api.GetFullName();
oWorksheet.GetRange("B1").SetValue("File name: " + sName);