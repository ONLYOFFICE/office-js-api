// This example gets an Id of a protected range user.
// How to get a user info of a protected range and show its Id.
// Get a user id of a protected range and add it to the worksheet.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.AddProtectedRange("protectedRange", "$A$1:$B$1").AddUser("userId", "name", "CanView");
var protectedRange = oWorksheet.GetProtectedRange("protectedRange");
var userInfo = protectedRange.GetUser("userId");
var userId = userInfo.GetId();
oWorksheet.GetRange("A3").SetValue("Id: " + userId);