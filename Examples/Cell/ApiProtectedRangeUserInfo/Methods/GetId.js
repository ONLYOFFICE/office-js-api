// This example changes the user protected range.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.AddProtectedRange("protectedRange", "$A$1:$B$1").AddUser("userId", "name", "CanView");
var protectedRange = oWorksheet.GetProtectedRange("protectedRange");
var userInfo = protectedRange.GetUser("userId");
var userId = userInfo.GetId();
oWorksheet.GetRange("A3").SetValue("Id: " + userId);