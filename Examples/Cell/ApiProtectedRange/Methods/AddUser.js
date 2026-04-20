// Add the user for protected range in a spreadsheet.

// How to open an access for the protected range to user specifing user id, name and access type in a spreadsheet.

// Get an active sheet, add protected range to it and add user with rights in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.AddProtectedRange("protectedRange", "$A$1:$B$1");
let protectedRange = worksheet.GetProtectedRange("protectedRange");
protectedRange.AddUser("userId", "name", "CanView");