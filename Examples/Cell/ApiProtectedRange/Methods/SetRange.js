// This example changes the the user protected range.
builder.CreateFile("xlsx");
Api.AddProtectedRange("protectedRange", "Sheet1!$A$1:$B$1");
var protectedRange = Api.GetProtectedRange("protectedRange");
protectedRange.SetRange("Sheet1!$A$2:$B$2");
builder.SaveFile("xlsx", "changeProtectedRange.xlsx");
builder.CloseFile();