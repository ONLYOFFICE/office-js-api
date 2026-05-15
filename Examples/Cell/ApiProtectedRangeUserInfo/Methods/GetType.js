// Read the permission type assigned to a user on a protected range in a spreadsheet.

// How do I check what access level a user has on a protected range in a spreadsheet?

// Verify whether a collaborator can view or edit a locked area in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.AddProtectedRange("protectedRange", "$A$1:$B$1").AddUser("userId", "name", "CanView");
let protectedRange = worksheet.GetProtectedRange("protectedRange");
let userInfo = protectedRange.GetUser("userId");
let userType = userInfo.GetType();
worksheet.GetRange("A3").SetValue("Type: " + userType);