// Switch focus to a specific sheet in a spreadsheet.

// How do I make a particular sheet the active one in a spreadsheet?

// Bring a named sheet to the foreground so it becomes the working sheet in a spreadsheet.

Api.AddSheet("New_sheet");
let sheet = Api.GetSheet("New_sheet");
sheet.SetActive();
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("The current sheet is active.");