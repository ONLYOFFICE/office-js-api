// This example changes the the user protected range title.

// How to set a title for a protected range.

// Rename a title of a protected range.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.AddProtectedRange("protectedRange", "Sheet1!$A$1:$B$1");
var protectedRange = oWorksheet.GetProtectedRange("protectedRange");
protectedRange.SetTitle("protectedRangeNew");