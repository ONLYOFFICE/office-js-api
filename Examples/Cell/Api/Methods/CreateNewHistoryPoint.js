// Create a new history point in a spreadsheet.

// Add history point for a range in a spreadsheet.

// How to make a history point in a spreadsheet.

var worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("This is just a sample text.");
Api.CreateNewHistoryPoint();
worksheet.GetRange("A3").SetValue("New history point was just created.");