// This example gets all users of a protected range.

// How to get an array of users of a protected range.

// Get an active sheet, add protected range to it and diplay its first user. 

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
worksheet.GetRange("C1").SetValue("3");
worksheet.AddProtectedRange("Protected range", "$A$1:$C$1");
let protectedRange = worksheet.GetProtectedRange("Protected range");
protectedRange.AddUser("uid-1", "John Smith", "CanEdit");
protectedRange.AddUser("uid-2", "Mark Potato", "CanView");
let users = protectedRange.GetAllUsers();
worksheet.GetRange("A3").SetValue(users[0].GetName());