// Change access type for anyone for protected range in a spreadsheet.

// How to set access type to the "can view" one in a spreadsheet.

// Make a protected range viewable for anyone in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.AddProtectedRange("protectedRange", "Sheet1!$A$1:$B$1");
let protectedRange = worksheet.GetProtectedRange("protectedRange");
protectedRange.SetAnyoneType("CanView");