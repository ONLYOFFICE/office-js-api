// Replace the cells covered by an existing protected range in a spreadsheet.

// How do I change which cells a protection lock applies to in a spreadsheet?

// Redirect a named protection to a different group of cells without recreating it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.AddProtectedRange("protectedRange", "Sheet1!$A$1:$B$1");
let protectedRange = worksheet.GetProtectedRange("protectedRange");
protectedRange.SetRange("Sheet1!$A$2:$B$2");