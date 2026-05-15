// Assign a new title to a protected range in a spreadsheet.

// How do I rename a protected range in a spreadsheet?

// Update the label on a locked area so collaborators know what it protects in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.AddProtectedRange("protectedRange", "Sheet1!$A$1:$B$1");
let protectedRange = worksheet.GetProtectedRange("protectedRange");
protectedRange.SetTitle("protectedRangeNew");