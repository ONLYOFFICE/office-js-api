// Grant a user access to a protected range in a spreadsheet.

// How do I allow a specific person to edit or view a locked range in a spreadsheet?

// Protect a cell range and then give a named user permission to work with it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.AddProtectedRange("protectedRange", "$A$1:$B$1");
let protectedRange = worksheet.GetProtectedRange("protectedRange");
protectedRange.AddUser("userId", "name", "CanView");