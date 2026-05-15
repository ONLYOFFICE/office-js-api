// List every user who has access to a protected range in a spreadsheet.

// How do I see all the people allowed to work with a locked range in a spreadsheet?

// Retrieve the full access list for a protected range and read a user's name from it in a spreadsheet.

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