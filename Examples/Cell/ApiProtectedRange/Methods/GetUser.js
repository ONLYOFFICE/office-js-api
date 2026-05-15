// Look up a specific user's details for a protected range in a spreadsheet.

// How do I find one person's access information for a locked range in a spreadsheet?

// Fetch a single user's name and permissions from a protected range by their ID in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.AddProtectedRange("protectedRange", "$A$1:$B$1").AddUser("userId", "name", "CanView");
let protectedRange = worksheet.GetProtectedRange("protectedRange");
let userInfo = protectedRange.GetUser("userId");
let userName = userInfo.GetName();
worksheet.GetRange("A3").SetValue("User name: " + userName);