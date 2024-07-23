// This example changes the user protected range.
builder.CreateFile("xlsx");
Api.AddProtectedRange("protectedRange", "Sheet1!$A$1:$B$1");
var protectedRange = Api.GetProtectedRange("protectedRange");
protectedRange.AddUser("userId", "name", "CanView");
var userInfo = protectedRange.GetUser("userId");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A3").SetValue("User name: ", userInfo.GetName());
builder.SaveFile("xlsx", "changeProtectedRange.xlsx");
builder.CloseFile();