// This example changes the user protected range.
var oWorksheet = Api.GetActiveSheet();
var wsName = oWorksheet.GetName();
var protectedRange = Api.AddProtectedRange("protectedRange", wsName + "!$A$1:$B$1");
protectedRange.AddUser("userId", "name", "CanView");
var userInfo = protectedRange.GetUser("userId");
var userName = userInfo.GetName();
oWorksheet.GetRange("A3").SetValue("Name: " + userName);