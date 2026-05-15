// Persist all unsaved edits to disk in a spreadsheet.

// How do I make sure all recent changes are written and not lost in a spreadsheet?

// Commit the current state of the document so no work is discarded in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("This sample text is saved to the worksheet.");
Api.Save();