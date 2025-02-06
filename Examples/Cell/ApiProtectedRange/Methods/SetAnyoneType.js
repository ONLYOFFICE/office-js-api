// This example changes access type for anyone for protected range.
// How to set access type to the "can view" one.
// Make a protected range viewable for anyone.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.AddProtectedRange("protectedRange", "Sheet1!$A$1:$B$1");
var protectedRange = oWorksheet.GetProtectedRange("protectedRange");
protectedRange.SetAnyoneType("CanView");