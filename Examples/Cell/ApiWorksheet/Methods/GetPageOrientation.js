// Read the print page orientation of the active sheet in a spreadsheet.

// How do I check whether a sheet is set to portrait or landscape in a spreadsheet?

// Retrieve the orientation setting and display it in a cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageOrientation = worksheet.GetPageOrientation();
worksheet.GetRange("A1").SetValue("Page orientation: ");
worksheet.GetRange("C1").SetValue(pageOrientation);