// Revoke a user's access to a protected range in a spreadsheet.

// How do I remove a person's permission to edit a locked range in a spreadsheet?

// Take away an existing user's rights to a protected range by removing them from the access list in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.AddProtectedRange("protectedRange", "$A$1:$B$1");
let protectedRange = worksheet.GetProtectedRange("protectedRange");
protectedRange.AddUser("userId", "name", "CanView");
protectedRange.DeleteUser("userId");