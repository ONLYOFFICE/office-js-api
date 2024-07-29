// This example shows how to get an object that represents the protected range.
Api.AddProtectedRange("protectedRange", "Sheet1!$A$1:$B$1");
var protectedRange = Api.GetProtectedRange("protectedRange");
protectedRange.SetTitle("protectedRangeNew");