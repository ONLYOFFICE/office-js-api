// Set the default access level that applies to all users of a protected range in a spreadsheet.

// How do I control what anyone without explicit permission can do with a locked range in a spreadsheet?

// Restrict or open a protected range to everyone by choosing a blanket access level in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.AddProtectedRange("protectedRange", "Sheet1!$A$1:$B$1");
let protectedRange = worksheet.GetProtectedRange("protectedRange");
protectedRange.SetAnyoneType("CanView");