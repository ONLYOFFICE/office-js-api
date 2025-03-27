// This example deletes the worksheet.
Api.AddSheet("New sheet");
let sheet = Api.GetActiveSheet();
sheet.Delete();
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A3").SetValue("This method just deleted the second sheet from this spreadsheet.");