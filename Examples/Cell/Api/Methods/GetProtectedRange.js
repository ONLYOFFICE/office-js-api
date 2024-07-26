// This example shows how to get an object that represents the protected range.
builder.CreateFile("xlsx");
Api.AddProtectedRange("protectedRange", "Sheet1!$A$1:$B$1");
var protectedRange = Api.GetProtectedRange("protectedRange");
protectedRange.SetTitle("protectedRangeNew");
builder.SaveFile("xlsx", "getProtectedRange.xlsx");
builder.CloseFile();