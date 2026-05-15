// Save an undo checkpoint so changes before this point can be rolled back in a spreadsheet.

// How do I mark the current state so I can undo back to it later in a spreadsheet?

// Preserve a recoverable snapshot of the document at a specific moment in a spreadsheet.

var worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("This is just a sample text.");
Api.CreateNewHistoryPoint();
worksheet.GetRange("A3").SetValue("New history point was just created.");