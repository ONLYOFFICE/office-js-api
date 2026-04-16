// Delete the worksheet.

// How to delete sheets in a spreadsheet.

// Delete and display the result in a spreadsheet.

Api.AddSheet("New sheet");
let sheet = Api.GetActiveSheet();
sheet.Delete();
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A3").SetValue("This method just deleted the second sheet from this spreadsheet.");