// Save changes to the specified document.

// How to save changes of the spreadsheets.

// Save all applied changes in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("This sample text is saved to the worksheet.");
Api.Save();