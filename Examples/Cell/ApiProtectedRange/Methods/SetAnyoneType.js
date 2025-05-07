// This example changes access type for anyone for protected range.

// How to set access type to the "can view" one.

// Make a protected range viewable for anyone.

let worksheet = Api.GetActiveSheet();
worksheet.AddProtectedRange("protectedRange", "Sheet1!$A$1:$B$1");
let protectedRange = worksheet.GetProtectedRange("protectedRange");
protectedRange.SetAnyoneType("CanView");