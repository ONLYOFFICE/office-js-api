// This example changes the user protected range.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var wsName = oWorksheet.GetName();
var protectedRange = Api.AddProtectedRange("protectedRange", wsName + "!$A$1:$B$1");
protectedRange.AddUser("userId", "name", "CanView");
var userInfo = protectedRange.GetUser("userId");
var userType = userInfo.GetType();
oWorksheet.GetRange("A3").SetValue("Type: " + userType);
builder.SaveFile("xlsx", "changeProtectedRangeInfo.xlsx");
builder.CloseFile();