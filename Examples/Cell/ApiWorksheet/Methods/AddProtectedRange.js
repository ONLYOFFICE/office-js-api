// Lock a range of cells so it cannot be edited without permission in a spreadsheet.

// How do I protect a specific group of cells from changes in a spreadsheet?

// Restrict editing on a named cell range by marking it as protected.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
worksheet.AddProtectedRange("protectedRange", "Sheet1!$A$1:$B$1");