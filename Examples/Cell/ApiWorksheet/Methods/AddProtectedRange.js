// This example adds a new protected range.
// How to add a range which is protected specifing range.
// Insert a protected range to the worksheet.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
oWorksheet.AddProtectedRange("protectedRange", "Sheet1!$A$1:$B$1");