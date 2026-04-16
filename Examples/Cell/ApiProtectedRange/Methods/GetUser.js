// Get an user of a protected range in a spreadsheet.

// How to get an user information of the protected range.

// Get an active sheet, add protected range to it, add user with rights and get user info in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.AddProtectedRange("protectedRange", "$A$1:$B$1").AddUser("userId", "name", "CanView");
let protectedRange = worksheet.GetProtectedRange("protectedRange");
let userInfo = protectedRange.GetUser("userId");
let userName = userInfo.GetName();
worksheet.GetRange("A3").SetValue("User name: " + userName);