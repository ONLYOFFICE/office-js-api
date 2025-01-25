// This example changes the user protected range.
let worksheet = Api.GetActiveSheet();
worksheet.AddProtectedRange("protectedRange", "$A$1:$B$1").AddUser("userId", "name", "CanView");
let protectedRange = worksheet.GetProtectedRange("protectedRange");
let userInfo = protectedRange.GetUser("userId");
let userId = userInfo.GetId();
worksheet.GetRange("A3").SetValue("Id: " + userId);