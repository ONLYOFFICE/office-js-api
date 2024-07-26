// This example changes the the user protected range title.
builder.CreateFile("xlsx");
Api.AddProtectedRange("protectedRange", "Sheet1!$A$1:$B$1");
var protectedRange = Api.GetProtectedRange("protectedRange");
protectedRange.SetTitle("protectedRangeNew");
builder.SaveFile("xlsx", "changeProtectedRange.xlsx");
builder.CloseFile();