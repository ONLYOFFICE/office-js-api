// This example changes the user protected range.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.AddProtectedRange("protectedRange", "$A$1:$B$1").AddUser("userId", "name", "CanView");
var protectedRange = oWorksheet.GetProtectedRange("protectedRange");
var userInfo = protectedRange.GetUser("userId");
var userType = userInfo.GetType();
oWorksheet.GetRange("A3").SetValue("Type: " + userType);