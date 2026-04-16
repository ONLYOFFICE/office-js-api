// Make the sheet active in a spreadsheet.

// How to set an active sheet in a spreadsheet.

// Set a current sheet active in a spreadsheet.

Api.AddSheet("New_sheet");
let sheet = Api.GetSheet("New_sheet");
sheet.SetActive();
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("The current sheet is active.");