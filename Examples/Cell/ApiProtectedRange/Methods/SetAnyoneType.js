// This example changes the the user protected range.
Api.AddProtectedRange("protectedRange", "Sheet1!$A$1:$B$1");
var protectedRange = Api.GetProtectedRange("protectedRange");
protectedRange.SetAnyoneType("CanView");