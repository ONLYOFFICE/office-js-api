// This example changes the user protected range.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.AddProtectedRange("protectedRange", "Sheet1!$A$1:$B$1");
var protectedRange = oWorksheet.GetProtectedRange("protectedRange");
protectedRange.AddUser("userId", "name", "CanView");
var userInfo = protectedRange.GetUser("userId");
oWorksheet.GetRange("A3").SetValue("User name: ", userInfo.GetName());