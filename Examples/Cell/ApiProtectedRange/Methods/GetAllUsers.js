// This example gets all users of a protected range.

// How to get an array of users of a protected range.

// Get an active sheet, add protected range to it and diplay its first user. 

var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
oWorksheet.GetRange("C1").SetValue("3");
oWorksheet.AddProtectedRange("Protected range", "$A$1:$C$1");
var oProtectedRange = oWorksheet.GetProtectedRange("Protected range");
oProtectedRange.AddUser("uid-1", "John Smith", "CanEdit");
oProtectedRange.AddUser("uid-2", "Mark Potato", "CanView");
var aUsers = oProtectedRange.GetAllUsers();
oWorksheet.GetRange("A3").SetValue(aUsers[0].GetName());
