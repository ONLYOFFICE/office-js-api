// This example adds the the user for protected range.

// How to open an access for the protected range to user specifing user id, name and access type.

// Get an active sheet, add protected range to it and add user with rights.  

var oWorksheet = Api.GetActiveSheet();
oWorksheet.AddProtectedRange("protectedRange", "$A$1:$B$1");
var protectedRange = oWorksheet.GetProtectedRange("protectedRange");
protectedRange.AddUser("userId", "name", "CanView");