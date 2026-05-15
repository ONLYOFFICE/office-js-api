// Retrieve every protected range defined on a worksheet in a spreadsheet.

// How do I list all protected ranges on a sheet in a spreadsheet?

// Loop through all locked ranges on the worksheet to update their titles in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.AddProtectedRange("protectedRange1", "Sheet1!$A$1:$B$1");
worksheet.AddProtectedRange("protectedRange2", "Sheet1!$A$2:$B$2");
let protectedRanges = worksheet.GetAllProtectedRanges();
protectedRanges[0].SetTitle("protectedRangeNew1");
protectedRanges[1].SetTitle("protectedRangeNew2");