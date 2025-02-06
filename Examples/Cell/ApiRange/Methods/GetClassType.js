// This example gets a class type and inserts it into the table.
// How to get a class type of ApiRange.
// Get a class type of ApiRange and display it in the worksheet.
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1");
oRange.SetValue("This is just a sample text in the cell A1.");
var sClassType = oRange.GetClassType();
oWorksheet.GetRange('A3').SetValue("Class type: " + sClassType);