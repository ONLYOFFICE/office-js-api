// This example makes the sheet active.
Api.AddSheet("New_sheet");
let sheet = Api.GetSheet("New_sheet");
sheet.SetActive();
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("The current sheet is active.");