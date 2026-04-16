// Get an object that represents the protected range in a spreadsheet.

// How to get protected range in a spreadsheet.

// Get protected range and set its title in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.AddProtectedRange("protectedRange", "Sheet1!$A$1:$B$1");
let protectedRange = worksheet.GetProtectedRange("protectedRange");
protectedRange.SetTitle("protectedRangeNew");