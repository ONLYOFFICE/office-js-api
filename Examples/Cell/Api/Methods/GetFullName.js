// This example shows how to get the full name of the currently opened file.
var oWorksheet = Api.GetActiveSheet();
var sName = Api.GetFullName();
oWorksheet.GetRange("B1").SetValue("File name: " + sName);