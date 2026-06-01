// Access a protected range by name and update its title in a spreadsheet.

// How do I retrieve a protected range from a worksheet in a spreadsheet?

// Locate a locked cell range and rename it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.AddProtectedRange("protectedRange", "Sheet1!$A$1:$B$1");
let protectedRange = worksheet.GetProtectedRange("protectedRange");
protectedRange.SetTitle("protectedRangeNew");